import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import MazeFPV from '../features/fpv_maze/MazeFPV';
import { PlayerState } from '../features/fpv_maze/useMazeControls';
import { loadMap, MazeGridType, DISTRICT_START_POSITIONS } from '../features/fpv_maze/MazeData'; // Updated imports
import { findLoreAtCoordinates, markLoreAsTriggered, LoreFragment, resetAllLoreEvents, loreDatabase, ArchitectComment, getArchitectComments, LoreChoice, getArchitectCommentById } from '../features/fpv_maze/LoreEvents'; // Import loreDatabase
import LorePopup from '../features/fpv_maze/components/LorePopup';
import MatrixRainTransition from '../features/fpv_maze/components/MatrixRainTransition';
import { motion } from 'framer-motion';
import TypewriterText from '../components/TypewriterText'; // Corrected import path

const MAZE_STORAGE_KEY = 'ozf_maze_resume_state';

interface MazeResumeState extends PlayerState {
  collectedLoreIds: string[];
  currentDistrictId: string; // Added currentDistrictId
}

const StoryModeScreen: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // State for current district and its map
  const [currentDistrictId, setCurrentDistrictId] = useState<string>('district0');
  const [mazeMap, setMazeMap] = useState<MazeGridType>(() => loadMap(currentDistrictId)); // Use MazeGridType

  const [playerState, setPlayerState] = useState<PlayerState>(
    () => DISTRICT_START_POSITIONS[currentDistrictId] || DISTRICT_START_POSITIONS.district0
  );
  const [activeLore, setActiveLore] = useState<LoreFragment | null>(null);
  const [collectedLoreIds, setCollectedLoreIds] = useState<string[]>([]);
  const [triggeringBattle, setTriggeringBattle] = useState(false);
  const [showDistrictPrompt, setShowDistrictPrompt] = useState<string | null>(null);
  const [targetDistrict, setTargetDistrict] = useState<string | null>(null);
  const [architectComment, setArchitectComment] = useState<{ text: string; architect: string } | null>(null);
  const [screenEffect, setScreenEffect] = useState<string | null>(null); // For glitch/flash
  const [isFogActive, setIsFogActive] = useState(false); // For blackout effect duration


  const persistMazeState = useCallback(() => {
    const stateToSave: MazeResumeState = { ...playerState, collectedLoreIds, currentDistrictId };
    localStorage.setItem(MAZE_STORAGE_KEY, JSON.stringify(stateToSave));
  }, [playerState, collectedLoreIds, currentDistrictId]);

  const restoreMazeState = useCallback(() => {
    const data = localStorage.getItem(MAZE_STORAGE_KEY);
    if (data) {
      try {
        const savedState = JSON.parse(data) as MazeResumeState & { currentDistrictId?: string };
        const districtToLoad = savedState.currentDistrictId || 'district0';
        
        setCurrentDistrictId(districtToLoad);
        setMazeMap(loadMap(districtToLoad));
        setPlayerState({ x: savedState.x, y: savedState.y, angle: savedState.angle });
        setCollectedLoreIds(savedState.collectedLoreIds || []);
        (savedState.collectedLoreIds || []).forEach(id => markLoreAsTriggered(id));
      } catch (error) {
        console.error("Failed to parse saved maze state:", error);
        localStorage.removeItem(MAZE_STORAGE_KEY);
      }
    }
  }, []);

  useEffect(() => {
    if (location.search.includes('fromBattle=true')) {
      restoreMazeState();
    } else {
      resetAllLoreEvents();
      const initialDistrict = 'district0'; // Or from some game progress state
      setCurrentDistrictId(initialDistrict);
      setMazeMap(loadMap(initialDistrict));
      setPlayerState(DISTRICT_START_POSITIONS[initialDistrict] || DISTRICT_START_POSITIONS.district0);
      setCollectedLoreIds([]);
      localStorage.removeItem(MAZE_STORAGE_KEY);
    }
  }, [location.search, restoreMazeState]);

  const handleChangeDistrict = (newDistrictId: string) => {
    persistMazeState(); // Save current state before changing
    setCurrentDistrictId(newDistrictId);
    setMazeMap(loadMap(newDistrictId));
    setPlayerState(DISTRICT_START_POSITIONS[newDistrictId] || DISTRICT_START_POSITIONS.district0); // Reset to start of new district
    
    // Trigger 'onEnterDistrict' architect comment
    const enterComments = getArchitectComments(newDistrictId, 'onEnterDistrict');
    if (enterComments.length > 0) {
      // Simple selection: pick the first one. Could be random or more complex.
      const commentToDisplay = enterComments[0];
      setArchitectComment({ text: commentToDisplay.text, architect: commentToDisplay.architect });
      triggerScreenEffect('glitch-shift');
    } else {
      setArchitectComment(null); // Clear any previous architect comment
    }

    setShowDistrictPrompt(null);
    setTargetDistrict(null);
  };

  const triggerScreenEffect = (effectType: 'flash' | 'glitch-shift') => {
    setScreenEffect(effectType);
    setTimeout(() => setScreenEffect(null), 300); // Duration of the effect
  };

  useEffect(() => {
    if (triggeringBattle || activeLore || showDistrictPrompt || architectComment) return;

    const currentX = Math.floor(playerState.x);
    const currentY = Math.floor(playerState.y);

    if (currentY < 0 || currentY >= mazeMap.length || currentX < 0 || currentX >= mazeMap[0].length) {
      return;
    }
    const currentTile = mazeMap[currentY][currentX];

    if (currentTile === '*') {
      const foundLore = findLoreAtCoordinates(currentX, currentY);
      if (foundLore && !collectedLoreIds.includes(foundLore.id)) {
        setActiveLore(foundLore);
        setCollectedLoreIds(prev => [...prev, foundLore.id]);
        markLoreAsTriggered(foundLore.id);
        persistMazeState();
      }
    } else if (currentTile === '!') {
      const lastBattleTile = sessionStorage.getItem('lastBattleTile');
      const currentBattleTile = `${currentDistrictId}-${currentX},${currentY}`;
      if (lastBattleTile !== currentBattleTile) {
        sessionStorage.setItem('lastBattleTile', currentBattleTile);
        persistMazeState();
        setTriggeringBattle(true);
      }
    } else if (currentTile === '>') { // District Gateway
      // Example: Assume '>' always leads to 'district1' from 'district0' for now
      // A more robust system would have metadata in the map file or tile itself.
      const nextDistrict = currentDistrictId === 'district0' ? 'district1' : 'district0'; // Simple toggle for demo
      setTargetDistrict(nextDistrict);
      setShowDistrictPrompt(`Do you wish to enter ${nextDistrict.replace('district', 'District ')}?`);
      // Player movement should be paused here
    } else if (currentTile === '@') {
      const tileComments = getArchitectComments(currentDistrictId, 'onSpecificTile', [currentX, currentY]);
      if (tileComments.length > 0) {
        // Simple selection: pick the first one. Could be random or more complex.
        // Add logic here to prevent immediate re-triggering if desired (e.g., using a temporary 'triggered' state for comments)
        const alreadyTriggeredThisSession = sessionStorage.getItem(`arch_comment_${tileComments[0].id}`);
        if (!alreadyTriggeredThisSession) {
          const commentToDisplay = tileComments[0];
          setArchitectComment({ text: commentToDisplay.text, architect: commentToDisplay.architect });
          triggerScreenEffect('glitch-shift');
          sessionStorage.setItem(`arch_comment_${tileComments[0].id}`, 'true'); // Mark as triggered for this session
        }
      }
    } else if (currentTile === '~') { // Fog of War / Memory Blackout tile
      if (!isFogActive) { // Prevent re-triggering while effect is active
        console.log(`Stepped on fog tile at ${currentX}, ${currentY}`);
        setIsFogActive(true);
        triggerScreenEffect('glitch-shift'); // Or a new 'blackout' effect

        // After a short delay, "clear" the fog by changing the tile on the map
        // This makes the change persistent for the current session (until map reload)
        // For permanent reveal, this change would need to be saved with game state.
        setTimeout(() => {
          const newMazeMap = mazeMap.map((row, y) =>
            row.map((cell, x) => {
              if (x === currentX && y === currentY) {
                return '.'; // Change fog to empty space
              }
              return cell;
            })
          );
          setMazeMap(newMazeMap);
          setIsFogActive(false); // Reset fog active state
          console.log(`Fog tile at ${currentX}, ${currentY} cleared from map state.`);
          persistMazeState(); // Persist the map change if desired, though map is usually reloaded
        }, 1000); // Duration of the fog "event"
      }
    }
  }, [playerState, mazeMap, collectedLoreIds, persistMazeState, currentDistrictId, triggeringBattle, activeLore, showDistrictPrompt, architectComment, isFogActive]);

  const handleExitMaze = () => {
    persistMazeState();
    navigate('/menu');
  };
  const handleCloseLore = () => {
    setActiveLore(null);
    // If closing a choice-based lore without making a choice, ensure no lingering effects.
  };

  const handleLoreChoice = (choice: LoreChoice) => {
    console.log("Choice made:", choice);
    let nextLoreToShow: LoreFragment | null = null;

    if (choice.outcomeType === 'addsShard' && choice.outcomeValue) {
      const shardToAdd = loreDatabase.find(shard => shard.id === choice.outcomeValue);
      if (shardToAdd && !collectedLoreIds.includes(shardToAdd.id)) {
        setCollectedLoreIds(prev => [...prev, shardToAdd.id]);
        markLoreAsTriggered(shardToAdd.id);
        console.log(`Added shard: ${shardToAdd.id}`);
        // Optionally, immediately show this new shard if it has text and isn't just a flag
        // For now, we assume it's just added to the archive.
      }
    } else if (choice.outcomeType === 'triggersArchitectComment' && choice.outcomeValue) {
      const commentToTrigger = getArchitectCommentById(choice.outcomeValue);
      if (commentToTrigger) {
        setArchitectComment({ text: commentToTrigger.text, architect: commentToTrigger.architect });
        triggerScreenEffect('glitch-shift');
        console.log(`Triggered architect comment: ${commentToTrigger.id}`);
      }
    }
    // Add more outcomeType handlers here if needed

    if (choice.nextLoreId) {
      const nextLore = loreDatabase.find(lore => lore.id === choice.nextLoreId);
      if (nextLore) {
        nextLoreToShow = nextLore; // Prepare to show next lore
        // markLoreAsTriggered(nextLore.id); // Mark it as seen if it's immediately displayed
      }
    }
    
    persistMazeState();

    if (nextLoreToShow) {
      setActiveLore(nextLoreToShow); // Show the next piece of lore
    } else {
      setActiveLore(null); // Close current lore popup if no next lore
    }
  };

  const handleExitClick = () => {
    persistMazeState();
    navigate('/');
  };

  // For Lore Archive
  const [showLoreArchive, setShowLoreArchive] = useState(false);
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (architectComment) {
        setArchitectComment(null); // Close architect comment first
        return;
      }
      if (e.key === 'Escape' && !activeLore && !triggeringBattle && !showDistrictPrompt && !architectComment) {
        setShowLoreArchive(prev => !prev);
      } else if (e.key === 'Escape' && (activeLore || showDistrictPrompt)) {
        setActiveLore(null);
        setShowDistrictPrompt(null);
        setTargetDistrict(null);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [activeLore, triggeringBattle, showDistrictPrompt, architectComment]);

  const getLoreDetailsForArchive = (id: string): LoreFragment | undefined => {
    // This function would ideally fetch full lore details if only IDs are stored,
    // but since we store full fragments (or can retrieve them), this is simpler.
    return findLoreAtCoordinates(-1,-1) || {} as any; // Hack to get access to the database, needs refactor in LoreEvents
    // A better way: LoreEvents.ts should export the database or a getter for it.
    // For now, let's assume LoreEvents.ts is refactored to provide:
    // import { getLoreById } from '../features/fpv_maze/LoreEvents';
    // return getLoreById(id);
  };


  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#0d0d0d',
        color: '#00FF00',
        fontFamily: '"Courier New", Courier, monospace',
        padding: '20px',
        overflow: 'hidden',
      }}
      className={`transition-all duration-300 ${screenEffect ? (screenEffect === 'flash' ? 'crt-flash' : 'screen-glitch-shift') : ''}`}
    >
      <button onClick={handleExitClick}
        className="absolute top-6 right-8 text-red-500 hover:text-red-300 text-xl font-mono z-[10000]"
        aria-label="Close">✕</button>
      
      <h1 style={{ borderBottom: '2px solid #00FF00', paddingBottom: '10px', marginBottom: '30px' }}>
        Story Mode - {currentDistrictId.replace('district', 'District ')}
      </h1>

      {!triggeringBattle && !showLoreArchive && !showDistrictPrompt && !architectComment && (
        <MazeFPV initialPlayerState={playerState} onPlayerStateChange={setPlayerState}
                 onExitMaze={handleExitMaze} mazeMap={mazeMap} />
      )}

      {activeLore && !triggeringBattle && !showLoreArchive && !showDistrictPrompt && !architectComment && (
        <LorePopup activeLore={activeLore} onClose={handleCloseLore} onChoiceMade={handleLoreChoice} />
      )}
      
      {architectComment && !triggeringBattle && !showLoreArchive && !showDistrictPrompt && (
         <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[9998]"
            onClick={() => setArchitectComment(null)} // Click anywhere to dismiss
          >
            <div className="bg-black border-2 border-purple-500 p-6 font-mono text-purple-400 text-xl shadow-2xl crt-glow max-w-lg text-center">
              <TypewriterText text={architectComment.text} speed={40} onComplete={() => setTimeout(() => setArchitectComment(null), 3000)} />
            </div>
          </motion.div>
      )}

      {showDistrictPrompt && targetDistrict && !architectComment && (
        <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-md bg-black border-2 border-green-400 p-6 font-mono text-green-400 text-lg shadow-2xl z-[9999]">
          <p className="mb-4">{showDistrictPrompt}</p>
          <div className="flex justify-end gap-4">
            <button onClick={() => handleChangeDistrict(targetDistrict)} className="ascii-arrow">Confirm</button>
            <button onClick={() => { setShowDistrictPrompt(null); setTargetDistrict(null);}} className="ascii-arrow">Cancel</button>
          </div>
        </motion.div>
      )}

      {showLoreArchive && !architectComment && (
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="absolute top-12 left-1/2 transform -translate-x-1/2 w-[80%] max-w-2xl h-[70vh] bg-black text-green-400 font-mono p-6 border-2 border-green-500 z-[9999] overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl">📁 Memory Archive</h2>
            <button onClick={() => setShowLoreArchive(false)} className="text-red-500 hover:text-red-300 text-2xl font-bold">✕</button>
          </div>
          {collectedLoreIds.length > 0 ? (
            <ul>
              {collectedLoreIds.map(id => {
                const tempLore = loreDatabase.find((l: LoreFragment) => l.id === id);
                return (
                  <li key={id} className="mb-2 p-2 border-b border-green-700">
                    <h3 className="text-lg text-yellow-400">{tempLore?.title || id}</h3>
                    <p className="text-sm whitespace-pre-wrap">{tempLore?.text || "Lore text not found."}</p>
                    {tempLore?.architect && <p className="text-xs mt-1">Architect: {tempLore.architect}</p>}
                    {tempLore?.district && <p className="text-xs">District: {tempLore.district}</p>}
                  </li>
                );
              })}
            </ul>
          ) : (
            <p>No memory fragments collected yet.</p>
          )}
        </motion.div>
      )}

      {triggeringBattle && (
        <MatrixRainTransition target="/battle" onTransitionEnd={() => setTriggeringBattle(false)} />
      )}
    </div>
  );
};

// Removed the redundant import of loreDatabase as it's imported at the top now.

export default StoryModeScreen;