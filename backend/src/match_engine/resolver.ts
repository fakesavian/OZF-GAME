import { MatchState, PlayerState, TurnAction, CombatLogEntry, StatusEffect, MatchTurnResult, TurnLogEntry } from './types';
import { applyDamage, applyEnergyCost, updatePlayerState, decrementCooldowns, updateCooldown } from './state';
import { addLogEntry } from './combat_log';
import { Ability, EffectJson } from '../types/db'; // Import EffectJson
import { getAbilityById } from './abilities'; // Import getAbilityById
import { applyStatus, hasStatus, tickStatuses, applyEffect } from './status_manager'; // Import status manager functions
import { BotModels } from './bot_ai/index'; // Import BotModels
import { v4 as uuidv4 } from 'uuid'; // Import uuid for generating unique IDs

export const runMatchTurn = (matchState: MatchState, turnAction: TurnAction): MatchTurnResult => {
  let { actorId, abilityId, targetId } = turnAction;
  let actor = matchState.playerA.profile.id === actorId ? matchState.playerA : matchState.playerB;
  let target = matchState.playerA.profile.id === targetId ? matchState.playerA : matchState.playerB;
  let combatLog: CombatLogEntry[] = [];
  let appliedStatusEffect: StatusEffect | null = null; // Declare here

  // If playerB is a bot, determine its action
  if (matchState.playerB.isBot && actor.profile.id === matchState.playerB.profile.id) {
    const botAction = BotModels.random.getAction(actor, matchState.playerA); // Assuming playerA is always the human opponent for the bot
    actorId = botAction.actorId;
    abilityId = botAction.abilityId;
    targetId = botAction.targetId;
    actor = matchState.playerA.profile.id === actorId ? matchState.playerA : matchState.playerB;
    target = matchState.playerA.profile.id === targetId ? matchState.playerA : matchState.playerB;
  }

  const ability = getAbilityById(abilityId);

  if (!ability) {
    combatLog.push(addLogEntry(matchState.turnNumber, `${actor.username} tried to use an unknown ability!`, actor.profile.id));
    return {
      updatedMatchState: matchState,
      combatLog,
      winner: null
    };
  }

  if (hasStatus(actor, 'stun')) {
    combatLog.push(addLogEntry(matchState.turnNumber, `${actor.username} is stunned and misses their turn.`, actor.profile.id));
  } else {
    // Energy and Cooldown checks
    if (actor.energy < (ability.energy_cost || 0)) {
      combatLog.push(addLogEntry(matchState.turnNumber, `${actor.username} doesn't have enough energy to use ${ability.name}!`, actor.profile.id));
      return { updatedMatchState: matchState, combatLog, winner: null };
    }

    if (actor.cooldowns[abilityId] && actor.cooldowns[abilityId] > 0) {
      combatLog.push(addLogEntry(matchState.turnNumber, `${ability.name} is still on cooldown!`, actor.profile.id));
      return { updatedMatchState: matchState, combatLog, winner: null };
    }

    combatLog.push(addLogEntry(matchState.turnNumber, `${actor.username} used ${ability.name} on ${target.username}.`, actor.profile.id, ability.id));

    // Deduct energy and set cooldown
    actor.energy -= (ability.energy_cost || 0);
    actor.cooldowns[abilityId] = (ability.cooldown || 0);

    // Apply ability effects
    if (ability.effect_json) { // Check if effect_json exists
      const effectJson = ability.effect_json;
      appliedStatusEffect = { // Assign here
        ...effectJson,
        id: uuidv4(),
        sourceAbilityId: ability.id,
        appliedAtTurn: matchState.turnNumber
      } as StatusEffect; // Cast to StatusEffect

      // Use applyEffect from status_manager
      if (effectJson.target === 'self') {
        actor = applyEffect(actor, appliedStatusEffect);
      } else {
        target = applyEffect(target, appliedStatusEffect);
      }

      if (effectJson.type === 'stun') {
        combatLog.push(addLogEntry(matchState.turnNumber, `${target.username} is stunned for ${effectJson.duration} turn(s).`, target.profile.id, ability.id, effectJson.type, effectJson.duration));
      } else if (effectJson.type === 'damage') {
        combatLog.push(addLogEntry(matchState.turnNumber, `${target.username} takes ${effectJson.value} damage.`, target.profile.id, ability.id, effectJson.type, effectJson.value));
      } else if (effectJson.type === 'shield') {
        combatLog.push(addLogEntry(matchState.turnNumber, `${target.username} gains a ${effectJson.value} point shield.`, target.profile.id, ability.id, effectJson.type, effectJson.value));
      } else if (effectJson.type === 'heal') {
        combatLog.push(addLogEntry(matchState.turnNumber, `${actor.username} heals for ${effectJson.value} HP.`, actor.profile.id, ability.id, effectJson.type, effectJson.value));
      }
      // Add more effect types here (heal, buff, etc.)
    }
  }

  // Tick statuses for both players at the end of their turn
  actor = tickStatuses(actor);
  target = tickStatuses(target);

  // Cooldown Ticker Per Turn
  actor.cooldowns = Object.fromEntries(
    Object.entries(actor.cooldowns).map(([key, val]) => [key, Math.max(0, val - 1)])
  );
  target.cooldowns = Object.fromEntries(
    Object.entries(target.cooldowns).map(([key, val]) => [key, Math.max(0, val - 1)])
  );

  // Update match state with new player states
  let updatedMatchState = {
    ...matchState,
    playerA: matchState.playerA.profile.id === actor.profile.id ? actor : matchState.playerA,
    playerB: matchState.playerB.profile.id === target.profile.id ? target : matchState.playerB,
    combatLog: [...matchState.combatLog, ...combatLog],
    turnNumber: matchState.turnNumber + 1, // Increment turn number
  };

  // Create TurnLogEntry
  const damageDealt = (appliedStatusEffect && appliedStatusEffect.type === 'damage') ? (appliedStatusEffect.value || 0) : 0;
  const effectsAppliedForLog: StatusEffect[] = appliedStatusEffect ? [appliedStatusEffect] : [];

  const turnLogEntry: TurnLogEntry = {
    turn: matchState.turnNumber,
    actorId: turnAction.actorId,
    abilityId: turnAction.abilityId,
    targetId: turnAction.targetId,
    effectsApplied: effectsAppliedForLog,
    damageDealt: damageDealt,
    resultSummary: combatLog.map(log => log.message).join(' ')
  };

  updatedMatchState.turnLog = [...(matchState.turnLog || []), turnLogEntry];

  // Check for KO
  const playerA = updatedMatchState.playerA;
  const playerB = updatedMatchState.playerB;

  let winner: string | null = null;

  if (playerA.hp <= 0 && playerB.hp <= 0) {
    combatLog.push(addLogEntry(updatedMatchState.turnNumber, "It's a draw!"));
    winner = 'draw';
  } else if (playerA.hp <= 0) {
    combatLog.push(addLogEntry(updatedMatchState.turnNumber, `${playerB.profile.id} wins by KO!`));
    winner = playerB.profile.id;
  } else if (playerB.hp <= 0) {
    combatLog.push(addLogEntry(updatedMatchState.turnNumber, `${playerA.profile.id} wins by KO!`));
    winner = playerA.profile.id;
  }

  return {
    updatedMatchState,
    combatLog,
    winner
  };
};