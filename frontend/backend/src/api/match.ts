import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import { createMatchState } from '../utils/matchStateStore';
import { MatchState, PlayerState } from '../match_engine/types';
import { getAbilitiesForPlayer } from '../utils/abilityLoader'; // Assuming this function exists

const router = express.Router();

router.post('/start', (req, res) => {
  const { playerAId, playerBId = 'BOT' } = req.body;

  const matchId = uuidv4();

  // Placeholder for fetching player profiles and abilities
  // In a real scenario, you'd fetch these from a database
  const playerAProfile = {
    id: playerAId,
    user_id: playerAId, // Mock value
    character_class_id: 'default', // Mock value
    level: 1, // Mock value
    experience: 0, // Mock value
    unlocked_abilities: [], // Mock value
    equipped_cosmetic_id: null, // Mock value
    created_at: new Date(), // Mock value
    username: `Player ${playerAId.substring(0, 4)}`
  };
  const playerBProfile = {
    id: playerBId,
    user_id: playerBId, // Mock value
    character_class_id: 'default', // Mock value
    level: 1, // Mock value
    experience: 0, // Mock value
    unlocked_abilities: [], // Mock value
    equipped_cosmetic_id: null, // Mock value
    created_at: new Date(), // Mock value
    username: playerBId === 'BOT' ? 'Bot' : `Player ${playerBId.substring(0, 4)}`
  };

  const playerAAbilities = getAbilitiesForPlayer(playerAId);
  const playerBAbilities = getAbilitiesForPlayer(playerBId);

  const initialPlayerAState: PlayerState = {
    profile: playerAProfile,
    username: playerAProfile.username,
    hp: 100,
    maxHealth: 100,
    energy: 100,
    maxEnergy: 100,
    speed: 10,
    abilities: playerAAbilities,
    statusEffects: [],
    cooldowns: {},
    isBot: false,
    id: playerAId,
  };

  const initialPlayerBState: PlayerState = {
    profile: playerBProfile,
    username: playerBProfile.username,
    hp: 100,
    maxHealth: 100,
    energy: 100,
    maxEnergy: 100,
    speed: 10,
    abilities: playerBAbilities,
    statusEffects: [],
    cooldowns: {},
    isBot: playerBId === 'BOT',
    id: playerBId,
  };

  const initialMatchState: MatchState = {
    id: matchId,
    playerA: initialPlayerAState,
    playerB: initialPlayerBState,
    turnNumber: 1,
    activePlayerId: playerAId, // Player A starts
    combatLog: [],
    status: 'active',
    winnerId: null,
    isBot: playerBId === 'BOT',
    turnLog: [], // Initialize turnLog as an empty array
  };

  createMatchState(matchId, initialMatchState);

  console.log('Match started:', initialMatchState);
  res.status(201).json(initialMatchState);
});

export default router;