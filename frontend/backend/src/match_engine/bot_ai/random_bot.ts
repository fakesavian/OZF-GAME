import { PlayerState, TurnAction } from '../types';
import { Ability } from '../../types/db';
export function getAction(bot: PlayerState, opponent: PlayerState): TurnAction {
  const usable = bot.abilities.filter((ability: Ability) => {
    return bot.energy >= (ability.energy_cost || 0) && (!bot.cooldowns[ability.id] || bot.cooldowns[ability.id] === 0);
  });

  const choice = usable[Math.floor(Math.random() * usable.length)]?.id || 'wait';

  return {
    actorId: bot.id,
    abilityId: choice,
    targetId: opponent.id
  };
}