import { Pool } from 'pg';
import { Match, Turn, PlayerProfile } from './types/db';

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT || '5432', 10),
});

pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

export const query = (text: string, params?: any[]) => pool.query(text, params);

export const createMatch = async (playerAId: string, playerBId: string, isBot: boolean): Promise<Match> => {
  const result = await query(
    `INSERT INTO matches (player_a_id, player_b_id, status, started_at, is_bot)
     VALUES ($1, $2, $3, NOW(), $4)
     RETURNING *`,
    [playerAId, playerBId, 'active', isBot]
  );
  return result.rows[0];
};

export const updateMatchStatus = async (matchId: string, status: Match['status'], winnerId: string | null = null): Promise<Match> => {
  const result = await query(
    `UPDATE matches SET status = $1, ended_at = NOW(), winner_id = $2 WHERE id = $3 RETURNING *`,
    [status, winnerId, matchId]
  );
  return result.rows[0];
};

export const getMatchById = async (matchId: string): Promise<Match | null> => {
  const result = await query(`SELECT * FROM matches WHERE id = $1`, [matchId]);
  return result.rows[0] || null;
};

export const createTurn = async (turn: Omit<Turn, 'id' | 'created_at'>): Promise<Turn> => {
  const result = await query(
    `INSERT INTO turns (match_id, turn_number, acting_player_id, ability_id, target_id, result_json)
     VALUES ($1, $2, $3, $4, $5, $6)
     RETURNING *`,
    [turn.match_id, turn.turn_number, turn.acting_player_id, turn.ability_id, turn.target_id, turn.result_json]
  );
  return result.rows[0];
};

export const getPlayerProfileById = async (profileId: string): Promise<PlayerProfile | null> => {
  const result = await query(`SELECT * FROM player_profiles WHERE id = $1`, [profileId]);
  return result.rows[0] || null;
};

export const createPlayerProfile = async (userId: string | null, characterClassId: string | null, isBot: boolean = false): Promise<PlayerProfile> => {
  // For bot profiles, user_id can be null. For real players, it should be provided.
  const result = await query(
    `INSERT INTO player_profiles (user_id, character_class_id, level, experience, unlocked_abilities, equipped_cosmetic_id, created_at)
     VALUES ($1, $2, $3, $4, $5, $6, NOW())
     RETURNING *`,
    [userId, characterClassId, 1, 0, [], null, ]
  );
  return result.rows[0];
};