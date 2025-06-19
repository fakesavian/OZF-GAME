import React, { useState, useEffect, useCallback } from 'react';
import { RaycastHit } from './Raycaster'; // RaycastHit is still needed
import AsciiRenderer from './AsciiRenderer';
import useMazeControls from './useMazeControls';
import { MazeEngine } from '../../lib/maze/MazeEngine'; // Corrected Import Path for MazeEngine
// import { triggerLoreEvent } from './LoreEvents'; // Will be used later

const SCREEN_WIDTH_CHARS = 60; // Number of columns for ASCII rendering
const SCREEN_HEIGHT_CHARS = 24; // Number of rows for ASCII rendering

// Memoize AsciiRenderer for performance
const MemoizedAsciiRenderer = React.memo(AsciiRenderer);

export interface MazeFPVProps { // Exporting for potential use elsewhere, though not strictly necessary now
  engine: MazeEngine;
  onExitMaze?: () => void;
}

const MazeFPV: React.FC<MazeFPVProps> = ({
  engine,
  onExitMaze
}) => {
  const [currentPose, setCurrentPose] = useState(engine.pose);
  const [raycastData, setRaycastData] = useState<RaycastHit[]>(() => engine.castRays());
  const [isColliding, setIsColliding] = useState(false);
const [frame, setFrame] = useState(0);
  // const [loreMessage, setLoreMessage] = useState<string | null>(null); // For later

  // Update local state when engine's pose changes
  useEffect(() => {
    const handlePoseChange = (eventName: string, newPose: any) => {
      setCurrentPose({ ...newPose }); // Update our local copy of the pose
      setRaycastData(engine.castRays()); // Re-cast rays
    };

    const handleCollision = () => {
      setIsColliding(true);
      const timer = setTimeout(() => setIsColliding(false), 150); // Brief flash
      return () => clearTimeout(timer);
    };
    
    // const handleLoreTrigger = (eventName: string, data: { message: string }) => {
    //   setLoreMessage(data.message);
    //   // Logic to show LorePopup will be handled by FPVMazeScreen or a context
    // };

    engine.addEventListener('posechanged', handlePoseChange);
    engine.addEventListener('collision', handleCollision);
    // engine.addEventListener('loretrigger', handleLoreTrigger); // For later

    // Initial raycast based on engine's starting pose
    setRaycastData(engine.castRays());
    setCurrentPose(engine.pose);


    return () => {
      engine.removeEventListener('posechanged', handlePoseChange);
      engine.removeEventListener('collision', handleCollision);
      // engine.removeEventListener('loretrigger', handleLoreTrigger); // For later
    };
  }, [engine]);
useEffect(() => {
    let animationFrameId: number;
    const loop = () => {
      setFrame(prevFrame => prevFrame + 1);
      animationFrameId = requestAnimationFrame(loop);
    };
    animationFrameId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);
  
  // The handleInputAction is now managed by FPVMazeScreen and passed to ControlsBar
  // const handleInputAction = useCallback((action: 'forward' | 'backward' | 'turnLeft' | 'turnRight') => {
  //   if (action === 'forward') engine.move('f');
  //   else if (action === 'backward') engine.move('b');
  //   else if (action === 'turnLeft') engine.turn('l');
  //   else if (action === 'turnRight') engine.turn('r');
  // }, [engine]);
  
  const { lastAction } = useMazeControls({
    engine: engine, // Pass the engine instance directly
    onExit: onExitMaze,
  });

  return (
    <div
      style={{ position: 'relative', width: '100%', height: '100%' }}
      className={`maze-fpv-container ${isColliding ? 'blocked-animation' : ''}`}
      role="application" // Added for accessibility
      tabIndex={0} // Added to make it focusable for keyboard events
    >
      {/* Removed inline style for shake animation, now using .blocked-animation from index.css */}
      
      <MemoizedAsciiRenderer frame={frame}
        raycastData={raycastData}
        screenWidth={SCREEN_WIDTH_CHARS}
        screenHeight={SCREEN_HEIGHT_CHARS}
      />

      {/* Player Stats Display - Positioned at the top, below the main maze title */}
      <div
        className="player-stats-display"
        style={{
          position: 'absolute',
          top: '0px', // Adjust as needed, or remove if FPVMazeScreen handles title
          left: '50%',
          transform: 'translateX(-50%)',
          color: '#00FF00',
          fontFamily: 'monospace',
          textAlign: 'center',
          zIndex: 30, // Below controls if they overlap, but above renderer
          backgroundColor: 'rgba(0,0,0,0.5)', // Optional: for readability
          padding: '2px 5px',
          borderRadius: '3px'
        }}
      >
        <p style={{margin: 0}}>X: {currentPose.x.toFixed(2)}, Y: {currentPose.y.toFixed(2)}, Angle: {(currentPose.a * 180 / Math.PI).toFixed(2)}°</p>
        <p style={{margin: 0}}>Last Key: {lastAction}</p>
      </div>

      {/* On-Screen Controls are now handled by ControlsBar.tsx, invoked in FPVMazeScreen.tsx */}
    </div>
  );
};

export default MazeFPV;