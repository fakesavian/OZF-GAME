import { MatchState } from './types';

// Maximum number of turns before a match times out
const MAX_TURNS = 50;

export const checkVictoryCondition = (matchState: MatchState): { isGameOver: boolean; winnerId: string | null } => {
  // Check for KO
  if (matchState.playerA.hp <= 0) {
    return { isGameOver: true, winnerId: matchState.playerB.profile.id };
  }

  if (matchState.playerB.hp <= 0) {
    return { isGameOver: true, winnerId: matchState.playerA.profile.id };
  }
  // Timeout: if the turn limit is exceeded, winner is the player with higher HP
  if (matchState.turnNumber > MAX_TURNS) {
    const { playerA, playerB } = matchState;
    let winnerId: string | null = null;

    if (playerA.hp !== playerB.hp) {
      winnerId = playerA.hp > playerB.hp ? playerA.profile.id : playerB.profile.id;
    }

    return { isGameOver: true, winnerId };
  }

  // Forfeit: if match status has been set to 'forfeit', respect the stored winner
  if (matchState.status === 'forfeit') {
    return { isGameOver: true, winnerId: matchState.winnerId };
  }

  return { isGameOver: false, winnerId: null };
};