import { MatchState, PlayerState, Effect, StatusEffect } from './types';
import { PlayerProfile, Ability } from '../types/db';

export const initializePlayerState = (profile: PlayerProfile, username: string, abilities: Ability[], isBot: boolean = false): PlayerState => {
  return {
    id: profile.id, // Add id from profile
    profile: profile,
    username: username,
    hp: 100, // Example base health
    maxHealth: 100,
    energy: 50, // Example base energy
    maxEnergy: 100,
    speed: 10, // Example base speed
    abilities: abilities,
    statusEffects: [],
    cooldowns: {},
    isBot: isBot,
  };
};

export const applyDamage = (playerState: PlayerState, amount: number): PlayerState => {
  const newHealth = Math.max(0, playerState.hp - amount);
  return { ...playerState, hp: newHealth };
};

export const applyHealing = (playerState: PlayerState, amount: number): PlayerState => {
  const newHealth = Math.min(playerState.maxHealth, playerState.hp + amount);
  return { ...playerState, hp: newHealth };
};

export const applyEnergyCost = (playerState: PlayerState, amount: number): PlayerState => {
  const newEnergy = Math.max(0, playerState.energy - amount);
  return { ...playerState, energy: newEnergy };
};

export const addStatusEffect = (playerState: PlayerState, effect: StatusEffect): PlayerState => {
  return { ...playerState, statusEffects: [...playerState.statusEffects, effect] };
};

export const updateCooldown = (playerState: PlayerState, abilityId: string, turns: number): PlayerState => {
  return { ...playerState, cooldowns: { ...playerState.cooldowns, [abilityId]: turns } };
};

export const decrementCooldowns = (playerState: PlayerState): PlayerState => {
  const newCooldowns: { [abilityId: string]: number } = {};
  for (const abilityId in playerState.cooldowns) {
    const remainingTurns = playerState.cooldowns[abilityId] - 1;
    if (remainingTurns > 0) {
      newCooldowns[abilityId] = remainingTurns;
    }
  }
  return { ...playerState, cooldowns: newCooldowns };
};

export const updatePlayerState = (matchState: MatchState, updatedPlayerState: PlayerState): MatchState => {
  if (matchState.playerA.profile.id === updatedPlayerState.profile.id) {
    return { ...matchState, playerA: updatedPlayerState };
  } else if (matchState.playerB.profile.id === updatedPlayerState.profile.id) {
    return { ...matchState, playerB: updatedPlayerState };
  }
  return matchState; // Should not happen
};