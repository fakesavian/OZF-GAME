import { MatchState, PlayerState, TurnAction } from './types';
import { Ability } from '../types/db';
import { hasStatus } from './status_manager';

export const generateBotAction = (botPlayer: PlayerState, opponentPlayer: PlayerState, matchState: MatchState): TurnAction => {
  // Simple weighted logic:
  // 1. If stunned, do nothing (or try to use a cleansing ability if available)
  if (hasStatus(botPlayer, 'stun')) {
    console.log(`${botPlayer.username} is stunned and cannot act.`);
    // Return a "do nothing" action or a specific "stunned" ability if implemented
    return {
      actorId: botPlayer.profile.id,
      abilityId: 'stunned_action_id', // Placeholder for a "stunned" ability
      targetId: opponentPlayer.profile.id,
    };
  }

  // Filter available abilities (not on cooldown, enough energy)
  const availableAbilities = botPlayer.abilities.filter(ability => {
    const onCooldown = botPlayer.cooldowns[ability.id] && botPlayer.cooldowns[ability.id] > 0;
    const hasEnergy = (ability.energy_cost || 0) <= botPlayer.energy;
    return !onCooldown && hasEnergy;
  });

  if (availableAbilities.length === 0) {
    console.log(`${botPlayer.username} has no available abilities. Skipping turn.`);
    // Return a "do nothing" action
    return {
      actorId: botPlayer.profile.id,
      abilityId: 'no_action_id', // Placeholder for a "no action" ability
      targetId: opponentPlayer.profile.id,
    };
  }

  // Basic weighted logic:
  // Prioritize damage if opponent is low health
  // Prioritize healing if self is low health
  // Otherwise, pick a random available ability

  // Example: Prioritize damage if opponent is below 30% health
  const damageAbilities = availableAbilities.filter(ab => ab.effect_json?.type === 'damage');
  if (opponentPlayer.hp / opponentPlayer.maxHealth < 0.3 && damageAbilities.length > 0) {
    // Pick the highest damage ability
    const bestDamageAbility = damageAbilities.reduce((prev, current) =>
      (prev.effect_json?.value || 0) > (current.effect_json?.value || 0) ? prev : current
    );
    return {
      actorId: botPlayer.profile.id,
      abilityId: bestDamageAbility.id,
      targetId: opponentPlayer.profile.id,
    };
  }

  // Example: Prioritize healing if self is below 50% health
  const healAbilities = availableAbilities.filter(ab => ab.effect_json?.type === 'heal');
  if (botPlayer.hp / botPlayer.maxHealth < 0.5 && healAbilities.length > 0) {
    // Pick the highest healing ability
    const bestHealAbility = healAbilities.reduce((prev, current) =>
      (prev.effect_json?.value || 0) > (current.effect_json?.value || 0) ? prev : current
    );
    return {
      actorId: botPlayer.profile.id,
      abilityId: bestHealAbility.id,
      targetId: botPlayer.profile.id, // Target self for healing
    };
  }

  // Default: Pick a random available ability
  const randomIndex = Math.floor(Math.random() * availableAbilities.length);
  const chosenAbility = availableAbilities[randomIndex];

  // Determine target based on ability type (e.g., damage abilities target enemy, heal abilities target self)
  let targetId = opponentPlayer.profile.id;
  if (chosenAbility.effect_json?.target === 'self') {
    targetId = botPlayer.profile.id;
  }

  return {
    actorId: botPlayer.profile.id,
    abilityId: chosenAbility.id,
    targetId: targetId,
  };
};