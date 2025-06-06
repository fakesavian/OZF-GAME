import warriorAbilitiesData from '../../abilities/warrior.json';
import mageAbilitiesData from '../../abilities/mage.json';
import warriorSlashData from '../../abilities/warrior_slash.json';
import mageFireballData from '../../abilities/mage_fireball.json';
import acidSpitData from '../../abilities/acid_spit.json';
import { Ability } from '../../types/db';

const registry: Record<string, Ability> = {};

// Helper to add abilities from a JSON object to the registry
const addAbilitiesToRegistry = (abilitiesObject: Record<string, any>) => {
  for (const key in abilitiesObject) {
    if (Object.prototype.hasOwnProperty.call(abilitiesObject, key)) {
      // Cast to Ability, assuming the structure matches
      registry[key] = abilitiesObject[key] as Ability;
    }
  }
};

// Add abilities from each imported JSON file
addAbilitiesToRegistry(warriorAbilitiesData);
addAbilitiesToRegistry(mageAbilitiesData);
addAbilitiesToRegistry({ [warriorSlashData.id]: warriorSlashData }); // Wrap single ability in an object
addAbilitiesToRegistry({ [mageFireballData.id]: mageFireballData }); // Wrap single ability in an object
addAbilitiesToRegistry(acidSpitData);

export function getAbilityById(id: string): Ability | undefined {
  return registry[id];
}