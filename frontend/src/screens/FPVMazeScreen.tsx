import React, { useState } from 'react';
import MazeFPV from '../features/fpv_maze/MazeFPV';
import { useNavigate } from 'react-router-dom';
import { loadMap } from '../features/fpv_maze/MazeData'; // DISTRICT_START_POSITIONS no longer needed here
import { MazeEngine } from '../lib/maze/MazeEngine';
import MazeHUD from '../features/fpv_maze/components/MazeHUD';
import ControlsBar from '../features/fpv_maze/components/ControlsBar';
import { InputKey } from '../types/maze'; // Import InputKey

const FPVMazeScreen: React.FC = () => {
  const navigate = useNavigate();
  
  const [engine] = useState(() => {
    const districtId = 'district0'; // This could be dynamic later
    const mapGrid = loadMap(districtId);
    // MazeEngine constructor now handles finding a valid start position and angle
    return new MazeEngine(mapGrid);
  });

  const handleExitMaze = () => {
    console.log('Exiting maze from FPVMazeScreen...');
    alert('Exiting Maze! Navigation from FPVMazeScreen not fully implemented.');
  };

  const handleControlAction = (action: InputKey) => {
    if (action === 'forward') engine.move('f');
    else if (action === 'backward') engine.move('b');
    else if (action === 'turnLeft') engine.turn('l');
    else if (action === 'turnRight') engine.turn('r');
  };

  return (
    <div className="fullscreen-centre">
      <div className="fpv-wrapper pointer-events-auto"> {/* Use the new wrapper class */}
        {/* Exit Button - Kept for now, can be integrated into HUD or elsewhere */}
        <button
          onClick={handleExitMaze}
        className="absolute top-4 right-4 text-red-500 hover:text-red-300 text-2xl font-bold transition-all crt-glitch-hover z-[100]" // Ensure high z-index
      >
        ✕
      </button>

      {/* Maze Title - Can also be part of MazeHUD */}
      <h1 className="text-center text-green-300 text-xl mb-4">Story Mode - District 0</h1>
      
      <MazeHUD /> {/* Placeholder HUD */}
      
      <MazeFPV
        engine={engine}
        onExitMaze={handleExitMaze} // MazeFPV might still need this if it has an internal exit trigger
      />
      
      <ControlsBar onAction={handleControlAction} />
      
      {/* Directional Key Hint from original - can be removed if ControlsBar is sufficient */}
      {/*
      <div className="absolute bottom-12 w-full flex justify-center space-x-4 z-40">
        <div className="ascii-arrow p-2 bg-gray-800 rounded">←</div>
        <div className="ascii-arrow p-2 bg-gray-800 rounded">↑</div>
        <div className="ascii-arrow p-2 bg-gray-800 rounded">↓</div>
        <div className="ascii-arrow p-2 bg-gray-800 rounded">→</div>
      </div>
      */}
      </div>
    </div>
  );
};

export default FPVMazeScreen;