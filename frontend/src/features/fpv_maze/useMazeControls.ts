import { useState, useEffect, useCallback } from 'react';

export interface PlayerState {
  x: number;
  y: number;
  angle: number; // Radians
}

export type MazeAction = 'forward' | 'backward' | 'turnLeft' | 'turnRight' | 'exit' | 'none';

interface UseMazeControlsProps {
  // initialPlayerState is no longer needed here as MazeFPV manages the full state
  onAttemptMove: (action: 'forward' | 'backward') => void;
  onTurn: (action: 'turnLeft' | 'turnRight') => void;
  onExit?: () => void;
  // turnSpeed and moveSpeed are managed by MazeFPV
}

const useMazeControls = ({
  onAttemptMove,
  onTurn,
  onExit,
}: UseMazeControlsProps) => {
  // No local player state (x, y, angle) needed in this hook anymore
  const [lastAction, setLastAction] = useState<MazeAction>('none');

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      let action: MazeAction = 'none';
      switch (event.key) {
        case 'ArrowUp':
          action = 'forward';
          onAttemptMove(action);
          break;
        case 'ArrowDown':
          action = 'backward';
          onAttemptMove(action);
          break;
        case 'ArrowLeft':
          action = 'turnLeft';
          onTurn(action);
          break;
        case 'ArrowRight':
          action = 'turnRight';
          onTurn(action);
          break;
        case 'Escape':
          action = 'exit';
          if (onExit) {
            onExit();
          }
          break;
        default:
          break;
      }
      if (action !== 'none') {
        setLastAction(action);
      }
    },
    [onAttemptMove, onTurn, onExit]
  );
  
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  // This hook now only reports the last keyboard action.
  // Actual state changes (x, y, angle) are handled by MazeFPV.
  return { lastAction };
};

export default useMazeControls;