import { PlayerState, TurnAction } from '../types';
import { Ability } from '../../types/db';
import { getAbilityById } from '../abilities';

export function getAction(bot: PlayerState, opponent: PlayerState): TurnAction {
  const usable = bot.abilities
    .filter((a: Ability) => bot.energy >= (a.energy_cost || 0) && (!bot.cooldowns[a.id] || bot.cooldowns[a.id] === 0));

  const stun = usable.find((a: Ability) => a.effect_json?.type === 'stun');
  const shield = usable.find((a: Ability) => a.effect_json?.type === 'shield');
  const heavyHit = usable.find((a: Ability) => a.effect_json?.type === 'damage' && (a.effect_json?.value || 0) >= 40);

  if (opponent.energy >= 50 && stun) {
    return { actorId: bot.id, abilityId: stun.id, targetId: opponent.id };
  }
  if (bot.hp <= 50 && shield) {
    return { actorId: bot.id, abilityId: shield.id, targetId: bot.id };
  }
  if (heavyHit) {
    return { actorId: bot.id, abilityId: heavyHit.id, targetId: opponent.id };
  }

  return {
    actorId: bot.id,
    abilityId: usable[0]?.id || 'wait',
    targetId: opponent.id
  };
}