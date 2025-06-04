import express from 'express';
import http from 'http';
import WebSocket from 'ws';
import cors from 'cors';

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

import { createMatch, createPlayerProfile, getPlayerProfileById, updateMatchStatus, createTurn } from './db';
import { initializePlayerState } from './match_engine/state';
import { runTurn } from './match_engine';
import { loadAllAbilities } from './utils/abilityLoader';
import { MatchState, TurnAction, CombatLogEntry } from './match_engine/types';
import { PlayerProfile, Ability } from './types/db';
import { v4 as uuidv4 } from 'uuid'; // For generating UUIDs
import matchRouter from './api/match';
import turnRouter from './api/turn';
import { createMatchState } from './utils/matchStateStore'; // Import createMatchState

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3001', // frontend
  credentials: true, // if using cookies
}));

// In-memory storage for active matches (for MVP, will be replaced by Redis/DB for scaling)
const activeMatches: Map<string, { matchState: MatchState; players: { [playerId: string]: WebSocket } }> = new Map();

app.get('/', (_req, res) => {
  res.send('Backend is up!');
});

app.use('/api/match', matchRouter);
app.use('/api/match', turnRouter); // Mount the turn router

// Mock endpoint for frontend testing
app.post("/api/match/:matchId/turn", (req, res) => {
  const { matchId } = req.params;
  const { move } = req.body;

  console.log(`Match ${matchId} received move: ${move}`);

  // Mock result:
  res.json({
    result: "ok",
    enemyHP: 80,
    playerHP: 100,
    log: `You used ${move}.`,
  });
});

// API to start a new match
app.post('/api/match/start', async (req: express.Request, res: express.Response) => {
  try {
    // For MVP, we'll simulate a player and a bot
    // In a real scenario, player_id would come from authentication
    const playerAUsername = req.body.username || `Player_${uuidv4().substring(0, 4)}`;
    const playerBUsername = `Bot_${uuidv4().substring(0, 4)}`;

    // Create dummy character class IDs for now
    const dummyWarriorClassId = uuidv4(); // Replace with actual class IDs from DB
    const dummyMageClassId = uuidv4();

    // Create player profiles (or retrieve existing ones)
    let playerAProfile: PlayerProfile;
    // For simplicity, always create new profiles for now
    playerAProfile = await createPlayerProfile(uuidv4(), dummyWarriorClassId); // Dummy user_id

    let playerBProfile: PlayerProfile;
    playerBProfile = await createPlayerProfile(null, dummyMageClassId, true); // Bot has no user_id

    // Create match in DB
    const dbMatch = await createMatch(playerAProfile.id, playerBProfile.id, true); // is_bot = true

    // Load all abilities for the match engine
    const allAbilities = loadAllAbilities();

    // Filter abilities for each player's class (for MVP, just assign all for now)
    const playerAAbilities = allAbilities.filter(ab => ab.class_id === dummyWarriorClassId || ab.class_id === null); // Assign all for now
    const playerBAbilities = allAbilities.filter(ab => ab.class_id === dummyMageClassId || ab.class_id === null); // Assign all for now

    // Initialize player states
    const playerAState = initializePlayerState(playerAProfile, playerAUsername, playerAAbilities, false);
    const playerBState = initializePlayerState(playerBProfile, playerBUsername, playerBAbilities, true);

    // Initialize match state
// Initialize match state
    const initialMatchState: MatchState = {
      id: dbMatch.id,
      playerA: { ...playerAState, hp: 100, energy: 100, statusEffects: [], cooldowns: {}, id: playerAProfile.id },
      playerB: { ...playerBState, hp: 100, energy: 100, statusEffects: [], cooldowns: {}, id: playerBProfile.id },
      turnNumber: 1,
      activePlayerId: playerAState.profile.id, // Player A starts
      combatLog: [],
      status: 'active',
      winnerId: null,
      isBot: true,
      turnLog: [], // Initialize turnLog as an empty array
    };

    // Store initial match state in the in-memory store
    createMatchState(dbMatch.id, initialMatchState);

    activeMatches.set(dbMatch.id, { matchState: initialMatchState, players: {} });

    res.status(201).json({
      matchId: dbMatch.id,
      initialState: initialMatchState,
      message: 'Match started successfully!',
    });
  } catch (error) {
    console.error('Error starting match:', error);
    res.status(500).json({ message: 'Failed to start match', error: (error as Error).message });
  }
});

