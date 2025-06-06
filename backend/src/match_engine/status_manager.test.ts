import { test, expect } from 'vitest';
import { initializePlayerState } from './state';
import { applyEffect, processStatusEffects } from './status_manager';
import type { PlayerProfile } from '../types/db';
import type { StatusEffect } from './types';

function createProfile(id: string): PlayerProfile {
  return {
    id,
    user_id: null,
    character_class_id: null,
    level: 1,
    experience: 0,
    unlocked_abilities: [],
    equipped_cosmetic_id: null,
    created_at: new Date(),
  };
}

test('burn effect deals damage over its duration', () => {
  const profile = createProfile('A');
  let player = initializePlayerState(profile, 'A', []);

  const burn: StatusEffect = {
    id: 'burn1',
    type: 'burn',
    duration: 2,
    sourceAbilityId: 'spell',
    appliedAtTurn: 1,
    value: 5,
  };

  player = applyEffect(player, burn);

  player = processStatusEffects(player);
  expect(player.hp).toBe(95);
  expect(player.statusEffects[0].duration).toBe(1);

  player = processStatusEffects(player);
  expect(player.hp).toBe(90);
  expect(player.statusEffects.length).toBe(0);
});
