import path from 'path';
import fs from 'fs';
import { Ability } from '../types/db';

const ABILITIES_DIR = path.join(__dirname, '..', 'abilities');

export const loadAbility = (abilityName: string): Ability | null => {
  const filePath = path.join(ABILITIES_DIR, `${abilityName}.json`);
  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(fileContent) as Ability;
  } catch (error) {
    console.error(`Failed to load ability ${abilityName}:`, error);
    return null;
  }
};

export const loadAllAbilities = (): Ability[] => {
  const abilities: Ability[] = [];
  try {
    const files = fs.readdirSync(ABILITIES_DIR);
    for (const file of files) {
      if (file.endsWith('.json')) {
        const abilityName = file.replace('.json', '');
        const ability = loadAbility(abilityName);
        if (ability) {
          abilities.push(ability);
        }
      }
    }
  } catch (error) {
    console.error('Failed to load all abilities:', error);
  }
  return abilities;
};

export const getAbilitiesForPlayer = (playerId: string): Ability[] => {
  // For now, return all abilities. In a real game, this would be based on player's character class, etc.
  return loadAllAbilities();
};