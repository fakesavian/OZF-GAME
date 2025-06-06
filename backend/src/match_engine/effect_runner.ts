import { MatchState, PlayerState, Effect, CombatLogEntry, StatusEffect } from './types';
import { applyDamage, applyHealing, addStatusEffect, updatePlayerState } from './state';
import { addLogEntry } from './combat_log';

export const runEffect = (
  effect: Effect,
  sourcePlayer: PlayerState,
  targetPlayer: PlayerState,
  matchState: MatchState,
  abilityId: string
): { newMatchState: MatchState; logs: CombatLogEntry[] } => {
  let currentMatchState = { ...matchState };
  let logs: CombatLogEntry[] = [];
  let updatedTargetPlayer = { ...targetPlayer };

  const target = effect.target === 'self' ? sourcePlayer : targetPlayer;
  const targetId = target.profile.id;

  switch (effect.type) {
    case 'damage':
      if (effect.value !== undefined) {
        updatedTargetPlayer = applyDamage(target, effect.value);
        logs.push(addLogEntry(currentMatchState.turnNumber, `${target.username} took ${effect.value} damage!`, targetId, undefined, 'damage', effect.value));
      }
      break;
    case 'heal':
      if (effect.value !== undefined) {
        updatedTargetPlayer = applyHealing(target, effect.value);
        logs.push(addLogEntry(currentMatchState.turnNumber, `${target.username} healed for ${effect.value} health!`, targetId, undefined, 'heal', effect.value));
      }
      break;
    case 'stun':
      if (effect.duration !== undefined) {
        const stunEffect: StatusEffect = {
          id: `stun-${Date.now()}`, // Simple unique ID
          type: 'stun',
          duration: effect.duration,
          sourceAbilityId: abilityId,
          appliedAtTurn: currentMatchState.turnNumber,
        };
        updatedTargetPlayer = addStatusEffect(target, stunEffect);
        logs.push(addLogEntry(currentMatchState.turnNumber, `${target.username} was stunned for ${effect.duration} turn(s)!`, targetId, undefined, 'stun'));
      }
      break;
    // Add more effect types as needed
    default:
      console.warn(`Unknown effect type: ${effect.type}`);
      break;
  }

  currentMatchState = updatePlayerState(currentMatchState, updatedTargetPlayer);

  return { newMatchState: currentMatchState, logs };
};