import express, { Request, Response, Router } from 'express';
import { runMatchTurn } from '../match_engine/resolver';
import { getMatchState, updateMatchState } from '../utils/matchStateStore';
import { TurnAction } from '../match_engine/types';

const router: Router = express.Router();

router.post('/:matchId/turn', async (req: Request<{ matchId: string }, any, TurnAction>, res: Response): Promise<void> => {
  const matchId = req.params.matchId;
  const { actorId, abilityId, targetId } = req.body;

  const matchState = getMatchState(matchId);

  if (!matchState) {
    res.status(404).json({ error: 'Match not found' });
    return;
  }

  try {
    const result = runMatchTurn(matchState, {
      actorId,
      abilityId,
      targetId,
    });

    updateMatchState(matchId, result.updatedMatchState);

    res.status(200).json({
      updatedState: result.updatedMatchState,
      combatLog: result.combatLog,
      winner: result.winner || null,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to resolve turn' });
  }
});

export default router;