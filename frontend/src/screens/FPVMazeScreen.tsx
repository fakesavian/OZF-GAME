import React, { useState } from 'react'; // Added useState
import MazeFPV from '../features/fpv_maze/MazeFPV';
import { useNavigate } from 'react-router-dom';
import { PlayerState } from '../features/fpv_maze/useMazeControls'; // Import PlayerState
import { mazeWithTriggers as initialMazeMap, MazeMap } from '../features/fpv_maze/MazeData'; // Use a map

const FPVMazeScreen: React.FC = () => {
  const navigate = useNavigate();
  
  // FPVMazeScreen will manage its own simple state for the maze
  const [playerState, setPlayerState] = useState<PlayerState>({ x: 1.5, y: 1.5, angle: Math.PI / 2 });
  const [mazeMap] = useState<MazeMap>(initialMazeMap);


  const handleExitMaze = () => {
    console.log('Exiting maze from FPVMazeScreen...');
    // navigate('/menu'); // Or wherever is appropriate
    alert('Exiting Maze! Navigation from FPVMazeScreen not fully implemented.');
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#1a1a1a',
      color: '#00FF00',
      fontFamily: '"Courier New", Courier, monospace',
      padding: '20px'
    }}>
      <h1 style={{ marginBottom: '20px' }}>FPV MAZE VIEWER</h1>
      <MazeFPV
        initialPlayerState={playerState}
        onPlayerStateChange={setPlayerState}
        mazeMap={mazeMap}
        onExitMaze={handleExitMaze}
      />
    </div>
  );
};

export default FPVMazeScreen;