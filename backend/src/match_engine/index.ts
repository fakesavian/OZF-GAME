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

  // Validate player A's turn (if provided)
  if (playerATurn) {
    const result = validateTurn(currentMatchState, playerATurn);
    if (!result.valid) {
      logs.push(
        addLogEntry(
          currentMatchState.turnNumber,
          result.reason || 'Invalid turn',
          playerATurn.actorId,
          playerATurn.abilityId
        )
      );
      playerATurn = null;
    }
  }

  // Validate player B's turn in PvP matches
  if (!currentMatchState.isBot && playerBTurn) {
    const result = validateTurn(currentMatchState, playerBTurn);
    if (!result.valid) {
      logs.push(
        addLogEntry(
          currentMatchState.turnNumber,
          result.reason || 'Invalid turn',
          playerBTurn.actorId,
          playerBTurn.abilityId
        )
      );
      playerBTurn = null;
    }
  }

  // If it's a PvE match and it's the bot's turn, generate bot action
  let botTurnAction: TurnAction | null = null;
  if (currentMatchState.isBot && currentMatchState.activePlayerId === currentMatchState.playerB.profile.id) {
    // For now, hardcode botType to 'tactical'. This should be dynamic in a real game.
    const botType = 'tactical';
    const botAI = BotModels[botType];

    if (botAI) {
      botTurnAction = botAI.getAction(currentMatchState.playerB, currentMatchState.playerA);
      logs.push({ turnNumber: currentMatchState.turnNumber, message: `Bot (${currentMatchState.playerB.username}) chose its action.` });
      const validation = validateTurn(currentMatchState, botTurnAction);
      if (!validation.valid) {
        logs.push(
          addLogEntry(
            currentMatchState.turnNumber,
            validation.reason || 'Invalid turn',
            botTurnAction.actorId,
            botTurnAction.abilityId
          )
        );
        botTurnAction = null;
      }
    } else {
      logs.push({ turnNumber: currentMatchState.turnNumber, message: `Bot AI type '${botType}' not found.` });
    }
  }

  // Resolve turns
  const { updatedMatchState: resolvedState, combatLog: turnLogs, winner: turnWinner } = runMatchTurn(
    currentMatchState,
    (playerATurn || botTurnAction || playerBTurn)! // Use non-null assertion
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