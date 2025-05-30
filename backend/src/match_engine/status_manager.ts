import { PlayerState, StatusEffect } from './types';

export function applyStatus(player: PlayerState, effect: StatusEffect): PlayerState {
  return {
    ...player,
    statusEffects: [...player.statusEffects, { ...effect }]
  };
}

export function applyEffect(player: PlayerState, effect: StatusEffect): PlayerState {
  const updated = { ...player };

  switch (effect.type) {
    case 'stun':
    case 'buff':
    case 'burn':
    case 'shield':
      return applyStatus(updated, effect);

    case 'heal':
      updated.hp = Math.min(updated.hp + (effect.value || 0), updated.maxHealth || 100);
      break;

    case 'damage':
      const shieldValue = getShieldAmount(updated);
      const dmgTaken = Math.max(0, (effect.value || 0) - shieldValue);
      updated.hp -= dmgTaken;
      updated.statusEffects = consumeShield(updated.statusEffects, effect.value || 0);
      break;
  }

  return updated;
}

export function tickStatuses(player: PlayerState): PlayerState {
  let updated = { ...player };

  const effects = player.statusEffects.map(e => ({ ...e, duration: e.duration - 1 }));

  for (const effect of effects) {
    if (effect.type === 'burn') {
      updated.hp -= (effect.value || 0);
    }
  }

  updated.statusEffects = effects.filter(e => e.duration > 0);
  return updated;
}

export function hasStatus(player: PlayerState, type: string): boolean {
  return player.statusEffects.some(e => e.type === type);
}

function getShieldAmount(player: PlayerState): number {
  return player.statusEffects
    .filter(e => e.type === 'shield')
    .reduce((sum, s) => sum + (s.value || 0), 0);
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

  return updated.filter(e => e.type !== 'shield' || (e.value || 0) > 0);
}
