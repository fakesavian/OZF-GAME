import { MatchState, TurnAction } from './types';
import { getAbilityById } from './abilities';
import { hasStatus } from './status_manager';

export interface ValidationResult {
  valid: boolean;
  reason?: string;
}
export const validateTurn = (
  matchState: MatchState,
  turnAction: TurnAction
): ValidationResult => {
  const { actorId, abilityId, targetId } = turnAction;

  const actor =
    matchState.playerA.profile.id === actorId
      ? matchState.playerA
      : matchState.playerB.profile.id === actorId
      ? matchState.playerB
      : null;

  const target =
    matchState.playerA.profile.id === targetId
      ? matchState.playerA
      : matchState.playerB.profile.id === targetId
      ? matchState.playerB
      : null;

  if (!actor) {
    return { valid: false, reason: 'Invalid acting player.' };
  }

  if (matchState.activePlayerId !== actorId) {
    return { valid: false, reason: "It's not the actor's turn." };
  }

  const ability =
    actor.abilities.find(a => a.id === abilityId) || getAbilityById(abilityId);
  if (!ability) {
    return { valid: false, reason: 'Ability is not unlocked.' };
  }

  if (hasStatus(actor, 'stun') || hasStatus(actor, 'silence')) {
    return { valid: false, reason: 'Actor is stunned or silenced.' };
  }

  if (actor.energy < (ability.energy_cost || 0)) {
    return { valid: false, reason: 'Not enough energy.' };
  }

  if (actor.cooldowns[abilityId] && actor.cooldowns[abilityId] > 0) {
    return { valid: false, reason: 'Ability is on cooldown.' };
  }

  if (!target) {
    return { valid: false, reason: 'Invalid target.' };
  }

  const abilityTarget: string | undefined = (ability as any).target;
  const effectTarget = ability.effects && ability.effects[0]?.target;
  const expected = abilityTarget || effectTarget;

  if (expected === 'self' && actor.profile.id !== target.profile.id) {
    return { valid: false, reason: 'Ability must target self.' };
  }
  if (expected === 'enemy' && actor.profile.id === target.profile.id) {
    return { valid: false, reason: 'Ability must target an enemy.' };
  }

  return { valid: true };
};