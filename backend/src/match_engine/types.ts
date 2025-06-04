import { Ability, PlayerProfile } from '../types/db';

export interface PlayerState {
  profile: PlayerProfile;
  username: string; // Added for easier access in match engine
  hp: number; // Renamed from currentHealth for brevity
  maxHealth: number;
  energy: number; // Renamed from currentEnergy for brevity
  maxEnergy: number;
  speed: number;
  abilities: Ability[]; // Abilities available to this player in the current match
  statusEffects: StatusEffect[];
  cooldowns: Record<string, number>; // abilityId → turns remaining
  isBot: boolean;
  id: string; // Added for status_manager.ts PlayerState compatibility
}

export interface MatchState {
  id: string; // Match UUID
  playerA: PlayerState;
  playerB: PlayerState;
  turnNumber: number;
  activePlayerId: string; // UUID of the player whose turn it is
  combatLog: CombatLogEntry[];
  status: 'active' | 'completed' | 'forfeit';
  winnerId: string | null; // UUID of the winner
  isBot: boolean; // Added to indicate if it's a PvE match
  turnLog: TurnLogEntry[]; // Added for turn logging
}

export interface TurnAction {
  actorId: string; // UUID of the player taking the turn
  abilityId: string; // UUID of the ability used
  targetId: string; // UUID of the target player
}

export interface TurnLogEntry {
  turn: number;
  actorId: string;
  abilityId: string;
  targetId: string;
  effectsApplied: StatusEffect[];
  damageDealt: number;
  resultSummary: string;
}

export interface MatchTurnResult {
  updatedMatchState: MatchState;
  combatLog: CombatLogEntry[];
  winner: string | null;
}

export interface Effect {
  type: string; // e.g., 'damage', 'heal', 'stun', 'burn'
  value?: number; // Amount of damage/heal
  duration?: number; // For status effects
  target: 'self' | 'enemy'; // Required for strict type safety
}

export type StatusEffectType = 'burn' | 'stun' | 'shield' | 'buff' | 'debuff';

export interface StatusEffect {
  id: string; // Unique ID for the status effect instance
  type: StatusEffectType; // e.g., 'stun', 'burn', 'poison'
  duration: number; // Turns remaining
  sourceAbilityId: string; // The ability that applied this effect
  appliedAtTurn: number;
  value?: number; // For damage, heal, shield, buff values
  stat?: string; // For buffs (e.g., 'defense', 'attack')
  [key: string]: any; // Allow other properties
  // Add more properties like potency, tickDamage, etc.
}

export interface CombatLogEntry {
  turnNumber: number;
  message: string;
  playerId?: string; // Player involved in the log entry
  abilityId?: string; // Ability involved
  effectType?: string; // Type of effect (e.g., 'damage', 'heal')
  value?: number; // Value of the effect
}