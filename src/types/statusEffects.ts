export type StatusEffectType =
  | 'burn'
  | 'stun'
  | 'shield'
  | 'buff'
  | 'debuff'
  | 'poison';

export interface StatusEffect {
  type: StatusEffectType;
  duration: number; // in turns
  value?: number; // For damage, heal, shield, buff values
  stat?: string; // For buffs (e.g., 'defense', 'attack')
  justApplied?: boolean; // Flag to skip duration tick when first applied
}
