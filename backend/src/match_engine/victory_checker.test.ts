import { test, expect } from 'vitest';
import { checkVictoryCondition } from './victory_checker';
import { initializePlayerState } from './state';
import type { MatchState } from './types';
import type { PlayerProfile } from '../types/db';

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

test('checkVictoryCondition detects KO', () => {
  const profileA = createProfile('A');
  const profileB = createProfile('B');

  const playerA = { ...initializePlayerState(profileA, 'A', []), hp: 0 };
  const playerB = initializePlayerState(profileB, 'B', []);

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

  const result = checkVictoryCondition(matchState);
  expect(result.isGameOver).toBe(true);
  expect(result.winnerId).toBe(playerB.profile.id);
});
