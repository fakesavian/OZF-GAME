import { Item, StatusEffect } from './context/PlayerContext';

export interface BattleState {
  playerHP: number;
  enemyHP: number;
  playerStatusEffects: StatusEffect[];
  enemyStatusEffects: StatusEffect[];
}

export interface ItemEffectResult {
  newState: BattleState;
  logs: string[];
}

export function runItemEffect(
  item: Item,
  actor: 'player' | 'enemy',
  state: BattleState
): ItemEffectResult {
  let newState: BattleState = { ...state };
  const logs: string[] = [];

  const targetSide = item.target === 'enemy' ? 'enemy' : 'player';

  const applyHeal = (amount: number) => {
    if (targetSide === 'player') {
      newState.playerHP = Math.min(100, newState.playerHP + amount);
    } else {
      newState.enemyHP = Math.min(100, newState.enemyHP + amount);
    }
  };

  const addStatus = (effect: StatusEffect) => {
    const withFlag = { ...effect, justApplied: true } as StatusEffect & { justApplied: boolean };
    if (targetSide === 'player') {
      newState.playerStatusEffects = [...newState.playerStatusEffects, withFlag];
    } else {
      newState.enemyStatusEffects = [...newState.enemyStatusEffects, withFlag];
    }
  };

  const cureStatus = (type: StatusEffect['type']) => {
    if (targetSide === 'player') {
      newState.playerStatusEffects = newState.playerStatusEffects.filter(e => e.type !== type);
    } else {
      newState.enemyStatusEffects = newState.enemyStatusEffects.filter(e => e.type !== type);
    }
  };

  if (item.heal) {
    applyHeal(item.heal);
    logs.push(targetSide === 'player' ? `> You heal ${item.heal} HP.` : `> Enemy heals ${item.heal} HP.`);
  }

  if (item.cureStatus) {
    cureStatus(item.cureStatus);
    logs.push(targetSide === 'player' ? `> You are cured of ${item.cureStatus}.` : `> Enemy is cured of ${item.cureStatus}.`);
  }

  if (item.statusEffect) {
    addStatus(item.statusEffect);
    logs.push(targetSide === 'player' ? `> You gain ${item.statusEffect.type}.` : `> Enemy gains ${item.statusEffect.type}.`);
  }

  return { newState, logs };
}
