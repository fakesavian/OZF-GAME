import { PlayerState, TurnAction } from '../types';
import { Ability } from '../../types/db';

// Simple in-memory store so the bot can remember its last used ability
const lastUsed: Record<string, string | null> = {};

export function getAction(bot: PlayerState, opponent: PlayerState): TurnAction {
  const usable = bot.abilities.filter(
    (a: Ability) =>
      bot.energy >= (a.energy_cost || 0) && (!bot.cooldowns[a.id] || bot.cooldowns[a.id] === 0)
  );

  if (usable.length === 0) {
    return { actorId: bot.id, abilityId: 'wait', targetId: opponent.id };
  }

  const weighted = usable.map(a => {
    let weight = 1;

    switch (a.effect_json?.type) {
      case 'stun':
        weight += opponent.energy >= 50 ? 30 : 10;
        break;
      case 'shield':
        weight += bot.hp <= 50 ? 20 : 5;
        break;
      case 'heal':
        weight += bot.hp <= bot.maxHealth / 2 ? 25 : 5;
        break;
      case 'damage':
        weight += a.effect_json?.value || 0;
        if (opponent.hp <= 40) weight += 10;
        break;
    }

    // Consider ability cooldown length - high cooldown abilities are valuable
    weight += (a.cooldown || 0);

    // Slightly discourage repeating the same ability twice in a row
    if (lastUsed[bot.id] && lastUsed[bot.id] === a.id) {
      weight -= 5;
    }

    return { ability: a, weight };
  });

  weighted.sort((a, b) => b.weight - a.weight);

  const choice = weighted[0].ability;
  lastUsed[bot.id] = choice.id;

  const targetId = choice.effect_json?.target === 'self' ? bot.id : opponent.id;

  return {
    actorId: bot.id,
    abilityId: choice.id,
    targetId: targetId
  };
}