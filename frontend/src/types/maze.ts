// Defines the possible input actions for maze controls
export type InputKey = 
  | 'forward' 
  | 'backward' 
  | 'turnLeft' 
  | 'turnRight' 
  | 'strafeLeft' // Optional: if you plan to add strafing
  | 'strafeRight' // Optional: if you plan to add strafing
  | 'exit'; // For exiting the maze or a menu

// You can expand this with other actions like 'interact', 'map', etc.