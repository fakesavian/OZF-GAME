import { MatchState, TurnAction, CombatLogEntry } from './types';
import { validateTurn } from './validator';
import { addLogEntry } from './combat_log';
import { runMatchTurn } from './resolver';
import { checkVictoryCondition } from './victory_checker';
import { Ability } from '../types/db';
import { BotModels } from './bot_ai/index';

export const runTurn = (
  initialMatchState: MatchState,
  playerATurn: TurnAction | null,
  playerBTurn: TurnAction | null,
  abilities: Ability[]
): { newMatchState: MatchState; logs: CombatLogEntry[]; isGameOver: boolean; winnerId: string | null } => {
  let currentMatchState = { ...initialMatchState };
  let logs: CombatLogEntry[] = [];

  let actionToRun: TurnAction | null = null;

  // Determine action based on active player
  if (playerATurn) {
    actionToRun = playerATurn;
  } else if (playerBTurn) {
    actionToRun = playerBTurn;
  }

  // If it's a PvE match and it's the bot's turn, generate bot action
  let botTurnAction: TurnAction | null = null;
  if (currentMatchState.isBot && currentMatchState.activePlayerId === currentMatchState.playerB.profile.id) {
    const botType = 'tactical';
    const botAI = BotModels[botType];

    if (botAI) {
      botTurnAction = botAI.getAction(currentMatchState.playerB, currentMatchState.playerA);
      logs.push(addLogEntry(currentMatchState.turnNumber, `Bot (${currentMatchState.playerB.username}) chose its action.`));
    } else {
      logs.push(addLogEntry(currentMatchState.turnNumber, `Bot AI type '${botType}' not found.`));
    }
  }

  actionToRun = actionToRun || botTurnAction;

  if (!actionToRun) {
    logs.push(addLogEntry(currentMatchState.turnNumber, 'No action provided.'));
    return { newMatchState: currentMatchState, logs, isGameOver: false, winnerId: null };
  }

  const validation = validateTurn(currentMatchState, actionToRun);
  if (!validation.valid) {
    logs.push(addLogEntry(currentMatchState.turnNumber, validation.reason || 'Invalid turn.', actionToRun.actorId, actionToRun.abilityId));
    return { newMatchState: currentMatchState, logs, isGameOver: false, winnerId: null };
  }
  // Resolve turn
  const { updatedMatchState: resolvedState, combatLog: turnLogs, winner: turnWinner } = runMatchTurn(
    currentMatchState,
    actionToRun
  );
  currentMatchState = resolvedState;
  logs = logs.concat(turnLogs);

  // Check for victory conditions
  const { isGameOver, winnerId } = checkVictoryCondition(currentMatchState);
  if (isGameOver) {
    currentMatchState.status = 'completed';
    currentMatchState.winnerId = winnerId;
    logs.push({ turnNumber: currentMatchState.turnNumber, message: `Match ended! Winner: ${winnerId || 'No one'}` });
  }

  // Update active player for next turn (simple round-robin for now)
  if (!isGameOver) {
    currentMatchState.activePlayerId =
      currentMatchState.activePlayerId === currentMatchState.playerA.profile.id
        ? currentMatchState.playerB.profile.id
        : currentMatchState.playerA.profile.id;
  }


  return { newMatchState: currentMatchState, logs, isGameOver, winnerId };
};