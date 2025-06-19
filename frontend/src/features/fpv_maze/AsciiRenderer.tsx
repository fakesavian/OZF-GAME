import React from 'react';
import { RaycastHit } from './Raycaster';

interface AsciiRendererProps {
  raycastData: RaycastHit[];
  screenWidth: number;
  screenHeight: number;
frame: number;
}

// Simplified getWallCharacter for Step 2-B: '█' for walls, '·' for floor.
// Simplified getWallCharacter for Step 2-B: '█' for walls, '·' for floor.
// Now expects tileType to be 'wall' or 'floor'.
const getWallCharacter = (distance: number, tileType: 'wall' | 'floor'): string => {
  if (tileType === 'wall') {
    return '█';
  }
  // tileType === 'floor' or distance === Infinity (though Raycaster now sets tileType to 'floor' for Infinity)
  return '·';
};
const shade = (dist: number): string => {
  if     (dist < 3)  return '█';   // very near
  else if(dist < 7)  return '▓';
  else if(dist < 12) return '▒';
  else if(dist < 18) return '·';   // far
  return ' ';                      // void
};

// getCharStyle updated to primarily use 'wall' or 'floor' from RaycastHit.tileType
// The second parameter tileTypeFromRay is now 'wall' | 'floor'.
// If we need to style based on original map characters for special floor tiles,
// RaycastHit would need to carry that original character, or AsciiRenderer needs access to the raw map.
// For now, this simplification aligns with the glyph swap and 'wall'/'floor' grid.
const getCharStyle = (charToRender: string, tileTypeFromRay: 'wall' | 'floor') => {
  if (charToRender === '█') { // Wall character
    return 'text-green-500'; // Style for 'wall'
  }
  if (charToRender === '▓') { // Shaded wall
    return 'text-green-400';
  }
  if (charToRender === '▒') { // Shaded wall
    return 'text-green-300';
  }
  if (charToRender === '·') { // Floor character or far wall
    return 'text-green-200'; // Style for 'floor' / far
  }
  if (charToRender === ' ') { // Void or very far
    return 'text-gray-900 text-opacity-0'; // Effectively transparent
  }
  if (charToRender === '-') { // Ceiling character
    return 'text-gray-600';
  }
  // Fallback, though ideally all paths are covered.
  // If tileTypeFromRay was richer (e.g. original char), we could use it here.
  return 'text-green-400'; // Default fallback
};

const AsciiRenderer: React.FC<AsciiRendererProps> = ({ raycastData, screenWidth, screenHeight, frame }) => {
  const screenBuffer: { char: string; style: string }[][] = Array(screenHeight)
    .fill(null)
    .map(() => Array(screenWidth).fill({ char: '·', style: getCharStyle('·', 'floor') })); // Default to floor

  raycastData.forEach((hit, columnIndex) => {
    if (columnIndex >= screenWidth) return;

    // Determine character based on hit.tileType from Raycaster
    const charToRender = hit.tileType === 'wall' ? '█' : '·';
    
    // Get style based on the character to render and the tileType from the raycast
    const charStyle = getCharStyle(charToRender, hit.tileType);
    const ceilingStyle = getCharStyle('-', 'floor'); // Ceiling is always '-', provide valid tileType

    if (hit.distance === Infinity) { // No wall hit, draw ceiling and floor
      for (let y = 0; y < screenHeight / 2; y++) {
        screenBuffer[y][columnIndex] = { char: '-', style: ceilingStyle };
      }
      for (let y = Math.ceil(screenHeight / 2); y < screenHeight; y++) {
        // Use '·' for floor as per new glyph requirement
        screenBuffer[y][columnIndex] = { char: '·', style: getCharStyle('·', 'floor') };
      }
      return;
    }
    
    const perceivedWallHeight = screenHeight / (hit.distance + 0.001); // Add epsilon to avoid division by zero
    let wallTop = Math.max(0, Math.floor(screenHeight / 2 - perceivedWallHeight / 2));
    let wallBottom = Math.min(screenHeight - 1, Math.floor(screenHeight / 2 + perceivedWallHeight / 2));

    for (let y = 0; y < wallTop; y++) { // Ceiling
      screenBuffer[y][columnIndex] = { char: '-', style: ceilingStyle };
    }

    for (let y = wallTop; y <= wallBottom; y++) { // Wall
      // Render '█' for walls, use its style.
const wallChar = shade(hit.distance);
      screenBuffer[y][columnIndex] = { char: wallChar, style: getCharStyle(wallChar, 'wall') };
    }

    for (let y = wallBottom + 1; y < screenHeight; y++) { // Floor
      screenBuffer[y][columnIndex] = { char: '·', style: getCharStyle('·', 'floor') };
    }
  });
// Add crosshair
  if (frame % 2 === 0) {
    const midX = Math.floor(screenWidth / 2);
    for (let y = 0; y < screenHeight; y++) {
      if (screenBuffer[y] && screenBuffer[y][midX]) {
        screenBuffer[y][midX] = { char: '│', style: 'text-green-400' };
      }
    }
  }

  return (
    <div
      className="ascii-canvas" // Apply the new CSS class
      // Inline styles for font, whitespace, line-height, bg, padding, border are now in .ascii-canvas
      // Keeping display: 'inline-block' here if it's specifically needed for layout around this component
      style={{ display: 'inline-block' }}
    >
      {screenBuffer.map((row, rowIndex) => (
        <div key={rowIndex}>
          {row.map((cell, cellIndex) => (
            <span key={cellIndex} className={`font-mono ${cell.style}`}>{cell.char}</span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default AsciiRenderer;