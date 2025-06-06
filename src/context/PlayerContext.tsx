import React, { createContext, useContext, useState } from 'react';

export interface Stats {
  hp: number;
  str: number;
  dex: number;
  int: number;
  def: number;
}

export type StatusEffectType = 'burn' | 'stun' | 'shield' | 'buff' | 'debuff' | 'poison';

export interface StatusEffect {
  type: StatusEffectType;
  duration: number;
  value?: number;
  stat?: string;
}

export interface Item {
  name: string;
  type: 'Weapon' | 'Armor' | 'Trinket' | 'Consumable';
  description: string;
  bonuses?: Partial<Stats>;
  heal?: number;
  statusEffect?: StatusEffect;
  /** Effect target - defaults to self */
  target?: 'self' | 'enemy';
  /** Remove a status effect */
  cureStatus?: StatusEffectType;
}

export const items: Item[] = [
  {
    name: 'Iron Cleaver',
    type: 'Weapon',
    description: 'A jagged blade forged from scrap metal. Deals moderate damage.',
    bonuses: { str: 3 },
  },
  {
    name: 'Med Patch',
    type: 'Consumable',
    description: 'Restores 25 HP when applied.',
    heal: 25,
    target: 'self',
  },
  {
    name: 'Old Locket',
    type: 'Trinket',
    description: 'A mysterious charm. Boosts INT slightly.',
    bonuses: { int: 1 },
  },
  {
    name: 'Nano Mesh Vest',
    type: 'Armor',
    description: 'Basic protection against physical damage.',
    bonuses: { def: 2 },
  },
  {
    name: 'Toxic Grenade',
    type: 'Consumable',
    description: 'Applies poison to the enemy for 3 turns.',
    statusEffect: { type: 'poison', duration: 3, value: 4 },
    target: 'enemy',
  },
  {
    name: 'Antidote',
    type: 'Consumable',
    description: 'Cures poison effects.',
    cureStatus: 'poison',
    target: 'self',
  },
  {
    name: 'Boost Serum',
    type: 'Consumable',
    description: 'Temporarily increases attack power.',
    statusEffect: { type: 'buff', duration: 2, stat: 'attack', value: 5 },
    target: 'self',
  },
];

interface PlayerContextValue {
  stats: Stats;
  equipped: { [K in 'Weapon' | 'Armor' | 'Trinket']?: Item };
  equip: (item: Item) => void;
  consumeItem: (item: Item) => void;
  statusEffects: StatusEffect[];
}

const PlayerContext = createContext<PlayerContextValue | undefined>(undefined);

export const PlayerProvider = ({ children }: { children: React.ReactNode }) => {
  const baseStats: Stats = { hp: 100, str: 15, dex: 12, int: 10, def: 8 };

  const [hp, setHP] = useState(baseStats.hp);
  const [equipped, setEquipped] = useState<{ [K in 'Weapon' | 'Armor' | 'Trinket']?: Item }>({});
  const [statusEffects, setStatusEffects] = useState<StatusEffect[]>([]);

  const equip = (item: Item) => {
    if (item.type === 'Consumable') return;
    setEquipped(prev => ({ ...prev, [item.type]: item }));
  };

  const consumeItem = (item: Item) => {
    if (item.target && item.target !== 'self') {
      return;
    }
    if (item.heal) {
      setHP(prev => Math.min(baseStats.hp, prev + item.heal));
    }
    if (item.cureStatus) {
      setStatusEffects(prev => prev.filter(e => e.type !== item.cureStatus));
    }
    if (item.statusEffect) {
      setStatusEffects(prev => [...prev, item.statusEffect!]);
    }
  };

  const stats: Stats = {
    hp,
    str: baseStats.str + (equipped.Weapon?.bonuses?.str ?? 0),
    dex: baseStats.dex + (equipped.Weapon?.bonuses?.dex ?? 0) + (equipped.Armor?.bonuses?.dex ?? 0) + (equipped.Trinket?.bonuses?.dex ?? 0),
    int: baseStats.int + (equipped.Trinket?.bonuses?.int ?? 0),
    def: baseStats.def + (equipped.Armor?.bonuses?.def ?? 0),
  };

  return (
    <PlayerContext.Provider value={{ stats, equipped, equip, consumeItem, statusEffects }}>
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayer = () => {
  const ctx = useContext(PlayerContext);
  if (!ctx) throw new Error('usePlayer must be used within PlayerProvider');
  return ctx;
};
