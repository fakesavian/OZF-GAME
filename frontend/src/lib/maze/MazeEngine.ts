import { MazeGridType, CellType } from '../../features/fpv_maze/MazeData';
import { RaycastHit, castRays as externalCastRays } from '../../features/fpv_maze/Raycaster';

// Helper function to find the first walkable cell
function findFirstWalkableCell(grid: MazeGridType): { x: number; y: number } | null {
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      if (grid[r][c] === 'floor') {
        return { x: c + 0.5, y: r + 0.5 }; // Center of the cell
      }
    }
  }
  return null; // Should not happen with valid maps
}

// Helper function to pick an open facing direction
function pickOpenFacing(spawn: { x: number; y: number }, grid: MazeGridType): number {
  const directions = [
    { angle: 0, dx: 0, dy: -1 }, // North (cos(0) = 1 for Y in your system, but map is Y,X) -> (0, -1) for grid check
    { angle: Math.PI / 2, dx: 1, dy: 0 }, // East  (sin(PI/2) = 1 for X) -> (1, 0)
    { angle: Math.PI, dx: 0, dy: 1 },     // South (cos(PI) = -1 for Y) -> (0, 1)
    { angle: 3 * Math.PI / 2, dx: -1, dy: 0 } // West (sin(3PI/2) = -1 for X) -> (-1,0)
  ];

  const startGridX = Math.floor(spawn.x);
  const startGridY = Math.floor(spawn.y);

  for (const dir of directions) {
    const checkX = startGridX + dir.dx;
    const checkY = startGridY + dir.dy;

    if (
      checkY >= 0 && checkY < grid.length &&
      checkX >= 0 && checkX < grid[checkY].length &&
      grid[checkY][checkX] === 'floor'
    ) {
      return dir.angle;
    }
  }
  return Math.PI / 2; // Default to East if somehow trapped (should not happen)
}


// Define a simple event listener type for the engine
type MazeEngineListener = (event: string, data?: any) => void;

export class MazeEngine {
  readonly grid: MazeGridType;
  public pose: { x: number; y: number; a: number }; // angle in radians
  private moveSpeed: number = 0.1; // Default move speed
  private turnSpeed: number = Math.PI / 30; // Default turn speed

  private listeners: Map<string, MazeEngineListener[]> = new Map();

  constructor(mapGrid: MazeGridType, initialX?: number, initialY?: number, initialAngle?: number) {
    this.grid = mapGrid;

    let startX: number, startY: number, startAngle: number;

    if (initialX !== undefined && initialY !== undefined && initialAngle !== undefined) {
        // If explicit start pose is provided, use it (e.g. for loading saved game)
        startX = initialX;
        startY = initialY;
        startAngle = initialAngle;
         // Still good to check if this provided start is valid
        const currentTile = this.getTileAt(startX, startY);
        if (currentTile !== 'floor') {
            console.warn(`Provided initial position (${startX}, ${startY}) is a wall. Attempting to find a walkable fallback.`);
            const fallbackSpawn = findFirstWalkableCell(this.grid) || { x: 1.5, y: 1.5 };
            startX = fallbackSpawn.x;
            startY = fallbackSpawn.y;
            startAngle = pickOpenFacing(fallbackSpawn, this.grid);
        } else {
            // If spawn is valid, ensure angle faces a corridor
            const checkTileAhead = (angle: number): CellType | undefined => {
              const checkX = Math.floor(startX + Math.sin(angle) * 0.5);
              const checkY = Math.floor(startY + Math.cos(angle) * 0.5);
              return this.getTileAt(checkX, checkY);
            };
            if (checkTileAhead(startAngle) === 'wall') {
                startAngle = pickOpenFacing({x: startX, y: startY}, this.grid);
            }
        }

    } else {
        // Default behavior: find the first walkable cell and a good angle
        const spawnPoint = findFirstWalkableCell(this.grid);
        if (spawnPoint) {
          startX = spawnPoint.x;
          startY = spawnPoint.y;
          startAngle = pickOpenFacing(spawnPoint, this.grid);
        } else {
          // Fallback if map has no walkable cells (should be handled by map validation ideally)
          console.error("MazeEngine: No walkable cells found in the provided map. Defaulting to (1.5, 1.5).");
          startX = 1.5;
          startY = 1.5;
          startAngle = Math.PI / 2;
        }
    }
    this.pose = { x: startX, y: startY, a: startAngle };
  }

