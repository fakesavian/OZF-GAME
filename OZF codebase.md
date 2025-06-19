├── .gitignore
├── Character Classes and Themes.md
├── Game Concept and Monetization Plan -  20250111.md
├── Game Concept and Monetization Plan Mind Map.png
├── Game MVP Flow.md
├── OZF codebase.md
├── OZF.UNI_ The Lawless Lands DRAFT _ EXTERNAL .md
├── OneZeroFour_ The Core.docx
├── README.md
├── UI_Design_Plan.md
├── backend
    ├── ozf_cli_simulator.ts
    ├── package-lock.json
    ├── package.json
    ├── src
    │   ├── abilities
    │   │   ├── acid_spit.json
    │   │   ├── mage.json
    │   │   ├── mage_fireball.json
    │   │   ├── warrior.json
    │   │   └── warrior_slash.json
    │   ├── api
    │   │   ├── match.ts
    │   │   └── turn.ts
    │   ├── db.ts
    │   ├── match_engine
    │   │   ├── abilities
    │   │   │   ├── index.ts
    │   │   │   ├── mage.json
    │   │   │   └── warrior.json
    │   │   ├── bot_ai.ts
    │   │   ├── bot_ai
    │   │   │   ├── aggressive_bot.ts
    │   │   │   ├── defensive_bot.ts
    │   │   │   ├── index.ts
    │   │   │   ├── random_bot.ts
    │   │   │   └── tactical_bot.ts
    │   │   ├── combat_log.ts
    │   │   ├── cooldown_logic.test.ts
    │   │   ├── effect_runner.ts
    │   │   ├── index.ts
    │   │   ├── resolver.test.ts
    │   │   ├── resolver.ts
    │   │   ├── state.ts
    │   │   ├── status_manager.test.ts
    │   │   ├── status_manager.ts
    │   │   ├── types.ts
    │   │   ├── validator.ts
    │   │   ├── victory_checker.test.ts
    │   │   └── victory_checker.ts
    │   ├── server.ts
    │   ├── types
    │   │   └── db.ts
    │   └── utils
    │   │   ├── abilityLoader.ts
    │   │   └── matchStateStore.ts
    └── tsconfig.json
├── combat_improvement_plan.md
├── frontend
    ├── .gitignore
    ├── Character Classes and Themes.md
    ├── Game Concept and Monetization Plan -  20250111.md
    ├── Game Concept and Monetization Plan Mind Map.png
    ├── Game MVP Flow.md
    ├── OZF.UNI_ The Lawless Lands DRAFT _ EXTERNAL .md
    ├── README.md
    ├── UI_Design_Plan.md
    ├── backend
    │   ├── ozf_cli_simulator.ts
    │   ├── package-lock.json
    │   ├── package.json
    │   ├── src
    │   │   ├── abilities
    │   │   │   ├── mage.json
    │   │   │   ├── mage_fireball.json
    │   │   │   ├── warrior.json
    │   │   │   └── warrior_slash.json
    │   │   ├── api
    │   │   │   ├── match.ts
    │   │   │   └── turn.ts
    │   │   ├── db.ts
    │   │   ├── match_engine
    │   │   │   ├── abilities
    │   │   │   │   ├── index.ts
    │   │   │   │   ├── mage.json
    │   │   │   │   └── warrior.json
    │   │   │   ├── bot_ai.ts
    │   │   │   ├── bot_ai
    │   │   │   │   ├── aggressive_bot.ts
    │   │   │   │   ├── defensive_bot.ts
    │   │   │   │   ├── index.ts
    │   │   │   │   ├── random_bot.ts
    │   │   │   │   └── tactical_bot.ts
    │   │   │   ├── combat_log.ts
    │   │   │   ├── effect_runner.ts
    │   │   │   ├── index.ts
    │   │   │   ├── resolver.ts
    │   │   │   ├── state.ts
    │   │   │   ├── status_manager.ts
    │   │   │   ├── types.ts
    │   │   │   ├── validator.ts
    │   │   │   └── victory_checker.ts
    │   │   ├── server.ts
    │   │   ├── types
    │   │   │   └── db.ts
    │   │   └── utils
    │   │   │   ├── abilityLoader.ts
    │   │   │   └── matchStateStore.ts
    │   └── tsconfig.json
    ├── frontend@0.1.0
    ├── game_mvp_schema.sql
    ├── game_system_diagram.svg
    ├── match_resolution_engine_architecture.md
    ├── ozf_backend_checklist_resynced.md
    ├── ozf_cli_simulator.ts
    ├── package-lock.json
    ├── package.json
    ├── plan.md
    ├── postcss.config.js
    ├── public
    │   ├── assets
    │   │   └── images
    │   │   │   ├── character-default.png
    │   │   │   └── enemy-default.png
    │   ├── favicon.ico
    │   ├── index.html
    │   ├── logo192.png
    │   ├── logo512.png
    │   ├── manifest.json
    │   └── robots.txt
    ├── react-scripts
    ├── src
    │   ├── App.css
    │   ├── App.test.tsx
    │   ├── App.tsx
    │   ├── components
    │   │   ├── Button.tsx
    │   │   ├── CombatLog.tsx
    │   │   ├── DamageNumber.tsx
    │   │   ├── GlitchText.tsx
    │   │   ├── HealthBar.tsx
    │   │   ├── PhoneFrame.tsx
    │   │   ├── ScanlineOverlay.tsx
    │   │   ├── TypewriterText.tsx
    │   │   └── ui
    │   │   │   └── button.tsx
    │   ├── context
    │   │   └── ScreenLoaderContext.tsx
    │   ├── features
    │   │   └── fpv_maze
    │   │   │   ├── AsciiRenderer.tsx
    │   │   │   ├── LoreEvents.ts
    │   │   │   ├── MazeData.ts
    │   │   │   ├── MazeFPV.tsx
    │   │   │   ├── Raycaster.ts
    │   │   │   ├── components
    │   │   │       ├── LorePopup.tsx
    │   │   │       ├── MatrixRainTransition.tsx
    │   │   │       └── matrixRain.css
    │   │   │   ├── maps
    │   │   │       ├── district0.txt
    │   │   │       └── district1.txt
    │   │   │   └── useMazeControls.ts
    │   ├── index.css
    │   ├── index.tsx
    │   ├── logo.svg
    │   ├── react-app-env.d.ts
    │   ├── reportWebVitals.ts
    │   ├── screens
    │   │   ├── BattleScreen.tsx
    │   │   ├── BootSequence.tsx
    │   │   ├── CharacterScreen.tsx
    │   │   ├── EndBattleScreen.tsx
    │   │   ├── FPVMazeScreen.tsx
    │   │   ├── InventoryScreen.tsx
    │   │   ├── LoginScreen.tsx
    │   │   ├── MainMenu.tsx
    │   │   ├── SettingsScreen.tsx
    │   │   ├── SplashScreen.tsx
    │   │   └── StoryMode.tsx
    │   ├── setupTests.ts
    │   ├── views
    │   │   ├── BattleScreen.tsx
    │   │   ├── MainMenu.tsx
    │   │   └── SplashScreen.tsx
    │   └── vite-env.d.ts
    ├── tailwind.config.js
    └── tsconfig.json
├── game_mvp_schema.sql
├── game_system_diagram.svg
├── match_resolution_engine_architecture.md
├── ozf_backend_checklist_resynced.md
├── ozf_cli_simulator.ts
├── package-lock.json
├── package.json
├── plan.md
├── postcss.config.js
├── public
    ├── assets
    │   └── images
    │   │   ├── character-default.png
    │   │   └── enemy-default.png
    ├── favicon.ico
    ├── index.html
    ├── logo192.png
    ├── logo512.png
    ├── manifest.json
    └── robots.txt
├── src
    ├── App.css
    ├── App.test.tsx
    ├── App.tsx
    ├── ItemEffectRunner.ts
    ├── components
    │   ├── AbilityAnnouncement.tsx
    │   ├── AttackEffect.tsx
    │   ├── Button.tsx
    │   ├── CombatLog.tsx
    │   ├── GlitchText.tsx
    │   ├── HealthBar.tsx
    │   ├── PhoneFrame.tsx
    │   ├── ScanlineOverlay.tsx
    │   └── ui
    │   │   └── button.tsx
    ├── context
    │   ├── PlayerContext.tsx
    │   └── ScreenLoaderContext.tsx
    ├── index.css
    ├── index.tsx
    ├── logo.svg
    ├── react-app-env.d.ts
    ├── reportWebVitals.ts
    ├── screens
    │   ├── BattleScreen.tsx
    │   ├── BootSequence.tsx
    │   ├── CharacterScreen.tsx
    │   ├── EndBattleScreen.tsx
    │   ├── InventoryScreen.tsx
    │   ├── LoginScreen.tsx
    │   ├── MainMenu.tsx
    │   ├── SettingsScreen.tsx
    │   └── SplashScreen.tsx
    ├── setupTests.ts
    └── types
    │   └── statusEffects.ts
├── tailwind.config.js
├── tsconfig.json
└── vitest.config.ts


/.gitignore:
--------------------------------------------------------------------------------
 1 | # See https://help.github.com/articles/ignoring-files/ for more about ignoring files.
 2 | 
 3 | # dependencies
 4 | /node_modules
 5 | /.pnp
 6 | .pnp.js
 7 | 
 8 | # testing
 9 | /coverage
10 | 
11 | # production
12 | /build
13 | 
14 | # misc
15 | .DS_Store
16 | .env.local
17 | .env.development.local
18 | .env.test.local
19 | .env.production.local
20 | .env
21 | dist/
22 | node_modules/
23 | 
24 | npm-debug.log*
25 | yarn-debug.log*
26 | yarn-error.log*
27 | 


--------------------------------------------------------------------------------
/Game Concept and Monetization Plan Mind Map.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/fakesavian/OZF-GAME/5f653fee8e26ce1f9bfef2b98ac6ad1ad13107b7/Game Concept and Monetization Plan Mind Map.png


--------------------------------------------------------------------------------
/OneZeroFour_ The Core.docx:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/fakesavian/OZF-GAME/5f653fee8e26ce1f9bfef2b98ac6ad1ad13107b7/OneZeroFour_ The Core.docx


--------------------------------------------------------------------------------
/README.md:
--------------------------------------------------------------------------------
 1 | # OZF: The Lawless Lands
 2 | 
 3 | OZF is an RPG prototype featuring browser-based, turn-based combat. The project is split into two parts:
 4 | 
 5 | - **Front-end** – A React + TypeScript client located at the project root.
 6 | - **Back-end** – An Express and WebSocket server inside the `backend/` folder.
 7 | 
 8 | ## Requirements
 9 | 
10 | - Node.js 18 or later
11 | - npm
12 | 
13 | ## Front-end Setup
14 | 
15 | ```bash
16 | # install dependencies
17 | npm install
18 | 
19 | # start the development server
20 | npm start
21 | ```
22 | 
23 | Build a production bundle with:
24 | 
25 | ```bash
26 | npm run build
27 | ```
28 | 
29 | Run the front-end unit tests using [Vitest](https://vitest.dev/):
30 | 
31 | ```bash
32 | npm test
33 | ```
34 | 
35 | Available root scripts can be listed with `npm run`, but the main ones are:
36 | 
37 | - `npm start` – start the React dev server
38 | - `npm run build` – create a production build
39 | - `npm test` / `npm run test:frontend` – run Vitest
40 | - `npm run eject` – eject Create React App (not reversible)
41 | 
42 | ## Back-end Setup
43 | 
44 | ```bash
45 | cd backend
46 | 
47 | # install dependencies
48 | npm install
49 | 
50 | # start the TypeScript server in watch mode
51 | npm run dev
52 | ```
53 | 
54 | You can also build and run the compiled server:
55 | 
56 | ```bash
57 | npm run build
58 | npm start
59 | ```
60 | 
61 | To try the command line simulator, run:
62 | 
63 | ```bash
64 | npm run start:cli
65 | ```
66 | 
67 | Current back-end scripts are:
68 | 
69 | - `npm run dev` – run the server with nodemon
70 | - `npm start` – run `ts-node` directly
71 | - `npm run build` – compile TypeScript to `dist`
72 | - `npm test` – (placeholder)
73 | - `npm run start:cli` – start a CLI match simulator
74 | 
75 | ## Running Tests
76 | 
77 | All tests across the project are executed with Vitest. Run them from the project root:
78 | 
79 | ```bash
80 | npm test
81 | ```
82 | 
83 | Vitest will watch for changes and report results for both the front-end and back-end test files.
84 | 
85 | 


--------------------------------------------------------------------------------
/backend/ozf_cli_simulator.ts:
--------------------------------------------------------------------------------
 1 | import readline from 'readline';
 2 | import fetch from 'node-fetch';
 3 | 
 4 | const rl = readline.createInterface({
 5 |   input: process.stdin,
 6 |   output: process.stdout
 7 | });
 8 | 
 9 | let matchId: string = '';
10 | let playerId = 'testPlayer';
11 | 
12 | async function startMatch() {
13 |   const res = await fetch('http://localhost:3000/api/match/start', {
14 |     method: 'POST',
15 |     headers: { 'Content-Type': 'application/json' },
16 |     body: JSON.stringify({ playerAId: playerId })
17 |   });
18 |   const data = await res.json();
19 |   matchId = data.id;
20 |   console.log(`Match started. ID: ${matchId}`);
21 |   playTurn();
22 | }
23 | 
24 | async function playTurn() {
25 |   rl.question('Choose ability (e.g. cleave, shield_wall): ', async (abilityId) => {
26 |     const res = await fetch(`http://localhost:3000/api/match/${matchId}/turn`, {
27 |       method: 'POST',
28 |       headers: { 'Content-Type': 'application/json' },
29 |       body: JSON.stringify({
30 |         playerId: playerId,
31 |         abilityId: abilityId.trim(),
32 |         targetId: 'BOT'
33 |       })
34 |     });
35 | 
36 |     const data = await res.json();
37 |     console.log('--- Combat Log ---');
38 |     data.combatLog.forEach((line: string) => console.log(line));
39 |     console.log('------------------');
40 | 
41 |     if (data.winner) {
42 |       console.log(`🏆 Match over. Winner: ${data.winner}`);
43 |       rl.close();
44 |     } else {
45 |       playTurn();
46 |     }
47 |   });
48 | }
49 | 
50 | startMatch();


--------------------------------------------------------------------------------
/backend/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "backend",
 3 |   "version": "1.0.0",
 4 |   "main": "index.js",
 5 |   "scripts": {
 6 |     "start": "ts-node src/server.ts",
 7 |     "build": "tsc",
 8 |     "dev": "nodemon src/server.ts",
 9 |     "test": "echo \"Error: no test specified\" && exit 1",
10 |     "start:cli": "ts-node ozf_cli_simulator.ts"
11 |   },
12 |   "keywords": [],
13 |   "author": "",
14 |   "license": "ISC",
15 |   "description": "",
16 |   "dependencies": {
17 |     "cors": "^2.8.5",
18 |     "express": "^5.1.0",
19 |     "node-fetch": "^2.7.0",
20 |     "pg": "^8.16.0",
21 |     "uuid": "^11.1.0",
22 |     "ws": "^8.18.2"
23 |   },
24 |   "devDependencies": {
25 |     "@tailwindcss/postcss": "^4.1.8",
26 |     "@types/cors": "^2.8.18",
27 |     "@types/express": "^5.0.2",
28 |     "@types/node": "^22.0.0",
29 |     "@types/node-fetch": "^2.6.12",
30 |     "@types/pg": "^8.15.2",
31 |     "@types/uuid": "^10.0.0",
32 |     "@types/ws": "^8.18.1",
33 |     "nodemon": "^3.1.10",
34 |     "ts-node": "^10.9.2",
35 |     "typescript": "^5.8.3"
36 |   }
37 | }
38 | 


--------------------------------------------------------------------------------
/backend/src/abilities/acid_spit.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "acid_spit": {
 3 |     "name": "Acid Spit",
 4 |     "energy_cost": 10,
 5 |     "cooldown": 2,
 6 |     "target": "enemy",
 7 |     "effects": [
 8 |       { "type": "poison", "duration": 3, "value": 4 }
 9 |     ]
10 |   }
11 | }
12 | 


--------------------------------------------------------------------------------
/backend/src/abilities/mage.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "mage_fireball": {
 3 |     "name": "Mage Fireball",
 4 |     "energy_cost": 15,
 5 |     "cooldown": 1,
 6 |     "target": "enemy",
 7 |     "effects": [
 8 |       { "type": "damage", "value": 25 }
 9 |     ]
10 |   }
11 | }


--------------------------------------------------------------------------------
/backend/src/abilities/mage_fireball.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "id": "mage_fireball_uuid",
 3 |   "name": "Mage Fireball",
 4 |   "description": "Hurls a ball of fire at the enemy.",
 5 |   "class_id": "mage_class_uuid",
 6 |   "level_unlock": 1,
 7 |   "type": "active",
 8 |   "energy_cost": 15,
 9 |   "cooldown": 1,
10 |   "effect_json": {
11 |     "type": "damage",
12 |     "value": 30,
13 |     "target": "enemy"
14 |   },
15 |   "icon": "fireball_icon.png"
16 | }


--------------------------------------------------------------------------------
/backend/src/abilities/warrior.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "warrior_slash": {
 3 |     "name": "Warrior Slash",
 4 |     "energy_cost": 10,
 5 |     "cooldown": 1,
 6 |     "target": "enemy",
 7 |     "effects": [
 8 |       { "type": "damage", "value": 20 }
 9 |     ]
10 |   },
11 |   "meteor_charge": {
12 |     "name": "Meteoric Charge",
13 |     "energy_cost": 20,
14 |     "cooldown": 2,
15 |     "target": "enemy",
16 |     "effects": [
17 |       { "type": "stun", "duration": 1 },
18 |       { "type": "damage", "value": 30 }
19 |     ]
20 |   }
21 | }


--------------------------------------------------------------------------------
/backend/src/abilities/warrior_slash.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "id": "warrior_slash_uuid",
 3 |   "name": "Warrior Slash",
 4 |   "description": "A basic melee attack.",
 5 |   "class_id": "warrior_class_uuid",
 6 |   "level_unlock": 1,
 7 |   "type": "active",
 8 |   "energy_cost": 10,
 9 |   "cooldown": 0,
10 |   "effect_json": {
11 |     "type": "damage",
12 |     "value": 20,
13 |     "target": "enemy"
14 |   },
15 |   "icon": "slash_icon.png"
16 | }


--------------------------------------------------------------------------------
/backend/src/api/match.ts:
--------------------------------------------------------------------------------
 1 | import express from 'express';
 2 | import { v4 as uuidv4 } from 'uuid';
 3 | import { createMatchState } from '../utils/matchStateStore';
 4 | import { MatchState, PlayerState } from '../match_engine/types';
 5 | import { getAbilitiesForPlayer } from '../utils/abilityLoader'; // Assuming this function exists
 6 | 
 7 | const router = express.Router();
 8 | 
 9 | router.post('/start', (req, res) => {
10 |   const { playerAId, playerBId = 'BOT' } = req.body;
11 | 
12 |   const matchId = uuidv4();
13 | 
14 |   // Placeholder for fetching player profiles and abilities
15 |   // In a real scenario, you'd fetch these from a database
16 |   const playerAProfile = {
17 |     id: playerAId,
18 |     user_id: playerAId, // Mock value
19 |     character_class_id: 'default', // Mock value
20 |     level: 1, // Mock value
21 |     experience: 0, // Mock value
22 |     unlocked_abilities: [], // Mock value
23 |     equipped_cosmetic_id: null, // Mock value
24 |     created_at: new Date(), // Mock value
25 |     username: `Player ${playerAId.substring(0, 4)}`
26 |   };
27 |   const playerBProfile = {
28 |     id: playerBId,
29 |     user_id: playerBId, // Mock value
30 |     character_class_id: 'default', // Mock value
31 |     level: 1, // Mock value
32 |     experience: 0, // Mock value
33 |     unlocked_abilities: [], // Mock value
34 |     equipped_cosmetic_id: null, // Mock value
35 |     created_at: new Date(), // Mock value
36 |     username: playerBId === 'BOT' ? 'Bot' : `Player ${playerBId.substring(0, 4)}`
37 |   };
38 | 
39 |   const playerAAbilities = getAbilitiesForPlayer(playerAId);
40 |   const playerBAbilities = getAbilitiesForPlayer(playerBId);
41 | 
42 |   const initialPlayerAState: PlayerState = {
43 |     profile: playerAProfile,
44 |     username: playerAProfile.username,
45 |     hp: 100,
46 |     maxHealth: 100,
47 |     energy: 100,
48 |     maxEnergy: 100,
49 |     speed: 10,
50 |     abilities: playerAAbilities,
51 |     statusEffects: [],
52 |     cooldowns: {},
53 |     isBot: false,
54 |     id: playerAId,
55 |   };
56 | 
57 |   const initialPlayerBState: PlayerState = {
58 |     profile: playerBProfile,
59 |     username: playerBProfile.username,
60 |     hp: 100,
61 |     maxHealth: 100,
62 |     energy: 100,
63 |     maxEnergy: 100,
64 |     speed: 10,
65 |     abilities: playerBAbilities,
66 |     statusEffects: [],
67 |     cooldowns: {},
68 |     isBot: playerBId === 'BOT',
69 |     id: playerBId,
70 |   };
71 | 
72 |   const initialMatchState: MatchState = {
73 |     id: matchId,
74 |     playerA: initialPlayerAState,
75 |     playerB: initialPlayerBState,
76 |     turnNumber: 1,
77 |     activePlayerId: playerAId, // Player A starts
78 |     combatLog: [],
79 |     status: 'active',
80 |     winnerId: null,
81 |     isBot: playerBId === 'BOT',
82 |     turnLog: [], // Initialize turnLog as an empty array
83 |   };
84 | 
85 |   createMatchState(matchId, initialMatchState);
86 | 
87 |   console.log('Match started:', initialMatchState);
88 |   res.status(201).json(initialMatchState);
89 | });
90 | 
91 | export default router;


--------------------------------------------------------------------------------
/backend/src/api/turn.ts:
--------------------------------------------------------------------------------
 1 | import express, { Request, Response, Router } from 'express';
 2 | import { runMatchTurn } from '../match_engine/resolver';
 3 | import { getMatchState, updateMatchState } from '../utils/matchStateStore';
 4 | import { TurnAction } from '../match_engine/types';
 5 | 
 6 | const router: Router = express.Router();
 7 | 
 8 | router.post('/:matchId/turn', async (req: Request<{ matchId: string }, any, TurnAction>, res: Response): Promise<void> => {
 9 |   const matchId = req.params.matchId;
10 |   const { actorId, abilityId, targetId } = req.body;
11 | 
12 |   const matchState = getMatchState(matchId);
13 | 
14 |   if (!matchState) {
15 |     res.status(404).json({ error: 'Match not found' });
16 |     return;
17 |   }
18 | 
19 |   try {
20 |     const result = runMatchTurn(matchState, {
21 |       actorId,
22 |       abilityId,
23 |       targetId,
24 |     });
25 | 
26 |     updateMatchState(matchId, result.updatedMatchState);
27 | 
28 |     res.status(200).json({
29 |       updatedState: result.updatedMatchState,
30 |       combatLog: result.combatLog,
31 |       winner: result.winner || null,
32 |     });
33 |   } catch (err) {
34 |     console.error(err);
35 |     res.status(500).json({ error: 'Failed to resolve turn' });
36 |   }
37 | });
38 | 
39 | export default router;


--------------------------------------------------------------------------------
/backend/src/db.ts:
--------------------------------------------------------------------------------
 1 | import { Pool } from 'pg';
 2 | import { Match, Turn, PlayerProfile } from './types/db';
 3 | 
 4 | const pool = new Pool({
 5 |   user: process.env.DB_USER,
 6 |   host: process.env.DB_HOST,
 7 |   database: process.env.DB_NAME,
 8 |   password: process.env.DB_PASSWORD,
 9 |   port: parseInt(process.env.DB_PORT || '5432', 10),
10 | });
11 | 
12 | pool.on('error', (err) => {
13 |   console.error('Unexpected error on idle client', err);
14 |   process.exit(-1);
15 | });
16 | 
17 | export const query = (text: string, params?: any[]) => pool.query(text, params);
18 | 
19 | export const createMatch = async (playerAId: string, playerBId: string, isBot: boolean): Promise<Match> => {
20 |   const result = await query(
21 |     `INSERT INTO matches (player_a_id, player_b_id, status, started_at, is_bot)
22 |      VALUES ($1, $2, $3, NOW(), $4)
23 |      RETURNING *`,
24 |     [playerAId, playerBId, 'active', isBot]
25 |   );
26 |   return result.rows[0];
27 | };
28 | 
29 | export const updateMatchStatus = async (matchId: string, status: Match['status'], winnerId: string | null = null): Promise<Match> => {
30 |   const result = await query(
31 |     `UPDATE matches SET status = $1, ended_at = NOW(), winner_id = $2 WHERE id = $3 RETURNING *`,
32 |     [status, winnerId, matchId]
33 |   );
34 |   return result.rows[0];
35 | };
36 | 
37 | export const getMatchById = async (matchId: string): Promise<Match | null> => {
38 |   const result = await query(`SELECT * FROM matches WHERE id = $1`, [matchId]);
39 |   return result.rows[0] || null;
40 | };
41 | 
42 | export const createTurn = async (turn: Omit<Turn, 'id' | 'created_at'>): Promise<Turn> => {
43 |   const result = await query(
44 |     `INSERT INTO turns (match_id, turn_number, acting_player_id, ability_id, target_id, result_json)
45 |      VALUES ($1, $2, $3, $4, $5, $6)
46 |      RETURNING *`,
47 |     [turn.match_id, turn.turn_number, turn.acting_player_id, turn.ability_id, turn.target_id, turn.result_json]
48 |   );
49 |   return result.rows[0];
50 | };
51 | 
52 | export const getPlayerProfileById = async (profileId: string): Promise<PlayerProfile | null> => {
53 |   const result = await query(`SELECT * FROM player_profiles WHERE id = $1`, [profileId]);
54 |   return result.rows[0] || null;
55 | };
56 | 
57 | export const createPlayerProfile = async (userId: string | null, characterClassId: string | null, isBot: boolean = false): Promise<PlayerProfile> => {
58 |   // For bot profiles, user_id can be null. For real players, it should be provided.
59 |   const result = await query(
60 |     `INSERT INTO player_profiles (user_id, character_class_id, level, experience, unlocked_abilities, equipped_cosmetic_id, created_at)
61 |      VALUES ($1, $2, $3, $4, $5, $6, NOW())
62 |      RETURNING *`,
63 |     [userId, characterClassId, 1, 0, [], null, ]
64 |   );
65 |   return result.rows[0];
66 | };


--------------------------------------------------------------------------------
/backend/src/match_engine/abilities/index.ts:
--------------------------------------------------------------------------------
 1 | import warriorAbilitiesData from '../../abilities/warrior.json';
 2 | import mageAbilitiesData from '../../abilities/mage.json';
 3 | import warriorSlashData from '../../abilities/warrior_slash.json';
 4 | import mageFireballData from '../../abilities/mage_fireball.json';
 5 | import acidSpitData from '../../abilities/acid_spit.json';
 6 | import { Ability } from '../../types/db';
 7 | 
 8 | const registry: Record<string, Ability> = {};
 9 | 
10 | // Helper to add abilities from a JSON object to the registry
11 | const addAbilitiesToRegistry = (abilitiesObject: Record<string, any>) => {
12 |   for (const key in abilitiesObject) {
13 |     if (Object.prototype.hasOwnProperty.call(abilitiesObject, key)) {
14 |       // Cast to Ability, assuming the structure matches
15 |       registry[key] = abilitiesObject[key] as Ability;
16 |     }
17 |   }
18 | };
19 | 
20 | // Add abilities from each imported JSON file
21 | addAbilitiesToRegistry(warriorAbilitiesData);
22 | addAbilitiesToRegistry(mageAbilitiesData);
23 | addAbilitiesToRegistry({ [warriorSlashData.id]: warriorSlashData }); // Wrap single ability in an object
24 | addAbilitiesToRegistry({ [mageFireballData.id]: mageFireballData }); // Wrap single ability in an object
25 | addAbilitiesToRegistry(acidSpitData);
26 | 
27 | export function getAbilityById(id: string): Ability | undefined {
28 |   return registry[id];
29 | }


--------------------------------------------------------------------------------
/backend/src/match_engine/abilities/mage.json:
--------------------------------------------------------------------------------
1 | {}


--------------------------------------------------------------------------------
/backend/src/match_engine/abilities/warrior.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "meteor_charge": {
 3 |     "name": "Meteoric Charge",
 4 |     "description": "Rushes the target and stuns them.",
 5 |     "energy_cost": 20,
 6 |     "cooldown": 2,
 7 |     "target": "enemy",
 8 |     "effects": [
 9 |       { "type": "damage", "value": 30 },
10 |       { "type": "stun", "duration": 1 }
11 |     ]
12 |   },
13 |   "iron_defense": {
14 |     "name": "Iron Defense",
15 |     "description": "Raises your armor and grants a shield.",
16 |     "energy_cost": 15,
17 |     "cooldown": 3,
18 |     "target": "self",
19 |     "effects": [
20 |       { "type": "buff", "stat": "defense", "value": 10, "duration": 2 },
21 |       { "type": "shield", "value": 20 }
22 |     ]
23 |   },
24 |   "cleave": {
25 |     "name": "Cleave",
26 |     "description": "Deals damage to the enemy and reduces their energy.",
27 |     "energy_cost": 25,
28 |     "cooldown": 2,
29 |     "target": "enemy",
30 |     "effects": [
31 |       { "type": "damage", "value": 40 },
32 |       { "type": "drain_energy", "value": 10 }
33 |     ]
34 |   },
35 |   "passive": {
36 |     "name": "Battle Resilience",
37 |     "description": "Takes 10% less damage when under 50% HP.",
38 |     "type": "passive",
39 |     "trigger": "on_hit",
40 |     "condition": { "hp_below_percent": 50 },
41 |     "effects": [
42 |       { "type": "damage_reduction", "value": 10 }
43 |     ]
44 |   },
45 |   "ultimate": {
46 |     "name": "Colossus Strike",
47 |     "description": "Devastating attack that ignores armor.",
48 |     "energy_cost": 50,
49 |     "cooldown": 5,
50 |     "target": "enemy",
51 |     "effects": [
52 |       { "type": "damage", "value": 70, "ignore_defense": true },
53 |       { "type": "stun", "duration": 2 }
54 |     ]
55 |   }
56 | }


--------------------------------------------------------------------------------
/backend/src/match_engine/bot_ai/aggressive_bot.ts:
--------------------------------------------------------------------------------
 1 | import { PlayerState, TurnAction } from '../types';
 2 | import { Ability } from '../../types/db';
 3 | import { getAbilityById } from '../abilities';
 4 | 
 5 | export function getAction(bot: PlayerState, opponent: PlayerState): TurnAction {
 6 |   const usable = bot.abilities.filter((ability: Ability) => {
 7 |     return bot.energy >= (ability.energy_cost || 0) && (!bot.cooldowns[ability.id] || bot.cooldowns[ability.id] === 0);
 8 |   }).sort((a: Ability, b: Ability) => (b.effect_json?.value || 0) - (a.effect_json?.value || 0));
 9 | 
10 |   const chosenAbility = usable[0] || { id: 'wait' };
11 | 
12 | 
13 |   return {
14 |     actorId: bot.id,
15 |     abilityId: chosenAbility.id,
16 |     targetId: opponent.id
17 |   };
18 | }


