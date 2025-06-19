import { useState, useEffect, useCallback } from 'react';
import { MazeEngine } from '../../lib/maze/MazeEngine'; // Corrected import path

export interface PlayerState { // This might become internal to MazeEngine or MazeFPV later
  x: number;
  y: number;
  a: number; // Radians - changed from angle to a to match MazeEngine
}

export type MazeAction = 'forward' | 'backward' | 'turnLeft' | 'turnRight' | 'exit' | 'none';

interface UseMazeControlsProps {
  engine: MazeEngine;
  onExit?: () => void;
}

const useMazeControls = ({
  engine,
  onExit,
}: UseMazeControlsProps) => {
  const [lastAction, setLastAction] = useState<MazeAction>('none');

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      let action: MazeAction = 'none';
      switch (event.key.toLowerCase()) { // Convert to lowercase for case-insensitivity (W vs w)
        case 'arrowup':
        case 'w':
          action = 'forward';
          engine.move('f');
          break;
        case 'arrowdown':
        case 's':
          action = 'backward';
          engine.move('b');
          break;
        case 'arrowleft':
        case 'a':
          action = 'turnLeft';
          engine.turn('l');
          break;
        case 'arrowright':
        case 'd':
          action = 'turnRight';
          engine.turn('r');
          break;
        case 'escape':
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
    [engine, onExit] // engine is now a dependency
  );
  
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  // This hook now only reports the last keyboard action.
  // Engine interactions trigger events that MazeFPV listens to.
  return { lastAction };
};

export default useMazeControls;