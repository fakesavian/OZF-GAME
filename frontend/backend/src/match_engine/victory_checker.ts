import { MatchState, PlayerState } from './types';

export const checkVictoryCondition = (matchState: MatchState): { isGameOver: boolean; winnerId: string | null } => {
  // Check for KO
  if (matchState.playerA.hp <= 0) {
    return { isGameOver: true, winnerId: matchState.playerB.profile.id };
  }

  if (matchState.playerB.hp <= 0) {
    return { isGameOver: true, winnerId: matchState.playerA.profile.id };
  }
  // TODO: Implement timeout condition
  // TODO: Implement forfeit condition

  return { isGameOver: false, winnerId: null };
};