--------------------------------------------------------------------------------
/backend/src/match_engine/bot_ai/defensive_bot.ts:
--------------------------------------------------------------------------------
 1 | import { PlayerState, TurnAction } from '../types';
 2 | import { Ability } from '../../types/db';
 3 | import { getAbilityById } from '../abilities';
 4 | 
 5 | export function getAction(bot: PlayerState, opponent: PlayerState): TurnAction {
 6 |   const shieldAbility = bot.abilities.filter((ability: Ability) => {
 7 |     return ability.effect_json?.type === 'shield' &&
 8 |            bot.energy >= (ability.energy_cost || 0) &&
 9 |            (!bot.cooldowns[ability.id] || bot.cooldowns[ability.id] === 0);
10 |   });
11 | 
12 |   if (bot.hp < 50 && shieldAbility.length > 0) {
13 |     return {
14 |       actorId: bot.id,
15 |       abilityId: shieldAbility[0].id,
16 |       targetId: bot.id
17 |     };
18 |   }
19 | 
20 |   // Fallback: use any damage skill
21 |   const dmg = bot.abilities.filter((ability: Ability) => {
22 |     return ability.effect_json?.type === 'damage';
23 |   });
24 | 
25 |   return {
26 |     actorId: bot.id,
27 |     abilityId: dmg[0]?.id || 'wait',
28 |     targetId: opponent.id
29 |   };
30 | }


--------------------------------------------------------------------------------
/backend/src/match_engine/bot_ai/index.ts:
--------------------------------------------------------------------------------
 1 | import * as RandomBot from './random_bot';
 2 | import * as AggressiveBot from './aggressive_bot';
 3 | import * as DefensiveBot from './defensive_bot';
 4 | import * as TacticalBot from './tactical_bot';
 5 | 
 6 | export const BotModels = {
 7 |   random: RandomBot,
 8 |   aggressive: AggressiveBot,
 9 |   defensive: DefensiveBot,
10 |   tactical: TacticalBot
11 | };


--------------------------------------------------------------------------------
/backend/src/match_engine/bot_ai/random_bot.ts:
--------------------------------------------------------------------------------
 1 | import { PlayerState, TurnAction } from '../types';
 2 | import { Ability } from '../../types/db';
 3 | export function getAction(bot: PlayerState, opponent: PlayerState): TurnAction {
 4 |   const usable = bot.abilities.filter((ability: Ability) => {
 5 |     return bot.energy >= (ability.energy_cost || 0) && (!bot.cooldowns[ability.id] || bot.cooldowns[ability.id] === 0);
 6 |   });
 7 | 
 8 |   const choice = usable[Math.floor(Math.random() * usable.length)]?.id || 'wait';
 9 | 
10 |   return {
11 |     actorId: bot.id,
12 |     abilityId: choice,
13 |     targetId: opponent.id
14 |   };
15 | }


--------------------------------------------------------------------------------
/backend/src/match_engine/bot_ai/tactical_bot.ts:
--------------------------------------------------------------------------------
 1 | import { PlayerState, TurnAction } from '../types';
 2 | import { Ability } from '../../types/db';
 3 | 
 4 | // Simple in-memory store so the bot can remember its last used ability
 5 | const lastUsed: Record<string, string | null> = {};
 6 | 
 7 | export function getAction(bot: PlayerState, opponent: PlayerState): TurnAction {
 8 |   const usable = bot.abilities.filter(
 9 |     (a: Ability) =>
10 |       bot.energy >= (a.energy_cost || 0) && (!bot.cooldowns[a.id] || bot.cooldowns[a.id] === 0)
11 |   );
12 | 
13 |   if (usable.length === 0) {
14 |     return { actorId: bot.id, abilityId: 'wait', targetId: opponent.id };
15 |   }
16 | 
17 |   const weighted = usable.map(a => {
18 |     let weight = 1;
19 | 
20 |     switch (a.effect_json?.type) {
21 |       case 'stun':
22 |         weight += opponent.energy >= 50 ? 30 : 10;
23 |         break;
24 |       case 'shield':
25 |         weight += bot.hp <= 50 ? 20 : 5;
26 |         break;
27 |       case 'heal':
28 |         weight += bot.hp <= bot.maxHealth / 2 ? 25 : 5;
29 |         break;
30 |       case 'damage':
31 |         weight += a.effect_json?.value || 0;
32 |         if (opponent.hp <= 40) weight += 10;
33 |         break;
34 |     }
35 | 
36 |     // Consider ability cooldown length - high cooldown abilities are valuable
37 |     weight += (a.cooldown || 0);
38 | 
39 |     // Slightly discourage repeating the same ability twice in a row
40 |     if (lastUsed[bot.id] && lastUsed[bot.id] === a.id) {
41 |       weight -= 5;
42 |     }
43 | 
44 |     return { ability: a, weight };
45 |   });
46 | 
47 |   weighted.sort((a, b) => b.weight - a.weight);
48 | 
49 |   const choice = weighted[0].ability;
50 |   lastUsed[bot.id] = choice.id;
51 | 
52 |   const targetId = choice.effect_json?.target === 'self' ? bot.id : opponent.id;
53 | 
54 |   return {
55 |     actorId: bot.id,
56 |     abilityId: choice.id,
57 |     targetId: targetId
58 |   };
59 | }


--------------------------------------------------------------------------------
/backend/src/match_engine/combat_log.ts:
--------------------------------------------------------------------------------
 1 | import { CombatLogEntry } from './types';
 2 | 
 3 | export const addLogEntry = (
 4 |   turnNumber: number,
 5 |   message: string,
 6 |   playerId?: string,
 7 |   abilityId?: string,
 8 |   effectType?: string,
 9 |   value?: number
10 | ): CombatLogEntry => {
11 |   return {
12 |     turnNumber,
13 |     message,
14 |     playerId,
15 |     abilityId,
16 |     effectType,
17 |     value,
18 |   };
19 | };
20 | 
21 | export const getCombatLog = (log: CombatLogEntry[]): string[] => {
22 |   return log.map(entry => `Turn ${entry.turnNumber}: ${entry.message}`);
23 | };


--------------------------------------------------------------------------------
/backend/src/match_engine/cooldown_logic.test.ts:
--------------------------------------------------------------------------------
 1 | import { test, expect } from 'vitest';
 2 | import { runMatchTurn } from './resolver';
 3 | import { initializePlayerState } from './state';
 4 | import { getAbilityById } from './abilities';
 5 | import type { MatchState, TurnAction } from './types';
 6 | import type { PlayerProfile } from '../types/db';
 7 | 
 8 | const meteorCharge = getAbilityById('meteor_charge')!;
 9 | const slash = getAbilityById('warrior_slash_uuid')!;
10 | 
11 | function createProfile(id: string): PlayerProfile {
12 |   return {
13 |     id,
14 |     user_id: null,
15 |     character_class_id: null,
16 |     level: 1,
17 |     experience: 0,
18 |     unlocked_abilities: [],
19 |     equipped_cosmetic_id: null,
20 |     created_at: new Date(),
21 |   };
22 | }
23 | 
24 | test('cooldown prevents ability reuse until turns pass', () => {
25 |   const profileA = createProfile('A');
26 |   const profileB = createProfile('B');
27 | 
28 |   let playerA = initializePlayerState(profileA, 'A', [meteorCharge, slash]);
29 |   let playerB = initializePlayerState(profileB, 'B', [slash]);
30 | 
31 |   const baseState: MatchState = {
32 |     id: 'm1',
33 |     playerA,
34 |     playerB,
35 |     turnNumber: 1,
36 |     activePlayerId: playerA.profile.id,
37 |     combatLog: [],
38 |     status: 'active',
39 |     winnerId: null,
40 |     isBot: false,
41 |     turnLog: [],
42 |   };
43 | 
44 |   const actionA1: TurnAction = {
45 |     actorId: playerA.profile.id,
46 |     abilityId: 'meteor_charge',
47 |     targetId: playerB.profile.id,
48 |   };
49 | 
50 |   let { updatedMatchState: state1 } = runMatchTurn(baseState, actionA1);
51 |   expect(state1.playerA.cooldowns['meteor_charge']).toBe(1);
52 | 
53 |   const actionB: TurnAction = {
54 |     actorId: playerB.profile.id,
55 |     abilityId: slash.id,
56 |     targetId: playerA.profile.id,
57 |   };
58 |   let { updatedMatchState: state2 } = runMatchTurn(state1, actionB);
59 |   expect(state2.playerA.cooldowns['meteor_charge']).toBe(1);
60 | 
61 |   const actionA2: TurnAction = {
62 |     actorId: playerA.profile.id,
63 |     abilityId: 'meteor_charge',
64 |     targetId: playerB.profile.id,
65 |   };
66 |   const attempt = runMatchTurn(state2, actionA2);
67 |   expect(attempt.updatedMatchState).toBe(state2);
68 |   expect(attempt.updatedMatchState.playerA.cooldowns['meteor_charge']).toBe(1);
69 | 
70 |   const altAction: TurnAction = {
71 |     actorId: playerA.profile.id,
72 |     abilityId: slash.id,
73 |     targetId: playerB.profile.id,
74 |   };
75 |   let { updatedMatchState: state3 } = runMatchTurn(state2, altAction);
76 |   expect(state3.playerA.cooldowns['meteor_charge']).toBeUndefined();
77 | });
78 | 


--------------------------------------------------------------------------------
/backend/src/match_engine/effect_runner.ts:
--------------------------------------------------------------------------------
 1 | import { MatchState, PlayerState, Effect, CombatLogEntry, StatusEffect } from './types';
 2 | import { applyDamage, applyHealing, addStatusEffect, updatePlayerState } from './state';
 3 | import { addLogEntry } from './combat_log';
 4 | 
 5 | export const runEffect = (
 6 |   effect: Effect,
 7 |   sourcePlayer: PlayerState,
 8 |   targetPlayer: PlayerState,
 9 |   matchState: MatchState,
10 |   abilityId: string
11 | ): { newMatchState: MatchState; logs: CombatLogEntry[] } => {
12 |   let currentMatchState = { ...matchState };
13 |   let logs: CombatLogEntry[] = [];
14 |   let updatedTargetPlayer = { ...targetPlayer };
15 | 
16 |   const target = effect.target === 'self' ? sourcePlayer : targetPlayer;
17 |   const targetId = target.profile.id;
18 | 
19 |   switch (effect.type) {
20 |     case 'damage':
21 |       if (effect.value !== undefined) {
22 |         updatedTargetPlayer = applyDamage(target, effect.value);
23 |         logs.push(addLogEntry(currentMatchState.turnNumber, `${target.username} took ${effect.value} damage!`, targetId, undefined, 'damage', effect.value));
24 |       }
25 |       break;
26 |     case 'heal':
27 |       if (effect.value !== undefined) {
28 |         updatedTargetPlayer = applyHealing(target, effect.value);
29 |         logs.push(addLogEntry(currentMatchState.turnNumber, `${target.username} healed for ${effect.value} health!`, targetId, undefined, 'heal', effect.value));
30 |       }
31 |       break;
32 |     case 'stun':
33 |       if (effect.duration !== undefined) {
34 |         const stunEffect: StatusEffect = {
35 |           id: `stun-${Date.now()}`, // Simple unique ID
36 |           type: 'stun',
37 |           duration: effect.duration,
38 |           sourceAbilityId: abilityId,
39 |           appliedAtTurn: currentMatchState.turnNumber,
40 |         };
41 |         updatedTargetPlayer = addStatusEffect(target, stunEffect);
42 |         logs.push(addLogEntry(currentMatchState.turnNumber, `${target.username} was stunned for ${effect.duration} turn(s)!`, targetId, undefined, 'stun'));
43 |       }
44 |       break;
45 |     // Add more effect types as needed
46 |     default:
47 |       console.warn(`Unknown effect type: ${effect.type}`);
48 |       break;
49 |   }
50 | 
51 |   currentMatchState = updatePlayerState(currentMatchState, updatedTargetPlayer);
52 | 
53 |   return { newMatchState: currentMatchState, logs };
54 | };


--------------------------------------------------------------------------------
/backend/src/match_engine/index.ts:
--------------------------------------------------------------------------------
 1 | import { MatchState, TurnAction, CombatLogEntry } from './types';
 2 | import { validateTurn } from './validator';
 3 | import { addLogEntry } from './combat_log';
 4 | import { runMatchTurn } from './resolver';
 5 | import { checkVictoryCondition } from './victory_checker';
 6 | import { Ability } from '../types/db';
 7 | import { BotModels } from './bot_ai/index';
 8 | 
 9 | export const runTurn = (
10 |   initialMatchState: MatchState,
11 |   playerATurn: TurnAction | null,
12 |   playerBTurn: TurnAction | null,
13 |   abilities: Ability[]
14 | ): { newMatchState: MatchState; logs: CombatLogEntry[]; isGameOver: boolean; winnerId: string | null } => {
15 |   let currentMatchState = { ...initialMatchState };
16 |   let logs: CombatLogEntry[] = [];
17 | 
18 |   let actionToRun: TurnAction | null = null;
19 | 
20 |   // Determine action based on active player
21 |   if (playerATurn) {
22 |     actionToRun = playerATurn;
23 |   } else if (playerBTurn) {
24 |     actionToRun = playerBTurn;
25 |   }
26 | 
27 |   // If it's a PvE match and it's the bot's turn, generate bot action
28 |   let botTurnAction: TurnAction | null = null;
29 |   if (currentMatchState.isBot && currentMatchState.activePlayerId === currentMatchState.playerB.profile.id) {
30 |     const botType = 'tactical';
31 |     const botAI = BotModels[botType];
32 | 
33 |     if (botAI) {
34 |       botTurnAction = botAI.getAction(currentMatchState.playerB, currentMatchState.playerA);
35 |       logs.push(addLogEntry(currentMatchState.turnNumber, `Bot (${currentMatchState.playerB.username}) chose its action.`));
36 |     } else {
37 |       logs.push(addLogEntry(currentMatchState.turnNumber, `Bot AI type '${botType}' not found.`));
38 |     }
39 |   }
40 | 
41 |   actionToRun = actionToRun || botTurnAction;
42 | 
43 |   if (!actionToRun) {
44 |     logs.push(addLogEntry(currentMatchState.turnNumber, 'No action provided.'));
45 |     return { newMatchState: currentMatchState, logs, isGameOver: false, winnerId: null };
46 |   }
47 | 
48 |   const validation = validateTurn(currentMatchState, actionToRun);
49 |   if (!validation.valid) {
50 |     logs.push(addLogEntry(currentMatchState.turnNumber, validation.reason || 'Invalid turn.', actionToRun.actorId, actionToRun.abilityId));
51 |     return { newMatchState: currentMatchState, logs, isGameOver: false, winnerId: null };
52 |   }
53 |   // Resolve turn
54 |   const { updatedMatchState: resolvedState, combatLog: turnLogs, winner: turnWinner } = runMatchTurn(
55 |     currentMatchState,
56 |     actionToRun
57 |   );
58 |   currentMatchState = resolvedState;
59 |   logs = logs.concat(turnLogs);
60 | 
61 |   // Check for victory conditions
62 |   const { isGameOver, winnerId } = checkVictoryCondition(currentMatchState);
63 |   if (isGameOver) {
64 |     currentMatchState.status = 'completed';
65 |     currentMatchState.winnerId = winnerId;
66 |     logs.push({ turnNumber: currentMatchState.turnNumber, message: `Match ended! Winner: ${winnerId || 'No one'}` });
67 |   }
68 | 
69 |   // Update active player for next turn (simple round-robin for now)
70 |   if (!isGameOver) {
71 |     currentMatchState.activePlayerId =
72 |       currentMatchState.activePlayerId === currentMatchState.playerA.profile.id
73 |         ? currentMatchState.playerB.profile.id
74 |         : currentMatchState.playerA.profile.id;
75 |   }
76 | 
77 | 
78 |   return { newMatchState: currentMatchState, logs, isGameOver, winnerId };
79 | };


--------------------------------------------------------------------------------
/backend/src/match_engine/resolver.test.ts:
--------------------------------------------------------------------------------
 1 | import { test, expect } from 'vitest';
 2 | import { runMatchTurn } from './resolver';
 3 | import { initializePlayerState } from './state';
 4 | import { getAbilityById } from './abilities';
 5 | import type { MatchState, TurnAction } from './types';
 6 | import type { PlayerProfile } from '../types/db';
 7 | 
 8 | const fireball = getAbilityById('mage_fireball_uuid')!;
 9 | 
10 | function createProfile(id: string): PlayerProfile {
11 |   return {
12 |     id,
13 |     user_id: null,
14 |     character_class_id: null,
15 |     level: 1,
16 |     experience: 0,
17 |     unlocked_abilities: [],
18 |     equipped_cosmetic_id: null,
19 |     created_at: new Date(),
20 |   };
21 | }
22 | 
23 | test('cooldowns decrement only for the acting player', () => {
24 |   const profileA = createProfile('A');
25 |   const profileB = createProfile('B');
26 | 
27 |   let playerA = initializePlayerState(profileA, 'A', [fireball]);
28 |   let playerB = initializePlayerState(profileB, 'B', [fireball]);
29 | 
30 |   // set a cooldown on playerB to verify it doesn't change on playerA's turn
31 |   playerB.cooldowns[fireball.id] = 2;
32 | 
33 |   const matchState: MatchState = {
34 |     id: 'm1',
35 |     playerA,
36 |     playerB,
37 |     turnNumber: 1,
38 |     activePlayerId: playerA.profile.id,
39 |     combatLog: [],
40 |     status: 'active',
41 |     winnerId: null,
42 |     isBot: false,
43 |     turnLog: [],
44 |   };
45 | 
46 |   const actionA: TurnAction = {
47 |     actorId: playerA.profile.id,
48 |     abilityId: fireball.id,
49 |     targetId: playerB.profile.id,
50 |   };
51 | 
52 |   const { updatedMatchState: afterA } = runMatchTurn(matchState, actionA);
53 | 
54 |   expect(afterA.playerA.cooldowns[fireball.id]).toBeUndefined();
55 |   expect(afterA.playerB.cooldowns[fireball.id]).toBe(2);
56 | });
57 | 


--------------------------------------------------------------------------------
/backend/src/match_engine/state.ts:
--------------------------------------------------------------------------------
 1 | import { MatchState, PlayerState, Effect, StatusEffect } from './types';
 2 | import { PlayerProfile, Ability } from '../types/db';
 3 | 
 4 | export const initializePlayerState = (profile: PlayerProfile, username: string, abilities: Ability[], isBot: boolean = false): PlayerState => {
 5 |   return {
 6 |     id: profile.id, // Add id from profile
 7 |     profile: profile,
 8 |     username: username,
 9 |     hp: 100, // Example base health
10 |     maxHealth: 100,
11 |     energy: 50, // Example base energy
12 |     maxEnergy: 100,
13 |     speed: 10, // Example base speed
14 |     abilities: abilities,
15 |     statusEffects: [],
16 |     cooldowns: {},
17 |     isBot: isBot,
18 |   };
19 | };
20 | 
21 | export const applyDamage = (playerState: PlayerState, amount: number): PlayerState => {
22 |   const newHealth = Math.max(0, playerState.hp - amount);
23 |   return { ...playerState, hp: newHealth };
24 | };
25 | 
26 | export const applyHealing = (playerState: PlayerState, amount: number): PlayerState => {
27 |   const newHealth = Math.min(playerState.maxHealth, playerState.hp + amount);
28 |   return { ...playerState, hp: newHealth };
29 | };
30 | 
31 | export const applyEnergyCost = (playerState: PlayerState, amount: number): PlayerState => {
32 |   const newEnergy = Math.max(0, playerState.energy - amount);
33 |   return { ...playerState, energy: newEnergy };
34 | };
35 | 
36 | export const addStatusEffect = (playerState: PlayerState, effect: StatusEffect): PlayerState => {
37 |   return { ...playerState, statusEffects: [...playerState.statusEffects, effect] };
38 | };
39 | 
40 | export const updateCooldown = (playerState: PlayerState, abilityId: string, turns: number): PlayerState => {
41 |   return { ...playerState, cooldowns: { ...playerState.cooldowns, [abilityId]: turns } };
42 | };
43 | 
44 | export const decrementCooldowns = (playerState: PlayerState): PlayerState => {
45 |   const newCooldowns: { [abilityId: string]: number } = {};
46 |   for (const abilityId in playerState.cooldowns) {
47 |     const remainingTurns = playerState.cooldowns[abilityId] - 1;
48 |     if (remainingTurns > 0) {
49 |       newCooldowns[abilityId] = remainingTurns;
50 |     }
51 |   }
52 |   return { ...playerState, cooldowns: newCooldowns };
53 | };
54 | 
55 | export const updatePlayerState = (matchState: MatchState, updatedPlayerState: PlayerState): MatchState => {
56 |   if (matchState.playerA.profile.id === updatedPlayerState.profile.id) {
57 |     return { ...matchState, playerA: updatedPlayerState };
58 |   } else if (matchState.playerB.profile.id === updatedPlayerState.profile.id) {
59 |     return { ...matchState, playerB: updatedPlayerState };
60 |   }
61 |   return matchState; // Should not happen
62 | };


--------------------------------------------------------------------------------
/backend/src/match_engine/status_manager.test.ts:
--------------------------------------------------------------------------------
 1 | import { test, expect } from 'vitest';
 2 | import { initializePlayerState } from './state';
 3 | import { applyEffect, processStatusEffects } from './status_manager';
 4 | import type { PlayerProfile } from '../types/db';
 5 | import type { StatusEffect } from './types';
 6 | 
 7 | function createProfile(id: string): PlayerProfile {
 8 |   return {
 9 |     id,
10 |     user_id: null,
11 |     character_class_id: null,
12 |     level: 1,
13 |     experience: 0,
14 |     unlocked_abilities: [],
15 |     equipped_cosmetic_id: null,
16 |     created_at: new Date(),
17 |   };
18 | }
19 | 
20 | test('burn effect deals damage over its duration', () => {
21 |   const profile = createProfile('A');
22 |   let player = initializePlayerState(profile, 'A', []);
23 | 
24 |   const burn: StatusEffect = {
25 |     id: 'burn1',
26 |     type: 'burn',
27 |     duration: 2,
28 |     sourceAbilityId: 'spell',
29 |     appliedAtTurn: 1,
30 |     value: 5,
31 |   };
32 | 
33 |   player = applyEffect(player, burn);
34 | 
35 |   player = processStatusEffects(player);
36 |   expect(player.hp).toBe(95);
37 |   expect(player.statusEffects[0].duration).toBe(1);
38 | 
39 |   player = processStatusEffects(player);
40 |   expect(player.hp).toBe(90);
41 |   expect(player.statusEffects.length).toBe(0);
42 | });
43 | 


--------------------------------------------------------------------------------
/backend/src/match_engine/types.ts:
--------------------------------------------------------------------------------
 1 | import { Ability, PlayerProfile } from '../types/db';
 2 | 
 3 | export interface PlayerState {
 4 |   profile: PlayerProfile;
 5 |   username: string; // Added for easier access in match engine
 6 |   hp: number; // Renamed from currentHealth for brevity
 7 |   maxHealth: number;
 8 |   energy: number; // Renamed from currentEnergy for brevity
 9 |   maxEnergy: number;
10 |   speed: number;
11 |   abilities: Ability[]; // Abilities available to this player in the current match
12 |   statusEffects: StatusEffect[];
13 |   cooldowns: Record<string, number>; // abilityId → turns remaining
14 |   isBot: boolean;
15 |   id: string; // Added for status_manager.ts PlayerState compatibility
16 | }
17 | 
18 | export interface MatchState {
19 |   id: string; // Match UUID
20 |   playerA: PlayerState;
21 |   playerB: PlayerState;
22 |   turnNumber: number;
23 |   activePlayerId: string; // UUID of the player whose turn it is
24 |   combatLog: CombatLogEntry[];
25 |   status: 'active' | 'completed' | 'forfeit';
26 |   winnerId: string | null; // UUID of the winner
27 |   isBot: boolean; // Added to indicate if it's a PvE match
28 |   turnLog: TurnLogEntry[]; // Added for turn logging
29 | }
30 | 
31 | export interface TurnAction {
32 |   actorId: string; // UUID of the player taking the turn
33 |   abilityId: string; // UUID of the ability used
34 |   targetId: string; // UUID of the target player
35 | }
36 | 
37 | export interface TurnLogEntry {
38 |   turn: number;
39 |   actorId: string;
40 |   abilityId: string;
41 |   targetId: string;
42 |   effectsApplied: StatusEffect[];
43 |   damageDealt: number;
44 |   resultSummary: string;
45 | }
46 | 
47 | export interface MatchTurnResult {
48 |   updatedMatchState: MatchState;
49 |   combatLog: CombatLogEntry[];
50 |   winner: string | null;
51 | }
52 | 
53 | export interface Effect {
54 |   type: string; // e.g., 'damage', 'heal', 'stun', 'burn'
55 |   value?: number; // Amount of damage/heal
56 |   duration?: number; // For status effects
57 |   target: 'self' | 'enemy'; // Required for strict type safety
58 | }
59 | 
60 | export type StatusEffectType =
61 |   | 'burn'
62 |   | 'stun'
63 |   | 'shield'
64 |   | 'buff'
65 |   | 'debuff'
66 |   | 'poison';
67 | 
68 | export interface StatusEffect {
69 |   id: string; // Unique ID for the status effect instance
70 |   type: StatusEffectType; // e.g., 'stun', 'burn', 'poison'
71 |   duration: number; // Turns remaining
72 |   sourceAbilityId: string; // The ability that applied this effect
73 |   appliedAtTurn: number;
74 |   value?: number; // For damage, heal, shield, buff values
75 |   stat?: string; // For buffs (e.g., 'defense', 'attack')
76 |   /** Callback triggered when the owning player starts their turn */
77 |   onStartTurn?: (player: PlayerState, effect: StatusEffect) => PlayerState;
78 |   /** Callback triggered when the owning player ends their turn */
79 |   onEndTurn?: (player: PlayerState, effect: StatusEffect) => PlayerState;
80 |   [key: string]: any; // Allow other properties
81 |   // Add more properties like potency, tickDamage, etc.
82 | }
83 | 
84 | export interface CombatLogEntry {
85 |   turnNumber: number;
86 |   message: string;
87 |   playerId?: string; // Player involved in the log entry
88 |   abilityId?: string; // Ability involved
89 |   effectType?: string; // Type of effect (e.g., 'damage', 'heal')
90 |   value?: number; // Value of the effect
91 | }


--------------------------------------------------------------------------------
/backend/src/match_engine/validator.ts:
--------------------------------------------------------------------------------
 1 | import { MatchState, TurnAction } from './types';
 2 | import { getAbilityById } from './abilities';
 3 | import { hasStatus } from './status_manager';
 4 | 
 5 | export interface ValidationResult {
 6 |   valid: boolean;
 7 |   reason?: string;
 8 | }
 9 | export const validateTurn = (
10 |   matchState: MatchState,
11 |   turnAction: TurnAction
12 | ): ValidationResult => {
13 |   const { actorId, abilityId, targetId } = turnAction;
14 | 
15 |   const actor =
16 |     matchState.playerA.profile.id === actorId
17 |       ? matchState.playerA
18 |       : matchState.playerB.profile.id === actorId
19 |       ? matchState.playerB
20 |       : null;
21 | 
22 |   const target =
23 |     matchState.playerA.profile.id === targetId
24 |       ? matchState.playerA
25 |       : matchState.playerB.profile.id === targetId
26 |       ? matchState.playerB
27 |       : null;
28 | 
29 |   if (!actor) {
30 |     return { valid: false, reason: 'Invalid acting player.' };
31 |   }
32 | 
33 |   if (matchState.activePlayerId !== actorId) {
34 |     return { valid: false, reason: "It's not the actor's turn." };
35 |   }
36 | 
37 |   const ability =
38 |     actor.abilities.find(a => a.id === abilityId) || getAbilityById(abilityId);
39 |   if (!ability) {
40 |     return { valid: false, reason: 'Ability is not unlocked.' };
41 |   }
42 | 
43 |   if (hasStatus(actor, 'stun') || hasStatus(actor, 'silence')) {
44 |     return { valid: false, reason: 'Actor is stunned or silenced.' };
45 |   }
46 | 
47 |   if (actor.energy < (ability.energy_cost || 0)) {
48 |     return { valid: false, reason: 'Not enough energy.' };
49 |   }
50 | 
51 |   if (actor.cooldowns[abilityId] && actor.cooldowns[abilityId] > 0) {
52 |     return { valid: false, reason: 'Ability is on cooldown.' };
53 |   }
54 | 
55 |   if (!target) {
56 |     return { valid: false, reason: 'Invalid target.' };
57 |   }
58 | 
59 |   const abilityTarget: string | undefined = (ability as any).target;
60 |   const effectTarget = ability.effects && ability.effects[0]?.target;
61 |   const expected = abilityTarget || effectTarget;
62 | 
63 |   if (expected === 'self' && actor.profile.id !== target.profile.id) {
64 |     return { valid: false, reason: 'Ability must target self.' };
65 |   }
66 |   if (expected === 'enemy' && actor.profile.id === target.profile.id) {
67 |     return { valid: false, reason: 'Ability must target an enemy.' };
68 |   }
69 | 
70 |   return { valid: true };
71 | };


--------------------------------------------------------------------------------
/backend/src/match_engine/victory_checker.test.ts:
--------------------------------------------------------------------------------
 1 | import { test, expect } from 'vitest';
 2 | import { checkVictoryCondition } from './victory_checker';
 3 | import { initializePlayerState } from './state';
 4 | import type { MatchState } from './types';
 5 | import type { PlayerProfile } from '../types/db';
 6 | 
 7 | function createProfile(id: string): PlayerProfile {
 8 |   return {
 9 |     id,
10 |     user_id: null,
11 |     character_class_id: null,
12 |     level: 1,
13 |     experience: 0,
14 |     unlocked_abilities: [],
15 |     equipped_cosmetic_id: null,
16 |     created_at: new Date(),
17 |   };
18 | }
19 | 
20 | test('checkVictoryCondition detects KO', () => {
21 |   const profileA = createProfile('A');
22 |   const profileB = createProfile('B');
23 | 
24 |   const playerA = { ...initializePlayerState(profileA, 'A', []), hp: 0 };
25 |   const playerB = initializePlayerState(profileB, 'B', []);
26 | 
27 |   const matchState: MatchState = {
28 |     id: 'm1',
29 |     playerA,
30 |     playerB,
31 |     turnNumber: 1,
32 |     activePlayerId: playerA.profile.id,
33 |     combatLog: [],
34 |     status: 'active',
35 |     winnerId: null,
36 |     isBot: false,
37 |     turnLog: [],
38 |   };
39 | 
40 |   const result = checkVictoryCondition(matchState);
41 |   expect(result.isGameOver).toBe(true);
42 |   expect(result.winnerId).toBe(playerB.profile.id);
43 | });
44 | 


--------------------------------------------------------------------------------
/backend/src/match_engine/victory_checker.ts:
--------------------------------------------------------------------------------
 1 | import { MatchState } from './types';
 2 | 
 3 | // Maximum number of turns before a match times out
 4 | const MAX_TURNS = 50;
 5 | 
 6 | export const checkVictoryCondition = (matchState: MatchState): { isGameOver: boolean; winnerId: string | null } => {
 7 |   // Check for KO
 8 |   if (matchState.playerA.hp <= 0) {
 9 |     return { isGameOver: true, winnerId: matchState.playerB.profile.id };
10 |   }
11 | 
12 |   if (matchState.playerB.hp <= 0) {
13 |     return { isGameOver: true, winnerId: matchState.playerA.profile.id };
14 |   }
15 |   // Timeout: if the turn limit is exceeded, winner is the player with higher HP
16 |   if (matchState.turnNumber > MAX_TURNS) {
17 |     const { playerA, playerB } = matchState;
18 |     let winnerId: string | null = null;
19 | 
20 |     if (playerA.hp !== playerB.hp) {
21 |       winnerId = playerA.hp > playerB.hp ? playerA.profile.id : playerB.profile.id;
22 |     }
23 | 
24 |     return { isGameOver: true, winnerId };
25 |   }
26 | 
27 |   // Forfeit: if match status has been set to 'forfeit', respect the stored winner
28 |   if (matchState.status === 'forfeit') {
29 |     return { isGameOver: true, winnerId: matchState.winnerId };
30 |   }
31 | 
32 |   return { isGameOver: false, winnerId: null };
33 | };


