import type { MatchState } from '../match_engine/types';

const matches: Record<string, MatchState> = {};

export const getMatchState = (matchId: string): MatchState | undefined =>
  matches[matchId];

export const updateMatchState = (matchId: string, state: MatchState): void => {
  matches[matchId] = state;
};

export const createMatchState = (matchId: string, state: MatchState): void => {
  matches[matchId] = state;
};