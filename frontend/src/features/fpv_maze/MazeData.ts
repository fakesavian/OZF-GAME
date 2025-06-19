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

// Cache for memoizing parsed maps
const parsedMapsCache = new Map<string, MazeGridType>();

/**
 * Represents the maze grid as a 2D array of cell types.
 * Each inner array is a row, and each cell is either 'wall' or 'floor'.
 */
export type CellType = 'wall' | 'floor';
export type MazeGridType = CellType[][];


/**
 * Defines the starting position and angle (as 'a') for each district.
 */
export const DISTRICT_START_POSITIONS: Record<string, { x: number; y: number; a: number }> = {
  district0: { x: 1.5, y: 1.5, a: Math.PI / 2 }, // Facing East
  district1: { x: 1.5, y: 1.5, a: Math.PI / 2 }, // Default, adjust per district1.txt needs
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
 * Loads and parses the raw map string into a 2D grid of CellType ('wall' | 'floor').
 * - Removes '\r' characters.
 * - Splits into rows.
 * - Calculates max width among all rows.
 * - For each row, pads to max width with spaces.
 * - Converts characters: '#' to 'wall', ' ' and others to 'floor'.
 * - Memoizes the parsed grid.
 * @param districtId The identifier for the district.
 * @returns A MazeGridType (CellType[][]) representing the parsed map.
 */
export function loadMap(districtId: string): MazeGridType {
  if (parsedMapsCache.has(districtId)) {
    return parsedMapsCache.get(districtId)!;
  }

  const rawText = loadRawMapString(districtId);
  const rows = rawText.replace(/\r/g, '').split('\n');
  
  const width = rows.length > 0 ? Math.max(...rows.map(r => r.length)) : 0;

  const parsedGrid: MazeGridType = rows.map(row => {
    const paddedRow = row.padEnd(width, ' '); // Pad with spaces
    return [...paddedRow].map(symbol => {
      if (symbol === '#') return 'wall';
      // Treat spaces and any other character ('.', 'S', etc.) as floor
      return 'floor';
    });
  });
  
  // Filter out completely empty rows that might result from excessive newlines in raw file
  // or if all rows became empty after processing (though unlikely with current logic)
  const finalGrid = parsedGrid.filter(row => row.length > 0 && row.some(cell => cell === 'wall' || cell === 'floor'));

  if (finalGrid.length === 0) {
    if (rows.length > 0) {
      console.warn(`Map ${districtId} (parsed as CellType[][]) resulted in an empty grid after processing. Original had ${rows.length} lines. Check map content.`);
    } else {
      console.warn(`Map ${districtId} (parsed as CellType[][]) was empty or contained no processable lines.`);
    }
    const fallbackGrid: MazeGridType = [['wall']]; // Fallback with a single wall cell
    parsedMapsCache.set(districtId, fallbackGrid);
    return fallbackGrid;
  }
  
  parsedMapsCache.set(districtId, finalGrid);
  return finalGrid;
}

/**
 * Loads and parses the raw map string into a 2D grid of original characters (string[][]).
 * This is used for detecting special tiles for game events, distinct from the
 * collision/render grid provided by `loadMap`.
 * - Removes '\r' characters.
 * - Splits into rows.
 * - Calculates max width among all rows.
 * - For each row, pads to max width with spaces to ensure consistent row lengths.
 * - Preserves original characters.
 * @param districtId The identifier for the district.
 * @returns A string[][] representing the raw character map.
 */
export function loadRawCharacterMap(districtId: string): string[][] {
  // This map type doesn't need complex caching like the CellType one,
  // but could be cached if performance becomes an issue.
  const rawText = loadRawMapString(districtId);
  const rows = rawText.replace(/\r/g, '').split('\n');
  
  const width = rows.length > 0 ? Math.max(...rows.map(r => r.length)) : 0;

  const characterMap: string[][] = rows.map(row => {
     const paddedRow = row.padEnd(width, ' '); // Pad with spaces
     return [...paddedRow]; // Split into characters
  });
  
  // Filter out completely empty rows
  const finalCharMap = characterMap.filter(row => row.length > 0);

  if (finalCharMap.length === 0) {
    console.warn(`Raw character map for ${districtId} resulted in an empty grid. Check map content.`);
    return [['#']]; // Fallback with a single wall character
  }
  
  return finalCharMap;
}

// Note: The old hardcoded maze constants (initialMaze, activeMaze, etc.) are removed.
// The game should now dynamically load maps using `loadMap('districtIdentifier')`.