--------------------------------------------------------------------------------
/backend/src/types/db.ts:
--------------------------------------------------------------------------------
 1 | export interface User {
 2 |   id: string; // UUID
 3 |   email: string | null;
 4 |   username: string;
 5 |   created_at: Date;
 6 |   last_login: Date | null;
 7 | }
 8 | 
 9 | export interface PlayerProfile {
10 |   id: string; // UUID
11 |   user_id: string | null; // UUID
12 |   character_class_id: string | null; // UUID
13 |   level: number;
14 |   experience: number;
15 |   unlocked_abilities: string[]; // UUID[]
16 |   equipped_cosmetic_id: string | null; // UUID
17 |   created_at: Date;
18 | }
19 | 
20 | export interface CharacterClass {
21 |   id: string; // UUID
22 |   name: string;
23 |   description: string | null;
24 |   passive_ability_id: string | null; // UUID
25 |   icon: string | null;
26 | }
27 | 
28 | export interface EffectJson {
29 |   type: string; // e.g., 'damage', 'heal', 'stun', 'burn'
30 |   value?: number; // Amount of damage/heal
31 |   duration?: number; // For status effects
32 |   target: 'self' | 'enemy'; // Required for strict type safety
33 |   stat?: string; // For buffs (e.g., 'defense', 'attack')
34 |   // Add more specific effect properties as needed
35 | }
36 | 
37 | export interface Ability {
38 |   id: string; // UUID
39 |   name: string | null;
40 |   description: string | null;
41 |   class_id: string | null; // UUID
42 |   level_unlock: number | null;
43 |   type: 'active' | 'passive' | 'ultimate' | null;
44 |   energy_cost: number | null;
45 |   cooldown: number | null;
46 |   effects: EffectJson[]; // Array of effects
47 |   effect_json?: { // Added based on feedback
48 |     type?: string;    // e.g., 'damage', 'shield'
49 |     value?: number;   // for sorting or comparing
50 |   };
51 |   icon: string | null;
52 | }
53 | 
54 | export interface Match {
55 |   id: string; // UUID
56 |   player_a_id: string | null; // UUID
57 |   player_b_id: string | null; // UUID
58 |   winner_id: string | null; // UUID
59 |   status: 'active' | 'completed' | 'forfeit' | null;
60 |   started_at: Date | null;
61 |   ended_at: Date | null;
62 |   is_bot: boolean;
63 | }
64 | 
65 | export interface Turn {
66 |   id: string; // UUID
67 |   match_id: string | null; // UUID
68 |   turn_number: number | null;
69 |   acting_player_id: string | null; // UUID
70 |   ability_id: string | null; // UUID
71 |   target_id: string | null; // UUID
72 |   result_json: object | null; // JSONB
73 |   created_at: Date;
74 | }
75 | 
76 | export interface Cosmetic {
77 |   id: string; // UUID
78 |   name: string | null;
79 |   rarity: string | null;
80 |   image: string | null;
81 |   is_nft: boolean;
82 |   solana_mint_address: string | null;
83 |   owner_id: string | null; // UUID
84 | }


--------------------------------------------------------------------------------
/backend/src/utils/abilityLoader.ts:
--------------------------------------------------------------------------------
 1 | import path from 'path';
 2 | import fs from 'fs';
 3 | import { Ability } from '../types/db';
 4 | 
 5 | const ABILITIES_DIR = path.join(__dirname, '..', 'abilities');
 6 | 
 7 | export const loadAbility = (abilityName: string): Ability | null => {
 8 |   const filePath = path.join(ABILITIES_DIR, `${abilityName}.json`);
 9 |   try {
10 |     const fileContent = fs.readFileSync(filePath, 'utf-8');
11 |     return JSON.parse(fileContent) as Ability;
12 |   } catch (error) {
13 |     console.error(`Failed to load ability ${abilityName}:`, error);
14 |     return null;
15 |   }
16 | };
17 | 
18 | export const loadAllAbilities = (): Ability[] => {
19 |   const abilities: Ability[] = [];
20 |   try {
21 |     const files = fs.readdirSync(ABILITIES_DIR);
22 |     for (const file of files) {
23 |       if (file.endsWith('.json')) {
24 |         const abilityName = file.replace('.json', '');
25 |         const ability = loadAbility(abilityName);
26 |         if (ability) {
27 |           abilities.push(ability);
28 |         }
29 |       }
30 |     }
31 |   } catch (error) {
32 |     console.error('Failed to load all abilities:', error);
33 |   }
34 |   return abilities;
35 | };
36 | 
37 | export const getAbilitiesForPlayer = (playerId: string): Ability[] => {
38 |   // For now, return all abilities. In a real game, this would be based on player's character class, etc.
39 |   return loadAllAbilities();
40 | };


--------------------------------------------------------------------------------
/backend/src/utils/matchStateStore.ts:
--------------------------------------------------------------------------------
 1 | import type { MatchState } from '../match_engine/types';
 2 | 
 3 | const matches: Record<string, MatchState> = {};
 4 | 
 5 | export const getMatchState = (matchId: string): MatchState | undefined =>
 6 |   matches[matchId];
 7 | 
 8 | export const updateMatchState = (matchId: string, state: MatchState): void => {
 9 |   matches[matchId] = state;
10 | };
11 | 
12 | export const createMatchState = (matchId: string, state: MatchState): void => {
13 |   matches[matchId] = state;
14 | };


--------------------------------------------------------------------------------
/backend/tsconfig.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "compilerOptions": {
 3 |     "target": "es2020",
 4 |     "module": "commonjs",
 5 |     "esModuleInterop": true,
 6 |     "forceConsistentCasingInFileNames": true,
 7 |     "strict": true,
 8 |     "skipLibCheck": true,
 9 |     "resolveJsonModule": true,
10 |     "outDir": "./dist"
11 |   },
12 |   "include": ["src/**/*.ts"],
13 |   "exclude": ["node_modules", "dist"]
14 | }


--------------------------------------------------------------------------------
/combat_improvement_plan.md:
--------------------------------------------------------------------------------
 1 | # Combat Improvement Plan
 2 | 
 3 | ## Objectives
 4 | 
 5 | 1. **Fix status effect durations** so they decrement correctly each turn.
 6 | 2. **Enhance damage number presentation** for better readability and impact.
 7 | 3. **Add attack visual effects** to make combat actions more dynamic.
 8 | 
 9 | ## Implementation Outline
10 | 
11 | ### 1. Fix Status Effect Durations
12 | - Review how effects are managed in `src/screens/BattleScreen.tsx`.
13 | - Ensure each effect's `duration` decreases only after a full turn cycle.
14 | - Update cleanup logic so expired effects are removed consistently from `playerStatusEffects` and `enemyStatusEffects` arrays.
15 | - Add unit tests in `src/screens/__tests__` (or create a new folder) to verify duration handling.
16 | 
17 | ### 2. Enhance Damage Number Presentation
18 | - Locate the floating damage number logic in `src/screens/BattleScreen.tsx`.
19 | - Adjust the CSS animation in `src/App.css` (`.animate-float-damage` rule) for clearer motion and fade-out.
20 | - Style the damage text with outlines or glows for readability against any background.
21 | - Consider creating a small component (e.g., `DamageNumber.tsx`) if repeated logic is needed.
22 | 
23 | ### 3. Add Attack Visual Effects
24 | - Use `framer-motion` or CSS classes in `src/screens/BattleScreen.tsx` to trigger hit flashes and shakes when abilities connect.
25 | - Extend existing classes in `src/App.css` (e.g., `.shake`, `.flash-red`) or add new ones for unique effects like sparks or energy trails.
26 | - Reference components such as `AbilityAnnouncement.tsx` for timing attack effects alongside announcements.
27 | - Ensure visual effects are reset correctly when turns change to avoid lingering animations.
28 | 
29 | ## Key Files
30 | - `src/screens/BattleScreen.tsx` – main combat logic and UI updates.
31 | - `src/App.css` – global styles and animation rules.
32 | - `src/components/AbilityAnnouncement.tsx` – shows ability names; coordinate with effect triggers.
33 | - Additional components like `HealthBar.tsx` or future `DamageNumber.tsx` may be touched to keep UI consistent.
34 | 
35 | ## Next Steps
36 | 1. Discuss this plan with the team and prioritize tasks.
37 | 2. Implement improvements iteratively, testing after each change with `npm test`.
38 | 3. Update documentation and commit messages to reflect progress.
39 | 


--------------------------------------------------------------------------------
/frontend/.gitignore:
--------------------------------------------------------------------------------
 1 | # See https://help.github.com/articles/ignoring-files/ for more about ignoring files.
 2 | 
 3 | # dependencies
 4 | /node_modules
 5 | /.pnp
 6 | .pnp.js
 7 | 
 8 | # testing
 9 | /coverage
10 | 
11 | # production
12 | /build
13 | 
14 | # misc
15 | .DS_Store
16 | .env.local
17 | .env.development.local
18 | .env.test.local
19 | .env.production.local
20 | .env
21 | dist/
22 | node_modules/
23 | 
24 | npm-debug.log*
25 | yarn-debug.log*
26 | yarn-error.log*
27 | 


--------------------------------------------------------------------------------
/frontend/Game Concept and Monetization Plan Mind Map.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/fakesavian/OZF-GAME/5f653fee8e26ce1f9bfef2b98ac6ad1ad13107b7/frontend/Game Concept and Monetization Plan Mind Map.png


--------------------------------------------------------------------------------
/frontend/README.md:
--------------------------------------------------------------------------------
 1 | # Getting Started with Create React App
 2 | 
 3 | This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
 4 | 
 5 | ## Available Scripts
 6 | 
 7 | In the project directory, you can run:
 8 | 
 9 | ### `npm start`
10 | 
11 | Runs the app in the development mode.\
12 | Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
13 | 
14 | The page will reload if you make edits.\
15 | You will also see any lint errors in the console.
16 | 
17 | ### `npm test`
18 | 
19 | Launches the test runner in the interactive watch mode.\
20 | See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
21 | 
22 | ### `npm run build`
23 | 
24 | Builds the app for production to the `build` folder.\
25 | It correctly bundles React in production mode and optimizes the build for the best performance.
26 | 
27 | The build is minified and the filenames include the hashes.\
28 | Your app is ready to be deployed!
29 | 
30 | See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
31 | 
32 | ### `npm run eject`
33 | 
34 | **Note: this is a one-way operation. Once you `eject`, you can’t go back!**
35 | 
36 | If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.
37 | 
38 | Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.
39 | 
40 | You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
41 | 
42 | ## Learn More
43 | 
44 | You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
45 | 
46 | To learn React, check out the [React documentation](https://reactjs.org/).
47 | 


--------------------------------------------------------------------------------
/frontend/backend/ozf_cli_simulator.ts:
--------------------------------------------------------------------------------
 1 | import readline from 'readline';
 2 | import fetch from 'node-fetch';
 3 | 
 4 | const rl = readline.createInterface({
 5 |   input: process.stdin,
 6 |   output: process.stdout
 7 | });
 8 | 
 9 | let matchId: string = '';
10 | let playerId = 'testPlayer';
11 | 
12 | async function startMatch() {
13 |   const res = await fetch('http://localhost:3000/api/match/start', {
14 |     method: 'POST',
15 |     headers: { 'Content-Type': 'application/json' },
16 |     body: JSON.stringify({ playerAId: playerId })
17 |   });
18 |   const data = await res.json();
19 |   matchId = data.id;
20 |   console.log(`Match started. ID: ${matchId}`);
21 |   playTurn();
22 | }
23 | 
24 | async function playTurn() {
25 |   rl.question('Choose ability (e.g. cleave, shield_wall): ', async (abilityId) => {
26 |     const res = await fetch(`http://localhost:3000/api/match/${matchId}/turn`, {
27 |       method: 'POST',
28 |       headers: { 'Content-Type': 'application/json' },
29 |       body: JSON.stringify({
30 |         playerId: playerId,
31 |         abilityId: abilityId.trim(),
32 |         targetId: 'BOT'
33 |       })
34 |     });
35 | 
36 |     const data = await res.json();
37 |     console.log('--- Combat Log ---');
38 |     data.combatLog.forEach((line: string) => console.log(line));
39 |     console.log('------------------');
40 | 
41 |     if (data.winner) {
42 |       console.log(`🏆 Match over. Winner: ${data.winner}`);
43 |       rl.close();
44 |     } else {
45 |       playTurn();
46 |     }
47 |   });
48 | }
49 | 
50 | startMatch();


--------------------------------------------------------------------------------
/frontend/backend/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "backend",
 3 |   "version": "1.0.0",
 4 |   "main": "index.js",
 5 |   "scripts": {
 6 |     "start": "ts-node src/server.ts",
 7 |     "build": "tsc",
 8 |     "dev": "nodemon src/server.ts",
 9 |     "test": "echo \"Error: no test specified\" && exit 1",
10 |     "start:cli": "ts-node ozf_cli_simulator.ts"
11 |   },
12 |   "keywords": [],
13 |   "author": "",
14 |   "license": "ISC",
15 |   "description": "",
16 |   "dependencies": {
17 |     "cors": "^2.8.5",
18 |     "express": "^5.1.0",
19 |     "node-fetch": "^2.7.0",
20 |     "pg": "^8.16.0",
21 |     "uuid": "^11.1.0",
22 |     "ws": "^8.18.2"
23 |   },
24 |   "devDependencies": {
25 |     "@tailwindcss/postcss": "^4.1.8",
26 |     "@types/cors": "^2.8.18",
27 |     "@types/express": "^5.0.2",
28 |     "@types/node": "^22.0.0",
29 |     "@types/node-fetch": "^2.6.12",
30 |     "@types/pg": "^8.15.2",
31 |     "@types/uuid": "^10.0.0",
32 |     "@types/ws": "^8.18.1",
33 |     "nodemon": "^3.1.10",
34 |     "ts-node": "^10.9.2",
35 |     "typescript": "^5.8.3"
36 |   }
37 | }
38 | 


--------------------------------------------------------------------------------
/frontend/backend/src/abilities/mage.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "mage_fireball": {
 3 |     "name": "Mage Fireball",
 4 |     "energy_cost": 15,
 5 |     "cooldown": 1,
 6 |     "target": "enemy",
 7 |     "effects": [
 8 |       { "type": "damage", "value": 25 }
 9 |     ]
10 |   }
11 | }


--------------------------------------------------------------------------------
/frontend/backend/src/abilities/mage_fireball.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "id": "mage_fireball_uuid",
 3 |   "name": "Mage Fireball",
 4 |   "description": "Hurls a ball of fire at the enemy.",
 5 |   "class_id": "mage_class_uuid",
 6 |   "level_unlock": 1,
 7 |   "type": "active",
 8 |   "energy_cost": 15,
 9 |   "cooldown": 1,
10 |   "effect_json": {
11 |     "type": "damage",
12 |     "value": 30,
13 |     "target": "enemy"
14 |   },
15 |   "icon": "fireball_icon.png"
16 | }


--------------------------------------------------------------------------------
/frontend/backend/src/abilities/warrior.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "warrior_slash": {
 3 |     "name": "Warrior Slash",
 4 |     "energy_cost": 10,
 5 |     "cooldown": 1,
 6 |     "target": "enemy",
 7 |     "effects": [
 8 |       { "type": "damage", "value": 20 }
 9 |     ]
10 |   },
11 |   "meteor_charge": {
12 |     "name": "Meteoric Charge",
13 |     "energy_cost": 20,
14 |     "cooldown": 2,
15 |     "target": "enemy",
16 |     "effects": [
17 |       { "type": "stun", "duration": 1 },
18 |       { "type": "damage", "value": 30 }
19 |     ]
20 |   }
21 | }


--------------------------------------------------------------------------------
/frontend/backend/src/abilities/warrior_slash.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "id": "warrior_slash_uuid",
 3 |   "name": "Warrior Slash",
 4 |   "description": "A basic melee attack.",
 5 |   "class_id": "warrior_class_uuid",
 6 |   "level_unlock": 1,
 7 |   "type": "active",
 8 |   "energy_cost": 10,
 9 |   "cooldown": 0,
10 |   "effect_json": {
11 |     "type": "damage",
12 |     "value": 20,
13 |     "target": "enemy"
14 |   },
15 |   "icon": "slash_icon.png"
16 | }


--------------------------------------------------------------------------------
/frontend/backend/src/api/match.ts:
--------------------------------------------------------------------------------
 1 | import express from 'express';
 2 | import { v4 as uuidv4 } from 'uuid';
 3 | import { createMatchState } from '../utils/matchStateStore';
 4 | import { MatchState, PlayerState } from '../match_engine/types';
 5 | import { getAbilitiesForPlayer } from '../utils/abilityLoader'; // Assuming this function exists
 6 | 
 7 | const router = express.Router();
 8 | 
 9 | router.post('/start', (req, res) => {
10 |   const { playerAId, playerBId = 'BOT' } = req.body;
11 | 
12 |   const matchId = uuidv4();
13 | 
14 |   // Placeholder for fetching player profiles and abilities
15 |   // In a real scenario, you'd fetch these from a database
16 |   const playerAProfile = {
17 |     id: playerAId,
18 |     user_id: playerAId, // Mock value
19 |     character_class_id: 'default', // Mock value
20 |     level: 1, // Mock value
21 |     experience: 0, // Mock value
22 |     unlocked_abilities: [], // Mock value
23 |     equipped_cosmetic_id: null, // Mock value
24 |     created_at: new Date(), // Mock value
25 |     username: `Player ${playerAId.substring(0, 4)}`
26 |   };
27 |   const playerBProfile = {
28 |     id: playerBId,
29 |     user_id: playerBId, // Mock value
30 |     character_class_id: 'default', // Mock value
31 |     level: 1, // Mock value
32 |     experience: 0, // Mock value
33 |     unlocked_abilities: [], // Mock value
34 |     equipped_cosmetic_id: null, // Mock value
35 |     created_at: new Date(), // Mock value
36 |     username: playerBId === 'BOT' ? 'Bot' : `Player ${playerBId.substring(0, 4)}`
37 |   };
38 | 
39 |   const playerAAbilities = getAbilitiesForPlayer(playerAId);
40 |   const playerBAbilities = getAbilitiesForPlayer(playerBId);
41 | 
42 |   const initialPlayerAState: PlayerState = {
43 |     profile: playerAProfile,
44 |     username: playerAProfile.username,
45 |     hp: 100,
46 |     maxHealth: 100,
47 |     energy: 100,
48 |     maxEnergy: 100,
49 |     speed: 10,
50 |     abilities: playerAAbilities,
51 |     statusEffects: [],
52 |     cooldowns: {},
53 |     isBot: false,
54 |     id: playerAId,
55 |   };
56 | 
57 |   const initialPlayerBState: PlayerState = {
58 |     profile: playerBProfile,
59 |     username: playerBProfile.username,
60 |     hp: 100,
61 |     maxHealth: 100,
62 |     energy: 100,
63 |     maxEnergy: 100,
64 |     speed: 10,
65 |     abilities: playerBAbilities,
66 |     statusEffects: [],
67 |     cooldowns: {},
68 |     isBot: playerBId === 'BOT',
69 |     id: playerBId,
70 |   };
71 | 
72 |   const initialMatchState: MatchState = {
73 |     id: matchId,
74 |     playerA: initialPlayerAState,
75 |     playerB: initialPlayerBState,
76 |     turnNumber: 1,
77 |     activePlayerId: playerAId, // Player A starts
78 |     combatLog: [],
79 |     status: 'active',
80 |     winnerId: null,
81 |     isBot: playerBId === 'BOT',
82 |     turnLog: [], // Initialize turnLog as an empty array
83 |   };
84 | 
85 |   createMatchState(matchId, initialMatchState);
86 | 
87 |   console.log('Match started:', initialMatchState);
88 |   res.status(201).json(initialMatchState);
89 | });
90 | 
91 | export default router;


--------------------------------------------------------------------------------
/frontend/backend/src/api/turn.ts:
--------------------------------------------------------------------------------
 1 | import express, { Request, Response, Router } from 'express';
 2 | import { runMatchTurn } from '../match_engine/resolver';
 3 | import { getMatchState, updateMatchState } from '../utils/matchStateStore';
 4 | import { TurnAction } from '../match_engine/types';
 5 | 
 6 | const router: Router = express.Router();
 7 | 
 8 | router.post('/:matchId/turn', async (req: Request<{ matchId: string }, any, TurnAction>, res: Response): Promise<void> => {
 9 |   const matchId = req.params.matchId;
10 |   const { actorId, abilityId, targetId } = req.body;
11 | 
12 |   const matchState = getMatchState(matchId);
13 | 
14 |   if (!matchState) {
15 |     res.status(404).json({ error: 'Match not found' });
16 |     return;
17 |   }
18 | 
19 |   try {
20 |     const result = runMatchTurn(matchState, {
21 |       actorId,
22 |       abilityId,
23 |       targetId,
24 |     });
25 | 
26 |     updateMatchState(matchId, result.updatedMatchState);
27 | 
28 |     res.status(200).json({
29 |       updatedState: result.updatedMatchState,
30 |       combatLog: result.combatLog,
31 |       winner: result.winner || null,
32 |     });
33 |   } catch (err) {
34 |     console.error(err);
35 |     res.status(500).json({ error: 'Failed to resolve turn' });
36 |   }
37 | });
38 | 
39 | export default router;


--------------------------------------------------------------------------------
/frontend/backend/src/db.ts:
--------------------------------------------------------------------------------
 1 | import { Pool } from 'pg';
 2 | import { Match, Turn, PlayerProfile } from './types/db';
 3 | 
 4 | const pool = new Pool({
 5 |   user: process.env.DB_USER,
 6 |   host: process.env.DB_HOST,
 7 |   database: process.env.DB_NAME,
 8 |   password: process.env.DB_PASSWORD,
 9 |   port: parseInt(process.env.DB_PORT || '5432', 10),
10 | });
11 | 
12 | pool.on('error', (err) => {
13 |   console.error('Unexpected error on idle client', err);
14 |   process.exit(-1);
15 | });
16 | 
17 | export const query = (text: string, params?: any[]) => pool.query(text, params);
18 | 
19 | export const createMatch = async (playerAId: string, playerBId: string, isBot: boolean): Promise<Match> => {
20 |   const result = await query(
21 |     `INSERT INTO matches (player_a_id, player_b_id, status, started_at, is_bot)
22 |      VALUES ($1, $2, $3, NOW(), $4)
23 |      RETURNING *`,
24 |     [playerAId, playerBId, 'active', isBot]
25 |   );
26 |   return result.rows[0];
27 | };
28 | 
29 | export const updateMatchStatus = async (matchId: string, status: Match['status'], winnerId: string | null = null): Promise<Match> => {
30 |   const result = await query(
31 |     `UPDATE matches SET status = $1, ended_at = NOW(), winner_id = $2 WHERE id = $3 RETURNING *`,
32 |     [status, winnerId, matchId]
33 |   );
34 |   return result.rows[0];
35 | };
36 | 
37 | export const getMatchById = async (matchId: string): Promise<Match | null> => {
38 |   const result = await query(`SELECT * FROM matches WHERE id = $1`, [matchId]);
39 |   return result.rows[0] || null;
40 | };
41 | 
42 | export const createTurn = async (turn: Omit<Turn, 'id' | 'created_at'>): Promise<Turn> => {
43 |   const result = await query(
44 |     `INSERT INTO turns (match_id, turn_number, acting_player_id, ability_id, target_id, result_json)
45 |      VALUES ($1, $2, $3, $4, $5, $6)
46 |      RETURNING *`,
47 |     [turn.match_id, turn.turn_number, turn.acting_player_id, turn.ability_id, turn.target_id, turn.result_json]
48 |   );
49 |   return result.rows[0];
50 | };
51 | 
52 | export const getPlayerProfileById = async (profileId: string): Promise<PlayerProfile | null> => {
53 |   const result = await query(`SELECT * FROM player_profiles WHERE id = $1`, [profileId]);
54 |   return result.rows[0] || null;
55 | };
56 | 
57 | export const createPlayerProfile = async (userId: string | null, characterClassId: string | null, isBot: boolean = false): Promise<PlayerProfile> => {
58 |   // For bot profiles, user_id can be null. For real players, it should be provided.
59 |   const result = await query(
60 |     `INSERT INTO player_profiles (user_id, character_class_id, level, experience, unlocked_abilities, equipped_cosmetic_id, created_at)
61 |      VALUES ($1, $2, $3, $4, $5, $6, NOW())
62 |      RETURNING *`,
63 |     [userId, characterClassId, 1, 0, [], null, ]
64 |   );
65 |   return result.rows[0];
66 | };


--------------------------------------------------------------------------------
/frontend/backend/src/match_engine/abilities/index.ts:
--------------------------------------------------------------------------------
 1 | import warriorAbilitiesData from '../../abilities/warrior.json';
 2 | import mageAbilitiesData from '../../abilities/mage.json';
 3 | import warriorSlashData from '../../abilities/warrior_slash.json';
 4 | import mageFireballData from '../../abilities/mage_fireball.json';
 5 | import { Ability } from '../../types/db';
 6 | 
 7 | const registry: Record<string, Ability> = {};
 8 | 
 9 | // Helper to add abilities from a JSON object to the registry
10 | const addAbilitiesToRegistry = (abilitiesObject: Record<string, any>) => {
11 |   for (const key in abilitiesObject) {
12 |     if (Object.prototype.hasOwnProperty.call(abilitiesObject, key)) {
13 |       // Cast to Ability, assuming the structure matches
14 |       registry[key] = abilitiesObject[key] as Ability;
15 |     }
16 |   }
17 | };
18 | 
19 | // Add abilities from each imported JSON file
20 | addAbilitiesToRegistry(warriorAbilitiesData);
21 | addAbilitiesToRegistry(mageAbilitiesData);
22 | addAbilitiesToRegistry({ [warriorSlashData.id]: warriorSlashData }); // Wrap single ability in an object
23 | addAbilitiesToRegistry({ [mageFireballData.id]: mageFireballData }); // Wrap single ability in an object
24 | 
25 | export function getAbilityById(id: string): Ability | undefined {
26 |   return registry[id];
27 | }


--------------------------------------------------------------------------------
/frontend/backend/src/match_engine/abilities/mage.json:
--------------------------------------------------------------------------------
1 | {}


--------------------------------------------------------------------------------
/frontend/backend/src/match_engine/abilities/warrior.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "meteor_charge": {
 3 |     "name": "Meteoric Charge",
 4 |     "description": "Rushes the target and stuns them.",
 5 |     "energy_cost": 20,
 6 |     "cooldown": 2,
 7 |     "target": "enemy",
 8 |     "effects": [
 9 |       { "type": "damage", "value": 30 },
10 |       { "type": "stun", "duration": 1 }
11 |     ]
12 |   },
13 |   "iron_defense": {
14 |     "name": "Iron Defense",
15 |     "description": "Raises your armor and grants a shield.",
16 |     "energy_cost": 15,
17 |     "cooldown": 3,
18 |     "target": "self",
19 |     "effects": [
20 |       { "type": "buff", "stat": "defense", "value": 10, "duration": 2 },
21 |       { "type": "shield", "value": 20 }
22 |     ]
23 |   },
24 |   "cleave": {
25 |     "name": "Cleave",
26 |     "description": "Deals damage to the enemy and reduces their energy.",
27 |     "energy_cost": 25,
28 |     "cooldown": 2,
29 |     "target": "enemy",
30 |     "effects": [
31 |       { "type": "damage", "value": 40 },
32 |       { "type": "drain_energy", "value": 10 }
33 |     ]
34 |   },
35 |   "passive": {
36 |     "name": "Battle Resilience",
37 |     "description": "Takes 10% less damage when under 50% HP.",
38 |     "type": "passive",
39 |     "trigger": "on_hit",
40 |     "condition": { "hp_below_percent": 50 },
41 |     "effects": [
42 |       { "type": "damage_reduction", "value": 10 }
43 |     ]
44 |   },
45 |   "ultimate": {
46 |     "name": "Colossus Strike",
47 |     "description": "Devastating attack that ignores armor.",
48 |     "energy_cost": 50,
49 |     "cooldown": 5,
50 |     "target": "enemy",
51 |     "effects": [
52 |       { "type": "damage", "value": 70, "ignore_defense": true },
53 |       { "type": "stun", "duration": 2 }
54 |     ]
55 |   }
56 | }


--------------------------------------------------------------------------------
/frontend/backend/src/match_engine/bot_ai/aggressive_bot.ts:
--------------------------------------------------------------------------------
 1 | import { PlayerState, TurnAction } from '../types';
 2 | import { Ability } from '../../types/db';
 3 | import { getAbilityById } from '../abilities';
 4 | 
 5 | export function getAction(bot: PlayerState, opponent: PlayerState): TurnAction {
 6 |   const usable = bot.abilities.filter((ability: Ability) => {
 7 |     return bot.energy >= (ability.energy_cost || 0) && (!bot.cooldowns[ability.id] || bot.cooldowns[ability.id] === 0);
 8 |   }).sort((a: Ability, b: Ability) => (b.effect_json?.value || 0) - (a.effect_json?.value || 0));
 9 | 
10 |   const chosenAbility = usable[0] || { id: 'wait' };
11 | 
12 | 
13 |   return {
14 |     actorId: bot.id,
15 |     abilityId: chosenAbility.id,
16 |     targetId: opponent.id
17 |   };
18 | }


--------------------------------------------------------------------------------
/frontend/backend/src/match_engine/bot_ai/defensive_bot.ts:
--------------------------------------------------------------------------------
 1 | import { PlayerState, TurnAction } from '../types';
 2 | import { Ability } from '../../types/db';
 3 | import { getAbilityById } from '../abilities';
 4 | 
 5 | export function getAction(bot: PlayerState, opponent: PlayerState): TurnAction {
 6 |   const shieldAbility = bot.abilities.filter((ability: Ability) => {
 7 |     return ability.effect_json?.type === 'shield' &&
 8 |            bot.energy >= (ability.energy_cost || 0) &&
 9 |            (!bot.cooldowns[ability.id] || bot.cooldowns[ability.id] === 0);
10 |   });
11 | 
12 |   if (bot.hp < 50 && shieldAbility.length > 0) {
13 |     return {
14 |       actorId: bot.id,
15 |       abilityId: shieldAbility[0].id,
16 |       targetId: bot.id
17 |     };
18 |   }
19 | 
20 |   // Fallback: use any damage skill
21 |   const dmg = bot.abilities.filter((ability: Ability) => {
22 |     return ability.effect_json?.type === 'damage';
23 |   });
24 | 
25 |   return {
26 |     actorId: bot.id,
27 |     abilityId: dmg[0]?.id || 'wait',
28 |     targetId: opponent.id
29 |   };
30 | }


--------------------------------------------------------------------------------
/frontend/backend/src/match_engine/bot_ai/index.ts:
--------------------------------------------------------------------------------
 1 | import * as RandomBot from './random_bot';
 2 | import * as AggressiveBot from './aggressive_bot';
 3 | import * as DefensiveBot from './defensive_bot';
 4 | import * as TacticalBot from './tactical_bot';
 5 | 
 6 | export const BotModels = {
 7 |   random: RandomBot,
 8 |   aggressive: AggressiveBot,
 9 |   defensive: DefensiveBot,
10 |   tactical: TacticalBot
11 | };


--------------------------------------------------------------------------------
/frontend/backend/src/match_engine/bot_ai/random_bot.ts:
--------------------------------------------------------------------------------
 1 | import { PlayerState, TurnAction } from '../types';
 2 | import { Ability } from '../../types/db';
 3 | export function getAction(bot: PlayerState, opponent: PlayerState): TurnAction {
 4 |   const usable = bot.abilities.filter((ability: Ability) => {
 5 |     return bot.energy >= (ability.energy_cost || 0) && (!bot.cooldowns[ability.id] || bot.cooldowns[ability.id] === 0);
 6 |   });
 7 | 
 8 |   const choice = usable[Math.floor(Math.random() * usable.length)]?.id || 'wait';
 9 | 
10 |   return {
11 |     actorId: bot.id,
12 |     abilityId: choice,
13 |     targetId: opponent.id
14 |   };
15 | }


