import { CombatLogEntry } from './types';

export const addLogEntry = (
  turnNumber: number,
  message: string,
  playerId?: string,
  abilityId?: string,
  effectType?: string,
  value?: number
): CombatLogEntry => {
  return {
    turnNumber,
    message,
    playerId,
    abilityId,
    effectType,
    value,
  };
};

export const getCombatLog = (log: CombatLogEntry[]): string[] => {
  return log.map(entry => `Turn ${entry.turnNumber}: ${entry.message}`);
};