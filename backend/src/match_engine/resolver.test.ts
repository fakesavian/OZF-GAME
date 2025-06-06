import { test, expect } from 'vitest';
import { runMatchTurn } from './resolver';
import { initializePlayerState } from './state';
import { getAbilityById } from './abilities';
import type { MatchState, TurnAction } from './types';
import type { PlayerProfile } from '../types/db';

const fireball = getAbilityById('mage_fireball_uuid')!;

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

test('cooldowns decrement only for the acting player', () => {
  const profileA = createProfile('A');
  const profileB = createProfile('B');

  let playerA = initializePlayerState(profileA, 'A', [fireball]);
  let playerB = initializePlayerState(profileB, 'B', [fireball]);

  // set a cooldown on playerB to verify it doesn't change on playerA's turn
  playerB.cooldowns[fireball.id] = 2;

  const matchState: MatchState = {
    id: 'm1',
    playerA,
    playerB,
    turnNumber: 1,
    activePlayerId: playerA.profile.id,
    combatLog: [],
    status: 'active',
    winnerId: null,
    isBot: false,
    turnLog: [],
  };

  const actionA: TurnAction = {
    actorId: playerA.profile.id,
    abilityId: fireball.id,
    targetId: playerB.profile.id,
  };

  const { updatedMatchState: afterA } = runMatchTurn(matchState, actionA);

  expect(afterA.playerA.cooldowns[fireball.id]).toBeUndefined();
  expect(afterA.playerB.cooldowns[fireball.id]).toBe(2);
});