--------------------------------------------------------------------------------
/frontend/backend/src/match_engine/bot_ai/tactical_bot.ts:
--------------------------------------------------------------------------------
 1 | import { PlayerState, TurnAction } from '../types';
 2 | import { Ability } from '../../types/db';
 3 | import { getAbilityById } from '../abilities';
 4 | 
 5 | export function getAction(bot: PlayerState, opponent: PlayerState): TurnAction {
 6 |   const usable = bot.abilities
 7 |     .filter((a: Ability) => bot.energy >= (a.energy_cost || 0) && (!bot.cooldowns[a.id] || bot.cooldowns[a.id] === 0));
 8 | 
 9 |   const stun = usable.find((a: Ability) => a.effect_json?.type === 'stun');
10 |   const shield = usable.find((a: Ability) => a.effect_json?.type === 'shield');
11 |   const heavyHit = usable.find((a: Ability) => a.effect_json?.type === 'damage' && (a.effect_json?.value || 0) >= 40);
12 | 
13 |   if (opponent.energy >= 50 && stun) {
14 |     return { actorId: bot.id, abilityId: stun.id, targetId: opponent.id };
15 |   }
16 |   if (bot.hp <= 50 && shield) {
17 |     return { actorId: bot.id, abilityId: shield.id, targetId: bot.id };
18 |   }
19 |   if (heavyHit) {
20 |     return { actorId: bot.id, abilityId: heavyHit.id, targetId: opponent.id };
21 |   }
22 | 
23 |   return {
24 |     actorId: bot.id,
25 |     abilityId: usable[0]?.id || 'wait',
26 |     targetId: opponent.id
27 |   };
28 | }


--------------------------------------------------------------------------------
/frontend/backend/src/match_engine/combat_log.ts:
--------------------------------------------------------------------------------
 1 | import { CombatLogEntry } from './types';
 2 | 
 3 | export const addLogEntry = (
 4 |   turnNumber: number,
 5 |   message: string,
 6 |   playerId?: string,
 7 |   abilityId?: string,
 8 |   effectType?: string,
 9 |   value?: number
10 | ): CombatLogEntry => {
11 |   return {
12 |     turnNumber,
13 |     message,
14 |     playerId,
15 |     abilityId,
16 |     effectType,
17 |     value,
18 |   };
19 | };
20 | 
21 | export const getCombatLog = (log: CombatLogEntry[]): string[] => {
22 |   return log.map(entry => `Turn ${entry.turnNumber}: ${entry.message}`);
23 | };


--------------------------------------------------------------------------------
/frontend/backend/src/match_engine/effect_runner.ts:
--------------------------------------------------------------------------------
 1 | import { MatchState, PlayerState, Effect, CombatLogEntry, StatusEffect } from './types';
 2 | import { applyDamage, applyHealing, addStatusEffect, updatePlayerState } from './state';
 3 | import { addLogEntry } from './combat_log';
 4 | 
 5 | export const runEffect = (
 6 |   effect: Effect,
 7 |   sourcePlayer: PlayerState,
 8 |   targetPlayer: PlayerState,
 9 |   matchState: MatchState
10 | ): { newMatchState: MatchState; logs: CombatLogEntry[] } => {
11 |   let currentMatchState = { ...matchState };
12 |   let logs: CombatLogEntry[] = [];
13 |   let updatedTargetPlayer = { ...targetPlayer };
14 | 
15 |   const target = effect.target === 'self' ? sourcePlayer : targetPlayer;
16 |   const targetId = target.profile.id;
17 | 
18 |   switch (effect.type) {
19 |     case 'damage':
20 |       if (effect.value !== undefined) {
21 |         updatedTargetPlayer = applyDamage(target, effect.value);
22 |         logs.push(addLogEntry(currentMatchState.turnNumber, `${target.username} took ${effect.value} damage!`, targetId, undefined, 'damage', effect.value));
23 |       }
24 |       break;
25 |     case 'heal':
26 |       if (effect.value !== undefined) {
27 |         updatedTargetPlayer = applyHealing(target, effect.value);
28 |         logs.push(addLogEntry(currentMatchState.turnNumber, `${target.username} healed for ${effect.value} health!`, targetId, undefined, 'heal', effect.value));
29 |       }
30 |       break;
31 |     case 'stun':
32 |       if (effect.duration !== undefined) {
33 |         const stunEffect: StatusEffect = {
34 |           id: `stun-${Date.now()}`, // Simple unique ID
35 |           type: 'stun',
36 |           duration: effect.duration,
37 |           sourceAbilityId: '', // TODO: Pass actual ability ID
38 |           appliedAtTurn: currentMatchState.turnNumber,
39 |         };
40 |         updatedTargetPlayer = addStatusEffect(target, stunEffect);
41 |         logs.push(addLogEntry(currentMatchState.turnNumber, `${target.username} was stunned for ${effect.duration} turn(s)!`, targetId, undefined, 'stun'));
42 |       }
43 |       break;
44 |     // Add more effect types as needed
45 |     default:
46 |       console.warn(`Unknown effect type: ${effect.type}`);
47 |       break;
48 |   }
49 | 
50 |   currentMatchState = updatePlayerState(currentMatchState, updatedTargetPlayer);
51 | 
52 |   return { newMatchState: currentMatchState, logs };
53 | };


--------------------------------------------------------------------------------
/frontend/backend/src/match_engine/index.ts:
--------------------------------------------------------------------------------
 1 | import { MatchState, TurnAction, CombatLogEntry } from './types';
 2 | import { validateTurn } from './validator';
 3 | import { runMatchTurn } from './resolver';
 4 | import { checkVictoryCondition } from './victory_checker';
 5 | import { Ability } from '../types/db';
 6 | import { BotModels } from './bot_ai/index';
 7 | 
 8 | export const runTurn = (
 9 |   initialMatchState: MatchState,
10 |   playerATurn: TurnAction | null,
11 |   playerBTurn: TurnAction | null,
12 |   abilities: Ability[]
13 | ): { newMatchState: MatchState; logs: CombatLogEntry[]; isGameOver: boolean; winnerId: string | null } => {
14 |   let currentMatchState = { ...initialMatchState };
15 |   let logs: CombatLogEntry[] = [];
16 | 
17 |   // Validate player A's turn (if applicable)
18 |   if (playerATurn && !validateTurn(currentMatchState, playerATurn)) {
19 |     logs.push({ turnNumber: currentMatchState.turnNumber, message: `Invalid turn for Player A: ${playerATurn.actorId}` });
20 |     playerATurn = null; // Invalidate the turn
21 |   }
22 | 
23 |   // If it's a PvE match and it's the bot's turn, generate bot action
24 |   let botTurnAction: TurnAction | null = null;
25 |   if (currentMatchState.isBot && currentMatchState.activePlayerId === currentMatchState.playerB.profile.id) {
26 |     // For now, hardcode botType to 'tactical'. This should be dynamic in a real game.
27 |     const botType = 'tactical';
28 |     const botAI = BotModels[botType];
29 |     
30 |     if (botAI) {
31 |       botTurnAction = botAI.getAction(currentMatchState.playerB, currentMatchState.playerA);
32 |       logs.push({ turnNumber: currentMatchState.turnNumber, message: `Bot (${currentMatchState.playerB.username}) chose its action.` });
33 |     } else {
34 |       logs.push({ turnNumber: currentMatchState.turnNumber, message: `Bot AI type '${botType}' not found.` });
35 |     }
36 |   }
37 | 
38 |   // Resolve turns
39 |   const { updatedMatchState: resolvedState, combatLog: turnLogs, winner: turnWinner } = runMatchTurn(
40 |     currentMatchState,
41 |     (playerATurn || botTurnAction || playerBTurn)! // Use non-null assertion
42 |   );
43 |   currentMatchState = resolvedState;
44 |   logs = logs.concat(turnLogs);
45 | 
46 |   // Check for victory conditions
47 |   const { isGameOver, winnerId } = checkVictoryCondition(currentMatchState);
48 |   if (isGameOver) {
49 |     currentMatchState.status = 'completed';
50 |     currentMatchState.winnerId = winnerId;
51 |     logs.push({ turnNumber: currentMatchState.turnNumber, message: `Match ended! Winner: ${winnerId || 'No one'}` });
52 |   }
53 | 
54 |   // Update active player for next turn (simple round-robin for now)
55 |   if (!isGameOver) {
56 |     currentMatchState.activePlayerId =
57 |       currentMatchState.activePlayerId === currentMatchState.playerA.profile.id
58 |         ? currentMatchState.playerB.profile.id
59 |         : currentMatchState.playerA.profile.id;
60 |   }
61 | 
62 | 
63 |   return { newMatchState: currentMatchState, logs, isGameOver, winnerId };
64 | };


--------------------------------------------------------------------------------
/frontend/backend/src/match_engine/state.ts:
--------------------------------------------------------------------------------
 1 | import { MatchState, PlayerState, Effect, StatusEffect } from './types';
 2 | import { PlayerProfile, Ability } from '../types/db';
 3 | 
 4 | export const initializePlayerState = (profile: PlayerProfile, username: string, abilities: Ability[], isBot: boolean = false): PlayerState => {
 5 |   return {
 6 |     id: profile.id, // Add id from profile
 7 |     profile: profile,
 8 |     username: username,
 9 |     hp: 100, // Example base health
10 |     maxHealth: 100,
11 |     energy: 50, // Example base energy
12 |     maxEnergy: 100,
13 |     speed: 10, // Example base speed
14 |     abilities: abilities,
15 |     statusEffects: [],
16 |     cooldowns: {},
17 |     isBot: isBot,
18 |   };
19 | };
20 | 
21 | export const applyDamage = (playerState: PlayerState, amount: number): PlayerState => {
22 |   const newHealth = Math.max(0, playerState.hp - amount);
23 |   return { ...playerState, hp: newHealth };
24 | };
25 | 
26 | export const applyHealing = (playerState: PlayerState, amount: number): PlayerState => {
27 |   const newHealth = Math.min(playerState.maxHealth, playerState.hp + amount);
28 |   return { ...playerState, hp: newHealth };
29 | };
30 | 
31 | export const applyEnergyCost = (playerState: PlayerState, amount: number): PlayerState => {
32 |   const newEnergy = Math.max(0, playerState.energy - amount);
33 |   return { ...playerState, energy: newEnergy };
34 | };
35 | 
36 | export const addStatusEffect = (playerState: PlayerState, effect: StatusEffect): PlayerState => {
37 |   return { ...playerState, statusEffects: [...playerState.statusEffects, effect] };
38 | };
39 | 
40 | export const updateCooldown = (playerState: PlayerState, abilityId: string, turns: number): PlayerState => {
41 |   return { ...playerState, cooldowns: { ...playerState.cooldowns, [abilityId]: turns } };
42 | };
43 | 
44 | export const decrementCooldowns = (playerState: PlayerState): PlayerState => {
45 |   const newCooldowns: { [abilityId: string]: number } = {};
46 |   for (const abilityId in playerState.cooldowns) {
47 |     const remainingTurns = playerState.cooldowns[abilityId] - 1;
48 |     if (remainingTurns > 0) {
49 |       newCooldowns[abilityId] = remainingTurns;
50 |     }
51 |   }
52 |   return { ...playerState, cooldowns: newCooldowns };
53 | };
54 | 
55 | export const updatePlayerState = (matchState: MatchState, updatedPlayerState: PlayerState): MatchState => {
56 |   if (matchState.playerA.profile.id === updatedPlayerState.profile.id) {
57 |     return { ...matchState, playerA: updatedPlayerState };
58 |   } else if (matchState.playerB.profile.id === updatedPlayerState.profile.id) {
59 |     return { ...matchState, playerB: updatedPlayerState };
60 |   }
61 |   return matchState; // Should not happen
62 | };


--------------------------------------------------------------------------------
/frontend/backend/src/match_engine/types.ts:
--------------------------------------------------------------------------------
 1 | import { Ability, PlayerProfile } from '../types/db';
 2 | 
 3 | export interface PlayerState {
 4 |   profile: PlayerProfile;
 5 |   username: string; // Added for easier access in match engine
 6 |   hp: number; // Renamed from currentHealth for brevity
 7 |   maxHealth: number;
 8 |   energy: number; // Renamed from currentEnergy for brevity
 9 |   maxEnergy: number;
10 |   speed: number;
11 |   abilities: Ability[]; // Abilities available to this player in the current match
12 |   statusEffects: StatusEffect[];
13 |   cooldowns: Record<string, number>; // abilityId → turns remaining
14 |   isBot: boolean;
15 |   id: string; // Added for status_manager.ts PlayerState compatibility
16 | }
17 | 
18 | export interface MatchState {
19 |   id: string; // Match UUID
20 |   playerA: PlayerState;
21 |   playerB: PlayerState;
22 |   turnNumber: number;
23 |   activePlayerId: string; // UUID of the player whose turn it is
24 |   combatLog: CombatLogEntry[];
25 |   status: 'active' | 'completed' | 'forfeit';
26 |   winnerId: string | null; // UUID of the winner
27 |   isBot: boolean; // Added to indicate if it's a PvE match
28 |   turnLog: TurnLogEntry[]; // Added for turn logging
29 | }
30 | 
31 | export interface TurnAction {
32 |   actorId: string; // UUID of the player taking the turn
33 |   abilityId: string; // UUID of the ability used
34 |   targetId: string; // UUID of the target player
35 | }
36 | 
37 | export interface TurnLogEntry {
38 |   turn: number;
39 |   actorId: string;
40 |   abilityId: string;
41 |   targetId: string;
42 |   effectsApplied: StatusEffect[];
43 |   damageDealt: number;
44 |   resultSummary: string;
45 | }
46 | 
47 | export interface MatchTurnResult {
48 |   updatedMatchState: MatchState;
49 |   combatLog: CombatLogEntry[];
50 |   winner: string | null;
51 | }
52 | 
53 | export interface Effect {
54 |   type: string; // e.g., 'damage', 'heal', 'stun', 'burn'
55 |   value?: number; // Amount of damage/heal
56 |   duration?: number; // For status effects
57 |   target: 'self' | 'enemy'; // Required for strict type safety
58 | }
59 | 
60 | export type StatusEffectType = 'burn' | 'stun' | 'shield' | 'buff' | 'debuff';
61 | 
62 | export interface StatusEffect {
63 |   id: string; // Unique ID for the status effect instance
64 |   type: StatusEffectType; // e.g., 'stun', 'burn', 'poison'
65 |   duration: number; // Turns remaining
66 |   sourceAbilityId: string; // The ability that applied this effect
67 |   appliedAtTurn: number;
68 |   value?: number; // For damage, heal, shield, buff values
69 |   stat?: string; // For buffs (e.g., 'defense', 'attack')
70 |   [key: string]: any; // Allow other properties
71 |   // Add more properties like potency, tickDamage, etc.
72 | }
73 | 
74 | export interface CombatLogEntry {
75 |   turnNumber: number;
76 |   message: string;
77 |   playerId?: string; // Player involved in the log entry
78 |   abilityId?: string; // Ability involved
79 |   effectType?: string; // Type of effect (e.g., 'damage', 'heal')
80 |   value?: number; // Value of the effect
81 | }


--------------------------------------------------------------------------------
/frontend/backend/src/match_engine/validator.ts:
--------------------------------------------------------------------------------
 1 | import { MatchState, TurnAction } from './types';
 2 | 
 3 | export const validateTurn = (matchState: MatchState, turnAction: TurnAction): boolean => {
 4 |   // TODO: Implement comprehensive validation logic
 5 |   // - Check if it's the acting player's turn
 6 |   // - Check if ability is unlocked
 7 |   // - Check if ability is on cooldown
 8 |   // - Check if player is silenced/stunned
 9 |   // - Check if target is valid
10 |   console.log(`Validating turn for player ${turnAction.actorId} using ability ${turnAction.abilityId}`);
11 |   return true; // Placeholder for now
12 | };


--------------------------------------------------------------------------------
/frontend/backend/src/match_engine/victory_checker.ts:
--------------------------------------------------------------------------------
 1 | import { MatchState, PlayerState } from './types';
 2 | 
 3 | export const checkVictoryCondition = (matchState: MatchState): { isGameOver: boolean; winnerId: string | null } => {
 4 |   // Check for KO
 5 |   if (matchState.playerA.hp <= 0) {
 6 |     return { isGameOver: true, winnerId: matchState.playerB.profile.id };
 7 |   }
 8 | 
 9 |   if (matchState.playerB.hp <= 0) {
10 |     return { isGameOver: true, winnerId: matchState.playerA.profile.id };
11 |   }
12 |   // TODO: Implement timeout condition
13 |   // TODO: Implement forfeit condition
14 | 
15 |   return { isGameOver: false, winnerId: null };
16 | };


--------------------------------------------------------------------------------
/frontend/backend/src/types/db.ts:
--------------------------------------------------------------------------------
 1 | export interface User {
 2 |   id: string; // UUID
 3 |   email: string | null;
 4 |   username: string;
 5 |   created_at: Date;
 6 |   last_login: Date | null;
 7 | }
 8 | 
 9 | export interface PlayerProfile {
10 |   id: string; // UUID
11 |   user_id: string | null; // UUID
12 |   character_class_id: string | null; // UUID
13 |   level: number;
14 |   experience: number;
15 |   unlocked_abilities: string[]; // UUID[]
16 |   equipped_cosmetic_id: string | null; // UUID
17 |   created_at: Date;
18 | }
19 | 
20 | export interface CharacterClass {
21 |   id: string; // UUID
22 |   name: string;
23 |   description: string | null;
24 |   passive_ability_id: string | null; // UUID
25 |   icon: string | null;
26 | }
27 | 
28 | export interface EffectJson {
29 |   type: string; // e.g., 'damage', 'heal', 'stun', 'burn'
30 |   value?: number; // Amount of damage/heal
31 |   duration?: number; // For status effects
32 |   target: 'self' | 'enemy'; // Required for strict type safety
33 |   stat?: string; // For buffs (e.g., 'defense', 'attack')
34 |   // Add more specific effect properties as needed
35 | }
36 | 
37 | export interface Ability {
38 |   id: string; // UUID
39 |   name: string | null;
40 |   description: string | null;
41 |   class_id: string | null; // UUID
42 |   level_unlock: number | null;
43 |   type: 'active' | 'passive' | 'ultimate' | null;
44 |   energy_cost: number | null;
45 |   cooldown: number | null;
46 |   effects: EffectJson[]; // Array of effects
47 |   effect_json?: { // Added based on feedback
48 |     type?: string;    // e.g., 'damage', 'shield'
49 |     value?: number;   // for sorting or comparing
50 |   };
51 |   icon: string | null;
52 | }
53 | 
54 | export interface Match {
55 |   id: string; // UUID
56 |   player_a_id: string | null; // UUID
57 |   player_b_id: string | null; // UUID
58 |   winner_id: string | null; // UUID
59 |   status: 'active' | 'completed' | 'forfeit' | null;
60 |   started_at: Date | null;
61 |   ended_at: Date | null;
62 |   is_bot: boolean;
63 | }
64 | 
65 | export interface Turn {
66 |   id: string; // UUID
67 |   match_id: string | null; // UUID
68 |   turn_number: number | null;
69 |   acting_player_id: string | null; // UUID
70 |   ability_id: string | null; // UUID
71 |   target_id: string | null; // UUID
72 |   result_json: object | null; // JSONB
73 |   created_at: Date;
74 | }
75 | 
76 | export interface Cosmetic {
77 |   id: string; // UUID
78 |   name: string | null;
79 |   rarity: string | null;
80 |   image: string | null;
81 |   is_nft: boolean;
82 |   solana_mint_address: string | null;
83 |   owner_id: string | null; // UUID
84 | }


--------------------------------------------------------------------------------
/frontend/backend/src/utils/abilityLoader.ts:
--------------------------------------------------------------------------------
 1 | import path from 'path';
 2 | import fs from 'fs';
 3 | import { Ability } from '../types/db';
 4 | 
 5 | const ABILITIES_DIR = path.join(__dirname, '..', 'abilities');
 6 | 
 7 | export const loadAbility = (abilityName: string): Ability | null => {
 8 |   const filePath = path.join(ABILITIES_DIR, `${abilityName}.json`);
 9 |   try {
10 |     const fileContent = fs.readFileSync(filePath, 'utf-8');
11 |     return JSON.parse(fileContent) as Ability;
12 |   } catch (error) {
13 |     console.error(`Failed to load ability ${abilityName}:`, error);
14 |     return null;
15 |   }
16 | };
17 | 
18 | export const loadAllAbilities = (): Ability[] => {
19 |   const abilities: Ability[] = [];
20 |   try {
21 |     const files = fs.readdirSync(ABILITIES_DIR);
22 |     for (const file of files) {
23 |       if (file.endsWith('.json')) {
24 |         const abilityName = file.replace('.json', '');
25 |         const ability = loadAbility(abilityName);
26 |         if (ability) {
27 |           abilities.push(ability);
28 |         }
29 |       }
30 |     }
31 |   } catch (error) {
32 |     console.error('Failed to load all abilities:', error);
33 |   }
34 |   return abilities;
35 | };
36 | 
37 | export const getAbilitiesForPlayer = (playerId: string): Ability[] => {
38 |   // For now, return all abilities. In a real game, this would be based on player's character class, etc.
39 |   return loadAllAbilities();
40 | };


--------------------------------------------------------------------------------
/frontend/backend/src/utils/matchStateStore.ts:
--------------------------------------------------------------------------------
1 | const matches: Record<string, any> = {};
2 | 
3 | export const getMatchState = (matchId: string) => matches[matchId];
4 | export const updateMatchState = (matchId: string, state: any) => {
5 |   matches[matchId] = state;
6 | };
7 | export const createMatchState = (matchId: string, state: any) => {
8 |   matches[matchId] = state;
9 | };


--------------------------------------------------------------------------------
/frontend/backend/tsconfig.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "compilerOptions": {
 3 |     "target": "es2020",
 4 |     "module": "commonjs",
 5 |     "esModuleInterop": true,
 6 |     "forceConsistentCasingInFileNames": true,
 7 |     "strict": true,
 8 |     "skipLibCheck": true,
 9 |     "resolveJsonModule": true,
10 |     "outDir": "./dist"
11 |   },
12 |   "include": ["src/**/*.ts"],
13 |   "exclude": ["node_modules", "dist"]
14 | }


--------------------------------------------------------------------------------
/frontend/frontend@0.1.0:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/fakesavian/OZF-GAME/5f653fee8e26ce1f9bfef2b98ac6ad1ad13107b7/frontend/frontend@0.1.0


--------------------------------------------------------------------------------
/frontend/game_mvp_schema.sql:
--------------------------------------------------------------------------------
 1 | -- USERS
 2 | CREATE TABLE users (
 3 |   id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
 4 |   email TEXT UNIQUE,
 5 |   username TEXT UNIQUE NOT NULL,
 6 |   created_at TIMESTAMP DEFAULT NOW(),
 7 |   last_login TIMESTAMP
 8 | );
 9 | 
10 | -- PLAYER PROFILES
11 | CREATE TABLE player_profiles (
12 |   id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
13 |   user_id UUID REFERENCES users(id),
14 |   character_class_id UUID REFERENCES character_classes(id),
15 |   level INT DEFAULT 1,
16 |   experience INT DEFAULT 0,
17 |   unlocked_abilities UUID[],
18 |   equipped_cosmetic_id UUID,
19 |   created_at TIMESTAMP DEFAULT NOW()
20 | );
21 | 
22 | -- CHARACTER CLASSES
23 | CREATE TABLE character_classes (
24 |   id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
25 |   name TEXT NOT NULL,
26 |   description TEXT,
27 |   passive_ability_id UUID,
28 |   icon TEXT
29 | );
30 | 
31 | -- ABILITIES
32 | CREATE TABLE abilities (
33 |   id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
34 |   name TEXT,
35 |   description TEXT,
36 |   class_id UUID REFERENCES character_classes(id),
37 |   level_unlock INT,
38 |   type TEXT, -- active | passive | ultimate
39 |   energy_cost INT,
40 |   cooldown INT,
41 |   effect_json JSONB,
42 |   icon TEXT
43 | );
44 | 
45 | -- MATCHES
46 | CREATE TABLE matches (
47 |   id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
48 |   player_a_id UUID REFERENCES player_profiles(id),
49 |   player_b_id UUID REFERENCES player_profiles(id),
50 |   winner_id UUID REFERENCES player_profiles(id),
51 |   status TEXT, -- active | completed | forfeit
52 |   started_at TIMESTAMP,
53 |   ended_at TIMESTAMP,
54 |   is_bot BOOLEAN DEFAULT false
55 | );
56 | 
57 | -- TURNS
58 | CREATE TABLE turns (
59 |   id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
60 |   match_id UUID REFERENCES matches(id),
61 |   turn_number INT,
62 |   acting_player_id UUID REFERENCES player_profiles(id),
63 |   ability_id UUID REFERENCES abilities(id),
64 |   target_id UUID REFERENCES player_profiles(id),
65 |   result_json JSONB,
66 |   created_at TIMESTAMP DEFAULT NOW()
67 | );
68 | 
69 | -- COSMETICS
70 | CREATE TABLE cosmetics (
71 |   id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
72 |   name TEXT,
73 |   rarity TEXT,
74 |   image TEXT,
75 |   is_nft BOOLEAN DEFAULT false,
76 |   solana_mint_address TEXT,
77 |   owner_id UUID REFERENCES player_profiles(id)
78 | );


--------------------------------------------------------------------------------
/frontend/match_resolution_engine_architecture.md:
--------------------------------------------------------------------------------
 1 | # Match Resolution Engine – Architectural Overview
 2 | 
 3 | ## Directory Structure
 4 | 
 5 | ```
 6 | /match_engine/
 7 | │
 8 | ├── index.ts               # Main entrypoint to run a turn
 9 | ├── resolver.ts            # Determines turn order, applies abilities
10 | ├── effect_runner.ts       # Applies JSON-based effects (damage, stun, etc.)
11 | ├── status_manager.ts      # Handles ongoing effects (poison, burn, cooldowns)
12 | ├── validator.ts           # Ensures submitted actions are legal
13 | ├── state.ts               # Defines and mutates MatchState and PlayerState
14 | ├── combat_log.ts          # Generates turn-by-turn logs for frontend
15 | ├── victory_checker.ts     # Declares match result (KO, timeout, surrender)
16 | ├── bot_ai.ts              # Generates actions for PvE bot opponents
17 | └── types.ts               # Shared interfaces (TurnAction, MatchState, etc.)
18 | ```
19 | 
20 | ## Module Responsibilities
21 | 
22 | ### `index.ts`
23 | - Accepts input: MatchState + 2 TurnActions
24 | - Calls validator → resolver → effect_runner
25 | - Updates state and returns results
26 | 
27 | ### `resolver.ts`
28 | - Orders turns by initiative (e.g., speed stat or tie-breaker)
29 | - Handles PvP and PvE match flow
30 | - Calls applyAbility() in order
31 | 
32 | ### `effect_runner.ts`
33 | - Loads effects from JSON ability file
34 | - Applies effects through handlers:
35 | ```ts
36 | runEffect({ type: 'burn', duration: 2 }, source, target, state)
37 | ```
38 | 
39 | ### `status_manager.ts`
40 | - Manages ongoing status:
41 |   - Buffs/debuffs
42 |   - Immunities, shields, damage-over-time
43 | - Clears expired effects
44 | 
45 | ### `validator.ts`
46 | - Verifies submitted turn legality:
47 |   - Ability unlocked, not on cooldown, not silenced
48 | 
49 | ### `state.ts`
50 | - Holds core schemas:
51 |   - MatchState
52 |   - PlayerState
53 |   - Effect
54 | - Functions like applyDamage, applyStatus
55 | 
56 | ### `combat_log.ts`
57 | - Logs turn-by-turn summaries:
58 | ```
59 | "Warrior used Meteoric Charge!"
60 | "Mage was stunned for 1 turn!"
61 | ```
62 | 
63 | ### `victory_checker.ts`
64 | - Detects KO, timeout, forfeit
65 | 
66 | ### `bot_ai.ts`
67 | - Chooses AI abilities from context
68 | - Weighted logic: aggression, disable, heal
69 | 
70 | ## Data Flow Summary
71 | 
72 | ```
73 | [Player Turn Input]
74 |      ↓
75 | [validator.ts]
76 |      ↓
77 | [resolver.ts]
78 |      ↓
79 | → applyAbility (from JSON)
80 |      ↓
81 | [effect_runner.ts]
82 |      ↓
83 | [status_manager.ts] → updates effects
84 |      ↓
85 | [combat_log.ts] → writes log
86 |      ↓
87 | [victory_checker.ts] → match result
88 | ```
89 | 
90 | ## Benefits
91 | - Modular + testable
92 | - Real-time & async compatible
93 | - Clean bot and multiplayer integration
94 | - JSON ability driven


--------------------------------------------------------------------------------
/frontend/ozf_backend_checklist_resynced.md:
--------------------------------------------------------------------------------
 1 | # ✅ OZF Game Backend Development Checklist (Resynced)
 2 | 
 3 | ## ✅ Completed
 4 | 
 5 | ### 🔧 Project Setup
 6 | - [x] Initialized TypeScript + Express backend
 7 | - [x] Created `tsconfig.json`, `package.json`, and base server
 8 | - [x] Live backend server with `/` root test route
 9 | 
10 | ### 🔁 Match Flow
11 | - [x] `/api/match/start` creates match instance (PvE or PvP)
12 | - [x] In-memory match state storage via `matchStateStore.ts`
13 | - [x] `/api/match/:matchId/turn` processes submitted player turns
14 | - [x] `runMatchTurn()` handles resolution logic and result
15 | 
16 | ### ⚔️ Ability & Status System
17 | - [x] JSON-based Warrior class with 3 active abilities, 1 passive, 1 ultimate
18 | - [x] `warrior.json` created and loaded in `abilityRegistry`
19 | - [x] Status system for stuns, buffs, shields, DOTs
20 | - [x] Real-time effect ticking and cleanup
21 | - [x] Log reflects combat effects, status changes, and damage
22 | 
23 | ### 🔋 Energy + Cooldowns
24 | - [x] Players have energy pools and ability cooldown tracking
25 | - [x] Prevents ability use if on cooldown or lacking energy
26 | - [x] Energy/cooldowns update each turn
27 | 
28 | ### 🤖 PvE Bot AI
29 | - [x] Modular bot AI system implemented
30 | - [x] Includes random, aggressive, defensive, tactical models
31 | - [x] Match engine dynamically uses bot AI for PvE matches
32 | - [x] Fully type-safe status effect conversion and application
33 | 
34 | ## 🔜 In Progress / To Do
35 | 
36 | ### 🧠 Engine Enhancements
37 | - [ ] Add win condition check (KO or surrender)
38 | - [ ] Return `winner` from `runMatchTurn()`
39 | - [ ] Log full `TurnLog` per match
40 | - [ ] Add XP system on win and class-based level progression
41 | 
42 | ### 💾 Persistence (Post-MVP)
43 | - [ ] Replace in-memory state with PostgreSQL match model
44 | - [ ] Persist `TurnLog`, XP, and level
45 | - [ ] Add user auth + session linking
46 | 
47 | ### 🖥️ Frontend (Future)
48 | - [ ] Terminal-style UI with combat log and turn input
49 | - [ ] Lobby + post-match screens
50 | - [ ] Real-time updates with WebSockets
51 | 
52 | ## 🧪 Testing Tools
53 | - [ ] Add unit tests for `runMatchTurn`, `applyEffect`, and bots
54 | - [ ] Add mock match data for local dev
55 | - [ ] Add ability JSON validator


--------------------------------------------------------------------------------
/frontend/ozf_cli_simulator.ts:
--------------------------------------------------------------------------------
 1 | import readline from 'readline';
 2 | import fetch from 'node-fetch';
 3 | 
 4 | const rl = readline.createInterface({
 5 |   input: process.stdin,
 6 |   output: process.stdout
 7 | });
 8 | 
 9 | let matchId = '';