// WebSocket connection handler
wss.on('connection', ws => {
  console.log('Client connected via WebSocket');

  ws.on('message', async message => {
    try {
      const parsedMessage = JSON.parse(message.toString());
      const { type, payload } = parsedMessage;

      if (type === 'JOIN_MATCH' && payload.matchId && payload.playerId) {
        const matchEntry = activeMatches.get(payload.matchId);
        if (matchEntry) {
          matchEntry.players[payload.playerId] = ws;
          console.log(`Player ${payload.playerId} joined match ${payload.matchId}`);
          // Send initial state to the joining player
          ws.send(JSON.stringify({ type: 'MATCH_STATE_UPDATE', state: matchEntry.matchState }));
        } else {
          ws.send(JSON.stringify({ type: 'ERROR', message: 'Match not found' }));
        }
      } else if (type === 'SUBMIT_TURN' && payload.matchId && payload.turnAction) {
        const { matchId, turnAction } = payload as { matchId: string; turnAction: TurnAction };
        const matchEntry = activeMatches.get(matchId);

        if (!matchEntry) {
          ws.send(JSON.stringify({ type: 'ERROR', message: 'Match not found or inactive' }));
          return;
        }

        let currentMatchState = matchEntry.matchState;
        let playerATurn: TurnAction | null = null;
        let playerBTurn: TurnAction | null = null;

        // Determine which player submitted the turn
        if (turnAction.actorId === currentMatchState.playerA.profile.id) {
          playerATurn = turnAction;
        } else if (turnAction.actorId === currentMatchState.playerB.profile.id) {
          playerBTurn = turnAction;
        } else {
          ws.send(JSON.stringify({ type: 'ERROR', message: 'Invalid player for this match' }));
          return;
        }

        // Ensure it's the active player's turn
        if (turnAction.actorId !== currentMatchState.activePlayerId) {
          ws.send(JSON.stringify({ type: 'ERROR', message: 'Not your turn' }));
          return;
        }

        // For PvE, if player A submits, bot's turn is generated immediately
        if (currentMatchState.isBot && turnAction.actorId === currentMatchState.playerA.profile.id) {
          // The bot's turn will be generated within runTurn if it's player B's turn
          // We pass null for playerBTurn here, and runTurn will handle bot_ai
        } else if (currentMatchState.isBot && turnAction.actorId === currentMatchState.playerB.profile.id) {
          // This case should ideally not happen in PvE as bot's turn is auto-generated
          ws.send(JSON.stringify({ type: 'ERROR', message: 'Bot turn cannot be submitted manually' }));
          return;
        }

        // Run the turn resolution
        const allAbilities = loadAllAbilities(); // Load abilities for each turn (can be optimized)
        const { newMatchState, logs, isGameOver, winnerId } = runTurn(
          currentMatchState,
          playerATurn,
          playerBTurn, // This will be null for PvE if player A submitted, and bot_ai will generate
          allAbilities
        );

        matchEntry.matchState = newMatchState;

        // Save turns to DB
        if (playerATurn) {
          await createTurn({
            match_id: newMatchState.id,
            turn_number: newMatchState.turnNumber -1, // Turn number before increment
            acting_player_id: playerATurn.actorId,
            ability_id: playerATurn.abilityId,
            target_id: playerATurn.targetId,
            result_json: { logs: logs.filter(log => log.playerId === playerATurn.actorId) }, // Store relevant logs
          });
        }
        // If bot took a turn, log it as well
        if (newMatchState.isBot && newMatchState.activePlayerId === newMatchState.playerA.profile.id) { // If it's now player A's turn, bot must have acted
          // This is a simplification. A more robust solution would track bot's specific action.
          // For now, we'll log a generic bot action if the turn advanced and it's PvE.
          const botPlayerId = newMatchState.playerB.profile.id;
          const botLogs = logs.filter(log => log.playerId === botPlayerId);
          if (botLogs.length > 0) {
             await createTurn({
                match_id: newMatchState.id,
                turn_number: newMatchState.turnNumber -1,
                acting_player_id: botPlayerId,
                ability_id: botLogs[0]?.abilityId || 'bot_ability_unknown', // Use first bot ability in logs or placeholder
                target_id: botLogs[0]?.playerId === botPlayerId ? newMatchState.playerA.profile.id : botPlayerId, // Target is opponent if bot is acting
                result_json: { logs: botLogs },
             });
          }
        }


        // Broadcast updated state and logs to all players in the match
        for (const playerId in matchEntry.players) {
          const playerWs = matchEntry.players[playerId];
          if (playerWs.readyState === WebSocket.OPEN) {
            playerWs.send(JSON.stringify({ type: 'MATCH_STATE_UPDATE', state: newMatchState, logs }));
          }
        }

        if (isGameOver) {
          await updateMatchStatus(newMatchState.id, newMatchState.status, newMatchState.winnerId);
          console.log(`Match ${newMatchState.id} ended. Winner: ${newMatchState.winnerId}`);
          // Clean up match from activeMatches
          activeMatches.delete(newMatchState.id);
        }

      } else {
        ws.send(JSON.stringify({ type: 'ERROR', message: 'Unknown message type or missing payload' }));
      }
    } catch (error) {
      console.error('WebSocket message error:', error);
      ws.send(JSON.stringify({ type: 'ERROR', message: 'Server error processing message', error: (error as Error).message }));
    }
  });

  ws.on('close', () => {
    console.log('Client disconnected');
    // TODO: Handle player disconnection from active matches
  });

  ws.on('error', error => {
    console.error('WebSocket error:', error);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});