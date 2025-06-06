import { PlayerState, StatusEffect, StatusEffectType } from './types';

export function applyStatus(player: PlayerState, effect: StatusEffect): PlayerState {
  // Check if a similar unique effect already exists and update its duration instead of adding a new one
  const existingEffectIndex = player.statusEffects.findIndex(
    (e) => e.type === effect.type && e.sourceAbilityId === effect.sourceAbilityId
  );

  if (existingEffectIndex > -1) {
    const updatedEffects = [...player.statusEffects];
    updatedEffects[existingEffectIndex].duration = effect.duration; // Refresh duration
    if (effect.value !== undefined) {
      updatedEffects[existingEffectIndex].value = effect.value; // Update value if applicable
    }
    if (effect.stat !== undefined) {
      updatedEffects[existingEffectIndex].stat = effect.stat; // Update stat if applicable
    }
    return { ...player, statusEffects: updatedEffects };
  } else {
    return {
      ...player,
      statusEffects: [...player.statusEffects, { ...effect }],
    };
  }
}

export function applyEffect(player: PlayerState, effect: StatusEffect): PlayerState {
  let updated = { ...player };

  switch (effect.type) {
    case 'burn':
    case 'stun':
    case 'shield':
    case 'poison':
      // These are status effects that are added to the array
      updated = applyStatus(updated, effect);
      break;
    case 'buff':
    case 'debuff':
      // These are status effects that modify stats and are added to the array
      updated = applyStatus(updated, effect);
      // Apply immediate stat modification if needed, or handle it in processStatusEffects
      // For now, we'll handle stat modification in processStatusEffects for consistency
      break;
  }

  return updated;
}

export function processStatusEffects(character: PlayerState): PlayerState {
  let updatedCharacter = { ...character };
  const effectsToRemove: string[] = [];

  updatedCharacter.statusEffects = updatedCharacter.statusEffects.filter((effect) => {
    switch (effect.type) {
      case 'burn':
        updatedCharacter.hp -= effect.value || 0; // Apply burn damage
        break;
      case 'poison':
        updatedCharacter.hp -= effect.value || 0; // Poison damage each turn
        break;
      case 'stun':
        // Stun effect is handled in the action phase (resolver.ts)
        break;
      case 'shield':
        // Shield is consumed on damage, not ticked down here
        break;
      case 'buff':
        // Apply buff: increase stat
        if (effect.stat && effect.value !== undefined) {
          (updatedCharacter as any)[effect.stat] += effect.value;
        }
        break;
      case 'debuff':
        // Apply debuff: decrease stat
        if (effect.stat && effect.value !== undefined) {
          (updatedCharacter as any)[effect.stat] -= effect.value;
        }
        break;
    }

    effect.duration -= 1;
    if (effect.duration <= 0) {
      effectsToRemove.push(effect.id);
      // Revert buff/debuff when it expires
      if (effect.type === 'buff' && effect.stat && effect.value !== undefined) {
        (updatedCharacter as any)[effect.stat] -= effect.value;
      } else if (effect.type === 'debuff' && effect.stat && effect.value !== undefined) {
        (updatedCharacter as any)[effect.stat] += effect.value;
      }
    }
    return effect.duration > 0;
  });

  return updatedCharacter;
}

export function hasStatus(player: PlayerState, type: StatusEffectType): boolean {
  return player.statusEffects.some((e) => e.type === type);
}

function getShieldAmount(player: PlayerState): number {
  return player.statusEffects.filter((e) => e.type === 'shield').reduce((sum, s) => sum + (s.value || 0), 0);
}

function consumeShield(effects: StatusEffect[], incomingDamage: number): StatusEffect[] {
  const updated = [...effects];
  let remaining = incomingDamage;

  for (const effect of updated) {
    if (effect.type === 'shield') {
      const used = Math.min(effect.value || 0, remaining);
      effect.value = (effect.value || 0) - used;
      remaining -= used;
    }
    if (remaining <= 0) break;
  }

  return updated.filter((e) => e.type !== 'shield' || (e.value || 0) > 0);
}

export function triggerStartTurn(player: PlayerState): PlayerState {
  let updated = { ...player };
  for (const effect of player.statusEffects) {
    if (typeof effect.onStartTurn === 'function') {
      updated = effect.onStartTurn(updated, effect);
    }
  }
  return updated;
}

export function triggerEndTurn(player: PlayerState): PlayerState {
  let updated = { ...player };
  for (const effect of player.statusEffects) {
    if (typeof effect.onEndTurn === 'function') {
      updated = effect.onEndTurn(updated, effect);
    }
  }
  return updated;
}