10 | const playerId = 'CLI_PLAYER';
11 | 
12 | async function startMatch() {
13 |   try {
14 |     const res = await fetch('http://localhost:3000/api/match/start', {
15 |       method: 'POST',
16 |       headers: { 'Content-Type': 'application/json' },
17 |       body: JSON.stringify({ playerAId: playerId })
18 |     });
19 | 
20 |     const data = await res.json();
21 |     matchId = data.matchId;
22 | 
23 |     if (!matchId) {
24 |       console.error('❌ Failed to start match: matchId undefined');
25 |       process.exit(1);
26 |     }
27 | 
28 |     console.log(`🎮 Match started. ID: ${matchId}`);
29 |     playTurn();
30 |   } catch (err) {
31 |     console.error('❌ Error starting match:', err);
32 |     process.exit(1);
33 |   }
34 | }
35 | 
36 | async function playTurn() {
37 |   rl.question('Choose ability (e.g. cleave, shield_wall): ', async (abilityId) => {
38 |     try {
39 |       const res = await fetch(`http://localhost:3000/api/match/${matchId}/turn`, {
40 |         method: 'POST',
41 |         headers: { 'Content-Type': 'application/json' },
42 |         body: JSON.stringify({
43 |           playerId,
44 |           abilityId: abilityId.trim(),
45 |           targetId: 'BOT'
46 |         })
47 |       });
48 | 
49 |       const data = await res.json();
50 |       console.log('\n--- Combat Log ---');
51 |       data.combatLog.forEach((line: string) => console.log(line));
52 |       console.log('-------------------\n');
53 | 
54 |       if (data.winner) {
55 |         console.log(`🏆 Match over. Winner: ${data.winner}`);
56 |         rl.close();
57 |       } else {
58 |         playTurn();
59 |       }
60 |     } catch (err) {
61 |       console.error('❌ Turn failed:', err);
62 |       rl.close();
63 |     }
64 |   });
65 | }
66 | 
67 | startMatch();


--------------------------------------------------------------------------------
/frontend/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "frontend",
 3 |   "version": "0.1.0",
 4 |   "private": true,
 5 |   "scripts": {
 6 |     "start": "react-scripts start",
 7 |     "build": "react-scripts build",
 8 |     "test": "vitest",
 9 |     "test:frontend": "vitest",
10 |     "eject": "react-scripts eject"
11 |   },
12 |   "dependencies": {
13 |     "@testing-library/dom": "^10.4.0",
14 |     "@testing-library/user-event": "^13.5.0",
15 |     "@types/jest": "^27.5.2",
16 |     "@types/node": "^18.0.0",
17 |     "@types/react": "^19.1.6",
18 |     "@types/react-dom": "^19.1.5",
19 |     "framer-motion": "^12.16.0",
20 |     "lucide-react": "^0.511.0",
21 |     "react": "^19.1.0",
22 |     "react-dom": "^19.1.0",
23 |     "react-router-dom": "^7.6.1",
24 |     "react-scripts": "5.0.1",
25 |     "react-simple-typewriter": "^5.0.1",
26 |     "typescript": "^4.9.5",
27 |     "web-vitals": "^2.1.4"
28 |   },
29 |   "devDependencies": {
30 |     "@testing-library/jest-dom": "^6.6.3",
31 |     "@testing-library/react": "^16.3.0",
32 |     "autoprefixer": "^10.4.21",
33 |     "jsdom": "^26.1.0",
34 |     "postcss": "^8.5.4",
35 |     "tailwindcss": "^3.4.17",
36 |     "vitest": "^3.2.2"
37 |   },
38 |   "eslintConfig": {
39 |     "extends": [
40 |       "react-app",
41 |       "react-app/jest"
42 |     ]
43 |   },
44 |   "browserslist": {
45 |     "production": [
46 |       ">0.2%",
47 |       "not dead",
48 |       "not op_mini all"
49 |     ],
50 |     "development": [
51 |       "last 1 chrome version",
52 |       "last 1 firefox version",
53 |       "last 1 safari version"
54 |     ]
55 |   }
56 | }
57 | 


--------------------------------------------------------------------------------
/frontend/plan.md:
--------------------------------------------------------------------------------
 1 | # Plan for Updating BattleScreen Component
 2 | 
 3 | ## Project Overview
 4 | The task involves updating the `BattleScreen.tsx` component and its associated styles in `App.css` within the `frontend/src` directory. The new `BattleScreen.tsx` code includes battle simulation logic, HP management, and a loading overlay.
 5 | 
 6 | ## Architecture Overview
 7 | 
 8 | ```mermaid
 9 | graph TD
10 |     A[Start] --> B{Review BattleScreen.tsx and App.css};
11 |     B --> C[Update frontend/src/screens/BattleScreen.tsx];
12 |     C --> D[Update frontend/src/App.css];
13 |     D --> E[Review frontend/src/App.tsx];
14 |     E --> F[Confirm Plan with User];
15 |     F --> G{User Approves?};
16 |     G -- Yes --> H[Write Plan to Markdown (Optional)];
17 |     H --> I[Switch to Code Mode];
18 |     I --> J[Implement Changes];
19 |     J --> K[End];
20 |     G -- No --> F;
21 | ```
22 | 
23 | ## Detailed Plan
24 | 
25 | 1.  **Update `frontend/src/screens/BattleScreen.tsx`**:
26 |     *   **Action**: Replace the entire content of the existing [`frontend/src/screens/BattleScreen.tsx`](frontend/src/screens/BattleScreen.tsx) file with the new code provided by the user.
27 |     *   **Reason**: The new code contains the updated battle simulation logic, state management (`useState`, `useEffect`), API calls (`fetch`), and navigation (`useNavigate`).
28 | 
29 | 2.  **Update `frontend/src/App.css`**:
30 |     *   **Action**: Append the provided CSS styles to the [`frontend/src/App.css`](frontend/src/App.css) file.
31 |     *   **Reason**: These styles are necessary to correctly render the new UI elements and the loading overlay introduced in the updated `BattleScreen.tsx`.
32 | 
33 | 3.  **Review `frontend/src/App.tsx`**:
34 |     *   **Action**: Examine the [`frontend/src/App.tsx`](frontend/src/App.tsx) file.
35 |     *   **Reason**: To ensure that the `BattleScreen` component is being rendered correctly and to remove any previous props like `onQuit`, as the new `BattleScreen` component handles navigation internally using `useNavigate` from `react-router-dom`. This step will also confirm that the routing is set up to display the `BattleScreen` as intended.
36 | 
37 | ## Next Steps
38 | Once this plan is written to the markdown file, I will request to switch to `code` mode to implement these changes.


--------------------------------------------------------------------------------
/frontend/postcss.config.js:
--------------------------------------------------------------------------------
1 | module.exports = {
2 |   plugins: {
3 |     tailwindcss: {},
4 |     autoprefixer: {},
5 |   },
6 | }
7 | 


--------------------------------------------------------------------------------
/frontend/public/assets/images/character-default.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/fakesavian/OZF-GAME/5f653fee8e26ce1f9bfef2b98ac6ad1ad13107b7/frontend/public/assets/images/character-default.png


--------------------------------------------------------------------------------
/frontend/public/assets/images/enemy-default.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/fakesavian/OZF-GAME/5f653fee8e26ce1f9bfef2b98ac6ad1ad13107b7/frontend/public/assets/images/enemy-default.png


--------------------------------------------------------------------------------
/frontend/public/favicon.ico:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/fakesavian/OZF-GAME/5f653fee8e26ce1f9bfef2b98ac6ad1ad13107b7/frontend/public/favicon.ico


--------------------------------------------------------------------------------
/frontend/public/index.html:
--------------------------------------------------------------------------------
 1 | <!DOCTYPE html>
 2 | <html lang="en">
 3 |   <head>
 4 |     <meta charset="utf-8" />
 5 |     <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
 6 |     <meta name="viewport" content="width=device-width, initial-scale=1" />
 7 |     <meta name="theme-color" content="#000000" />
 8 |     <meta
 9 |       name="description"
10 |       content="OZF Game - A Cyberpunk Turn-Based RPG"
11 |     />
12 |     <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
13 |     <!--
14 |       manifest.json provides metadata used when your web app is installed on a
15 |       user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
16 |     -->
17 |     <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
18 |     <!--
19 |       Notice the use of %PUBLIC_URL% in the tags above.
20 |       It will be replaced with the URL of the `public` folder during the build.
21 |       Only files inside the `public` folder can be referenced from the HTML.
22 | 
23 |       Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
24 |       work correctly both with client-side routing and a non-root public URL.
25 |       Learn how to configure a non-root public URL by running `npm run build`.
26 |     -->
27 |     <title>OZF Game</title>
28 |   </head>
29 |   <body>
30 |     <noscript>You need to enable JavaScript to run this app.</noscript>
31 |     <div id="root"></div>
32 |     <!--
33 |       This HTML file is a template.
34 |       If you open it directly in the browser, you will see an empty page.
35 | 
36 |       You can add webfonts, meta tags, or analytics to this file.
37 |       The build step will place the bundled scripts into the <body> tag.
38 | 
39 |       To begin the development, run `npm start` or `yarn start`.
40 |       To create a production bundle, use `npm run build` or `yarn build`.
41 |     -->
42 |   </body>
43 | </html>
44 | 


--------------------------------------------------------------------------------
/frontend/public/logo192.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/fakesavian/OZF-GAME/5f653fee8e26ce1f9bfef2b98ac6ad1ad13107b7/frontend/public/logo192.png


--------------------------------------------------------------------------------
/frontend/public/logo512.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/fakesavian/OZF-GAME/5f653fee8e26ce1f9bfef2b98ac6ad1ad13107b7/frontend/public/logo512.png


--------------------------------------------------------------------------------
/frontend/public/manifest.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "short_name": "React App",
 3 |   "name": "Create React App Sample",
 4 |   "icons": [
 5 |     {
 6 |       "src": "favicon.ico",
 7 |       "sizes": "64x64 32x32 24x24 16x16",
 8 |       "type": "image/x-icon"
 9 |     },
10 |     {
11 |       "src": "logo192.png",
12 |       "type": "image/png",
13 |       "sizes": "192x192"
14 |     },
15 |     {
16 |       "src": "logo512.png",
17 |       "type": "image/png",
18 |       "sizes": "512x512"
19 |     }
20 |   ],
21 |   "start_url": ".",
22 |   "display": "standalone",
23 |   "theme_color": "#000000",
24 |   "background_color": "#ffffff"
25 | }
26 | 


--------------------------------------------------------------------------------
/frontend/public/robots.txt:
--------------------------------------------------------------------------------
1 | # https://www.robotstxt.org/robotstxt.html
2 | User-agent: *
3 | Disallow:
4 | 


--------------------------------------------------------------------------------
/frontend/react-scripts:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/fakesavian/OZF-GAME/5f653fee8e26ce1f9bfef2b98ac6ad1ad13107b7/frontend/react-scripts


--------------------------------------------------------------------------------
/frontend/src/App.test.tsx:
--------------------------------------------------------------------------------
 1 | import React from 'react';
 2 | import { render, screen } from '@testing-library/react';
 3 | import App from './App';
 4 | 
 5 | test('renders splash screen with OZF Game title', () => {
 6 |   render(<App />);
 7 |   const ozfElement = screen.getByText(/ozf game/i);
 8 |   expect(ozfElement).toBeInTheDocument();
 9 | 
10 |   const clickToEnter = screen.getByText(/click to enter/i);
11 |   expect(clickToEnter).toBeInTheDocument();
12 | });
13 | 


--------------------------------------------------------------------------------
/frontend/src/App.tsx:
--------------------------------------------------------------------------------
 1 | import {
 2 |   Routes,
 3 |   Route,
 4 |   Navigate,
 5 |   useNavigate,
 6 | } from "react-router-dom";
 7 | import { BootSequence } from "./screens/BootSequence";
 8 | import { LoginScreen } from "./screens/LoginScreen";
 9 | import MenuScreen from "./screens/MainMenu";
10 | import BattleScreen from "./screens/BattleScreen";
11 | import InventoryScreen from "./screens/InventoryScreen";
12 | import CharacterScreen from "./screens/CharacterScreen";
13 | import FPVMazeScreen from "./screens/FPVMazeScreen"; // Added import
14 | import StoryModeScreen from "./screens/StoryMode"; // Added StoryModeScreen import
15 | import { useEffect, useState } from "react";
16 | 
17 | // Wrapper for BattleScreen to handle navigation prop
18 | const BattleScreenWrapper = () => {
19 |   const navigate = useNavigate();
20 |   const handleQuit = () => {
21 |     navigate("/menu");
22 |   };
23 |   return <BattleScreen onQuit={handleQuit} />;
24 | };
25 | 
26 | function App() {
27 |   const seenBoot = sessionStorage.getItem('seenBoot');
28 |   const initialRoute = seenBoot ? "/menu" : "/"; // Changed from /title to /menu as per existing routes
29 | 
30 |   return (
31 |     <Routes>
32 |       <Route path="/" element={<BootWrapper />} />
33 |       <Route path="/login" element={<LoginScreen />} />
34 |       <Route path="/menu" element={<MenuScreen />} />
35 |       <Route path="/battle" element={<BattleScreenWrapper />} />
36 |       <Route path="/inventory" element={<InventoryScreen />} />
37 |       <Route path="/character" element={<CharacterScreen />} />
38 |       <Route path="/fpv-maze" element={<FPVMazeScreen />} /> {/* Added route */}
39 |       <Route path="/story" element={<StoryModeScreen />} /> {/* Added Story Mode route */}
40 |       <Route path="*" element={<Navigate to={initialRoute} />} />
41 |     </Routes>
42 |   );
43 | }
44 | 
45 | // BootWrapper handles boot transition
46 | const BootWrapper = () => {
47 |   const navigate = useNavigate();
48 |   const seenBoot = sessionStorage.getItem('seenBoot');
49 |   if (seenBoot) {
50 |     return <Navigate to="/menu" />;
51 |   }
52 |   return <BootSequence onContinue={() => navigate("/login")} />;
53 | };
54 | 
55 | export default App;
56 | 


--------------------------------------------------------------------------------
/frontend/src/components/Button.tsx:
--------------------------------------------------------------------------------
 1 | import React from 'react';
 2 | 
 3 | interface Props {
 4 |   children: React.ReactNode;
 5 |   onClick?: () => void;
 6 |   className?: string; // Add className prop
 7 |   style?: React.CSSProperties; // Add style prop for completeness
 8 | }
 9 | 
10 | const Button: React.FC<Props> = ({ children, onClick, className, style }) => {
11 |   const baseClasses = "bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline";
12 |   return (
13 |     <button
14 |       className={`${baseClasses} ${className || ''}`} // Merge classes
15 |       onClick={onClick}
16 |       style={style} // Apply style prop
17 |     >
18 |       {children}
19 |     </button>
20 |   );
21 | };
22 | 
23 | export default Button;


--------------------------------------------------------------------------------
/frontend/src/components/CombatLog.tsx:
--------------------------------------------------------------------------------
 1 | import React from 'react';
 2 | 
 3 | interface Props {
 4 |   messages: string[];
 5 | }
 6 | 
 7 | const CombatLog: React.FC<Props> = ({ messages }) => {
 8 |   return (
 9 |     <div className="h-32 overflow-y-auto text-sm text-gray-400">
10 |       {messages.map((message, index) => (
11 |         <div key={index}>{message}</div>
12 |       ))}
13 |     </div>
14 |   );
15 | };
16 | 
17 | export default CombatLog;


--------------------------------------------------------------------------------
/frontend/src/components/DamageNumber.tsx:
--------------------------------------------------------------------------------
 1 | import React from 'react';
 2 | import { motion } from 'framer-motion';
 3 | 
 4 | interface Props {
 5 |   value: number;
 6 |   keyId: string;
 7 |   type?: 'normal' | 'crit' | 'burn' | 'heal';
 8 | }
 9 | 
10 | export default function DamageNumber({ value, keyId, type = 'normal' }: Props) {
11 |   const colorMap = {
12 |     normal: '#FF3333', // Standard damage red
13 |     crit: '#FF00FF',   // Magenta for crits
14 |     burn: '#FF8844',   // Orange for burn
15 |     heal: '#00FF88',   // Green for heal
16 |   };
17 | 
18 |   return (
19 |     <motion.div
20 |       key={keyId}
21 |       initial={{ opacity: 0, y: 0, scale: 0.8 }}
22 |       animate={{
23 |         opacity: [0, 1, 0], // Fade in, then fade out
24 |         y: [-10, -40, -80], // Move upwards
25 |         scale: [0.9, 1.2, 1.0], // Pulse effect
26 |         rotate: [0, -3, 3, -2, 0], // Slight wobble
27 |       }}
28 |       transition={{
29 |         duration: 1.2, // Animation duration
30 |         ease: 'easeOut',
31 |       }}
32 |       className="absolute text-[24px] font-mono pointer-events-none" // Base styling
33 |       style={{
34 |         left: '50%',
35 |         transform: 'translateX(-50%)', // Center horizontally
36 |         color: colorMap[type], // Dynamic color based on type
37 |         filter: type === 'heal' ? 'drop-shadow(0 0 4px #00FF88)' : 'drop-shadow(0 0 4px #ff0000)', // Dynamic shadow
38 |         // textShadow: `0 0 5px ${colorMap[type]}, 0 0 10px ${colorMap[type]}`, // Optional: for a softer glow
39 |       }}
40 |     >
41 |       {value > 0 ? `-${value}` : `+${Math.abs(value)}`}
42 |     </motion.div>
43 |   );
44 | }


--------------------------------------------------------------------------------
/frontend/src/components/GlitchText.tsx:
--------------------------------------------------------------------------------
 1 | import React from 'react';
 2 | 
 3 | interface Props {
 4 |   text: string;
 5 | }
 6 | 
 7 | const GlitchText: React.FC<Props> = ({ text }) => {
 8 |   return (
 9 |     <div className="relative">
10 |       <span className="text-white">{text}</span>
11 |       <span className="absolute top-0 left-0 text-white animate-glitch">{text}</span>
12 |     </div>
13 |   );
14 | };
15 | 
16 | export default GlitchText;


--------------------------------------------------------------------------------
/frontend/src/components/HealthBar.tsx:
--------------------------------------------------------------------------------
 1 | import React from 'react';
 2 | 
 3 | interface Props {
 4 |   current: number;
 5 |   max: number;
 6 | }
 7 | 
 8 | const HealthBar: React.FC<Props> = ({ current, max }) => {
 9 |   const percentage = (current / max) * 100;
10 | 
11 |   return (
12 |     <div className="w-full bg-gray-800 rounded-full h-2">
13 |       <div
14 |         className="bg-green-500 h-2 rounded-full"
15 |         style={{ width: `${percentage}%` }}
16 |       ></div>
17 |     </div>
18 |   );
19 | };
20 | 
21 | export default HealthBar;


--------------------------------------------------------------------------------
/frontend/src/components/PhoneFrame.tsx:
--------------------------------------------------------------------------------
 1 | import React from 'react';
 2 | 
 3 | interface Props {
 4 |   children: React.ReactNode;
 5 | }
 6 | 
 7 | const PhoneFrame: React.FC<Props> = ({ children }) => {
 8 |   return (
 9 |     <div className="relative bg-black w-64 h-96 rounded-3xl overflow-hidden">
10 |       <div className="absolute top-2 left-2 right-2 h-2 bg-gray-800 rounded-full"></div>
11 |       <div className="absolute bottom-8 left-0 right-0 flex justify-center">
12 |         <div className="w-12 h-12 bg-gray-800 rounded-full"></div>
13 |       </div>
14 |       <div className="w-full h-full overflow-hidden">
15 |         {children}
16 |       </div>
17 |     </div>
18 |   );
19 | };
20 | 
21 | export default PhoneFrame;


--------------------------------------------------------------------------------
/frontend/src/components/ScanlineOverlay.tsx:
--------------------------------------------------------------------------------
 1 | import React from 'react';
 2 | 
 3 | const ScanlineOverlay: React.FC = () => {
 4 |   return (
 5 |     <div
 6 |       className="absolute top-0 left-0 w-full h-full pointer-events-none"
 7 |       style={{
 8 |         background: 'repeating-linear-gradient(0deg, rgba(0,0,0,0), rgba(0,0,0,0.3) 5px, rgba(0,0,0,0.3) 5px, rgba(0,0,0,0) 10px)'
 9 |       }}
10 |     ></div>
11 |   );
12 | };
13 | 
14 | export default ScanlineOverlay;


--------------------------------------------------------------------------------
/frontend/src/components/TypewriterText.tsx:
--------------------------------------------------------------------------------
 1 | import React, { useState, useEffect } from 'react';
 2 | 
 3 | interface TypewriterTextProps {
 4 |   text: string;
 5 |   speed?: number;
 6 |   onComplete?: () => void; // Optional callback when typing finishes
 7 | }
 8 | 
 9 | export const TypewriterText: React.FC<TypewriterTextProps> = ({ text = "", speed = 20, onComplete }) => {
10 |   const [displayedText, setDisplayedText] = useState("");
11 | 
12 |   useEffect(() => {
13 |     setDisplayedText(""); // Reset when text changes
14 |     if (!text) return;
15 | 
16 |     let i = 0;
17 |     const intervalId = setInterval(() => {
18 |       if (i < text.length) {
19 |         setDisplayedText(prev => prev + text.charAt(i));
20 |         i++;
21 |       } else {
22 |         clearInterval(intervalId);
23 |         if (onComplete) {
24 |           onComplete();
25 |         }
26 |       }
27 |     }, speed);
28 | 
29 |     return () => clearInterval(intervalId);
30 |   }, [text, speed, onComplete]);
31 | 
32 |   return <pre className="whitespace-pre-wrap">{displayedText}</pre>;
33 | };
34 | 
35 | export default TypewriterText;


