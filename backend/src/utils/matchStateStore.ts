const matches: Record<string, any> = {};

export const getMatchState = (matchId: string) => matches[matchId];
export const updateMatchState = (matchId: string, state: any) => {
  matches[matchId] = state;
};
export const createMatchState = (matchId: string, state: any) => {
  matches[matchId] = state;
};