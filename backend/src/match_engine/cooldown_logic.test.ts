import { test, expect } from 'vitest';
import { runMatchTurn } from './resolver';
import { initializePlayerState } from './state';
import { getAbilityById } from './abilities';
import type { MatchState, TurnAction } from './types';
import type { PlayerProfile } from '../types/db';

const meteorCharge = getAbilityById('meteor_charge')!;
const slash = getAbilityById('warrior_slash_uuid')!;

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

test('cooldown prevents ability reuse until turns pass', () => {
  const profileA = createProfile('A');
  const profileB = createProfile('B');

  let playerA = initializePlayerState(profileA, 'A', [meteorCharge, slash]);
  let playerB = initializePlayerState(profileB, 'B', [slash]);

  const baseState: MatchState = {
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

  const actionA1: TurnAction = {
    actorId: playerA.profile.id,
    abilityId: 'meteor_charge',
    targetId: playerB.profile.id,
  };

  let { updatedMatchState: state1 } = runMatchTurn(baseState, actionA1);
  expect(state1.playerA.cooldowns['meteor_charge']).toBe(1);

  const actionB: TurnAction = {
    actorId: playerB.profile.id,
    abilityId: slash.id,
    targetId: playerA.profile.id,
  };
  let { updatedMatchState: state2 } = runMatchTurn(state1, actionB);
  expect(state2.playerA.cooldowns['meteor_charge']).toBe(1);

  const actionA2: TurnAction = {
    actorId: playerA.profile.id,
    abilityId: 'meteor_charge',
    targetId: playerB.profile.id,
  };
  const attempt = runMatchTurn(state2, actionA2);
  expect(attempt.updatedMatchState).toBe(state2);
  expect(attempt.updatedMatchState.playerA.cooldowns['meteor_charge']).toBe(1);

  const altAction: TurnAction = {
    actorId: playerA.profile.id,
    abilityId: slash.id,
    targetId: playerB.profile.id,
  };
  let { updatedMatchState: state3 } = runMatchTurn(state2, altAction);
  expect(state3.playerA.cooldowns['meteor_charge']).toBeUndefined();
});