--------------------------------------------------------------------------------
/frontend/src/components/ui/button.tsx:
--------------------------------------------------------------------------------
 1 | import React from 'react';
 2 | 
 3 | interface Props {
 4 |   children: React.ReactNode;
 5 |   onClick?: () => void;
 6 |   variant?: "default" | "outline";
 7 | }
 8 | 
 9 | const Button: React.FC<Props> = ({ children, onClick, variant }) => {
10 |   const buttonStyle =
11 |     variant === "outline"
12 |       ? "border border-green-500 bg-transparent hover:bg-green-700 text-green-400"
13 |       : "bg-green-700 hover:bg-green-500 text-white";
14 | 
15 |   return (
16 |     <button
17 |       className={`${buttonStyle} font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
18 |       onClick={onClick}
19 |     >
20 |       {children}
21 |     </button>
22 |   );
23 | };
24 | 
25 | export default Button;


--------------------------------------------------------------------------------
/frontend/src/context/ScreenLoaderContext.tsx:
--------------------------------------------------------------------------------
 1 | import React, { createContext, useContext, useEffect, useState } from 'react';
 2 | import { useLocation } from 'react-router-dom';
 3 | 
 4 | const ScreenLoaderContext = createContext<{ isLoading: boolean }>({ isLoading: false });
 5 | 
 6 | export const ScreenLoaderProvider = ({ children }: { children: React.ReactNode }) => {
 7 |   const [isLoading, setIsLoading] = useState(false);
 8 |   const location = useLocation();
 9 | 
10 |   useEffect(() => {
11 |     setIsLoading(true);
12 |     const timeout = setTimeout(() => setIsLoading(false), 1000); // 1 second transition
13 |     return () => clearTimeout(timeout);
14 |   }, [location]);
15 | 
16 |   return (
17 |     <ScreenLoaderContext.Provider value={{ isLoading }}>
18 |       {children}
19 |     </ScreenLoaderContext.Provider>
20 |   );
21 | };
22 | 
23 | export const useScreenLoader = () => useContext(ScreenLoaderContext);


--------------------------------------------------------------------------------
/frontend/src/features/fpv_maze/MazeData.ts:
--------------------------------------------------------------------------------
 1 | // It's common to need a way to import text files as strings.
 2 | // For Vite, you can use '?raw' suffix: import myText from './myFile.txt?raw';
 3 | // For other bundlers or TypeScript setup, you might need a custom.d.ts file:
 4 | // Create a file (e.g., src/custom.d.ts or vite-env.d.ts) with:
 5 | // declare module '*.txt' {
 6 | //   const content: string;
 7 | //   export default content;
 8 | // }
 9 | import district0Raw from './maps/district0.txt?raw';
10 | import district1Raw from './maps/district1.txt?raw';
11 | 
12 | /**
13 |  * Represents the maze grid as a 2D array of characters.
14 |  * Each inner array is a row, and each character is a cell.
15 |  */
16 | export type MazeGridType = string[][];
17 | 
18 | /**
19 |  * Defines the starting position and angle for each district.
20 |  */
21 | export const DISTRICT_START_POSITIONS: Record<string, { x: number; y: number; angle: number }> = {
22 |   district0: { x: 1.5, y: 1.5, angle: Math.PI / 2 }, // Facing East
23 |   district1: { x: 1.5, y: 1.5, angle: Math.PI / 2 }, // Default, adjust per district1.txt needs
24 |   // Add more start positions as new districts are added
25 | };
26 | 
27 | /**
28 |  * Loads the raw string content of a map file for a given district.
29 |  * @param districtId The identifier for the district (e.g., 'district0').
30 |  * @returns The raw string content of the map.
31 |  */
32 | function loadRawMapString(districtId: string): string {
33 |   switch (districtId) {
34 |     case 'district0':
35 |       return district0Raw;
36 |     case 'district1':
37 |       return district1Raw;
38 |     // Add more cases for new districts
39 |     default:
40 |       console.warn(`Map for district "${districtId}" not found. Defaulting to district0.`);
41 |       return district0Raw; // Fallback to a default map
42 |   }
43 | }
44 | 
45 | /**
46 |  * Parses a raw map string (lines of characters) into a 2D grid.
47 |  * Also replaces 'S' (start markers) with '.' (empty space).
48 |  * @param rawMapText The raw string content of the map.
49 |  * @returns A MazeGridType (string[][]) representing the parsed map.
50 |  */
51 | export function loadMap(districtId: string): MazeGridType {
52 |   const rawMapText = loadRawMapString(districtId);
53 |   // Replace 'S' with '.' for starting positions before parsing,
54 |   // and '>' for gateways, '@' for architect comments if they should be walkable.
55 |   // For now, let's assume '>', '@' are special tiles checked by game logic, not walls.
56 |   const processedMapText = rawMapText.replace(/S/g, '.'); 
57 |   
58 |   return processedMapText
59 |     .trim()
60 |     .split('\n')
61 |     .map(line => line.split(''));
62 | }
63 | 
64 | // Note: The old hardcoded maze constants (initialMaze, activeMaze, etc.) are removed.
65 | // The game should now dynamically load maps using `loadMap('districtIdentifier')`.


--------------------------------------------------------------------------------
/frontend/src/features/fpv_maze/components/LorePopup.tsx:
--------------------------------------------------------------------------------
 1 | import React from 'react';
 2 | import TypewriterText from '../../../components/TypewriterText'; // Adjusted path
 3 | import { motion } from 'framer-motion'; // Assuming framer-motion is installed
 4 | // Import LoreFragment and LoreChoice from the source file
 5 | import { LoreFragment, LoreChoice } from '../LoreEvents';
 6 | 
 7 | 
 8 | interface LorePopupProps {
 9 |   activeLore: LoreFragment; // Use the full LoreFragment type
10 |   onClose: () => void;
11 |   onChoiceMade?: (choice: LoreChoice) => void; // Optional: only if choices exist
12 | }
13 | 
14 | const LorePopup: React.FC<LorePopupProps> = ({ activeLore, onClose, onChoiceMade }) => {
15 |   if (!activeLore) return null;
16 | 
17 |   const handleChoiceClick = (choice: LoreChoice) => {
18 |     if (onChoiceMade) {
19 |       onChoiceMade(choice);
20 |     }
21 |     // onClose(); // Decide if popup should close immediately after a choice or if StoryModeScreen handles it
22 |   };
23 | 
24 |   return (
25 |     <motion.div
26 |       initial={{ opacity: 0, y: -20 }}
27 |       animate={{ opacity: 1, y: 0 }}
28 |       exit={{ opacity: 0, y: -20 }}
29 |       className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-2xl bg-black border-2 border-green-400 p-6 font-mono text-green-400 text-lg shadow-2xl crt-glow z-50"
30 |       style={{ boxShadow: '0 0 15px #0f0, 0 0 25px #0f0 inset' }} // CRT glow effect
31 |     >
32 |       <h2 className="text-2xl mb-4 border-b border-green-500 pb-2">{activeLore.title}</h2>
33 |       <TypewriterText text={activeLore.text} speed={30} />
34 | 
35 |       {activeLore.choices && activeLore.choices.length > 0 && (
36 |         <div className="mt-6 pt-4 border-t border-green-700">
37 |           <h3 className="text-xl mb-3 text-yellow-400">Make a choice:</h3>
38 |           <div className="flex flex-col space-y-3">
39 |             {activeLore.choices.map((choice) => (
40 |               <button
41 |                 key={choice.id}
42 |                 onClick={() => handleChoiceClick(choice)}
43 |                 className="ascii-arrow text-left p-2 hover:bg-green-700 transition-colors duration-150"
44 |               >
45 |                 &gt; {choice.text}
46 |               </button>
47 |             ))}
48 |           </div>
49 |         </div>
50 |       )}
51 | 
52 |       {/* Close button is always present, but its behavior might be overridden by choices */}
53 |       <button
54 |         onClick={onClose} // This might be redundant if choices always lead to closure or new state
55 |         className="absolute top-3 right-3 text-red-500 hover:text-red-300 text-2xl font-bold transition-all crt-glitch-hover"
56 |         aria-label="Close Lore"
57 |         style={{ textShadow: '0 0 5px #f00' }} // Red glow for X
58 |       >
59 |         ✕
60 |       </button>
61 |     </motion.div>
62 |   );
63 | };
64 | 
65 | export default LorePopup;


--------------------------------------------------------------------------------
/frontend/src/features/fpv_maze/components/MatrixRainTransition.tsx:
--------------------------------------------------------------------------------
 1 | import React, { useEffect, useState } from 'react';
 2 | import { useNavigate } from 'react-router-dom';
 3 | import './matrixRain.css'; // Import the CSS
 4 | import TypewriterText from '../../../components/TypewriterText'; // For optional log
 5 | 
 6 | interface MatrixRainTransitionProps {
 7 |   target?: string; // Default will be '/battle'
 8 |   onTransitionEnd?: () => void; // Callback when navigation occurs
 9 |   showLog?: boolean; // To control optional log display
10 | }
11 | 
12 | const MatrixRainTransition: React.FC<MatrixRainTransitionProps> = ({ 
13 |   target = '/battle', 
14 |   onTransitionEnd,
15 |   showLog = true // Default to show log
16 | }) => {
17 |   const navigate = useNavigate();
18 |   const [logVisible, setLogVisible] = useState(false);
19 |   const [startRain, setStartRain] = useState(false);
20 | 
21 |   const logText = ">> SYSTEM BREACH DETECTED\n>> INITIALIZING CONFLICT PROTOCOL...";
22 |   const transitionDelay = 2500; // Total time for animation + log
23 |   const logDelay = 500; // When to show the log after transition starts
24 |   const rainStartDelay = 100; // Slight delay before rain starts for flash effect
25 | 
26 |   useEffect(() => {
27 |     // Optional: CRT Flash
28 |     const flashTimeout = setTimeout(() => {
29 |       // Add flash class to body or a specific element if desired
30 |       // document.body.classList.add('crt-flash');
31 |       // setTimeout(() => document.body.classList.remove('crt-flash'), 300);
32 |       setStartRain(true); // Start rain after flash
33 |     }, rainStartDelay);
34 |     
35 |     const logTimer = setTimeout(() => {
36 |       if (showLog) {
37 |         setLogVisible(true);
38 |       }
39 |     }, logDelay);
40 | 
41 |     const navigationTimeout = setTimeout(() => {
42 |       navigate(`${target}?fromStory=true`);
43 |       if (onTransitionEnd) {
44 |         onTransitionEnd();
45 |       }
46 |     }, transitionDelay);
47 | 
48 |     return () => {
49 |       clearTimeout(flashTimeout);
50 |       clearTimeout(logTimer);
51 |       clearTimeout(navigationTimeout);
52 |       // document.body.classList.remove('crt-flash'); // Clean up flash class
53 |     };
54 |   }, [navigate, target, onTransitionEnd, showLog, transitionDelay, logDelay, rainStartDelay]);
55 | 
56 |   return (
57 |     <div 
58 |       className="fixed inset-0 bg-black z-[9999] flex items-center justify-center overflow-hidden"
59 |       // Add crt-flash here if you want the whole screen to flash
60 |     >
61 |       {startRain && <div className="matrixRain" />}
62 |       {showLog && logVisible && (
63 |         <div className="matrix-log-text">
64 |           <TypewriterText text={logText} speed={50} />
65 |         </div>
66 |       )}
67 |     </div>
68 |   );
69 | };
70 | 
71 | export default MatrixRainTransition;


--------------------------------------------------------------------------------
/frontend/src/features/fpv_maze/components/matrixRain.css:
--------------------------------------------------------------------------------
 1 | .matrixRain {
 2 |   width: 100%;
 3 |   height: 100%;
 4 |   background: repeating-linear-gradient(
 5 |     to bottom,
 6 |     #00ff99 0%, /* Brighter green for lines */
 7 |     #00ff99 1%,
 8 |     transparent 1%,
 9 |     transparent 3%
10 |   );
11 |   animation: matrixFall 1.2s linear infinite;
12 |   mask-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0.2));
13 |   opacity: 0.9;
14 |   position: absolute; /* Ensure it covers its container */
15 |   top: 0;
16 |   left: 0;
17 | }
18 | 
19 | @keyframes matrixFall {
20 |   0% {
21 |     background-position-y: 0%;
22 |   }
23 |   100% {
24 |     background-position-y: 100%; /* Ensures the gradient repeats seamlessly */
25 |   }
26 | }
27 | 
28 | /* Optional: CRT flicker flash - can be added to the parent div of MatrixRainTransition */
29 | .crt-flash {
30 |   animation: crt-flash-anim 0.3s linear;
31 | }
32 | 
33 | @keyframes crt-flash-anim {
34 |   0%, 100% { opacity: 1; }
35 |   50% { opacity: 0.3; background-color: white; }
36 | }
37 | 
38 | /* Optional: Terminal log text style */
39 | .matrix-log-text {
40 |   position: absolute;
41 |   top: 40%;
42 |   left: 50%;
43 |   transform: translate(-50%, -50%);
44 |   color: #00ff99;
45 |   font-family: monospace;
46 |   font-size: 1.5rem;
47 |   text-align: center;
48 |   white-space: pre;
49 |   text-shadow: 0 0 5px #00ff99;
50 |   z-index: 10; /* Above matrix rain but below overall container if needed */
51 | }


--------------------------------------------------------------------------------
/frontend/src/features/fpv_maze/maps/district0.txt:
--------------------------------------------------------------------------------
 1 | ###############
 2 | #S~@..........#
 3 | #..!..........#
 4 | #........@.*!.#
 5 | #............*#
 6 | #. *...!..#
 7 | #...*....@....#
 8 | #........!....#
 9 | #.......*.....#
10 | ###############


--------------------------------------------------------------------------------
/frontend/src/features/fpv_maze/maps/district1.txt:
--------------------------------------------------------------------------------
 1 | ####################
 2 | #S*...@.....>......#
 3 | #.#.########.#.####!#
 4 | #.#.#......#.#.#....#
 5 | #.#.#.####.#.#.####.#
 6 | #...#....#.#...#....#
 7 | #.#######.#####.####.#
 8 | #.#.......#..@..#....#
 9 | #.#.#####!#####.#.####
10 | #*...........*#....#
11 | ####################


--------------------------------------------------------------------------------
/frontend/src/features/fpv_maze/useMazeControls.ts:
--------------------------------------------------------------------------------
 1 | import { useState, useEffect, useCallback } from 'react';
 2 | 
 3 | export interface PlayerState {
 4 |   x: number;
 5 |   y: number;
 6 |   angle: number; // Radians
 7 | }
 8 | 
 9 | export type MazeAction = 'forward' | 'backward' | 'turnLeft' | 'turnRight' | 'exit' | 'none';
10 | 
11 | interface UseMazeControlsProps {
12 |   // initialPlayerState is no longer needed here as MazeFPV manages the full state
13 |   onAttemptMove: (action: 'forward' | 'backward') => void;
14 |   onTurn: (action: 'turnLeft' | 'turnRight') => void;
15 |   onExit?: () => void;
16 |   // turnSpeed and moveSpeed are managed by MazeFPV
17 | }
18 | 
19 | const useMazeControls = ({
20 |   onAttemptMove,
21 |   onTurn,
22 |   onExit,
23 | }: UseMazeControlsProps) => {
24 |   // No local player state (x, y, angle) needed in this hook anymore
25 |   const [lastAction, setLastAction] = useState<MazeAction>('none');
26 | 
27 |   const handleKeyDown = useCallback(
28 |     (event: KeyboardEvent) => {
29 |       let action: MazeAction = 'none';
30 |       switch (event.key) {
31 |         case 'ArrowUp':
32 |           action = 'forward';
33 |           onAttemptMove(action);
34 |           break;
35 |         case 'ArrowDown':
36 |           action = 'backward';
37 |           onAttemptMove(action);
38 |           break;
39 |         case 'ArrowLeft':
40 |           action = 'turnLeft';
41 |           onTurn(action);
42 |           break;
43 |         case 'ArrowRight':
44 |           action = 'turnRight';
45 |           onTurn(action);
46 |           break;
47 |         case 'Escape':
48 |           action = 'exit';
49 |           if (onExit) {
50 |             onExit();
51 |           }
52 |           break;
53 |         default:
54 |           break;
55 |       }
56 |       if (action !== 'none') {
57 |         setLastAction(action);
58 |       }
59 |     },
60 |     [onAttemptMove, onTurn, onExit]
61 |   );
62 |   
63 |   useEffect(() => {
64 |     window.addEventListener('keydown', handleKeyDown);
65 |     return () => {
66 |       window.removeEventListener('keydown', handleKeyDown);
67 |     };
68 |   }, [handleKeyDown]);
69 | 
70 |   // This hook now only reports the last keyboard action.
71 |   // Actual state changes (x, y, angle) are handled by MazeFPV.
72 |   return { lastAction };
73 | };
74 | 
75 | export default useMazeControls;


--------------------------------------------------------------------------------
/frontend/src/index.css:
--------------------------------------------------------------------------------
 1 | @tailwind base;
 2 | @tailwind components;
 3 | @tailwind utilities;
 4 | 
 5 | .glitch {
 6 |   animation: glitch-flicker 1.5s infinite;
 7 | }
 8 | 
 9 | .glitch-text {
10 |   position: relative;
11 | }
12 | .glitch-text::after {
13 |   content: attr(data-text);
14 |   position: absolute;
15 |   left: 2px;
16 |   text-shadow: -1px 0 red;
17 |   top: 0;
18 |   color: transparent;
19 |   animation: glitch-anim 1s infinite linear alternate-reverse;
20 | }
21 | 
22 | @keyframes glitch-flicker {
23 |   0%, 19%, 21%, 23%, 100% {
24 |     opacity: 1;
25 |   }
26 |   20%, 22% {
27 |     opacity: 0.6;
28 |   }
29 | }
30 | 
31 | @keyframes glitch-anim {
32 |   0% {
33 |     transform: translateX(0);
34 |   }
35 |   20% {
36 |     transform: translateX(-2px);
37 |   }
38 |   40% {
39 |     transform: translateX(2px);
40 |   }
41 |   60% {
42 |     transform: translateX(-1px);
43 |   }
44 |   80% {
45 |     transform: translateX(1px);
46 |   }
47 |   100% {
48 |     transform: translateX(0);
49 |   }
50 | }
51 | 
52 | /* Removed old .maze-control-button styles */
53 | 
54 | /* CRT Arrow Button Styles */
55 | .ascii-arrow {
56 |   background: black;
57 |   border: 1px solid #0f0; /* green-400 equivalent */
58 |   color: #0f0; /* green-400 equivalent */
59 |   font-family: monospace;
60 |   font-size: 1.25rem; /* text-xl equivalent */
61 |   padding: 0.25rem 0.75rem; /* py-1 px-3 roughly */
62 |   border-radius: 0.25rem; /* rounded */
63 |   transition: all 0.2s;
64 | }
65 | 
66 | .ascii-arrow:hover {
67 |   background: rgba(0, 255, 0, 0.2); /* hover:bg-green-900 (adjust opacity for desired effect) */
68 | }
69 | 


--------------------------------------------------------------------------------
/frontend/src/index.tsx:
--------------------------------------------------------------------------------
 1 | import React from 'react';
 2 | import ReactDOM from 'react-dom/client';
 3 | import { BrowserRouter } from 'react-router-dom'; // New import
 4 | import './index.css';
 5 | import App from './App';
 6 | import reportWebVitals from './reportWebVitals';
 7 | import { ScreenLoaderProvider } from './context/ScreenLoaderContext'; // New import
 8 | 
 9 | const root = ReactDOM.createRoot(
10 |   document.getElementById('root') as HTMLElement
11 | );
12 | root.render(
13 |   <React.StrictMode>
14 |     <BrowserRouter>
15 |       <ScreenLoaderProvider>
16 |         <App />
17 |       </ScreenLoaderProvider>
18 |     </BrowserRouter>
19 |   </React.StrictMode>
20 | );
21 | 
22 | // If you want to start measuring performance in your app, pass a function
23 | // to log results (for example: reportWebVitals(console.log))
24 | // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
25 | reportWebVitals();
26 | 


--------------------------------------------------------------------------------
/frontend/src/logo.svg:
--------------------------------------------------------------------------------
1 | <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841.9 595.3"><g fill="#61DAFB"><path d="M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z"/><circle cx="420.9" cy="296.5" r="45.7"/><path d="M520.5 78.1z"/></g></svg>


--------------------------------------------------------------------------------
/frontend/src/react-app-env.d.ts:
--------------------------------------------------------------------------------
1 | /// <reference types="react-scripts" />
2 | 


--------------------------------------------------------------------------------
/frontend/src/reportWebVitals.ts:
--------------------------------------------------------------------------------
 1 | import { ReportHandler } from 'web-vitals';
 2 | 
 3 | const reportWebVitals = (onPerfEntry?: ReportHandler) => {
 4 |   if (onPerfEntry && onPerfEntry instanceof Function) {
 5 |     import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
 6 |       getCLS(onPerfEntry);
 7 |       getFID(onPerfEntry);
 8 |       getFCP(onPerfEntry);
 9 |       getLCP(onPerfEntry);
10 |       getTTFB(onPerfEntry);
11 |     });
12 |   }
13 | };
14 | 
15 | export default reportWebVitals;
16 | 


--------------------------------------------------------------------------------
/frontend/src/screens/BootSequence.tsx:
--------------------------------------------------------------------------------
 1 | import React, { useState, useEffect, useRef } from "react";
 2 | 
 3 | const bootLines = [
 4 |   ">>> INITIATING OZF SYSTEM...",
 5 |   "[OK] BIOS: LAWLESSLANDS.v3.4",
 6 |   "[OK] MOUNTING /fragments/memory_core",
 7 |   "[ERR] INDEX TABLE CORRUPTED — Attempting Recovery",
 8 |   ">>> SYSTEM LOG ██████▒▒▒▒▒▒▒▒▒▒",
 9 |   "LOADING... ███████░░░░░░░░░░",
10 |   ">>> AUTH MODULE BREACHED",
11 |   "!! WARNING: ARCHITECT PRESENCE DETECTED",
12 |   "_boot complete. PRESS ANY KEY OR CLICK TO CONTINUE_"
13 | ];
14 | 
15 | export const BootSequence = ({ onContinue }: { onContinue: () => void }) => {
16 |   const [displayedLines, setDisplayedLines] = useState<string[]>([]);
17 |   const indexRef = useRef(0);
18 | 
19 |   useEffect(() => {
20 |     const interval = setInterval(() => {
21 |       if (indexRef.current < bootLines.length) {
22 |         setDisplayedLines((prev) => [...prev, bootLines[indexRef.current++]])
23 |       } else {
24 |         clearInterval(interval);
25 |       }
26 |     }, 500);
27 |     return () => clearInterval(interval);
28 |   }, []);
29 | 
30 |   useEffect(() => {
31 |     const handleContinue = () => {
32 |       if (indexRef.current >= bootLines.length) {
33 |         onContinue();
34 |       }
35 |     };
36 |     window.addEventListener("keydown", handleContinue);
37 |     window.addEventListener("click", handleContinue);
38 |     return () => {
39 |       window.removeEventListener("keydown", handleContinue);
40 |       window.removeEventListener("click", handleContinue);
41 |     };
42 |   }, [onContinue]);
43 | 
44 |   return (
45 |     <div className="w-screen h-screen bg-black relative overflow-hidden flex flex-col justify-center items-start px-8 text-green-400 font-mono text-sm sm:text-base">
46 |       <div className="absolute top-0 left-0 w-full h-full scanlines pointer-events-none" />
47 |       {displayedLines.map((line, i) => (
48 |         <div key={i} className="animate-crt-glow animate-type whitespace-pre-wrap">{line}</div>
49 |       ))}
50 |       {indexRef.current >= bootLines.length && (
51 |         <div className="mt-4 animate-crt-glow">[ CLICK ANYWHERE OR PRESS A KEY TO PROCEED ]</div>
52 |       )}
53 |     </div>
54 |   );
55 | };


--------------------------------------------------------------------------------
/frontend/src/screens/CharacterScreen.tsx:
--------------------------------------------------------------------------------
 1 | import React, { useState } from 'react';
 2 | import { useNavigate } from 'react-router-dom';
 3 | 
 4 | const characters = [
 5 |   {
 6 |     name: 'Player',
 7 |     image: '/assets/images/character-default.png'
 8 |   },
 9 |   {
10 |     name: 'Enemy',
11 |     image: '/assets/images/enemy-default.png'
12 |   }
13 | ];
14 | 
15 | const CharacterScreen = () => {
16 |   const navigate = useNavigate();
17 |   const [currentIndex, setCurrentIndex] = useState(0);
18 |   const selected = characters[currentIndex];
19 | 
20 |   const prevCharacter = () => {
21 |     setCurrentIndex((currentIndex - 1 + characters.length) % characters.length);
22 |   };
23 | 
24 |   const nextCharacter = () => {
25 |     setCurrentIndex((currentIndex + 1) % characters.length);
26 |   };
27 | 
28 |   return (
29 |     <div className="screen font-mono text-green-400 bg-black h-screen p-4 relative">
30 |       <button className="absolute top-2 right-4 text-xl" onClick={() => navigate(-1)}>✕</button>
31 | 
32 |       <div className="flex flex-col md:flex-row justify-between h-full">
33 |         {/* Avatar and Arrows */}
34 |         <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
35 |           <div className="flex items-center space-x-4">
36 |             <button onClick={prevCharacter} className="text-2xl hover:text-green-300">◀</button>
37 | 
38 |             <img
39 |               src={selected.image}
40 |               alt={selected.name}
41 |               className="w-48 h-48 object-cover border-2 border-green-400"
42 |             />
43 | 
44 |             <button onClick={nextCharacter} className="text-2xl hover:text-green-300">▶</button>
45 |           </div>
46 |           <p className="mt-2 text-green-300">{selected.name}</p>
47 |         </div>
48 | 
49 |         {/* Stats & Gear */}
50 |         <div className="w-full md:w-1/2 mt-6 md:mt-0 p-4">
51 |           <h2 className="text-lg mb-2 border-b border-green-400">Stats</h2>
52 |           <ul className="mb-4">
53 |             <li>HP: 100</li>
54 |             <li>STR: 15</li>
55 |             <li>DEX: 12</li>
56 |             <li>INT: 10</li>
57 |             <li>DEF: 8</li>
58 |           </ul>
59 | 
60 |           <h2 className="text-lg mb-2 border-b border-green-400">Equipped</h2>
61 |           <ul>
62 |             <li>Sword: Iron Cleaver</li>
63 |             <li>Armor: Leather Vest</li>
64 |             <li>Trinket: Old Locket</li>
65 |           </ul>
66 |         </div>
67 |       </div>
68 | 
69 |       {/* Quick Slots */}
70 |       <div className="absolute bottom-4 w-full flex justify-center space-x-4">
71 |         {[1, 2, 3, 4].map((_, i) => (
72 |           <div key={i} className="w-16 h-16 border-2 border-green-400 flex items-center justify-center">
73 |             Slot {i + 1}
74 |           </div>
75 |         ))}
76 |       </div>
77 |     </div>
78 |   );
79 | };
80 | 
81 | export default CharacterScreen;


--------------------------------------------------------------------------------
/frontend/src/screens/EndBattleScreen.tsx:
--------------------------------------------------------------------------------
 1 | import React, { useMemo } from "react";
 2 | 
 3 | interface EndBattleScreenProps {
 4 |   winner: "player" | "opponent" | null;
 5 |   onRestart: () => void;
 6 | }
 7 | 
 8 | const loreQuotes = [
 9 |   "01010011 // A memory resurfaced — but whose?",
10 |   ">>> DATA FRAGMENT RECOVERED: 'We were not the first...'",
11 |   "_!_ ARCHIVE BREACH DETECTED... Reconstructing...",
12 |   "/* The core pulsed once... then silence. */",
13 |   "`SYSTEM ECHO:` 'You have deviated from protocol.'",
14 | ];
15 | 
16 | export function EndBattleScreen({ winner, onRestart }: EndBattleScreenProps) {
17 |   const selectedQuote = useMemo(() => {
18 |     return loreQuotes[Math.floor(Math.random() * loreQuotes.length)];
19 |   }, []);
20 | 
21 |   return (
22 |     <div className="flex flex-col items-center justify-center h-full text-white font-mono glitch-bg p-4">
23 |       <h1 className="text-4xl mb-4">
24 |         {winner === "player" ? "YOU WIN!" : "YOU LOSE"}
25 |       </h1>
26 |       <div className="text-green-400 font-mono text-center text-xl glitch">
27 |         {selectedQuote}
28 |       </div>
29 |       <button
30 |         onClick={onRestart}
31 |         className="bg-white text-black px-6 py-2 rounded mt-4 hover:glitch-button"
32 |       >
33 |         Return to Main Menu
34 |       </button>
35 |     </div>
36 |   );
37 | }


--------------------------------------------------------------------------------
/frontend/src/screens/FPVMazeScreen.tsx:
--------------------------------------------------------------------------------
 1 | import React, { useState } from 'react'; // Added useState
 2 | import MazeFPV from '../features/fpv_maze/MazeFPV';
 3 | import { useNavigate } from 'react-router-dom';
 4 | import { PlayerState } from '../features/fpv_maze/useMazeControls'; // Import PlayerState
 5 | import { mazeWithTriggers as initialMazeMap, MazeMap } from '../features/fpv_maze/MazeData'; // Use a map
 6 | 
 7 | const FPVMazeScreen: React.FC = () => {
 8 |   const navigate = useNavigate();
 9 |   
10 |   // FPVMazeScreen will manage its own simple state for the maze
11 |   const [playerState, setPlayerState] = useState<PlayerState>({ x: 1.5, y: 1.5, angle: Math.PI / 2 });
12 |   const [mazeMap] = useState<MazeMap>(initialMazeMap);
13 | 
14 | 
15 |   const handleExitMaze = () => {
16 |     console.log('Exiting maze from FPVMazeScreen...');
17 |     // navigate('/menu'); // Or wherever is appropriate
18 |     alert('Exiting Maze! Navigation from FPVMazeScreen not fully implemented.');
19 |   };
20 | 
21 |   return (
22 |     <div style={{
23 |       display: 'flex',
24 |       flexDirection: 'column',
25 |       alignItems: 'center',
26 |       justifyContent: 'center',
27 |       minHeight: '100vh',
28 |       backgroundColor: '#1a1a1a',
29 |       color: '#00FF00',
30 |       fontFamily: '"Courier New", Courier, monospace',
31 |       padding: '20px'
32 |     }}>
33 |       <h1 style={{ marginBottom: '20px' }}>FPV MAZE VIEWER</h1>
34 |       <MazeFPV
35 |         initialPlayerState={playerState}
36 |         onPlayerStateChange={setPlayerState}
37 |         mazeMap={mazeMap}
38 |         onExitMaze={handleExitMaze}
39 |       />
40 |     </div>
41 |   );
42 | };
43 | 
44 | export default FPVMazeScreen;


--------------------------------------------------------------------------------
/frontend/src/screens/InventoryScreen.tsx:
--------------------------------------------------------------------------------
 1 | import { useNavigate } from 'react-router-dom';
 2 | import { useState } from 'react';
 3 | 
 4 | const items = [
 5 |   {
 6 |     name: "Iron Cleaver",
 7 |     type: "Weapon",
 8 |     description: "A jagged blade forged from scrap metal. Deals moderate damage.",
 9 |   },
10 |   {
11 |     name: "Med Patch",
12 |     type: "Consumable",
13 |     description: "Restores 25 HP when applied.",
14 |   },
15 |   {
16 |     name: "Old Locket",
17 |     type: "Trinket",
18 |     description: "A mysterious charm. Boosts INT slightly.",
19 |   },
20 |   {
21 |     name: "Nano Mesh Vest",
22 |     type: "Armor",
23 |     description: "Basic protection against physical damage.",
24 |   },
25 | ];
26 | 
27 | const InventoryScreen = () => {
28 |   const navigate = useNavigate();
29 |   const [selectedItemIndex, setSelectedItemIndex] = useState(0);
30 |   const selected = items[selectedItemIndex];
31 | 
32 |   const next = () => setSelectedItemIndex((selectedItemIndex + 1) % items.length);
33 |   const prev = () => setSelectedItemIndex((selectedItemIndex - 1 + items.length) % items.length);
34 | 
35 |   return (
36 |     <div className="screen font-mono text-green-400 bg-black min-h-screen p-4 relative">
37 |       {/* Back Button */}
38 |       <button onClick={() => navigate(-1)} className="absolute top-2 left-4 text-xl">✕</button>
39 | 
40 |       {/* Title */}
41 |       <h1 className="text-center text-xl mb-4 border-b border-green-400 pb-2">INVENTORY</h1>
42 | 
43 |       {/* Main Layout */}
44 |       <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 md:space-x-6 h-full">
45 |         
46 |         {/* Inventory Grid */}
47 |         <div className="grid grid-cols-2 gap-4 w-full md:w-2/3">
48 |           {items.map((item, index) => (
49 |             <button
50 |               key={index}
51 |               className={`border p-4 text-left hover:bg-green-900 transition-all ${
52 |                 index === selectedItemIndex ? "border-green-300" : "border-green-400"
53 |               }`}
54 |               onClick={() => setSelectedItemIndex(index)}
55 |             >
56 |               <p className="text-sm">{item.name}</p>
57 |               <p className="text-xs text-green-300">{item.type}</p>
58 |             </button>
59 |           ))}
60 |         </div>
61 | 
62 |         {/* Item Detail Panel */}
63 |         <div className="flex-1 border border-green-400 p-4 relative">
64 |           <div className="absolute top-2 right-2 space-x-2">
65 |             <button onClick={prev} className="hover:text-green-300">◀</button>
66 |             <button onClick={next} className="hover:text-green-300">▶</button>
67 |           </div>
68 |           <h2 className="text-lg border-b border-green-400 pb-1 mb-2">{selected.name}</h2>
69 |           <p className="text-green-300 text-sm mb-2">{selected.type}</p>
70 |           <p className="text-xs text-green-400">{selected.description}</p>
71 |         </div>
72 |       </div>
73 |     </div>
74 |   );
75 | };
76 | 
77 | export default InventoryScreen;


--------------------------------------------------------------------------------
/frontend/src/screens/LoginScreen.tsx:
--------------------------------------------------------------------------------
 1 | import React, { useState, useEffect } from "react";
 2 | import { useNavigate } from "react-router-dom";
 3 | import MenuScreen from "./MainMenu"; 
 4 | 
 5 | export const LoginScreen = () => {
 6 |   const [loading, setLoading] = useState(false);
 7 |   const [error, setError] = useState<string | null>(null); // Added error state
 8 |   const [redirect, setRedirect] = useState(false);
 9 |   const navigate = useNavigate();
10 | 
11 |   const handleLogin = () => {
12 |     setLoading(true);
13 |     setError(null); // Clear previous errors
14 |     setTimeout(() => {
15 |       // TEMPORARY: Auto-login bypass for testing
16 |       sessionStorage.setItem('seenBoot', 'true'); // Set seenBoot to true after successful login
17 |       setRedirect(true);
18 |     }, 1200);
19 |   };
20 | 
21 |   useEffect(() => {
22 |     if (redirect) {
23 |       const timer = setTimeout(() => {
24 |         navigate("/menu");
25 |       }, 2000);
26 |       return () => clearTimeout(timer);
27 |     }
28 |   }, [redirect, navigate]); // Added navigate to dependency array
29 | 
30 |   if (redirect && !error) { // Ensure no error before showing access granted
31 |     return (
32 |       <div className="w-screen h-screen bg-black flex items-center justify-center text-green-400 font-mono">
33 |         <div className="text-xl animate-crt-glow">ACCESS GRANTED: WELCOME TO LAWLESSLANDS</div>
34 |       </div>
35 |     );
36 |   }
37 | 
38 |   return (
39 |     <div className="w-screen h-screen bg-black relative flex flex-col justify-center items-center text-green-400 font-mono p-4">
40 |       <div className="absolute top-0 left-0 w-full h-full scanlines pointer-events-none" />
41 |       <div className="w-full max-w-md space-y-4">
42 |         <h1 className="text-xl glitch text-center">OZF SYSTEM LOGIN</h1>
43 |         <input
44 |           type="text"
45 |           placeholder="Username"
46 |           className="w-full bg-black border border-green-500 p-2 text-green-400 placeholder-green-600 focus:outline-none"
47 |         />
48 |         <input
49 |           type="password"
50 |           placeholder="Password"
51 |           className="w-full bg-black border border-green-500 p-2 text-green-400 placeholder-green-600 focus:outline-none"
52 |         />
53 |         <button
54 |           onClick={handleLogin}
55 |           className="w-full border border-green-500 py-2 hover:bg-green-700 hover:text-black transition-all"
56 |         >
57 |           {loading ? "AUTHORIZING..." : "LOGIN"}
58 |         </button>
59 |         {error && <div className="glitch text-red-500 text-sm animate-glitch-fast">{error}</div>}
60 |         <div className="flex justify-between text-xs">
61 |           <button className="underline">Forgot Password?</button>
62 |           <button className="underline">Sign Up</button>
63 |         </div>
64 |       </div>
65 |     </div>
66 |   );
67 | };


--------------------------------------------------------------------------------
/frontend/src/screens/MainMenu.tsx:
--------------------------------------------------------------------------------
 1 | import { useNavigate } from 'react-router-dom';
 2 | 
 3 | const MainMenuScreen = () => {
 4 |   const navigate = useNavigate();
 5 | 
 6 |   return (
 7 |     <div className="screen font-mono text-green-400 bg-black h-screen flex flex-col items-center justify-center space-y-4 p-4">
 8 |       <div className="relative crt-scanline mb-8">
 9 |         <pre className="crt-title text-green-400 text-xs leading-none text-center font-mono">
10 | {String.raw`
11 |  _____                                                _____
12 | ( ___ )                                              ( ___ )
13 |  |   |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|   |
14 |  |   |     __    ___ _       ____    ________________ |   |
15 |  |   |    / /   /   | |     / / /   / ____/ ___/ ___/ |   |
16 |  |   |   / /   / /| | | /| / / /   / __/  \__ \\__ \  |   |
17 |  |   |  / /___/ ___ | |/ |/ / /___/ /___ ___/ /__/ /  |   |
18 |  |   | /_____/_/ _|_|__/|__/_____/_____//____/____/   |   |
19 |  |   |    / /   /   |  / | / / __ \/ ___/             |   |
20 |  |   |   / /   / /| | /  |/ / / / /\__ \              |   |
21 |  |   |  / /___/ ___ |/ /|  / /_/ /___/ /              |   |
22 |  |   | /_____/_/  |_/_/ |_/_____//____/               |   |
23 |  |___|~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|___|
24 | (_____)                                              (_____)
25 | `}
26 |         </pre>
27 |       </div>
28 | 
29 |       <button
30 |         onClick={() => navigate('/story')}
31 |         className="border border-green-400 px-6 py-2 hover:bg-green-900 transition-all w-64 text-left crt-button" // Added crt-button as per instruction, though it might not have a style yet
32 |       >
33 |         ▶ Story Mode
34 |       </button>
35 | 
36 |       <button
37 |         onClick={() => navigate('/battle')}
38 |         className="border border-green-400 px-6 py-2 hover:bg-green-900 transition-all w-64 text-left"
39 |       >
40 |         ▶ Battle Mode
41 |       </button>
42 | 
43 |       <button
44 |         onClick={() => navigate('/character')}
45 |         className="border border-green-400 px-6 py-2 hover:bg-green-900 transition-all w-64 text-left"
46 |       >
47 |         ▶ Character
48 |       </button>
49 | 
50 |       <button
51 |         onClick={() => navigate('/inventory')}
52 |         className="border border-green-400 px-6 py-2 hover:bg-green-900 transition-all w-64 text-left"
53 |       >
54 |         ▶ Inventory
55 |       </button>
56 | 
57 |       <button
58 |         onClick={() => navigate('/settings')}
59 |         className="border border-green-400 px-6 py-2 hover:bg-green-900 transition-all w-64 text-left"
60 |       >
61 |         ▶ Settings
62 |       </button>
63 |     </div>
64 |   );
65 | };
66 | 
67 | export default MainMenuScreen;


--------------------------------------------------------------------------------
/frontend/src/screens/SettingsScreen.tsx:
--------------------------------------------------------------------------------
 1 | import React from 'react';
 2 | import { useNavigate } from 'react-router-dom';
 3 | 
 4 | const SettingsScreen = () => {
 5 |   const navigate = useNavigate();
 6 | 
 7 |   return (
 8 |     <div className="screen font-mono text-green-400 bg-black h-screen p-6 relative">
 9 |       <button className="absolute top-2 right-4 text-xl" onClick={() => navigate(-1)}>✕</button>
10 |       <h1 className="text-2xl mb-6 border-b border-green-400 pb-2">⚙ Settings</h1>
11 | 
12 |       <div className="space-y-6">
13 |         <div>
14 |           <label className="block mb-1">Sound</label>
15 |           <input type="range" min="0" max="100" className="w-full accent-green-400" />
16 |         </div>
17 |         <div>
18 |           <label className="block mb-1">Difficulty</label>
19 |           <select className="w-full bg-black border border-green-400 text-green-400 p-2">
20 |             <option>Easy</option>
21 |             <option>Normal</option>
22 |             <option>Hard</option>
23 |           </select>
24 |         </div>
25 |         <div>
26 |           <label className="block mb-1">CRT Screen Flicker</label>
27 |           <input type="checkbox" className="accent-green-400" />
28 |         </div>
29 |       </div>
30 |     </div>
31 |   );
32 | };
33 | 
34 | export default SettingsScreen;


--------------------------------------------------------------------------------
/frontend/src/screens/SplashScreen.tsx:
--------------------------------------------------------------------------------
 1 | import { useNavigate } from "react-router-dom";
 2 | import { useEffect, useState } from "react";
 3 | 
 4 | const SplashScreen = () => {
 5 |   const navigate = useNavigate();
 6 |   const [glitch, setGlitch] = useState(false);
 7 | 
 8 |   useEffect(() => {
 9 |     const timer = setInterval(() => setGlitch(prev => !prev), 300);
10 |     return () => clearInterval(timer);
11 |   }, []);
12 | 
13 |   return (
14 |     <div
15 |       onClick={() => navigate("/menu")}
16 |       style={{
17 |         background: "#000",
18 |         color: "#00FF00",
19 |         fontFamily: "monospace",
20 |         height: "100vh",
21 |         display: "flex",
22 |         justifyContent: "center",
23 |         alignItems: "center",
24 |         flexDirection: "column",
25 |         cursor: "pointer",
26 |         textAlign: "center"
27 |       }}
28 |     >
29 |       <pre style={{ fontSize: "2rem", filter: glitch ? "blur(1px)" : "none" }}>
30 | {String.raw`
31 |    ██████╗ ███████╗███████╗
32 |   ██╔═══██╗██╔════╝██╔════╝
33 |   ██║   ██║█████╗  ███████╗
34 |   ██║   ██║██╔══╝  ╚════██║
35 |   ╚██████╔╝███████╗███████║
36 |    ╚═════╝ ╚══════╝╚══════╝
37 | `}
38 |       </pre>
39 |       <p style={{ marginTop: "1rem", opacity: glitch ? 0.3 : 1 }}>
40 |         click to enter system...
41 |       </p>
42 |     </div>
43 |   );
44 | };
45 | 
46 | export default SplashScreen;


--------------------------------------------------------------------------------
/frontend/src/setupTests.ts:
--------------------------------------------------------------------------------
1 | // jest-dom adds custom jest matchers for asserting on DOM nodes.
2 | // allows you to do things like:
3 | // expect(element).toHaveTextContent(/react/i)
4 | // learn more: https://github.com/testing-library/jest-dom
5 | import '@testing-library/jest-dom';
6 | 


--------------------------------------------------------------------------------
/frontend/src/views/BattleScreen.tsx:
--------------------------------------------------------------------------------
 1 | import React from 'react';
 2 | 
 3 | const BattleScreen: React.FC = () => {
 4 |   return (
 5 |     <div className="flex flex-col items-center justify-center h-full bg-black text-green-500">
 6 |       <h1 className="text-2xl font-bold mb-4">Battle Screen</h1>
 7 |       <p>Under Construction</p>
 8 |     </div>
 9 |   );
10 | };
11 | 
12 | export default BattleScreen;


--------------------------------------------------------------------------------
/frontend/src/views/MainMenu.tsx:
--------------------------------------------------------------------------------
 1 | import React from 'react';
 2 | import Button from '../components/Button';
 3 | import { useNavigate } from 'react-router-dom';
 4 | 
 5 | const MainMenu: React.FC = () => {
 6 |   const navigate = useNavigate();
 7 | 
 8 |   return (
 9 |     <div className="flex flex-col items-center justify-center h-full bg-black text-green-500">
10 |       <h1 className="text-2xl font-bold mb-4">OZF Game</h1>
11 |       <Button onClick={() => navigate('/battle')} >Battle</Button>
12 |       <Button onClick={() => navigate('/character')} >Character</Button>
13 |       <Button onClick={() => navigate('/inventory')} >Inventory</Button>
14 |       <Button onClick={() => navigate('/settings')} >Settings</Button>
15 |     </div>
16 |   );
17 | };
18 | 
19 | export default MainMenu;


--------------------------------------------------------------------------------
/frontend/src/views/SplashScreen.tsx:
--------------------------------------------------------------------------------
 1 | import React from 'react';
 2 | import GlitchText from '../components/GlitchText';
 3 | import { useNavigate } from 'react-router-dom';
 4 | 
 5 | const SplashScreen: React.FC = () => {
 6 |   const navigate = useNavigate();
 7 | 
 8 |   const handleClick = () => {
 9 |     navigate('/main-menu');
10 |   };
11 | 
12 |   return (
13 |     <div className="flex flex-col items-center justify-center h-full bg-black text-green-500" onClick={handleClick}>
14 |       <GlitchText text="OZF Game" />
15 |       <p className="text-sm mt-4">Click to Enter</p>
16 |     </div>
17 |   );
18 | };
19 | 
20 | export default SplashScreen;


--------------------------------------------------------------------------------
/frontend/src/vite-env.d.ts:
--------------------------------------------------------------------------------
1 | /// <reference types="vite/client" />
2 | 
3 | // Declare modules for raw text file imports
4 | declare module '*.txt?raw' {
5 |   const content: string;
6 |   export default content;
7 | }


--------------------------------------------------------------------------------
/frontend/tailwind.config.js:
--------------------------------------------------------------------------------
 1 | /** @type {import('tailwindcss').Config} */
 2 | module.exports = {
 3 |   content: [
 4 |     "./src/**/*.{js,ts,jsx,tsx}",
 5 |     "./public/index.html",
 6 |   ],
 7 |   theme: {
 8 |     extend: {},
 9 |   },
10 |   plugins: [],
11 | }


--------------------------------------------------------------------------------
/frontend/tsconfig.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "compilerOptions": {
 3 |     "target": "es6",
 4 |     "module": "esnext",
 5 |     "moduleResolution": "node",
 6 |     "jsx": "react-jsx",
 7 |     "strict": true,
 8 |     "esModuleInterop": true,
 9 |     "allowSyntheticDefaultImports": true,
10 |     "skipLibCheck": true,
11 |     "resolveJsonModule": true,
12 |     "isolatedModules": true,
13 |     "forceConsistentCasingInFileNames": true,
14 |     "noEmit": true
15 |   },
16 |   "include": ["src"],
17 |   "exclude": [
18 |     "node_modules"
19 |   ]
20 | }
21 | 


--------------------------------------------------------------------------------
/game_mvp_schema.sql:
--------------------------------------------------------------------------------
 1 | -- USERS
 2 | CREATE TABLE users (
 3 |   id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
 4 |   email TEXT UNIQUE,
 5 |   username TEXT UNIQUE NOT NULL,
 6 |   created_at TIMESTAMP DEFAULT NOW(),
 7 |   last_login TIMESTAMP
 8 | );
 9 | 
10 | -- PLAYER PROFILES
11 | CREATE TABLE player_profiles (
12 |   id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
13 |   user_id UUID REFERENCES users(id),
14 |   character_class_id UUID REFERENCES character_classes(id),
15 |   level INT DEFAULT 1,
16 |   experience INT DEFAULT 0,
17 |   unlocked_abilities UUID[],
18 |   equipped_cosmetic_id UUID,
19 |   created_at TIMESTAMP DEFAULT NOW()
20 | );
21 | 
22 | -- CHARACTER CLASSES
23 | CREATE TABLE character_classes (
24 |   id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
25 |   name TEXT NOT NULL,
26 |   description TEXT,
27 |   passive_ability_id UUID,
28 |   icon TEXT
29 | );
30 | 
31 | -- ABILITIES
32 | CREATE TABLE abilities (
33 |   id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
34 |   name TEXT,
35 |   description TEXT,
36 |   class_id UUID REFERENCES character_classes(id),
37 |   level_unlock INT,
38 |   type TEXT, -- active | passive | ultimate
39 |   energy_cost INT,
40 |   cooldown INT,
41 |   effect_json JSONB,
42 |   icon TEXT
43 | );
44 | 
45 | -- MATCHES
46 | CREATE TABLE matches (
47 |   id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
48 |   player_a_id UUID REFERENCES player_profiles(id),
49 |   player_b_id UUID REFERENCES player_profiles(id),
50 |   winner_id UUID REFERENCES player_profiles(id),
51 |   status TEXT, -- active | completed | forfeit
52 |   started_at TIMESTAMP,
53 |   ended_at TIMESTAMP,
54 |   is_bot BOOLEAN DEFAULT false
55 | );
56 | 
57 | -- TURNS
58 | CREATE TABLE turns (
59 |   id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
60 |   match_id UUID REFERENCES matches(id),
61 |   turn_number INT,
62 |   acting_player_id UUID REFERENCES player_profiles(id),
63 |   ability_id UUID REFERENCES abilities(id),
64 |   target_id UUID REFERENCES player_profiles(id),
65 |   result_json JSONB,
66 |   created_at TIMESTAMP DEFAULT NOW()
67 | );
68 | 
69 | -- COSMETICS
70 | CREATE TABLE cosmetics (
71 |   id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
72 |   name TEXT,
73 |   rarity TEXT,
74 |   image TEXT,
75 |   is_nft BOOLEAN DEFAULT false,
76 |   solana_mint_address TEXT,
77 |   owner_id UUID REFERENCES player_profiles(id)
78 | );


--------------------------------------------------------------------------------
/match_resolution_engine_architecture.md:
--------------------------------------------------------------------------------
 1 | # Match Resolution Engine – Architectural Overview
 2 | 
 3 | ## Directory Structure
 4 | 
 5 | ```
 6 | /match_engine/
 7 | │
 8 | ├── index.ts               # Main entrypoint to run a turn
 9 | ├── resolver.ts            # Determines turn order, applies abilities
10 | ├── effect_runner.ts       # Applies JSON-based effects (damage, stun, etc.)
11 | ├── status_manager.ts      # Handles ongoing effects (poison, burn, cooldowns)
12 | ├── validator.ts           # Ensures submitted actions are legal
13 | ├── state.ts               # Defines and mutates MatchState and PlayerState
14 | ├── combat_log.ts          # Generates turn-by-turn logs for frontend
15 | ├── victory_checker.ts     # Declares match result (KO, timeout, surrender)
16 | ├── bot_ai.ts              # Generates actions for PvE bot opponents
17 | └── types.ts               # Shared interfaces (TurnAction, MatchState, etc.)
18 | ```
19 | 
20 | ## Module Responsibilities
21 | 
22 | ### `index.ts`
23 | - Accepts input: MatchState + 2 TurnActions
24 | - Calls validator → resolver → effect_runner
25 | - Updates state and returns results
26 | 
27 | ### `resolver.ts`
28 | - Orders turns by initiative (e.g., speed stat or tie-breaker)
29 | - Handles PvP and PvE match flow
30 | - Calls applyAbility() in order
31 | 
32 | ### `effect_runner.ts`
33 | - Loads effects from JSON ability file
34 | - Applies effects through handlers:
35 | ```ts
36 | runEffect({ type: 'burn', duration: 2 }, abilityId, source, target, state)
37 | ```
38 | 
39 | ### `status_manager.ts`
40 | - Manages ongoing status:
41 |   - Buffs/debuffs
42 |   - Immunities, shields, damage-over-time
43 | - Clears expired effects
44 |  - Triggers optional `onStartTurn`/`onEndTurn` callbacks on each status effect
45 | 
46 | ### `validator.ts`
47 | - Verifies submitted turn legality:
48 |   - Ability unlocked, not on cooldown, not silenced
49 | 
50 | ### `state.ts`
51 | - Holds core schemas:
52 |   - MatchState
53 |   - PlayerState
54 |   - Effect
55 | - Functions like applyDamage, applyStatus
56 | 
57 | ### `combat_log.ts`
58 | - Logs turn-by-turn summaries:
59 | ```
60 | "Warrior used Meteoric Charge!"
61 | "Mage was stunned for 1 turn!"
62 | ```
63 | 
64 | ### `victory_checker.ts`
65 | - Detects KO, timeout, forfeit
66 | 
67 | ### `bot_ai.ts`
68 | - Chooses AI abilities from context
69 | - Weighted logic: aggression, disable, heal
70 | 
71 | ## Data Flow Summary
72 | 
73 | ```
74 | [Player Turn Input]
75 |      ↓
76 | [validator.ts]
77 |      ↓
78 | [resolver.ts]
79 |      ↓
80 | → applyAbility (from JSON)
81 |      ↓
82 | [effect_runner.ts]
83 |      ↓
84 | [status_manager.ts] → updates effects and fires turn triggers
85 |      ↓
86 | [combat_log.ts] → writes log
87 |      ↓
88 | [victory_checker.ts] → match result
89 | ```
90 | 
91 | ## Benefits
92 | - Modular + testable
93 | - Real-time & async compatible
94 | - Clean bot and multiplayer integration
95 | - JSON ability driven


--------------------------------------------------------------------------------
/ozf_backend_checklist_resynced.md:
--------------------------------------------------------------------------------
 1 | # ✅ OZF Game Backend Development Checklist (Resynced)
 2 | 
 3 | ## ✅ Completed
 4 | 
 5 | ### 🔧 Project Setup
 6 | - [x] Initialized TypeScript + Express backend
 7 | - [x] Created `tsconfig.json`, `package.json`, and base server
 8 | - [x] Live backend server with `/` root test route
 9 | 
10 | ### 🔁 Match Flow
11 | - [x] `/api/match/start` creates match instance (PvE or PvP)
12 | - [x] In-memory match state storage via `matchStateStore.ts`
13 | - [x] `/api/match/:matchId/turn` processes submitted player turns
14 | - [x] `runMatchTurn()` handles resolution logic and result
15 | 
16 | ### ⚔️ Ability & Status System
17 | - [x] JSON-based Warrior class with 3 active abilities, 1 passive, 1 ultimate
18 | - [x] `warrior.json` created and loaded in `abilityRegistry`
19 | - [x] Status system for stuns, buffs, shields, DOTs
20 | - [x] Real-time effect ticking and cleanup
21 | - [x] Log reflects combat effects, status changes, and damage
22 | 
23 | ### 🔋 Energy + Cooldowns
24 | - [x] Players have energy pools and ability cooldown tracking
25 | - [x] Prevents ability use if on cooldown or lacking energy
26 | - [x] Energy/cooldowns update each turn
27 | 
28 | ### 🤖 PvE Bot AI
29 | - [x] Modular bot AI system implemented
30 | - [x] Includes random, aggressive, defensive, tactical models
31 | - [x] Match engine dynamically uses bot AI for PvE matches
32 | - [x] Fully type-safe status effect conversion and application
33 | 
34 | ## 🔜 In Progress / To Do
35 | 
36 | ### 🧠 Engine Enhancements
37 | - [ ] Add win condition check (KO or surrender)
38 | - [ ] Return `winner` from `runMatchTurn()`
39 | - [ ] Log full `TurnLog` per match
40 | - [ ] Add XP system on win and class-based level progression
41 | 
42 | ### 💾 Persistence (Post-MVP)
43 | - [ ] Replace in-memory state with PostgreSQL match model
44 | - [ ] Persist `TurnLog`, XP, and level
45 | - [ ] Add user auth + session linking
46 | 
47 | ### 🖥️ Frontend (Future)
48 | - [ ] Terminal-style UI with combat log and turn input
49 | - [ ] Lobby + post-match screens
50 | - [ ] Real-time updates with WebSockets
51 | 
52 | ## 🧪 Testing Tools
53 | - [ ] Add unit tests for `runMatchTurn`, `applyEffect`, and bots
54 | - [ ] Add mock match data for local dev
55 | - [ ] Add ability JSON validator


--------------------------------------------------------------------------------
/ozf_cli_simulator.ts:
--------------------------------------------------------------------------------
 1 | import readline from 'readline';
 2 | import fetch from 'node-fetch';
 3 | 
 4 | const rl = readline.createInterface({
 5 |   input: process.stdin,
 6 |   output: process.stdout
 7 | });
 8 | 
 9 | let matchId = '';
10 | const playerId = 'CLI_PLAYER';
11 | 
12 | async function startMatch() {
13 |   try {
14 |     const res = await fetch('http://localhost:3000/api/match/start', {
15 |       method: 'POST',
16 |       headers: { 'Content-Type': 'application/json' },
17 |       body: JSON.stringify({ playerAId: playerId })
18 |     });
19 | 
20 |     const data = await res.json();
21 |     matchId = data.matchId;
22 | 
23 |     if (!matchId) {
24 |       console.error('❌ Failed to start match: matchId undefined');
25 |       process.exit(1);
26 |     }
27 | 
28 |     console.log(`🎮 Match started. ID: ${matchId}`);
29 |     playTurn();
30 |   } catch (err) {
31 |     console.error('❌ Error starting match:', err);
32 |     process.exit(1);
33 |   }
34 | }
35 | 
36 | async function playTurn() {
37 |   rl.question('Choose ability (e.g. cleave, shield_wall): ', async (abilityId) => {
38 |     try {
39 |       const res = await fetch(`http://localhost:3000/api/match/${matchId}/turn`, {
40 |         method: 'POST',
41 |         headers: { 'Content-Type': 'application/json' },
42 |         body: JSON.stringify({
43 |           playerId,
44 |           abilityId: abilityId.trim(),
45 |           targetId: 'BOT'
46 |         })
47 |       });
48 | 
49 |       const data = await res.json();
50 |       console.log('\n--- Combat Log ---');
51 |       data.combatLog.forEach((line: string) => console.log(line));
52 |       console.log('-------------------\n');
53 | 
54 |       if (data.winner) {
55 |         console.log(`🏆 Match over. Winner: ${data.winner}`);
56 |         rl.close();
57 |       } else {
58 |         playTurn();
59 |       }
60 |     } catch (err) {
61 |       console.error('❌ Turn failed:', err);
62 |       rl.close();
63 |     }
64 |   });
65 | }
66 | 
67 | startMatch();


