import { MazeGridType } from './MazeData'; // Changed MazeMap to MazeGridType

export interface RaycastHit {
  distance: number;
  tileType: string; // Will store the actual character hit, e.g., '#', '.', '~', '*'
  hitCoordinate: { x: number; y: number };
}

const FIELD_OF_VIEW = Math.PI / 3; // 60 degrees
const NUM_RAYS = 60; // Number of rays to cast, effectively the screen width in columns

export function castRays(
  playerX: number,
  playerY: number,
  playerAngle: number, // Radians
  maze: MazeGridType // Changed MazeMap to MazeGridType
): RaycastHit[] {
  const rays: RaycastHit[] = [];
  const angleStep = FIELD_OF_VIEW / NUM_RAYS;
  let currentAngle = playerAngle - FIELD_OF_VIEW / 2;

  for (let i = 0; i < NUM_RAYS; i++) {
    const rayAngle = currentAngle;
    let distanceToWall = 0;
    let hitWall = false;
    const eyeX = Math.sin(rayAngle); // Unit vector for ray direction
    const eyeY = Math.cos(rayAngle);

    let testX = Math.floor(playerX);
    let testY = Math.floor(playerY);

    // DDA Algorithm (Digital Differential Analysis)
    // Calculate step and initial side distances
    const deltaDistX = Math.abs(1 / eyeX);
    const deltaDistY = Math.abs(1 / eyeY);

    let stepX: number;
    let stepY: number;

    let sideDistX: number;
    let sideDistY: number;

    if (eyeX < 0) {
      stepX = -1;
      sideDistX = (playerX - testX) * deltaDistX;
    } else {
      stepX = 1;
      sideDistX = (testX + 1.0 - playerX) * deltaDistX;
    }

    if (eyeY < 0) {
      stepY = -1;
      sideDistY = (playerY - testY) * deltaDistY;
    } else {
      stepY = 1;
      sideDistY = (testY + 1.0 - playerY) * deltaDistY;
    }

    let hitSide = 0; // Was a NS or a EW wall hit?

    while (!hitWall && distanceToWall < 20) { // Max distance
      // Jump to next map square, OR in x-direction, OR in y-direction
      if (sideDistX < sideDistY) {
        sideDistX += deltaDistX;
        testX += stepX;
        hitSide = 0; // EW wall
      } else {
        sideDistY += deltaDistY;
        testY += stepY;
        hitSide = 1; // NS wall
      }

      // Check if ray has hit a wall
      if (testX >= 0 && testX < maze[0].length && testY >= 0 && testY < maze.length) {
        const currentTile = maze[testY][testX];
        // Consider any non-'.' tile as something that obstructs view for basic raycasting distance.
        // Specific rendering of non-'#' tiles will be handled by AsciiRenderer.
        if (currentTile !== '.') {
          hitWall = true;
        }
      } else {
        // Hit out of bounds, treat as a wall for raycasting purposes
        hitWall = true;
        break;
      }
    }

    if (hitWall) {
      if (hitSide === 0) {
        distanceToWall = (testX - playerX + (1 - stepX) / 2) / eyeX;
      } else {
        distanceToWall = (testY - playerY + (1 - stepY) / 2) / eyeY;
      }
      // Correct for fisheye effect
      distanceToWall *= Math.cos(playerAngle - rayAngle);
      
      // Get the actual tile character hit
      let actualTileHit = '#'; // Default to wall if out of bounds or unexpected
      if (testX >= 0 && testX < maze[0].length && testY >= 0 && testY < maze.length) {
        actualTileHit = maze[testY][testX];
      }
      
      rays.push({ distance: distanceToWall, tileType: actualTileHit, hitCoordinate: { x: testX, y: testY } });
    } else {
      // If no wall is hit within max distance, it's open space.
      rays.push({ distance: Infinity, tileType: '.', hitCoordinate: { x: -1, y: -1 } });
    }
    currentAngle += angleStep;
  }
  return rays;
}