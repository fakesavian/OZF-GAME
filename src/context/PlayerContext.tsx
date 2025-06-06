import React, { createContext, useContext, useState } from 'react';

export interface Stats {
  hp: number;
  str: number;
  dex: number;
  int: number;
  def: number;
}

export interface Item {
  name: string;
  type: 'Weapon' | 'Armor' | 'Trinket' | 'Consumable';
  description: string;
  bonuses?: Partial<Stats>;
  heal?: number;
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
];

interface PlayerContextValue {
  stats: Stats;
  equipped: { [K in 'Weapon' | 'Armor' | 'Trinket']?: Item };
  equip: (item: Item) => void;
  useItem: (item: Item) => void;
}

const PlayerContext = createContext<PlayerContextValue | undefined>(undefined);

export const PlayerProvider = ({ children }: { children: React.ReactNode }) => {
  const baseStats: Stats = { hp: 100, str: 15, dex: 12, int: 10, def: 8 };

  const [hp, setHP] = useState(baseStats.hp);
  const [equipped, setEquipped] = useState<{ [K in 'Weapon' | 'Armor' | 'Trinket']?: Item }>({});

  const equip = (item: Item) => {
    if (item.type === 'Consumable') return;
    setEquipped(prev => ({ ...prev, [item.type]: item }));
  };

  const useItem = (item: Item) => {
    if (item.heal) {
      setHP(prev => Math.min(baseStats.hp, prev + item.heal));
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
    <PlayerContext.Provider value={{ stats, equipped, equip, useItem }}>
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayer = () => {
  const ctx = useContext(PlayerContext);
  if (!ctx) throw new Error('usePlayer must be used within PlayerProvider');
  return ctx;
};