--------------------------------------------------------------------------------
/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "frontend",
 3 |   "version": "0.1.0",
 4 |   "private": true,
 5 |   "scripts": {
 6 |     "start": "react-scripts start",
 7 |     "build": "react-scripts build",
 8 |     "test": "vitest",
 9 |     "test:frontend": "vitest",
10 |     "eject": "react-scripts eject"
11 |   },
12 |   "dependencies": {
13 |     "@testing-library/dom": "^10.4.0",
14 |     "@testing-library/user-event": "^13.5.0",
15 |     "@types/jest": "^27.5.2",
16 |     "@types/node": "^18.0.0",
17 |     "@types/react": "^19.1.6",
18 |     "@types/react-dom": "^19.1.5",
19 |     "framer-motion": "^12.16.0",
20 |     "lucide-react": "^0.511.0",
21 |     "react": "^19.1.0",
22 |     "react-dom": "^19.1.0",
23 |     "react-router-dom": "^7.6.1",
24 |     "react-scripts": "5.0.1",
25 |     "react-simple-typewriter": "^5.0.1",
26 |     "typescript": "^4.9.5",
27 |     "web-vitals": "^2.1.4"
28 |   },
29 |   "devDependencies": {
30 |     "@testing-library/jest-dom": "^6.6.3",
31 |     "@testing-library/react": "^16.3.0",
32 |     "autoprefixer": "^10.4.21",
33 |     "jsdom": "^26.1.0",
34 |     "postcss": "^8.5.4",
35 |     "tailwindcss": "^3.4.17",
36 |     "vitest": "^3.2.2"
37 |   },
38 |   "eslintConfig": {
39 |     "extends": [
40 |       "react-app",
41 |       "react-app/jest"
42 |     ]
43 |   },
44 |   "browserslist": {
45 |     "production": [
46 |       ">0.2%",
47 |       "not dead",
48 |       "not op_mini all"
49 |     ],
50 |     "development": [
51 |       "last 1 chrome version",
52 |       "last 1 firefox version",
53 |       "last 1 safari version"
54 |     ]
55 |   }
56 | }
57 | 


--------------------------------------------------------------------------------
/plan.md:
--------------------------------------------------------------------------------
 1 | # Plan for Updating BattleScreen Component
 2 | 
 3 | ## Project Overview
 4 | The task involves updating the `BattleScreen.tsx` component and its associated styles in `App.css` within the `src` directory. The new `BattleScreen.tsx` code includes battle simulation logic, HP management, and a loading overlay.
 5 | 
 6 | ## Architecture Overview
 7 | 
 8 | ```mermaid
 9 | graph TD
10 |     A[Start] --> B{Review BattleScreen.tsx and App.css};
11 |     B --> C[Update src/screens/BattleScreen.tsx];
12 |     C --> D[Update src/App.css];
13 |     D --> E[Review src/App.tsx];
14 |     E --> F[Confirm Plan with User];
15 |     F --> G{User Approves?};
16 |     G -- Yes --> H[Write Plan to Markdown (Optional)];
17 |     H --> I[Switch to Code Mode];
18 |     I --> J[Implement Changes];
19 |     J --> K[End];
20 |     G -- No --> F;
21 | ```
22 | 
23 | ## Detailed Plan
24 | 
25 | 1.  **Update `src/screens/BattleScreen.tsx`**:
26 |     *   **Action**: Replace the entire content of the existing [`src/screens/BattleScreen.tsx`](src/screens/BattleScreen.tsx) file with the new code provided by the user.
27 |     *   **Reason**: The new code contains the updated battle simulation logic, state management (`useState`, `useEffect`), API calls (`fetch`), and navigation (`useNavigate`).
28 | 
29 | 2.  **Update `src/App.css`**:
30 |     *   **Action**: Append the provided CSS styles to the [`src/App.css`](src/App.css) file.
31 |     *   **Reason**: These styles are necessary to correctly render the new UI elements and the loading overlay introduced in the updated `BattleScreen.tsx`.
32 | 
33 | 3.  **Review `src/App.tsx`**:
34 |     *   **Action**: Examine the [`src/App.tsx`](src/App.tsx) file.
35 |     *   **Reason**: To ensure that the `BattleScreen` component is being rendered correctly and to remove any previous props like `onQuit`, as the new `BattleScreen` component handles navigation internally using `useNavigate` from `react-router-dom`. This step will also confirm that the routing is set up to display the `BattleScreen` as intended.
36 | 
37 | ## Next Steps
38 | Once this plan is written to the markdown file, I will request to switch to `code` mode to implement these changes.
39 | 


--------------------------------------------------------------------------------
/postcss.config.js:
--------------------------------------------------------------------------------
1 | module.exports = {
2 |   plugins: {
3 |     tailwindcss: {},
4 |     autoprefixer: {},
5 |   },
6 | }
7 | 


--------------------------------------------------------------------------------
/public/assets/images/character-default.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/fakesavian/OZF-GAME/5f653fee8e26ce1f9bfef2b98ac6ad1ad13107b7/public/assets/images/character-default.png


--------------------------------------------------------------------------------
/public/assets/images/enemy-default.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/fakesavian/OZF-GAME/5f653fee8e26ce1f9bfef2b98ac6ad1ad13107b7/public/assets/images/enemy-default.png


--------------------------------------------------------------------------------
/public/favicon.ico:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/fakesavian/OZF-GAME/5f653fee8e26ce1f9bfef2b98ac6ad1ad13107b7/public/favicon.ico


--------------------------------------------------------------------------------
/public/index.html:
--------------------------------------------------------------------------------
 1 | <!DOCTYPE html>
 2 | <html lang="en">
 3 |   <head>
 4 |     <meta charset="utf-8" />
 5 |     <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
 6 |     <meta name="viewport" content="width=device-width, initial-scale=1" />
 7 |     <meta name="theme-color" content="#000000" />
 8 |     <meta
 9 |       name="description"
10 |       content="OZF Game - A Cyberpunk Turn-Based RPG"
11 |     />
12 |     <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
13 |     <!--
14 |       manifest.json provides metadata used when your web app is installed on a
15 |       user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
16 |     -->
17 |     <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
18 |     <!--
19 |       Notice the use of %PUBLIC_URL% in the tags above.
20 |       It will be replaced with the URL of the `public` folder during the build.
21 |       Only files inside the `public` folder can be referenced from the HTML.
22 | 
23 |       Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
24 |       work correctly both with client-side routing and a non-root public URL.
25 |       Learn how to configure a non-root public URL by running `npm run build`.
26 |     -->
27 |     <title>OZF Game</title>
28 |   </head>
29 |   <body>
30 |     <noscript>You need to enable JavaScript to run this app.</noscript>
31 |     <div id="root"></div>
32 |     <!--
33 |       This HTML file is a template.
34 |       If you open it directly in the browser, you will see an empty page.
35 | 
36 |       You can add webfonts, meta tags, or analytics to this file.
37 |       The build step will place the bundled scripts into the <body> tag.
38 | 
39 |       To begin the development, run `npm start` or `yarn start`.
40 |       To create a production bundle, use `npm run build` or `yarn build`.
41 |     -->
42 |   </body>
43 | </html>
44 | 


--------------------------------------------------------------------------------
/public/logo192.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/fakesavian/OZF-GAME/5f653fee8e26ce1f9bfef2b98ac6ad1ad13107b7/public/logo192.png


--------------------------------------------------------------------------------
/public/logo512.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/fakesavian/OZF-GAME/5f653fee8e26ce1f9bfef2b98ac6ad1ad13107b7/public/logo512.png


--------------------------------------------------------------------------------
/public/manifest.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "short_name": "React App",
 3 |   "name": "Create React App Sample",
 4 |   "icons": [
 5 |     {
 6 |       "src": "favicon.ico",
 7 |       "sizes": "64x64 32x32 24x24 16x16",
 8 |       "type": "image/x-icon"
 9 |     },
10 |     {
11 |       "src": "logo192.png",
12 |       "type": "image/png",
13 |       "sizes": "192x192"
14 |     },
15 |     {
16 |       "src": "logo512.png",
17 |       "type": "image/png",
18 |       "sizes": "512x512"
19 |     }
20 |   ],
21 |   "start_url": ".",
22 |   "display": "standalone",
23 |   "theme_color": "#000000",
24 |   "background_color": "#ffffff"
25 | }
26 | 


--------------------------------------------------------------------------------
/public/robots.txt:
--------------------------------------------------------------------------------
1 | # https://www.robotstxt.org/robotstxt.html
2 | User-agent: *
3 | Disallow:
4 | 


--------------------------------------------------------------------------------
/src/App.test.tsx:
--------------------------------------------------------------------------------
 1 | import * as React from 'react';
 2 | import { render, screen } from '@testing-library/react';
 3 | import { BrowserRouter, MemoryRouter } from 'react-router-dom';
 4 | import userEvent from '@testing-library/user-event';
 5 | import { test, expect } from 'vitest';
 6 | import '@testing-library/jest-dom';
 7 | import App from './App';
 8 | 
 9 | test('renders boot sequence first line', async () => {
10 |   render(
11 |     <BrowserRouter>
12 |       <App />
13 |     </BrowserRouter>
14 |   );
15 | 
16 |   const line = await screen.findByText(/INITIATING OZF SYSTEM/i);
17 |   expect(line).toBeInTheDocument();
18 | });
19 | 
20 | test('navigates to settings screen', () => {
21 |   render(
22 |     <MemoryRouter initialEntries={['/settings']}>
23 |       <App />
24 |     </MemoryRouter>
25 |   );
26 | 
27 |   const heading = screen.getByText(/Settings/i);
28 |   expect(heading).toBeInTheDocument();
29 | });
30 | 
31 | test('menu settings button shows settings screen', async () => {
32 |   render(
33 |     <MemoryRouter initialEntries={['/menu']}>
34 |       <App />
35 |     </MemoryRouter>
36 |   );
37 | 
38 |   await userEvent.click(screen.getByText('▶ Settings'));
39 |   const heading = await screen.findByText(/Settings/i);
40 |   expect(heading).toBeInTheDocument();
41 | });
42 | 


--------------------------------------------------------------------------------
/src/App.tsx:
--------------------------------------------------------------------------------
 1 | import React from 'react';
 2 | import {
 3 |   Routes,
 4 |   Route,
 5 |   Navigate,
 6 |   useNavigate,
 7 | } from "react-router-dom";
 8 | import { BootSequence } from "./screens/BootSequence";
 9 | import { LoginScreen } from "./screens/LoginScreen";
10 | import MenuScreen from "./screens/MainMenu";
11 | import BattleScreen from "./screens/BattleScreen";
12 | import InventoryScreen from "./screens/InventoryScreen";
13 | import CharacterScreen from "./screens/CharacterScreen";
14 | import SettingsScreen from "./screens/SettingsScreen";
15 | 
16 | 
17 | function App() {
18 |   const seenBoot = sessionStorage.getItem('seenBoot');
19 |   const initialRoute = seenBoot ? "/menu" : "/"; // Changed from /title to /menu as per existing routes
20 | 
21 |   return (
22 |     <Routes>
23 |       <Route path="/" element={<BootWrapper />} />
24 |       <Route path="/login" element={<LoginScreen />} />
25 |       <Route path="/menu" element={<MenuScreen />} />
26 |       <Route path="/battle" element={<BattleScreen />} />
27 |       <Route path="/inventory" element={<InventoryScreen />} />
28 |       <Route path="/settings" element={<SettingsScreen />} />
29 |       <Route path="/character" element={<CharacterScreen />} />
30 |       <Route path="*" element={<Navigate to={initialRoute} />} />
31 |     </Routes>
32 |   );
33 | }
34 | 
35 | // BootWrapper handles boot transition
36 | const BootWrapper = () => {
37 |   const navigate = useNavigate();
38 |   const seenBoot = sessionStorage.getItem('seenBoot');
39 |   if (seenBoot) {
40 |     return <Navigate to="/menu" />;
41 |   }
42 |   return <BootSequence onContinue={() => navigate("/login")} />;
43 | };
44 | 
45 | export default App;
46 | 


--------------------------------------------------------------------------------
/src/ItemEffectRunner.ts:
--------------------------------------------------------------------------------
 1 | import { Item, StatusEffect } from './context/PlayerContext';
 2 | 
 3 | export interface BattleState {
 4 |   playerHP: number;
 5 |   enemyHP: number;
 6 |   playerStatusEffects: StatusEffect[];
 7 |   enemyStatusEffects: StatusEffect[];
 8 | }
 9 | 
10 | export interface ItemEffectResult {
11 |   newState: BattleState;
12 |   logs: string[];
13 | }
14 | 
15 | export function runItemEffect(
16 |   item: Item,
17 |   actor: 'player' | 'enemy',
18 |   state: BattleState
19 | ): ItemEffectResult {
20 |   let newState: BattleState = { ...state };
21 |   const logs: string[] = [];
22 | 
23 |   const targetSide = item.target === 'enemy' ? 'enemy' : 'player';
24 | 
25 |   const applyHeal = (amount: number) => {
26 |     if (targetSide === 'player') {
27 |       newState.playerHP = Math.min(100, newState.playerHP + amount);
28 |     } else {
29 |       newState.enemyHP = Math.min(100, newState.enemyHP + amount);
30 |     }
31 |   };
32 | 
33 |   const addStatus = (effect: StatusEffect) => {
34 |     const withFlag = { ...effect, justApplied: true } as StatusEffect & { justApplied: boolean };
35 |     if (targetSide === 'player') {
36 |       newState.playerStatusEffects = [...newState.playerStatusEffects, withFlag];
37 |     } else {
38 |       newState.enemyStatusEffects = [...newState.enemyStatusEffects, withFlag];
39 |     }
40 |   };
41 | 
42 |   const cureStatus = (type: StatusEffect['type']) => {
43 |     if (targetSide === 'player') {
44 |       newState.playerStatusEffects = newState.playerStatusEffects.filter(e => e.type !== type);
45 |     } else {
46 |       newState.enemyStatusEffects = newState.enemyStatusEffects.filter(e => e.type !== type);
47 |     }
48 |   };
49 | 
50 |   if (item.heal) {
51 |     applyHeal(item.heal);
52 |     logs.push(targetSide === 'player' ? `> You heal ${item.heal} HP.` : `> Enemy heals ${item.heal} HP.`);
53 |   }
54 | 
55 |   if (item.cureStatus) {
56 |     cureStatus(item.cureStatus);
57 |     logs.push(targetSide === 'player' ? `> You are cured of ${item.cureStatus}.` : `> Enemy is cured of ${item.cureStatus}.`);
58 |   }
59 | 
60 |   if (item.statusEffect) {
61 |     addStatus(item.statusEffect);
62 |     logs.push(targetSide === 'player' ? `> You gain ${item.statusEffect.type}.` : `> Enemy gains ${item.statusEffect.type}.`);
63 |   }
64 | 
65 |   return { newState, logs };
66 | }
67 | 


--------------------------------------------------------------------------------
/src/components/AbilityAnnouncement.tsx:
--------------------------------------------------------------------------------
 1 | import React from 'react';
 2 | import { motion } from 'framer-motion';
 3 | 
 4 | interface AbilityAnnouncementProps {
 5 |   name: string;
 6 | }
 7 | 
 8 | const AbilityAnnouncement: React.FC<AbilityAnnouncementProps> = ({ name }) => {
 9 |   return (
10 |     <motion.div
11 |       initial={{ opacity: 0, y: -8 }}
12 |       animate={{ opacity: 1, y: 0 }}
13 |       exit={{ opacity: 0, y: -8 }}
14 |       transition={{ duration: 0.2 }}
15 |       className="absolute -top-8 px-2 py-1 bg-black bg-opacity-80 border border-green-400 rounded text-green-300 text-sm glitch-text pointer-events-none"
16 |     >
17 |       {name}
18 |     </motion.div>
19 |   );
20 | };
21 | 
22 | export default AbilityAnnouncement;
23 | 


--------------------------------------------------------------------------------
/src/components/AttackEffect.tsx:
--------------------------------------------------------------------------------
 1 | import React, { useEffect } from 'react';
 2 | 
 3 | interface AttackEffectProps {
 4 |   variant?: 'burst' | 'slash';
 5 |   onComplete?: () => void;
 6 | }
 7 | 
 8 | const AttackEffect: React.FC<AttackEffectProps> = ({ variant = 'burst', onComplete }) => {
 9 |   useEffect(() => {
10 |     const timer = setTimeout(() => {
11 |       onComplete && onComplete();
12 |     }, 400); // Match CSS animation duration
13 |     return () => clearTimeout(timer);
14 |   }, [onComplete]);
15 | 
16 |   return <div className={`attack-effect ${variant}`} />;
17 | };
18 | 
19 | export default AttackEffect;
20 | 