  // Method to subscribe to engine events
  addEventListener(eventName: string, listener: MazeEngineListener): void {
    if (!this.listeners.has(eventName)) {
      this.listeners.set(eventName, []);
    }
    this.listeners.get(eventName)?.push(listener);
  }

  // Method to unsubscribe from engine events
  removeEventListener(eventName: string, listener: MazeEngineListener): void {
    const eventListeners = this.listeners.get(eventName);
    if (eventListeners) {
      const index = eventListeners.indexOf(listener);
      if (index > -1) {
        eventListeners.splice(index, 1);
      }
    }
  }

  // Method to dispatch events
  protected dispatchEvent(eventName: string, data?: any): void {
    const eventListeners = this.listeners.get(eventName);
    if (eventListeners) {
      eventListeners.forEach(listener => listener(eventName, data));
    }
  }

  setSpeeds(moveSpeed: number, turnSpeed: number): void {
    this.moveSpeed = moveSpeed;
    this.turnSpeed = turnSpeed;
  }

  move(dir: 'f' | 'b'): boolean {
    const currentX = this.pose.x;
    const currentY = this.pose.y;
    let newX = currentX;
    let newY = currentY;

    if (dir === 'f') {
      newX += Math.sin(this.pose.a) * this.moveSpeed;
      newY += Math.cos(this.pose.a) * this.moveSpeed;
    } else { // dir === 'b'
      newX -= Math.sin(this.pose.a) * this.moveSpeed;
      newY -= Math.cos(this.pose.a) * this.moveSpeed;
    }

    const gridX = Math.floor(newX);
    const gridY = Math.floor(newY);

    // Collision detection (basic wall '#', allow ' ')
    // This will be expanded for special tiles like '*', '!', '>' by checking a raw map if needed.
    // For collision, we only care about 'wall'.
    if (
      gridY < 0 || gridY >= this.grid.length ||
      gridX < 0 || gridX >= this.grid[gridY].length ||
      this.grid[gridY][gridX] === 'wall' // Updated collision check
    ) {
      this.dispatchEvent('collision');
      return false; // Collision
    }

    this.pose.x = newX;
    this.pose.y = newY;
    this.dispatchEvent('posechanged', { ...this.pose });
    return true; // Success
  }

  turn(dir: 'l' | 'r'): void {
    if (dir === 'l') {
      this.pose.a -= this.turnSpeed;
    } else { // dir === 'r'
      this.pose.a += this.turnSpeed;
    }
    // Normalize angle to be within 0 and 2*PI
    this.pose.a = (this.pose.a % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI);
    this.dispatchEvent('posechanged', { ...this.pose });
  }

  castRays(): RaycastHit[] {
    // Use the imported raycasting function
    return externalCastRays(this.pose.x, this.pose.y, this.pose.a, this.grid);
  }

  getTileAt(x: number, y: number): CellType | undefined {
    const gridX = Math.floor(x);
    const gridY = Math.floor(y);
    if (gridY >= 0 && gridY < this.grid.length && gridX >= 0 && gridX < this.grid[gridY].length) {
      return this.grid[gridY][gridX];
    }
    return undefined;
  }

  // Method to update player pose directly, e.g. for initialization or teleportation
  setPose(x: number, y: number, a: number): void {
    this.pose = { x, y, a };
    this.dispatchEvent('posechanged', { ...this.pose });
  }
}