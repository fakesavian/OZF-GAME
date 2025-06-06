import { MatchState, TurnAction } from './types';

export interface ValidationResult {
  valid: boolean;
  reason?: string;
}

export const validateTurn = (
  matchState: MatchState,
  turnAction: TurnAction
): ValidationResult => {
  const actor =
    matchState.playerA.profile.id === turnAction.actorId
      ? matchState.playerA
      : matchState.playerB;

  if (matchState.activePlayerId !== turnAction.actorId) {
    return { valid: false, reason: "It's not your turn" };
  }

  const ability = actor.abilities.find(a => a.id === turnAction.abilityId);
  if (!ability) {
    return { valid: false, reason: 'Ability not available' };
  }

  if (actor.cooldowns[turnAction.abilityId] && actor.cooldowns[turnAction.abilityId] > 0) {
    return { valid: false, reason: 'Ability on cooldown' };
  }

  if (actor.energy < (ability.energy_cost || 0)) {
    return { valid: false, reason: 'Not enough energy' };
  }

  if (actor.statusEffects.some(e => e.type === 'stun')) {
    return { valid: false, reason: 'You are stunned' };
  }

  const validTargets = [matchState.playerA.profile.id, matchState.playerB.profile.id];
  if (!validTargets.includes(turnAction.targetId)) {
    return { valid: false, reason: 'Invalid target' };
  }

  return { valid: true };
};