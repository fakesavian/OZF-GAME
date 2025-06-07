// It's common to need a way to import text files as strings.
// For Vite, you can use '?raw' suffix: import myText from './myFile.txt?raw';
// For other bundlers or TypeScript setup, you might need a custom.d.ts file:
// Create a file (e.g., src/custom.d.ts or vite-env.d.ts) with:
// declare module '*.txt' {
//   const content: string;
//   export default content;
// }
import district0Raw from './maps/district0.txt?raw';
import district1Raw from './maps/district1.txt?raw';

/**
 * Represents the maze grid as a 2D array of characters.
 * Each inner array is a row, and each character is a cell.
 */
export type MazeGridType = string[][];

/**
 * Defines the starting position and angle for each district.
 */
export const DISTRICT_START_POSITIONS: Record<string, { x: number; y: number; angle: number }> = {
  district0: { x: 1.5, y: 1.5, angle: Math.PI / 2 }, // Facing East
  district1: { x: 1.5, y: 1.5, angle: Math.PI / 2 }, // Default, adjust per district1.txt needs
  // Add more start positions as new districts are added
};

/**
 * Loads the raw string content of a map file for a given district.
 * @param districtId The identifier for the district (e.g., 'district0').
 * @returns The raw string content of the map.
 */
function loadRawMapString(districtId: string): string {
  switch (districtId) {
    case 'district0':
      return district0Raw;
    case 'district1':
      return district1Raw;
    // Add more cases for new districts
    default:
      console.warn(`Map for district "${districtId}" not found. Defaulting to district0.`);
      return district0Raw; // Fallback to a default map
  }
}

/**
 * Parses a raw map string (lines of characters) into a 2D grid.
 * Also replaces 'S' (start markers) with '.' (empty space).
 * @param rawMapText The raw string content of the map.
 * @returns A MazeGridType (string[][]) representing the parsed map.
 */
export function loadMap(districtId: string): MazeGridType {
  const rawMapText = loadRawMapString(districtId);
  // Replace 'S' with '.' for starting positions before parsing,
  // and '>' for gateways, '@' for architect comments if they should be walkable.
  // For now, let's assume '>', '@' are special tiles checked by game logic, not walls.
  const processedMapText = rawMapText.replace(/S/g, '.'); 
  
  return processedMapText
    .trim()
    .split('\n')
    .map(line => line.split(''));
}

// Note: The old hardcoded maze constants (initialMaze, activeMaze, etc.) are removed.
// The game should now dynamically load maps using `loadMap('districtIdentifier')`.