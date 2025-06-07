export interface User {
  id: string; // UUID
  email: string | null;
  username: string;
  created_at: Date;
  last_login: Date | null;
}

export interface PlayerProfile {
  id: string; // UUID
  user_id: string | null; // UUID
  character_class_id: string | null; // UUID
  level: number;
  experience: number;
  unlocked_abilities: string[]; // UUID[]
  equipped_cosmetic_id: string | null; // UUID
  created_at: Date;
}

export interface CharacterClass {
  id: string; // UUID
  name: string;
  description: string | null;
  passive_ability_id: string | null; // UUID
  icon: string | null;
}

export interface EffectJson {
  type: string; // e.g., 'damage', 'heal', 'stun', 'burn'
  value?: number; // Amount of damage/heal
  duration?: number; // For status effects
  target: 'self' | 'enemy'; // Required for strict type safety
  stat?: string; // For buffs (e.g., 'defense', 'attack')
  // Add more specific effect properties as needed
}

export interface Ability {
  id: string; // UUID
  name: string | null;
  description: string | null;
  class_id: string | null; // UUID
  level_unlock: number | null;
  type: 'active' | 'passive' | 'ultimate' | null;
  energy_cost: number | null;
  cooldown: number | null;
  effects: EffectJson[]; // Array of effects
  effect_json?: { // Added based on feedback
    type?: string;    // e.g., 'damage', 'shield'
    value?: number;   // for sorting or comparing
  };
  icon: string | null;
}

export interface Match {
  id: string; // UUID
  player_a_id: string | null; // UUID
  player_b_id: string | null; // UUID
  winner_id: string | null; // UUID
  status: 'active' | 'completed' | 'forfeit' | null;
  started_at: Date | null;
  ended_at: Date | null;
  is_bot: boolean;
}

export interface Turn {
  id: string; // UUID
  match_id: string | null; // UUID
  turn_number: number | null;
  acting_player_id: string | null; // UUID
  ability_id: string | null; // UUID
  target_id: string | null; // UUID
  result_json: object | null; // JSONB
  created_at: Date;
}

export interface Cosmetic {
  id: string; // UUID
  name: string | null;
  rarity: string | null;
  image: string | null;
  is_nft: boolean;
  solana_mint_address: string | null;
  owner_id: string | null; // UUID
}