import { MatchState, PlayerState, TurnAction, CombatLogEntry, StatusEffect, MatchTurnResult, TurnLogEntry, StatusEffectType } from './types';
import { applyDamage, applyEnergyCost, updatePlayerState, decrementCooldowns, updateCooldown } from './state';
import { addLogEntry } from './combat_log';
import { Ability, EffectJson } from '../types/db'; // Import EffectJson
import { getAbilityById } from './abilities'; // Import getAbilityById
import { applyStatus, hasStatus, processStatusEffects, applyEffect } from './status_manager'; // Import status manager functions
import { BotModels } from './bot_ai/index'; // Import BotModels
import { v4 as uuidv4 } from 'uuid'; // Import uuid for generating unique IDs

export const runMatchTurn = (matchState: MatchState, turnAction: TurnAction): MatchTurnResult => {
  let { actorId, abilityId, targetId } = turnAction;
  let actor = matchState.playerA.profile.id === actorId ? matchState.playerA : matchState.playerB;
  let target = matchState.playerA.profile.id === targetId ? matchState.playerA : matchState.playerB;
  let combatLog: CombatLogEntry[] = [];
  const effectsAppliedForLog: StatusEffect[] = []; // To collect effects for turn log

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
    // Apply ability effects
    const effectsAppliedForLog: StatusEffect[] = []; // To collect effects for turn log

    if (ability.effects && ability.effects.length > 0) {
      ability.effects.forEach(effectJson => {
        const newStatusEffect: StatusEffect = {
          ...effectJson,
          id: uuidv4(),
          sourceAbilityId: ability.id,
          appliedAtTurn: matchState.turnNumber,
          type: effectJson.type as StatusEffectType,
          duration: effectJson.duration || 0, // Ensure duration is a number
        };

        let effectTarget = effectJson.target === 'self' ? actor : target;
        effectTarget = applyEffect(effectTarget, newStatusEffect);

        // Update actor or target based on who was affected
        if (effectJson.target === 'self') {
          actor = effectTarget;
        } else {
          target = effectTarget;
        }

        effectsAppliedForLog.push(newStatusEffect);

        // Add combat log entries for each effect
        switch (effectJson.type) {
          case 'burn':
            combatLog.push(addLogEntry(matchState.turnNumber, `${effectTarget.username} is burned for ${effectJson.duration} turn(s).`, effectTarget.profile.id, ability.id, effectJson.type, effectJson.duration));
            break;
          case 'stun':
            combatLog.push(addLogEntry(matchState.turnNumber, `${effectTarget.username} is stunned for ${effectJson.duration} turn(s).`, effectTarget.profile.id, ability.id, effectJson.type, effectJson.duration));
            break;
          case 'shield':
            combatLog.push(addLogEntry(matchState.turnNumber, `${effectTarget.username} gains a ${effectJson.value} point shield.`, effectTarget.profile.id, ability.id, effectJson.type, effectJson.value));
            break;
          case 'buff':
            combatLog.push(addLogEntry(matchState.turnNumber, `${effectTarget.username} gains a buff to ${effectJson.stat} for ${effectJson.duration} turn(s).`, effectTarget.profile.id, ability.id, effectJson.type, effectJson.duration));
            break;
          case 'debuff':
            combatLog.push(addLogEntry(matchState.turnNumber, `${effectTarget.username} suffers a debuff to ${effectJson.stat} for ${effectJson.duration} turn(s).`, effectTarget.profile.id, ability.id, effectJson.type, effectJson.duration));
            break;
          case 'damage': // Direct damage from ability, not a status effect
            combatLog.push(addLogEntry(matchState.turnNumber, `${effectTarget.username} takes ${effectJson.value} damage.`, effectTarget.profile.id, ability.id, effectJson.type, effectJson.value));
            break;
          case 'heal': // Direct heal from ability, not a status effect
            combatLog.push(addLogEntry(matchState.turnNumber, `${effectTarget.username} heals for ${effectJson.value} HP.`, effectTarget.profile.id, ability.id, effectJson.type, effectJson.value));
            break;
        }
      });
    }
  }

  // Process status effects for both players at the end of their turn
  actor = processStatusEffects(actor);
  target = processStatusEffects(target);

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
  const damageDealt = combatLog.filter(log => log.effectType === 'damage').reduce((sum, log) => sum + (log.value || 0), 0);
  // effectsAppliedForLog is already populated in the ability.effects loop

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