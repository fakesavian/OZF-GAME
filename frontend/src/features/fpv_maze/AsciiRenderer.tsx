import React from 'react';
import { RaycastHit } from './Raycaster';

interface AsciiRendererProps {
  raycastData: RaycastHit[];
  screenWidth: number;
  screenHeight: number;
}

const getWallCharacter = (distance: number, tileType: string): string => {
  // If the ray hits a fog tile, always render it as fog, regardless of distance (unless it's very far)
  if (tileType === '~') {
    if (distance < 5) return '~'; // Fog is visible up to a certain distance
    return ' '; // Beyond that, it's just empty space
  }
  
  // For other tile types, use distance-based characters
  if (tileType === '#') { // Standard wall
    if (distance < 1) return '█';
    if (distance < 2) return '#';
    if (distance < 3) return '+';
    if (distance < 4) return '.';
    return ' ';
  }
  
  // For special interactable tiles like '*', '@', '>', '!', etc.
  // Render them if they are close enough, otherwise they are part of the "floor" or "ceiling"
  // or just appear as their character if very close.
  if (tileType !== '.' && distance < 0.8) { // Very close, show actual character
      return tileType;
  }


  // Default for very far objects or unhandled special tiles at distance
  return ' '; // Open space or very far
};

const AsciiRenderer: React.FC<AsciiRendererProps> = ({ raycastData, screenWidth, screenHeight }) => {
  const screenBuffer: string[][] = Array(screenHeight)
    .fill(null)
    .map(() => Array(screenWidth).fill(' '));

  raycastData.forEach((hit, columnIndex) => {
    if (columnIndex >= screenWidth) return;

    // Use hit.tileType to determine character
    const wallChar = getWallCharacter(hit.distance, hit.tileType);

    if (hit.distance === Infinity || (wallChar === ' ' && hit.tileType === '.')) { // Treat actual empty space or very far walls as floor/ceiling
      for (let y = 0; y < screenHeight / 2; y++) {
        screenBuffer[y][columnIndex] = '-'; // Ceiling
      }
      for (let y = Math.ceil(screenHeight / 2); y < screenHeight; y++) {
        screenBuffer[y][columnIndex] = '.'; // Floor
      }
      return;
    }
    
    // Calculate wall height based on distance
    const perceivedWallHeight = screenHeight / (hit.distance + 0.001);
    let wallTop = Math.max(0, Math.floor(screenHeight / 2 - perceivedWallHeight / 2));
    let wallBottom = Math.min(screenHeight - 1, Math.floor(screenHeight / 2 + perceivedWallHeight / 2));

    // Draw ceiling
    for (let y = 0; y < wallTop; y++) {
      screenBuffer[y][columnIndex] = '-';
    }

    // Draw wall or special tile character
    for (let y = wallTop; y <= wallBottom; y++) {
      // If it's a special tile and close enough, it might have its own character from getWallCharacter
      // Otherwise, for walls ('#') or fog ('~'), it uses the determined wallChar.
      screenBuffer[y][columnIndex] = wallChar;
    }

    // Draw floor
    for (let y = wallBottom + 1; y < screenHeight; y++) {
      screenBuffer[y][columnIndex] = '.';
    }
  });

  return (
    <div
      style={{
        fontFamily: '"Courier New", Courier, monospace',
        whiteSpace: 'pre',
        lineHeight: '1',
        backgroundColor: '#000000',
        color: '#00FF00', // CRT green
        padding: '10px',
        border: '2px solid #00FF00',
        display: 'inline-block',
      }}
    >
      {screenBuffer.map((row, rowIndex) => (
        <div key={rowIndex}>{row.join('')}</div>
      ))}
    </div>
  );
};

export default AsciiRenderer;