import { PlayerState, TurnAction } from '../types';
import { Ability } from '../../types/db';
import { getAbilityById } from '../abilities';

export function getAction(bot: PlayerState, opponent: PlayerState): TurnAction {
  const usable = bot.abilities.filter((ability: Ability) => {
    return bot.energy >= (ability.energy_cost || 0) && (!bot.cooldowns[ability.id] || bot.cooldowns[ability.id] === 0);
  }).sort((a: Ability, b: Ability) => (b.effect_json?.value || 0) - (a.effect_json?.value || 0));

  const chosenAbility = usable[0] || { id: 'wait' };


  return {
    actorId: bot.id,
    abilityId: chosenAbility.id,
    targetId: opponent.id
  };
}