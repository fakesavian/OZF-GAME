import React, { useState, useEffect } from 'react'; // Removed useMemo as it's not used
import { MazeGridType } from './MazeData'; // Changed MazeMap to MazeGridType, removed initialMaze
import { castRays, RaycastHit } from './Raycaster';
import AsciiRenderer from './AsciiRenderer';
import useMazeControls, { PlayerState } from './useMazeControls';
// import { triggerLoreEvent } from './LoreEvents'; // Will be used later

const SCREEN_WIDTH_CHARS = 60; // Number of columns for ASCII rendering
const SCREEN_HEIGHT_CHARS = 24; // Number of rows for ASCII rendering

interface MazeFPVProps {
  initialPlayerState: PlayerState;
  onPlayerStateChange: (newState: PlayerState) => void;
  mazeMap: MazeGridType; // Changed MazeMap to MazeGridType
  onExitMaze?: () => void;
}

const MazeFPV: React.FC<MazeFPVProps> = ({
  initialPlayerState,
  onPlayerStateChange,
  mazeMap,
  onExitMaze
}) => {
  // Player state is now managed by the parent (StoryModeScreen)
  // We use initialPlayerState to initialize and onPlayerStateChange to update the parent
  const [raycastData, setRaycastData] = useState<RaycastHit[]>([]);
  // loreMessage is also managed by parent now

  const moveSpeed = 0.1; // Tiles per move
  const turnSpeed = Math.PI / 30;

  // This function now calls onPlayerStateChange to update the parent
  const internalHandleCollisionAndMove = (newX: number, newY: number, newAngle: number) => {
    const oldX = initialPlayerState.x; // Use current state from props
    const oldY = initialPlayerState.y;
    const checkX = Math.floor(newX);
    const checkY = Math.floor(newY);

    if (
      checkX < 0 ||
      checkX >= mazeMap[0].length ||
      checkY < 0 ||
      checkY >= mazeMap.length ||
      mazeMap[checkY][checkX] === '#'
    ) {
      // Collision: revert x,y but keep newAngle if it was a turn
      onPlayerStateChange({ x: oldX, y: oldY, angle: newAngle });
    } else {
      // No collision: update with new x,y,angle
      onPlayerStateChange({ x: newX, y: newY, angle: newAngle });
    }
  };

  const moveForward = () => {
    const newX = initialPlayerState.x + Math.sin(initialPlayerState.angle) * moveSpeed;
    const newY = initialPlayerState.y + Math.cos(initialPlayerState.angle) * moveSpeed;
    internalHandleCollisionAndMove(newX, newY, initialPlayerState.angle);
  };

  const moveBackward = () => {
    const newX = initialPlayerState.x - Math.sin(initialPlayerState.angle) * moveSpeed;
    const newY = initialPlayerState.y - Math.cos(initialPlayerState.angle) * moveSpeed;
    internalHandleCollisionAndMove(newX, newY, initialPlayerState.angle);
  };

  const turnLeft = () => {
    const newAngle = initialPlayerState.angle - turnSpeed;
    // For turns, x and y don't change due to collision, so we can directly update.
    onPlayerStateChange({ ...initialPlayerState, angle: newAngle });
  };

  const turnRight = () => {
    const newAngle = initialPlayerState.angle + turnSpeed;
    onPlayerStateChange({ ...initialPlayerState, angle: newAngle });
  };
  
  // For on-screen buttons
  const handleInput = (action: 'forward' | 'backward' | 'turnLeft' | 'turnRight') => {
    if (action === 'forward') moveForward();
    else if (action === 'backward') moveBackward();
    else if (action === 'turnLeft') turnLeft();
    else if (action === 'turnRight') turnRight();
  };
  
  const { lastAction } = useMazeControls({
    onAttemptMove: (action) => {
      if (action === 'forward') moveForward();
      else if (action === 'backward') moveBackward();
    },
    onTurn: (action) => {
      if (action === 'turnLeft') turnLeft();
      else if (action === 'turnRight') turnRight();
    },
    onExit: onExitMaze,
  });

  // Re-cast rays whenever player state (from props) or maze map (from props) changes
  useEffect(() => {
    const newRays = castRays(initialPlayerState.x, initialPlayerState.y, initialPlayerState.angle, mazeMap);
    setRaycastData(newRays);
  }, [initialPlayerState, mazeMap]);

  return (
    <div style={{ position: 'relative' }}>
      <AsciiRenderer
        raycastData={raycastData}
        screenWidth={SCREEN_WIDTH_CHARS}
        screenHeight={SCREEN_HEIGHT_CHARS}
      />
      <div style={{ color: '#00FF00', fontFamily: 'monospace', marginTop: '10px', textAlign: 'center' }}>
        {/* Lore message is now handled by StoryModeScreen */}
        <p>X: {initialPlayerState.x.toFixed(2)}, Y: {initialPlayerState.y.toFixed(2)}, Angle: {(initialPlayerState.angle * 180 / Math.PI).toFixed(2)}°</p>
        <p>Last Key: {lastAction}</p>
      </div>

      {/* On-Screen Controls - Repositioned and backward button added */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 z-40">
        <button onClick={() => handleInput('forward')} className="ascii-arrow">↑</button>
        <div className="flex gap-10">
          <button onClick={() => handleInput('turnLeft')} className="ascii-arrow">←</button>
          <button onClick={() => handleInput('backward')} className="ascii-arrow">↓</button>
          <button onClick={() => handleInput('turnRight')} className="ascii-arrow">→</button>
        </div>
      </div>
    </div>
  );
};

export default MazeFPV;