--------------------------------------------------------------------------------
/src/components/Button.tsx:
--------------------------------------------------------------------------------
 1 | import React from 'react';
 2 | 
 3 | interface Props {
 4 |   children: React.ReactNode;
 5 |   onClick?: () => void;
 6 | }
 7 | 
 8 | const Button: React.FC<Props> = ({ children, onClick }) => {
 9 |   return (
10 |     <button
11 |       className="bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
12 |       onClick={onClick}
13 |     >
14 |       {children}
15 |     </button>
16 |   );
17 | };
18 | 
19 | export default Button;


--------------------------------------------------------------------------------
/src/components/CombatLog.tsx:
--------------------------------------------------------------------------------
 1 | import React from 'react';
 2 | 
 3 | interface Props {
 4 |   messages: string[];
 5 | }
 6 | 
 7 | const CombatLog: React.FC<Props> = ({ messages }) => {
 8 |   return (
 9 |     <div className="h-32 overflow-y-auto text-sm text-gray-400">
10 |       {messages.map((message, index) => (
11 |         <div key={index}>{message}</div>
12 |       ))}
13 |     </div>
14 |   );
15 | };
16 | 
17 | export default CombatLog;


--------------------------------------------------------------------------------
/src/components/GlitchText.tsx:
--------------------------------------------------------------------------------
 1 | import React from 'react';
 2 | 
 3 | interface Props {
 4 |   text: string;
 5 | }
 6 | 
 7 | const GlitchText: React.FC<Props> = ({ text }) => {
 8 |   return (
 9 |     <div className="relative">
10 |       <span className="text-white">{text}</span>
11 |       <span className="absolute top-0 left-0 text-white animate-glitch">{text}</span>
12 |     </div>
13 |   );
14 | };
15 | 
16 | export default GlitchText;


--------------------------------------------------------------------------------
/src/components/HealthBar.tsx:
--------------------------------------------------------------------------------
 1 | import React from 'react';
 2 | 
 3 | interface Props {
 4 |   current: number;
 5 |   max: number;
 6 | }
 7 | 
 8 | const HealthBar: React.FC<Props> = ({ current, max }) => {
 9 |   const percentage = (current / max) * 100;
10 | 
11 |   return (
12 |     <div className="w-full bg-gray-800 rounded-full h-2">
13 |       <div
14 |         className="bg-green-500 h-2 rounded-full"
15 |         style={{ width: `${percentage}%` }}
16 |       ></div>
17 |     </div>
18 |   );
19 | };
20 | 
21 | export default HealthBar;


--------------------------------------------------------------------------------
/src/components/PhoneFrame.tsx:
--------------------------------------------------------------------------------
 1 | import React from 'react';
 2 | 
 3 | interface Props {
 4 |   children: React.ReactNode;
 5 | }
 6 | 
 7 | const PhoneFrame: React.FC<Props> = ({ children }) => {
 8 |   return (
 9 |     <div className="relative bg-black w-64 h-96 rounded-3xl overflow-hidden">
10 |       <div className="absolute top-2 left-2 right-2 h-2 bg-gray-800 rounded-full"></div>
11 |       <div className="absolute bottom-8 left-0 right-0 flex justify-center">
12 |         <div className="w-12 h-12 bg-gray-800 rounded-full"></div>
13 |       </div>
14 |       <div className="w-full h-full overflow-hidden">
15 |         {children}
16 |       </div>
17 |     </div>
18 |   );
19 | };
20 | 
21 | export default PhoneFrame;


--------------------------------------------------------------------------------
/src/components/ScanlineOverlay.tsx:
--------------------------------------------------------------------------------
 1 | import React from 'react';
 2 | 
 3 | const ScanlineOverlay: React.FC = () => {
 4 |   return (
 5 |     <div
 6 |       className="absolute top-0 left-0 w-full h-full pointer-events-none"
 7 |       style={{
 8 |         background: 'repeating-linear-gradient(0deg, rgba(0,0,0,0), rgba(0,0,0,0.3) 5px, rgba(0,0,0,0.3) 5px, rgba(0,0,0,0) 10px)'
 9 |       }}
10 |     ></div>
11 |   );
12 | };
13 | 
14 | export default ScanlineOverlay;


--------------------------------------------------------------------------------
/src/components/ui/button.tsx:
--------------------------------------------------------------------------------
 1 | import React from 'react';
 2 | 
 3 | interface Props {
 4 |   children: React.ReactNode;
 5 |   onClick?: () => void;
 6 |   variant?: "default" | "outline";
 7 | }
 8 | 
 9 | const Button: React.FC<Props> = ({ children, onClick, variant }) => {
10 |   const buttonStyle =
11 |     variant === "outline"
12 |       ? "border border-green-500 bg-transparent hover:bg-green-700 text-green-400"
13 |       : "bg-green-700 hover:bg-green-500 text-white";
14 | 
15 |   return (
16 |     <button
17 |       className={`${buttonStyle} font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
18 |       onClick={onClick}
19 |     >
20 |       {children}
21 |     </button>
22 |   );
23 | };
24 | 
25 | export default Button;


--------------------------------------------------------------------------------
/src/context/ScreenLoaderContext.tsx:
--------------------------------------------------------------------------------
 1 | import React, { createContext, useContext, useEffect, useState } from 'react';
 2 | import { useLocation } from 'react-router-dom';
 3 | 
 4 | const ScreenLoaderContext = createContext<{ isLoading: boolean }>({ isLoading: false });
 5 | 
 6 | export const ScreenLoaderProvider = ({ children }: { children: React.ReactNode }) => {
 7 |   const [isLoading, setIsLoading] = useState(false);
 8 |   const location = useLocation();
 9 | 
10 |   useEffect(() => {
11 |     setIsLoading(true);
12 |     const timeout = setTimeout(() => setIsLoading(false), 1000); // 1 second transition
13 |     return () => clearTimeout(timeout);
14 |   }, [location]);
15 | 
16 |   return (
17 |     <ScreenLoaderContext.Provider value={{ isLoading }}>
18 |       {children}
19 |     </ScreenLoaderContext.Provider>
20 |   );
21 | };
22 | 
23 | export const useScreenLoader = () => useContext(ScreenLoaderContext);


--------------------------------------------------------------------------------
/src/index.css:
--------------------------------------------------------------------------------
 1 | @tailwind base;
 2 | @tailwind components;
 3 | @tailwind utilities;
 4 | 
 5 | .glitch {
 6 |   animation: glitch-flicker 1.5s infinite;
 7 | }
 8 | 
 9 | .glitch-text {
10 |   position: relative;
11 | }
12 | .glitch-text::after {
13 |   content: attr(data-text);
14 |   position: absolute;
15 |   left: 2px;
16 |   text-shadow: -1px 0 red;
17 |   top: 0;
18 |   color: transparent;
19 |   animation: glitch-anim 1s infinite linear alternate-reverse;
20 | }
21 | 
22 | @keyframes glitch-flicker {
23 |   0%, 19%, 21%, 23%, 100% {
24 |     opacity: 1;
25 |   }
26 |   20%, 22% {
27 |     opacity: 0.6;
28 |   }
29 | }
30 | 
31 | @keyframes glitch-anim {
32 |   0% {
33 |     transform: translateX(0);
34 |   }
35 |   20% {
36 |     transform: translateX(-2px);
37 |   }
38 |   40% {
39 |     transform: translateX(2px);
40 |   }
41 |   60% {
42 |     transform: translateX(-1px);
43 |   }
44 |   80% {
45 |     transform: translateX(1px);
46 |   }
47 |   100% {
48 |     transform: translateX(0);
49 |   }
50 | }
51 | 


--------------------------------------------------------------------------------
/src/index.tsx:
--------------------------------------------------------------------------------
 1 | import React from 'react';
 2 | import ReactDOM from 'react-dom/client';
 3 | import { BrowserRouter } from 'react-router-dom'; // New import
 4 | import './index.css';
 5 | import App from './App';
 6 | import reportWebVitals from './reportWebVitals';
 7 | import { ScreenLoaderProvider } from './context/ScreenLoaderContext'; // New import
 8 | import { PlayerProvider } from './context/PlayerContext';
 9 | 
10 | const root = ReactDOM.createRoot(
11 |   document.getElementById('root') as HTMLElement
12 | );
13 | root.render(
14 |   <React.StrictMode>
15 |     <BrowserRouter>
16 |       <PlayerProvider>
17 |         <ScreenLoaderProvider>
18 |           <App />
19 |         </ScreenLoaderProvider>
20 |       </PlayerProvider>
21 |     </BrowserRouter>
22 |   </React.StrictMode>
23 | );
24 | 
25 | // If you want to start measuring performance in your app, pass a function
26 | // to log results (for example: reportWebVitals(console.log))
27 | // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
28 | reportWebVitals();
29 | 


--------------------------------------------------------------------------------
/src/logo.svg:
--------------------------------------------------------------------------------
1 | <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841.9 595.3"><g fill="#61DAFB"><path d="M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z"/><circle cx="420.9" cy="296.5" r="45.7"/><path d="M520.5 78.1z"/></g></svg>


--------------------------------------------------------------------------------
/src/react-app-env.d.ts:
--------------------------------------------------------------------------------
1 | /// <reference types="react-scripts" />
2 | 


--------------------------------------------------------------------------------
/src/reportWebVitals.ts:
--------------------------------------------------------------------------------
 1 | import { ReportHandler } from 'web-vitals';
 2 | 
 3 | const reportWebVitals = (onPerfEntry?: ReportHandler) => {
 4 |   if (onPerfEntry && onPerfEntry instanceof Function) {
 5 |     import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
 6 |       getCLS(onPerfEntry);
 7 |       getFID(onPerfEntry);
 8 |       getFCP(onPerfEntry);
 9 |       getLCP(onPerfEntry);
10 |       getTTFB(onPerfEntry);
11 |     });
12 |   }
13 | };
14 | 
15 | export default reportWebVitals;
16 | 


--------------------------------------------------------------------------------
/src/screens/BootSequence.tsx:
--------------------------------------------------------------------------------
 1 | import React, { useState, useEffect, useRef } from "react";
 2 | 
 3 | const bootLines = [
 4 |   ">>> INITIATING OZF SYSTEM...",
 5 |   "[OK] BIOS: LAWLESSLANDS.v3.4",
 6 |   "[OK] MOUNTING /fragments/memory_core",
 7 |   "[ERR] INDEX TABLE CORRUPTED — Attempting Recovery",
 8 |   ">>> SYSTEM LOG ██████▒▒▒▒▒▒▒▒▒▒",
 9 |   "LOADING... ███████░░░░░░░░░░",
10 |   ">>> AUTH MODULE BREACHED",
11 |   "!! WARNING: ARCHITECT PRESENCE DETECTED",
12 |   "_boot complete. PRESS ANY KEY OR CLICK TO CONTINUE_"
13 | ];
14 | 
15 | export const BootSequence = ({ onContinue }: { onContinue: () => void }) => {
16 |   const [displayedLines, setDisplayedLines] = useState<string[]>([]);
17 |   const indexRef = useRef(0);
18 | 
19 |   useEffect(() => {
20 |     const interval = setInterval(() => {
21 |       if (indexRef.current < bootLines.length) {
22 |         setDisplayedLines((prev) => [...prev, bootLines[indexRef.current++]])
23 |       } else {
24 |         clearInterval(interval);
25 |       }
26 |     }, 500);
27 |     return () => clearInterval(interval);
28 |   }, []);
29 | 
30 |   useEffect(() => {
31 |     const handleContinue = () => {
32 |       if (indexRef.current >= bootLines.length) {
33 |         onContinue();
34 |       }
35 |     };
36 |     window.addEventListener("keydown", handleContinue);
37 |     window.addEventListener("click", handleContinue);
38 |     return () => {
39 |       window.removeEventListener("keydown", handleContinue);
40 |       window.removeEventListener("click", handleContinue);
41 |     };
42 |   }, [onContinue]);
43 | 
44 |   return (
45 |     <div className="w-screen h-screen bg-black relative overflow-hidden flex flex-col justify-center items-start px-8 text-green-400 font-mono text-sm sm:text-base">
46 |       <div className="absolute top-0 left-0 w-full h-full scanlines pointer-events-none" />
47 |       {displayedLines.map((line, i) => (
48 |         <div key={i} className="animate-crt-glow animate-type whitespace-pre-wrap">{line}</div>
49 |       ))}
50 |       {indexRef.current >= bootLines.length && (
51 |         <div className="mt-4 animate-crt-glow">[ CLICK ANYWHERE OR PRESS A KEY TO PROCEED ]</div>
52 |       )}
53 |     </div>
54 |   );
55 | };


--------------------------------------------------------------------------------
/src/screens/CharacterScreen.tsx:
--------------------------------------------------------------------------------
 1 | import React, { useState } from 'react';
 2 | import { useNavigate } from 'react-router-dom';
 3 | import { usePlayer } from '../context/PlayerContext';
 4 | 
 5 | const characters = [
 6 |   {
 7 |     name: 'Player',
 8 |     image: '/assets/images/character-default.png'
 9 |   },
10 |   {
11 |     name: 'Enemy',
12 |     image: '/assets/images/enemy-default.png'
13 |   }
14 | ];
15 | 
16 | const CharacterScreen = () => {
17 |   const navigate = useNavigate();
18 |   const { stats, equipped } = usePlayer();
19 |   const [currentIndex, setCurrentIndex] = useState(0);
20 |   const selected = characters[currentIndex];
21 | 
22 |   const prevCharacter = () => {
23 |     setCurrentIndex((currentIndex - 1 + characters.length) % characters.length);
24 |   };
25 | 
26 |   const nextCharacter = () => {
27 |     setCurrentIndex((currentIndex + 1) % characters.length);
28 |   };
29 | 
30 |   return (
31 |     <div className="screen font-mono text-green-400 bg-black h-screen p-4 relative">
32 |       <button className="absolute top-2 right-4 text-xl" onClick={() => navigate(-1)}>✕</button>
33 | 
34 |       <div className="flex flex-col md:flex-row justify-between h-full">
35 |         {/* Avatar and Arrows */}
36 |         <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
37 |           <div className="flex items-center space-x-4">
38 |             <button onClick={prevCharacter} className="text-2xl hover:text-green-300">◀</button>
39 | 
40 |             <img
41 |               src={selected.image}
42 |               alt={selected.name}
43 |               className="w-48 h-48 object-cover border-2 border-green-400"
44 |             />
45 | 
46 |             <button onClick={nextCharacter} className="text-2xl hover:text-green-300">▶</button>
47 |           </div>
48 |           <p className="mt-2 text-green-300">{selected.name}</p>
49 |         </div>
50 | 
51 |         {/* Stats & Gear */}
52 |         <div className="w-full md:w-1/2 mt-6 md:mt-0 p-4">
53 |           <h2 className="text-lg mb-2 border-b border-green-400">Stats</h2>
54 |           <ul className="mb-4">
55 |             <li>HP: {stats.hp}</li>
56 |             <li>STR: {stats.str}</li>
57 |             <li>DEX: {stats.dex}</li>
58 |             <li>INT: {stats.int}</li>
59 |             <li>DEF: {stats.def}</li>
60 |           </ul>
61 | 
62 |           <h2 className="text-lg mb-2 border-b border-green-400">Equipped</h2>
63 |           <ul>
64 |             <li>Weapon: {equipped.Weapon?.name || 'None'}</li>
65 |             <li>Armor: {equipped.Armor?.name || 'None'}</li>
66 |             <li>Trinket: {equipped.Trinket?.name || 'None'}</li>
67 |           </ul>
68 |         </div>
69 |       </div>
70 | 
71 |       {/* Quick Slots */}
72 |       <div className="absolute bottom-4 w-full flex justify-center space-x-4">
73 |         {[1, 2, 3, 4].map((_, i) => (
74 |           <div key={i} className="w-16 h-16 border-2 border-green-400 flex items-center justify-center">
75 |             Slot {i + 1}
76 |           </div>
77 |         ))}
78 |       </div>
79 |     </div>
80 |   );
81 | };
82 | 
83 | export default CharacterScreen;


--------------------------------------------------------------------------------
/src/screens/EndBattleScreen.tsx:
--------------------------------------------------------------------------------
 1 | import React, { useMemo } from "react";
 2 | 
 3 | interface EndBattleScreenProps {
 4 |   winner: "player" | "opponent" | null;
 5 |   onRestart: () => void;
 6 | }
 7 | 
 8 | const loreQuotes = [
 9 |   "01010011 // A memory resurfaced — but whose?",
10 |   ">>> DATA FRAGMENT RECOVERED: 'We were not the first...'",
11 |   "_!_ ARCHIVE BREACH DETECTED... Reconstructing...",
12 |   "/* The core pulsed once... then silence. */",
13 |   "`SYSTEM ECHO:` 'You have deviated from protocol.'",
14 | ];
15 | 
16 | export function EndBattleScreen({ winner, onRestart }: EndBattleScreenProps) {
17 |   const selectedQuote = useMemo(() => {
18 |     return loreQuotes[Math.floor(Math.random() * loreQuotes.length)];
19 |   }, []);
20 | 
21 |   return (
22 |     <div className="flex flex-col items-center justify-center h-full text-white font-mono glitch-bg p-4">
23 |       <h1 className="text-4xl mb-4">
24 |         {winner === "player" ? "YOU WIN!" : "YOU LOSE"}
25 |       </h1>
26 |       <div className="text-green-400 font-mono text-center text-xl glitch">
27 |         {selectedQuote}
28 |       </div>
29 |       <button
30 |         onClick={onRestart}
31 |         className="bg-white text-black px-6 py-2 rounded mt-4 hover:glitch-button"
32 |       >
33 |         Return to Main Menu
34 |       </button>
35 |     </div>
36 |   );
37 | }


--------------------------------------------------------------------------------
/src/screens/InventoryScreen.tsx:
--------------------------------------------------------------------------------
 1 | import { useNavigate } from 'react-router-dom';
 2 | import { useState } from 'react';
 3 | import { items, usePlayer } from '../context/PlayerContext';
 4 | 
 5 | const InventoryScreen = () => {
 6 |   const navigate = useNavigate();
 7 |   const { equip, consumeItem, equipped } = usePlayer();
 8 |   const [selectedItemIndex, setSelectedItemIndex] = useState(0);
 9 |   const selected = items[selectedItemIndex];
10 | 
11 |   const next = () => setSelectedItemIndex((selectedItemIndex + 1) % items.length);
12 |   const prev = () => setSelectedItemIndex((selectedItemIndex - 1 + items.length) % items.length);
13 | 
14 |   return (
15 |     <div className="screen font-mono text-green-400 bg-black min-h-screen p-4 relative">
16 |       {/* Back Button */}
17 |       <button onClick={() => navigate(-1)} className="absolute top-2 left-4 text-xl">✕</button>
18 | 
19 |       {/* Title */}
20 |       <h1 className="text-center text-xl mb-4 border-b border-green-400 pb-2">INVENTORY</h1>
21 | 
22 |       {/* Main Layout */}
23 |       <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 md:space-x-6 h-full">
24 |         
25 |         {/* Inventory Grid */}
26 |         <div className="grid grid-cols-2 gap-4 w-full md:w-2/3">
27 |           {items.map((item, index) => {
28 |             const equippedName = equipped[item.type as 'Weapon' | 'Armor' | 'Trinket']?.name;
29 |             const isEquipped = equippedName === item.name;
30 |             return (
31 |               <button
32 |                 key={index}
33 |                 className={`border p-4 text-left hover:bg-green-900 transition-all ${
34 |                   index === selectedItemIndex ? 'border-green-300' : 'border-green-400'
35 |                 } ${isEquipped ? 'bg-green-800' : ''}`}
36 |                 onClick={() => setSelectedItemIndex(index)}
37 |               >
38 |                 <p className="text-sm">{item.name}</p>
39 |                 <p className="text-xs text-green-300">{item.type}</p>
40 |               </button>
41 |             );
42 |           })}
43 |         </div>
44 | 
45 |         {/* Item Detail Panel */}
46 |         <div className="flex-1 border border-green-400 p-4 relative">
47 |           <div className="absolute top-2 right-2 space-x-2">
48 |             <button onClick={prev} className="hover:text-green-300">◀</button>
49 |             <button onClick={next} className="hover:text-green-300">▶</button>
50 |           </div>
51 |           <h2 className="text-lg border-b border-green-400 pb-1 mb-2">{selected.name}</h2>
52 |           <p className="text-green-300 text-sm mb-2">{selected.type}</p>
53 |           <p className="text-xs text-green-400">{selected.description}</p>
54 |           <div className="mt-4">
55 |             {selected.type === 'Consumable' ? (
56 |               <button
57 |                 onClick={() => consumeItem(selected)}
58 |                 className="border px-3 py-1 hover:bg-green-900"
59 |               >
60 |                 Use
61 |               </button>
62 |             ) : (
63 |               <button
64 |                 onClick={() => equip(selected)}
65 |                 className="border px-3 py-1 hover:bg-green-900"
66 |               >
67 |                 Equip
68 |               </button>
69 |             )}
70 |           </div>
71 |         </div>
72 |       </div>
73 |     </div>
74 |   );
75 | };
76 | 
77 | export default InventoryScreen;


--------------------------------------------------------------------------------
/src/screens/LoginScreen.tsx:
--------------------------------------------------------------------------------
 1 | import React, { useState, useEffect } from "react";
 2 | import { useNavigate } from "react-router-dom";
 3 | import MenuScreen from "./MainMenu"; 
 4 | 
 5 | export const LoginScreen = () => {
 6 |   const [loading, setLoading] = useState(false);
 7 |   const [error, setError] = useState<string | null>(null); // Added error state
 8 |   const [redirect, setRedirect] = useState(false);
 9 |   const navigate = useNavigate();
10 | 
11 |   const handleLogin = () => {
12 |     setLoading(true);
13 |     setError(null); // Clear previous errors
14 |     setTimeout(() => {
15 |       // TEMPORARY: Auto-login bypass for testing
16 |       sessionStorage.setItem('seenBoot', 'true'); // Set seenBoot to true after successful login
17 |       setRedirect(true);
18 |     }, 1200);
19 |   };
20 | 
21 |   useEffect(() => {
22 |     if (redirect) {
23 |       const timer = setTimeout(() => {
24 |         navigate("/menu");
25 |       }, 2000);
26 |       return () => clearTimeout(timer);
27 |     }
28 |   }, [redirect, navigate]); // Added navigate to dependency array
29 | 
30 |   if (redirect && !error) { // Ensure no error before showing access granted
31 |     return (
32 |       <div className="w-screen h-screen bg-black flex items-center justify-center text-green-400 font-mono">
33 |         <div className="text-xl animate-crt-glow">ACCESS GRANTED: WELCOME TO LAWLESSLANDS</div>
34 |       </div>
35 |     );
36 |   }
37 | 
38 |   return (
39 |     <div className="w-screen h-screen bg-black relative flex flex-col justify-center items-center text-green-400 font-mono p-4">
40 |       <div className="absolute top-0 left-0 w-full h-full scanlines pointer-events-none" />
41 |       <div className="w-full max-w-md space-y-4">
42 |         <h1 className="text-xl glitch text-center">OZF SYSTEM LOGIN</h1>
43 |         <input
44 |           type="text"
45 |           placeholder="Username"
46 |           className="w-full bg-black border border-green-500 p-2 text-green-400 placeholder-green-600 focus:outline-none"
47 |         />
48 |         <input
49 |           type="password"
50 |           placeholder="Password"
51 |           className="w-full bg-black border border-green-500 p-2 text-green-400 placeholder-green-600 focus:outline-none"
52 |         />
53 |         <button
54 |           onClick={handleLogin}
55 |           className="w-full border border-green-500 py-2 hover:bg-green-700 hover:text-black transition-all"
56 |         >
57 |           {loading ? "AUTHORIZING..." : "LOGIN"}
58 |         </button>
59 |         {error && <div className="glitch text-red-500 text-sm animate-glitch-fast">{error}</div>}
60 |         <div className="flex justify-between text-xs">
61 |           <button className="underline">Forgot Password?</button>
62 |           <button className="underline">Sign Up</button>
63 |         </div>
64 |       </div>
65 |     </div>
66 |   );
67 | };


--------------------------------------------------------------------------------
/src/screens/MainMenu.tsx:
--------------------------------------------------------------------------------
 1 | import { useNavigate } from 'react-router-dom';
 2 | 
 3 | const MainMenuScreen = () => {
 4 |   const navigate = useNavigate();
 5 | 
 6 |   return (
 7 |     <div className="screen font-mono text-green-400 bg-black h-screen flex flex-col items-center justify-center space-y-4 p-4">
 8 |       <div className="relative crt-scanline mb-8">
 9 |         <pre className="crt-title text-green-400 text-xs leading-none text-center font-mono">
10 | {String.raw`
11 |  _____                                                _____
12 | ( ___ )                                              ( ___ )
13 |  |   |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|   |
14 |  |   |     __    ___ _       ____    ________________ |   |
15 |  |   |    / /   /   | |     / / /   / ____/ ___/ ___/ |   |
16 |  |   |   / /   / /| | | /| / / /   / __/  \__ \\__ \  |   |
17 |  |   |  / /___/ ___ | |/ |/ / /___/ /___ ___/ /__/ /  |   |
18 |  |   | /_____/_/ _|_|__/|__/_____/_____//____/____/   |   |
19 |  |   |    / /   /   |  / | / / __ \/ ___/             |   |
20 |  |   |   / /   / /| | /  |/ / / / /\__ \              |   |
21 |  |   |  / /___/ ___ |/ /|  / /_/ /___/ /              |   |
22 |  |   | /_____/_/  |_/_/ |_/_____//____/               |   |
23 |  |___|~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|___|
24 | (_____)                                              (_____)
25 | `}
26 |         </pre>
27 |       </div>
28 | 
29 |       <button
30 |         onClick={() => navigate('/battle')}
31 |         className="border border-green-400 px-6 py-2 hover:bg-green-900 transition-all w-64 text-left"
32 |       >
33 |         ▶ Battle Mode
34 |       </button>
35 | 
36 |       <button
37 |         onClick={() => navigate('/character')}
38 |         className="border border-green-400 px-6 py-2 hover:bg-green-900 transition-all w-64 text-left"
39 |       >
40 |         ▶ Character
41 |       </button>
42 | 
43 |       <button
44 |         onClick={() => navigate('/inventory')}
45 |         className="border border-green-400 px-6 py-2 hover:bg-green-900 transition-all w-64 text-left"
46 |       >
47 |         ▶ Inventory
48 |       </button>
49 | 
50 |       <button
51 |         onClick={() => navigate('/settings')}
52 |         className="border border-green-400 px-6 py-2 hover:bg-green-900 transition-all w-64 text-left"
53 |       >
54 |         ▶ Settings
55 |       </button>
56 |     </div>
57 |   );
58 | };
59 | 
60 | export default MainMenuScreen;


--------------------------------------------------------------------------------
/src/screens/SettingsScreen.tsx:
--------------------------------------------------------------------------------
 1 | import React from 'react';
 2 | import { useNavigate } from 'react-router-dom';
 3 | 
 4 | const SettingsScreen = () => {
 5 |   const navigate = useNavigate();
 6 | 
 7 |   return (
 8 |     <div className="screen font-mono text-green-400 bg-black h-screen p-6 relative">
 9 |       <button className="absolute top-2 right-4 text-xl" onClick={() => navigate(-1)}>✕</button>
10 |       <h1 className="text-2xl mb-6 border-b border-green-400 pb-2">⚙ Settings</h1>
11 | 
12 |       <div className="space-y-6">
13 |         <div>
14 |           <label className="block mb-1">Sound</label>
15 |           <input type="range" min="0" max="100" className="w-full accent-green-400" />
16 |         </div>
17 |         <div>
18 |           <label className="block mb-1">Difficulty</label>
19 |           <select className="w-full bg-black border border-green-400 text-green-400 p-2">
20 |             <option>Easy</option>
21 |             <option>Normal</option>
22 |             <option>Hard</option>
23 |           </select>
24 |         </div>
25 |         <div>
26 |           <label className="block mb-1">CRT Screen Flicker</label>
27 |           <input type="checkbox" className="accent-green-400" />
28 |         </div>
29 |       </div>
30 |     </div>
31 |   );
32 | };
33 | 
34 | export default SettingsScreen;


--------------------------------------------------------------------------------
/src/screens/SplashScreen.tsx:
--------------------------------------------------------------------------------
 1 | import { useNavigate } from "react-router-dom";
 2 | import { useEffect, useState } from "react";
 3 | 
 4 | const SplashScreen = () => {
 5 |   const navigate = useNavigate();
 6 |   const [glitch, setGlitch] = useState(false);
 7 | 
 8 |   useEffect(() => {
 9 |     const timer = setInterval(() => setGlitch(prev => !prev), 300);
10 |     return () => clearInterval(timer);
11 |   }, []);
12 | 
13 |   return (
14 |     <div
15 |       onClick={() => navigate("/menu")}
16 |       style={{
17 |         background: "#000",
18 |         color: "#00FF00",
19 |         fontFamily: "monospace",
20 |         height: "100vh",
21 |         display: "flex",
22 |         justifyContent: "center",
23 |         alignItems: "center",
24 |         flexDirection: "column",
25 |         cursor: "pointer",
26 |         textAlign: "center"
27 |       }}
28 |     >
29 |       <pre style={{ fontSize: "2rem", filter: glitch ? "blur(1px)" : "none" }}>
30 | {String.raw`
31 |    ██████╗ ███████╗███████╗
32 |   ██╔═══██╗██╔════╝██╔════╝
33 |   ██║   ██║█████╗  ███████╗
34 |   ██║   ██║██╔══╝  ╚════██║
35 |   ╚██████╔╝███████╗███████║
36 |    ╚═════╝ ╚══════╝╚══════╝
37 | `}
38 |       </pre>
39 |       <p style={{ marginTop: "1rem", opacity: glitch ? 0.3 : 1 }}>
40 |         click to enter system...
41 |       </p>
42 |     </div>
43 |   );
44 | };
45 | 
46 | export default SplashScreen;


--------------------------------------------------------------------------------
/src/setupTests.ts:
--------------------------------------------------------------------------------
1 | // jest-dom adds custom jest matchers for asserting on DOM nodes.
2 | // allows you to do things like:
3 | // expect(element).toHaveTextContent(/react/i)
4 | // learn more: https://github.com/testing-library/jest-dom
5 | import '@testing-library/jest-dom';
6 | 


--------------------------------------------------------------------------------
/src/types/statusEffects.ts:
--------------------------------------------------------------------------------
 1 | export type StatusEffectType =
 2 |   | 'burn'
 3 |   | 'stun'
 4 |   | 'shield'
 5 |   | 'buff'
 6 |   | 'debuff'
 7 |   | 'poison';
 8 | 
 9 | export interface StatusEffect {
10 |   type: StatusEffectType;
11 |   duration: number; // in turns
12 |   value?: number; // For damage, heal, shield, buff values
13 |   stat?: string; // For buffs (e.g., 'defense', 'attack')
14 |   justApplied?: boolean; // Flag to skip duration tick when first applied
15 | }
16 | 


--------------------------------------------------------------------------------
/tailwind.config.js:
--------------------------------------------------------------------------------
 1 | /** @type {import('tailwindcss').Config} */
 2 | module.exports = {
 3 |   content: [
 4 |     "./src/**/*.{js,ts,jsx,tsx}",
 5 |     "./public/index.html",
 6 |   ],
 7 |   theme: {
 8 |     extend: {},
 9 |   },
10 |   plugins: [],
11 | }


--------------------------------------------------------------------------------
/tsconfig.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "compilerOptions": {
 3 |     "esModuleInterop": true,
 4 |     "jsx": "react-jsx"
 5 |   },
 6 |   "exclude": [
 7 |     "frontend",
 8 |     "backend",
 9 |     "node_modules"
10 |   ]
11 | }
12 | 


--------------------------------------------------------------------------------
/vitest.config.ts:
--------------------------------------------------------------------------------
1 | import { defineConfig } from 'vitest/config';
2 | 
3 | export default defineConfig({
4 |   test: {
5 |     environment: 'jsdom',
6 |     globals: true,
7 |   },
8 | });
9 | 


--------------------------------------------------------------------------------