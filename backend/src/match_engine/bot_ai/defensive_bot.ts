import { PlayerState, TurnAction } from '../types';
import { Ability } from '../../types/db';
import { getAbilityById } from '../abilities';

export function getAction(bot: PlayerState, opponent: PlayerState): TurnAction {
  const shieldAbility = bot.abilities.filter((ability: Ability) => {
    return ability.effect_json?.type === 'shield' &&
           bot.energy >= (ability.energy_cost || 0) &&
           (!bot.cooldowns[ability.id] || bot.cooldowns[ability.id] === 0);
  });

  if (bot.hp < 50 && shieldAbility.length > 0) {
    return {
      actorId: bot.id,
      abilityId: shieldAbility[0].id,
      targetId: bot.id
    };
  }

  // Fallback: use any damage skill
  const dmg = bot.abilities.filter((ability: Ability) => {
    return ability.effect_json?.type === 'damage';
  });

  return {
    actorId: bot.id,
    abilityId: dmg[0]?.id || 'wait',
    targetId: opponent.id
  };
}