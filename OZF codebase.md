├── .gitignore
├── Character Classes and Themes.md
├── Game Concept and Monetization Plan -  20250111.md
├── Game Concept and Monetization Plan Mind Map.png
├── Game MVP Flow.md
├── OZF.UNI_ The Lawless Lands DRAFT _ EXTERNAL .md
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
    │   │   ├── effect_runner.ts
    │   │   ├── index.ts
    │   │   ├── resolver.ts
    │   │   ├── state.ts
    │   │   ├── status_manager.ts
    │   │   ├── types.ts
    │   │   ├── validator.ts
    │   │   └── victory_checker.ts
    │   ├── server.ts
    │   ├── types
    │   │   └── db.ts
    │   └── utils
    │   │   ├── abilityLoader.ts
    │   │   └── matchStateStore.ts
    └── tsconfig.json
├── combat_improvement_plan.md
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
    └── views
    │   ├── BattleScreen.tsx
    │   ├── MainMenu.tsx
    │   └── SplashScreen.tsx
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
/Character Classes and Themes.md:
--------------------------------------------------------------------------------
  1 | ### **Character Classes and Themes**
  2 | 
  3 | This includes their descriptions, abilities, and thematic undertones, adjusted for the 1v1 nature of the game and a progression system with abilities unlocked from level 1 to 30\. Players start with three abilities and unlock more as they level up, culminating in an ultimate ability at level 30\.
  4 | 
  5 | ---
  6 | 
  7 | ### **1\. Warrior: Astral Vanguard**
  8 | 
  9 | * **Description**:  
 10 |   A battle-hardened juggernaut driven by sheer will and relentless fury, embodying the destructive force of celestial power. The Astral Vanguard wields weapons that channel raw cosmic energy, their strikes capable of obliterating anything in their path. Forged in the crucible of endless battles, they are a living testament to unyielding resolve.  
 11 | * **Tagline**:  
 12 |   *"A relentless force, forged in cosmic fire."*  
 13 | * **Starting Abilities (Level 1-3)**:  
 14 |   1. **Starbreaker Strike**: High-damage melee attack.  
 15 |   2. **Celestial Endurance (Passive)**: Gradual health regeneration.  
 16 |   3. **Meteoric Charge**: High-impact rush that stuns the target and knocks them back.  
 17 | * **Unlocks (Level 4-29)**:  
 18 |   4\. **Solar Flare Slash (Level 4\)**: Deals damage and briefly blinds the enemy.  
 19 |   5\. **Gravity Anchor (Level 8\)**: Reduces incoming knockback effects.  
 20 |   6\. **Burning Resolve (Level 12\)**: Temporary invulnerability for one turn.  
 21 |   7\. **Astral Cleave (Level 16\)**: A powerful attack that deals bonus damage to shields.  
 22 |   8\. **Molten Strike (Level 20\)**: A fiery, high-damage attack with a knockback effect.  
 23 |   9\. **Nova Shield (Level 24\)**: Absorbs a percentage of incoming damage.  
 24 |   10\. **Ecliptic Crush (Level 28\)**: A heavy attack that stuns enemies and reduces their attack power.  
 25 | * **Ultimate (Level 30\)**:  
 26 |   **Eclipse Barrier**: Summons an impenetrable shield that absorbs all damage for one turn and reflects a portion back.
 27 | 
 28 | ---
 29 | 
 30 | ### **2\. Mage: Data Weaver**
 31 | 
 32 | * **Description**:  
 33 |   A master of bending reality through digital threads and arcane manipulation. The Data Weaver interlaces coding precision with mystical forces, unraveling enemies’ strategies while weaving destructive patterns into the battlefield. They are an architect of both chaos and control.  
 34 | * **Tagline**:  
 35 |   *"The fabric of reality bends at their fingertips."*  
 36 | * **Starting Abilities (Level 1-3)**:  
 37 |   1. **Packet Surge**: Direct energy attack.  
 38 |   2. **Firewall Barrier (Passive)**: Reduces ranged damage.  
 39 |   3. **Data Collapse**: AoE energy burst with a chance to stun.  
 40 | * **Unlocks (Level 4-29)**:  
 41 |   4\. **Code Torrent (Level 4\)**: Applies damage-over-time to a target.  
 42 |   5\. **Recursive Shield (Level 8\)**: Reflects a percentage of damage back at attackers.  
 43 |   6\. **Arcane Rewrite (Level 12\)**: Randomly rerolls an enemy’s buffs.  
 44 |   7\. **Hypernode Beam (Level 16\)**: Fires a concentrated beam that pierces shields.  
 45 |   8\. **Thread Snare (Level 20\)**: Slows the enemy’s movement and attack speed.  
 46 |   9\. **Energy Sync (Level 24\)**: Converts excess energy into additional shield strength.  
 47 |   10\. **Crimson Cascade (Level 28\)**: Summons a storm of energy bolts targeting the opponent.  
 48 | * **Ultimate (Level 30\)**:  
 49 |   **Cataclysmic Rewrite**: Overwrites the battlefield’s data structure, dealing massive damage and debuffing the opponent.
 50 | 
 51 | ---
 52 | 
 53 | ### **3\. Rogue: Shade Protocol**
 54 | 
 55 | * **Description**:  
 56 |   An elusive and calculated assassin who thrives in the shadows of both the physical and digital realms. The Shade Protocol combines deadly precision with advanced stealth tactics, systematically dismantling their foes with ruthless efficiency.  
 57 | * **Tagline**:  
 58 |   *"A silent executor, striking from the void."*  
 59 | * **Starting Abilities (Level 1-3)**:  
 60 |   1. **Ghost Blade**: Critical strike from stealth.  
 61 |   2. **Phase Shift (Passive)**: Grants brief immunity when exiting stealth.  
 62 |   3. **Pulse Disruptor**: Disables the enemy’s abilities for one turn.  
 63 | * **Unlocks (Level 4-29)**:  
 64 |   4\. **Silent Barrage (Level 4\)**: Throws multiple daggers, damaging the opponent.  
 65 |   5\. **Blackout Field (Level 8\)**: Reduces enemy vision and accuracy.  
 66 |   6\. **Venom Strike (Level 12\)**: Applies poison for damage-over-time.  
 67 |   7\. **Shadow Vault (Level 16\)**: Leap to the opponent, dealing high damage.  
 68 |   8\. **Lurking Dread (Level 20\)**: Increases stealth duration.  
 69 |   9\. **Data Spike (Level 24\)**: Disrupts shields, reducing their effectiveness.  
 70 |   10\. **Void Flurry (Level 28\)**: Rapid, successive strikes that stack critical damage.  
 71 | * **Ultimate (Level 30\)**:  
 72 |   **Void Execution**: A single, devastating attack that ignores defenses and removes all buffs.
 73 | 
 74 | ---
 75 | 
 76 | ### **4\. Cleric: Lumina Reclaimer**
 77 | 
 78 | * **Description**:  
 79 |   A sacred guardian who wields the light to heal and protect, the Lumina Reclaimer draws upon ancient spiritual energy and advanced technologies. They embody hope and restoration, standing as an unwavering beacon in the darkest battles.  
 80 | * **Tagline**:  
 81 |   *"A harbinger of light, restoring what is lost."*  
 82 | * **Starting Abilities (Level 1-3)**:  
 83 |   1. **Purifying Radiance**: Heals themselves and removes one negative effect.  
 84 |   2. **Divine Aura (Passive)**: Grants a temporary shield at the start of the turn.  
 85 |   3. **Sanctified Light**: Deals light-based damage to the opponent.  
 86 | * **Unlocks (Level 4-29)**:  
 87 |   4\. **Beacon of Hope (Level 4\)**: Gradually restores health over two turns.  
 88 |   5\. **Light Lance (Level 8\)**: A piercing attack with bonus damage to shields.  
 89 |   6\. **Blessing of Fortitude (Level 12\)**: Temporarily increases defense.  
 90 |   7\. **Aegis Shield (Level 16\)**: Absorbs the next incoming attack.  
 91 |   8\. **Shining Retribution (Level 20\)**: Deals burst holy damage to the opponent.  
 92 |   9\. **Guiding Light (Level 24\)**: Boosts healing effectiveness for two turns.  
 93 |   10\. **Resplendent Strike (Level 28\)**: A powerful light-infused attack that reduces enemy buffs.  
 94 | * **Ultimate (Level 30\)**:  
 95 |   **Ascension Revival**: Fully restores health and grants a shield for one turn.
 96 | 
 97 | ---
 98 | 
 99 | ### **5\. Beastmaster: Primal Architect**
100 | 
101 | * **Description**:  
102 |   A master manipulator of life and energy, the Primal Architect merges natural instincts with advanced synthetic constructs. Through their creations, they shape the battlefield with relentless adaptability, commanding beasts born of raw primal energy and cutting-edge technology.  
103 | * **Tagline**:  
104 |   *"The architect of chaos and creation."*  
105 | * **Starting Abilities (Level 1-3)**:  
106 |   1. **Summon Alpha**: Calls forth a beast companion to attack the enemy.  
107 |   2. **Symbiotic Bond (Passive)**: Heals the Beastmaster based on damage dealt by their companion.  
108 |   3. **Rootstorm**: Roots the enemy in place and deals damage-over-time.  
109 | * **Unlocks (Level 4-29)**:  
110 |   4\. **Energy Claw (Level 4\)**: A high-damage attack from the summoned beast.  
111 |   5\. **Wild Howl (Level 8\)**: Temporarily boosts the beast’s damage.  
112 |   6\. **Primal Surge (Level 12\)**: Increases the Beastmaster’s speed for one turn.  
113 |   7\. **Overgrowth (Level 16\)**: Roots the enemy for an extended duration.  
114 |   8\. **Beast Roar (Level 20\)**: Reduces the opponent’s damage output.  
115 |   9\. **Ferocity Bond (Level 24\)**: Doubles the beast’s attack for one turn.  
116 |   10\. **Alpha Rampage (Level 28\)**: Grants the beast two attacks in one turn.  
117 | * **Ultimate (Level 30\)**:  
118 |   **Beastial Surge**: Empowers the summoned beast to perform a massive attack.
119 | 
120 | ---
121 | 
122 | This progression system ensures meaningful growth at every level, balanced for intense 1v1 gameplay.
123 | 
124 | 


--------------------------------------------------------------------------------
/Game Concept and Monetization Plan -  20250111.md:
--------------------------------------------------------------------------------
  1 | # **Game Concept and Monetization Plan**
  2 | 
  3 | **Note:** By reading this document, you agree not to share, reproduce, or use any of its content as your own. 
  4 | 
  5 | ---
  6 | 
  7 | ## **Core Concept**
  8 | 
  9 | Players control a **single customizable character** in matches, with each character belonging to a specific **class**. These classes offer unique abilities and attributes, allowing players to build strategies through **attribute tuning** and optional paid **crossover abilities** for hybrid builds. Gameplay focuses on **strategic growth**, outsmarting opponents, and character development.
 10 | 
 11 | ### **Key Features**
 12 | 
 13 | * **Turn-Based Mechanics**: Players alternate moves, managing resources like energy and speed for strategic gameplay.  
 14 | * **Customization**: Deep options for character builds and gear allow players to develop unique strategies.  
 15 | * **Seasonal Content**: Each season introduces new storylines, characters, abilities, and events.  
 16 | * **Replayability**: Evolving gameplay ensures no two matches are the same.
 17 | 
 18 | **Note**: During Season 1, items can feature randomized abilities or attributes**.** This note is at launch.
 19 | 
 20 | ---
 21 | 
 22 | ## **Monetization Strategies**
 23 | 
 24 | ### **1\. In-Game Microtransactions**
 25 | 
 26 | * **Cosmetics**: Skins, costumes, and aesthetic upgrades with functional benefits:  
 27 |   * **Unique Abilities**: Cosmetics come with special abilities or items that can be equipped to characters.  
 28 |   * **Single Slot Rule**: Characters can only hold one item/ability at a time, ensuring strategic choices.  
 29 |   * **Customization**: Players can attach these abilities/items to any gear they own.  
 30 |   * **Resale**: Players can resell customized gear with attached abilities/items on the marketplace.
 31 | 
 32 | ### **2\. Cosmetics Marketplace**
 33 | 
 34 | * Players can **sell cosmetics** and gear with attached items/abilities on a player-driven market.  
 35 | * Developers collect a **10% transaction fee** for each sale. A **percentage of marketplace revenue** will be allocated for **community-driven purposes**, such as funding tournaments with grand prizes, hosting community events, and supporting other player engagement initiatives.
 36 | 
 37 | ### **3\. Betting Matches**
 38 | 
 39 | * Players can bet on match outcomes (e.g., **$1, $5, $10**, or a custom amount).  
 40 | * A **1% transaction fee** is charged on total wagers.  
 41 | * Minimum custom amount: **$1**.
 42 | 
 43 | ### **4\. Tiered Pricing for Cosmetics**
 44 | 
 45 | * Cosmetics are priced based on rarity:  
 46 |   * **Common**: $5  
 47 |   * **Rare**: $10  
 48 |   * **Epic**: $15  
 49 |   * **Legendary**: $20  
 50 |   * **Bundles**: Themed bundles combining items at discounted rates (e.g., $50 for $70 worth of items).
 51 | 
 52 | ### **5\. Battle Pass (Season Pass)**
 53 | 
 54 | * **Free and Paid Tiers**: Offer exclusive rewards, like rare skins, emotes, and in-game currency.  
 55 | * Seasonal challenges provide incentives for leveling up.
 56 | 
 57 | ### **6\. Ability / Class Unlocks**
 58 | 
 59 | * Unlockable through gameplay progression or direct purchase.  
 60 | * Advanced abilities or class upgrades can be purchased for faster access.
 61 | 
 62 | ### **7\. Sponsorships and Partnerships**
 63 | 
 64 | * Collaborate with brands for **in-game events** (e.g., movie or comic crossovers).  
 65 | * Sponsorship for tournaments and events in the esports space.
 66 | 
 67 | ### **8\. Merchandise**
 68 | 
 69 | * **Physical Merchandise**: Apparel, action figures, and collectibles tied to game characters.
 70 | 
 71 | ---
 72 | 
 73 | ## **Gameplay Mechanics**
 74 | 
 75 | ### **Character Classes and Abilities**
 76 | 
 77 | * **Warrior**: High physical damage and defense, focused on melee combat.  
 78 | * **Mage**: Ranged magical attacks, status effects, and AoE damage.  
 79 | * **Rogue**: High-speed, precision-based combat with stealth or evasion mechanics.  
 80 | * **Cleric**: Healing and defensive buffs, with options for holy damage.  
 81 | * **Beastmaster**: Summons or controls minions, focusing on versatility.
 82 | 
 83 | ### **Crossover Abilities (Paid Feature)**
 84 | 
 85 | * Unlock and integrate **abilities from other classes** to create hybrid builds (e.g., Warrior learning a Mage’s fireball spell).
 86 | 
 87 | ### **Cosmetics and Item Abilities**
 88 | 
 89 | 1. **Unique Abilities**: Cosmetics come with attached abilities or items.  
 90 | 2. **Single Slot Rule**: Characters can only equip one item at a time, ensuring strategic gameplay.  
 91 | 3. **Resale System**: Players can trade or sell cosmetics with abilities attached.
 92 | 
 93 | ### **Move Selection**
 94 | 
 95 | * Each character has:  
 96 |   * **4 Moves**  
 97 |   * **1 Passive Ability**  
 98 |   * **1 Signature Move (Ultimate)**
 99 | 
100 | ### **Victory Conditions**
101 | 
102 | * Win by knocking out the opponent’s character or through secondary objectives.
103 | 
104 | ---
105 | 
106 | ## **Strengths of the Idea**
107 | 
108 | ### **Encourages Strategy**
109 | 
110 | * Limiting characters to hold only **one ability/item at a time** creates strategic depth. Players must carefully choose the item that best complements their playstyle or counters their opponent.
111 | 
112 | ### **Player Investment**
113 | 
114 | * Players will be more **emotionally and financially invested** in cosmetics they acquire, especially if the attached ability/item impacts gameplay meaningfully. This makes cosmetics both functional and aesthetic assets.
115 | 
116 | ### **Monetization Potential**
117 | 
118 | * Allowing players to **resell customized gear** with attached items increases the value of these cosmetics in the player-driven economy. Rare items could fetch high prices, driving marketplace engagement and generating revenue through transaction fees.
119 | 
120 | ### **Replayability**
121 | 
122 | * The ability to **collect, trade, and experiment** with different items encourages players to participate in more matches and events, ensuring long-term engagement.
123 | 
124 | ### **Balanced Pay-to-Win Concerns**
125 | 
126 | * Restricting characters to one item at a time mitigates fears of "stacking" powerful abilities, keeping gameplay fair while monetizing the cosmetic layer effectively.
127 | 
128 | ### **Adds Customization**
129 | 
130 | * Players can tailor their gear's **appearance and functionality**, combining unique abilities with their favorite aesthetics. This ensures every player's character feels unique.
131 | 
132 | ---
133 | 
134 | ## **Challenges and Potential Risks**
135 | 
136 | ### **Market Over-Saturation**
137 | 
138 | * **Risk**: Too many items or undervalued abilities may saturate the marketplace.  
139 | * **Solution**: Introduce rarity systems and **time-limited drops** for items to maintain demand.
140 | 
141 | ### **Balancing Abilities**
142 | 
143 | * **Risk**: Some abilities may dominate the meta, frustrating players who don’t own them.  
144 | * **Solution**: Regular balancing updates and providing non-monetary ways (e.g., grinding) to access powerful items.
145 | 
146 | ### **Complexity for New Players**
147 | 
148 | * **Risk**: Newcomers may feel overwhelmed by the mechanics of item abilities.  
149 | * **Solution**: Provide a **tutorial mode** or introductory quests that reward basic cosmetics with simpler abilities.
150 | 
151 | ### **Perception of Pay-to-Win**
152 | 
153 | * **Risk**: Some players may perceive purchasable abilities as pay-to-win.  
154 | * **Solution**: Clearly communicate that abilities tied to cosmetics are **balanced and accessible** through gameplay. Highlight that players can earn or trade for these items without spending money.
155 | 
156 | ---
157 | 
158 | ## **Why This Works**
159 | 
160 | This approach strikes a **perfect balance between customization, strategy, and monetization**:
161 | 
162 | * **Customization**: Tailoring gear to combine aesthetics and functionality.  
163 | * **Strategy**: Encouraging players to make thoughtful choices with one-item limits.  
164 | * **Economy**: Enhancing the value of cosmetics by enabling trading and resale.  
165 | * **Engagement**: Driving replayability and player-driven participation through collectible items and marketplace features.
166 | 
167 | By tying abilities to cosmetics and keeping gameplay fair, this system caters to both competitive and casual audiences while fostering a thriving economy and sustained player engagement.
168 | 
169 | ## **To Be Developed** 
170 | 
171 | ### **Required Development Support**
172 | 
173 | The following development tasks are required:
174 | 
175 | 1. **Rock-Paper-Scissors Game Build:** Development and implementation of the core game engine.  
176 | 2. **Level-Up System Implementation:** Design and implementation of a character progression system.  
177 | 3. **Payment and Match Wager System:** Creation of a functional system enabling users to place bets on matches.  
178 | 4. **Blockchain Integration (Solana):**  
179 |    * Implementation of functionality to facilitate the buying and selling of equipment and characters as NFTs.  
180 |    * Development of a system to collect fees from match wagers.  
181 |    * Development of a system to collect fees from the sale of player equipment as NFTs.


--------------------------------------------------------------------------------
/Game Concept and Monetization Plan Mind Map.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/fakesavian/OZF-GAME/20524882a4be977769ab85ca07b8c9e785377682/Game Concept and Monetization Plan Mind Map.png


--------------------------------------------------------------------------------
/Game MVP Flow.md:
--------------------------------------------------------------------------------
  1 | ## MVP Flow
  2 | ## MVP Flow
  3 | 
  4 | A clear, step-by-step description of the core minimum-viable process:
  5 | 
  6 | 1. User visits the game website and either logs in or plays as a guest
  7 | 2. User selects a character class (e.g., Warrior, Mage, etc.)
  8 | 3. User is placed into a 1v1 real-time match (quick-join or PvE vs bot)
  9 | 4. Each player takes turns selecting an ability from their available pool
 10 | 5. The Match Resolution Engine processes the turn based on ability JSON and updates the state
 11 | 6. Status effects, cooldowns, and effects are applied; combat log updates in real-time
 12 | 7. Victory is determined via KO or timeout conditions
 13 | 8. XP and rewards are distributed and match history is saved
 14 | 
 15 | ---
 16 | 
 17 | ## Launch Features (MVP)
 18 | 
 19 | ### 1v1 Real-Time Turn-Based Combat
 20 | 
 21 | Allows players to face off in strategic, speed-ordered combat rounds with status effects, energy management, and cooldowns.
 22 | 
 23 | * JSON-driven abilities
 24 | * Real-time turn system (WebSockets)
 25 | * Server-authoritative engine
 26 | 
 27 | #### Tech Involved
 28 | 
 29 | * Node.js (API + match logic)
 30 | * TypeScript (frontend + logic)
 31 | * PostgreSQL / Supabase
 32 | * WebSockets (real-time communication)
 33 | 
 34 | #### Main Requirements
 35 | 
 36 | * Deterministic, testable battle logic
 37 | * Status effect manager
 38 | * Bot fallback for testing
 39 | * AI actions logged as turns
 40 | 
 41 | ---
 42 | 
 43 | ### Class Progression System
 44 | 
 45 | Players level up from 1 to 30 and unlock new abilities tied to their class.
 46 | 
 47 | * XP-based level system
 48 | * Passive and Ultimate abilities
 49 | * 5 total classes with 5–6 abilities each (3 starting, 2 unlockable, 1 passive)
 50 | 
 51 | #### Tech Involved
 52 | 
 53 | * PostgreSQL schema for class/ability tracking
 54 | 
 55 | #### Main Requirements
 56 | 
 57 | * Ability unlock conditions
 58 | * Persistent user state
 59 | 
 60 | ---
 61 | 
 62 | ### Matchmaking (Quick-Join)
 63 | 
 64 | Auto-pairs players or launches bot matches without needing lobbies.
 65 | 
 66 | * Real-time PvP or PvE
 67 | * Bot AI system with static logic (scalable later)
 68 | 
 69 | #### Tech Involved
 70 | 
 71 | * WebSockets or HTTP fallback
 72 | * Redis (optional for matchmaking cache)
 73 | 
 74 | #### Main Requirements
 75 | 
 76 | * Match creation service
 77 | * Bot AI logic handler
 78 | 
 79 | ---
 80 | 
 81 | ### Multi-Screen Terminal UI
 82 | 
 83 | A terminal-inspired interface with screens for lobby, battle, and post-match results.
 84 | 
 85 | * Dynamic combat log output
 86 | * Ability menu input
 87 | 
 88 | #### Tech Involved
 89 | 
 90 | * React + Tailwind
 91 | * GSAP or Canvas text animations
 92 | 
 93 | #### Main Requirements
 94 | 
 95 | * Terminal-style transitions
 96 | * Screen-based routing
 97 | 
 98 | ---
 99 | 
100 | ## Future Features (Post-MVP)
101 | 
102 | ### Blockchain Integration (Solana)
103 | 
104 | * NFT-based cosmetics (metadata during MVP)
105 | * Wager-based smart contracts
106 | 
107 | #### Tech Involved
108 | 
109 | * Solana Web3.js
110 | * Smart contracts (Anchor)
111 | 
112 | #### Main Requirements
113 | 
114 | * On-chain item sync
115 | * Wallet login
116 | 
117 | ---
118 | 
119 | ### Cosmetics Marketplace
120 | 
121 | * Buy/sell cosmetic gear with stat modifiers
122 | * Sync off-chain gear with NFT layer
123 | 
124 | #### Tech Involved
125 | 
126 | * Supabase for metadata
127 | * On-chain ID tracking (later)
128 | 
129 | #### Main Requirements
130 | 
131 | * Trade and escrow system
132 | * Item rarity and effects
133 | 
134 | ---
135 | 
136 | ## System Diagram
137 | 
138 | Pending update — will include:
139 | 
140 | * React frontend (multi-screen)
141 | * Node.js API backend
142 | * Match Resolution Engine (embedded in API for MVP)
143 | * JSON-based Ability Registry (file-based for MVP)
144 | * PostgreSQL (user, match, turn tables)
145 | * Optional Redis cache layer
146 | * PvE Bot logic module
147 | * WebSocket server for real-time play
148 | 
149 | ---
150 | 
151 | ## Questions & Clarifications (Answered)
152 | 
153 | * **Will real-time turns use WebSockets or HTTP?** → WebSockets for low-latency play
154 | * **Do bots scale in difficulty or are they static?** → Static for MVP, scalable later
155 | * **How many classes and abilities should MVP support initially?** → 5 classes, \~5 abilities per class
156 | * **Should users earn cosmetics at launch or post-blockchain?** → Metadata-based cosmetics available at MVP, NFTs later
157 | 
158 | ---
159 | 
160 | ## Architecture Consideration Questions (Answered)
161 | 
162 | * **Should match engine be a service or embedded in API layer?** → Embedded for MVP
163 | * **Can PvE and PvP share the same engine module?** → Yes, both use same logic core
164 | * **Do you want JSON abilities to sync to DB or stay file-based?** → File-based for MVP, DB sync post-launch
165 | * **Will async matches or replays be added later?** → Post-MVP, logs enable replay support
166 | * **Should AI actions be logged like player turns?** → Yes
167 | 


--------------------------------------------------------------------------------
/README.md:
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
/UI_Design_Plan.md:
--------------------------------------------------------------------------------
  1 | # OZF UI Design Plan
  2 | 
  3 | This document outlines the detailed plan for creating the functional UI design for the OZF cyberpunk turn-based RPG, adhering to the provided aesthetic and practical guidelines.
  4 | 
  5 | ## Project Overview
  6 | 
  7 | OZF is a cyberpunk turn-based RPG where players select characters and engage in tactical battles through a stylized terminal UI. It features retro aesthetics with hacker-style interface elements, ASCII art, scanlines, and glitch effects.
  8 | 
  9 | ## Design Principles
 10 | 
 11 | *   **Aesthetics**:
 12 |     *   Bold simplicity with intuitive navigation creating frictionless experiences.
 13 |     *   Breathable whitespace complemented by strategic color accents for visual hierarchy.
 14 |     *   Strategic negative space calibrated for cognitive breathing room and content prioritization.
 15 |     *   Systematic color theory applied through subtle gradients and purposeful accent placement.
 16 |     *   Typography hierarchy utilizing weight variance and proportional scaling for information architecture.
 17 |     *   Visual density optimization balancing information availability with cognitive load management.
 18 |     *   Motion choreography implementing physics-based transitions for spatial continuity.
 19 |     *   Accessibility-driven contrast ratios paired with intuitive navigation patterns ensuring universal usability.
 20 |     *   Feedback responsiveness via state transitions communicating system status with minimal latency.
 21 |     *   Content-first layouts prioritizing user objectives over decorative elements for task efficiency.
 22 |     *   Terminal aesthetic: black backgrounds, green ASCII styling where applicable, subtle VHS scanline overlays.
 23 | *   **Practicalities**:
 24 |     *   Simulate an iPhone device frame.
 25 |     *   Use Lucide React icons.
 26 |     *   Use Tailwind for CSS.
 27 |     *   This is meant to be a simulated phone. Do not render scroll bars.
 28 |     *   Use React + TypeScript structure with modular views.
 29 | *   **Project-Specific Guidelines**:
 30 |     *   Design for a browser-based turn-based RPG where the user controls a cyberpunk-themed avatar in battle against bots or players.
 31 |     *   Backend is complete and provides routes for:
 32 |         *   `POST /api/match/start`
 33 |         *   `POST /api/match/:matchId/turn`
 34 |     *   This frontend will interface with that backend via `fetch()`.
 35 | 
 36 | ## Detailed Plan
 37 | 
 38 | ### Phase 1: Project Setup and Core Structure
 39 | 
 40 | 1.  **Create a `frontend` directory**: This will house all the React application files.
 41 | 2.  **Initialize a React + TypeScript project**: Use `vite` for a quick setup.
 42 | 3.  **Install Tailwind CSS**: Configure Tailwind for styling.
 43 | 4.  **Install Lucide React icons**: Add the icon library.
 44 | 5.  **Create `index.html`**: Set up the basic HTML structure with the iPhone device frame simulation.
 45 | 6.  **Create `src/App.tsx`**: This will be the main React component that handles routing between the different views.
 46 | 7.  **Create `src/main.tsx`**: The entry point for the React application.
 47 | 8.  **Create `src/index.css`**: For global styles and Tailwind imports.
 48 | 
 49 | ### Phase 2: Component Development
 50 | 
 51 | 1.  **`src/components/PhoneFrame.tsx`**: A reusable component to simulate the iPhone device frame.
 52 | 2.  **`src/components/GlitchText.tsx`**: A component for the static glitch effect on text.
 53 | 3.  **`src/components/ScanlineOverlay.tsx`**: A component for the VHS scanline overlay.
 54 | 4.  **`src/components/Button.tsx`**: A reusable button component with terminal aesthetic.
 55 | 5.  **`src/components/HealthBar.tsx`**: A component to display health bars.
 56 | 6.  **`src/components/CombatLog.tsx`**: A component to display combat messages.
 57 | 
 58 | ### Phase 3: View Development
 59 | 
 60 | 1.  **`src/views/SplashScreen.tsx`**:
 61 |     *   Display the OZF logo (text-based with ASCII art style).
 62 |     *   Apply `GlitchText` component.
 63 |     *   On click, transition to the Main Menu.
 64 | 2.  **`src/views/MainMenu.tsx`**:
 65 |     *   Display the game title.
 66 |     *   Render buttons for "Battle", "Character", "Inventory", "Settings" using the `Button` component.
 67 |     *   Implement navigation logic for each button.
 68 | 3.  **`src/views/BattleScreen.tsx`**:
 69 |     *   **HUD**:
 70 |         *   Player and Opponent character display (simple ASCII-style representations).
 71 |         *   Health bars for both players using `HealthBar` component.
 72 |         *   Energy bars for both players.
 73 |     *   **Combat Log**:
 74 |         *   Display recent combat events using `CombatLog` component.
 75 |     *   **Ability Menu**:
 76 |         *   Display available abilities for the active player.
 77 |         *   Buttons for each ability, showing name, cost, and cooldown.
 78 |         *   Highlight active player's turn.
 79 |     *   **Backend Integration**:
 80 |         *   `POST /api/match/start` to initiate a battle.
 81 |         *   `POST /api/match/:matchId/turn` to send turn actions.
 82 |         *   Update UI based on `MatchState` and `CombatLogEntry` from backend responses.
 83 | 
 84 | ### Phase 4: Styling and Aesthetics
 85 | 
 86 | 1.  Apply Tailwind CSS classes for layout, typography, and colors (black background, green accents).
 87 | 2.  Implement VHS scanline overlay globally or on specific views.
 88 | 3.  Ensure responsive design within the iPhone frame.
 89 | 4.  Integrate Lucide React icons where appropriate (e.g., for abilities, menu items).
 90 | 5.  Implement subtle animations and transitions for a "motion choreography" feel, especially for state changes and button interactions.
 91 | 
 92 | ### Phase 5: Final Output
 93 | 
 94 | 1.  Ensure `index.html` is correctly set up to render the React app.
 95 | 2.  Provide the complete `index.html` and `App.tsx` (or the main entry point) as the output.
 96 | 
 97 | ## UI Flow Diagram
 98 | 
 99 | ```mermaid
100 | graph TD
101 |     A[Start] --> B{Check for existing frontend};
102 |     B -- No --> C[Create frontend directory];
103 |     B -- Yes --> D[Proceed with existing frontend];
104 |     C --> E[Initialize React + TS with Vite];
105 |     E --> F[Install Tailwind CSS];
106 |     F --> G[Install Lucide React];
107 |     G --> H[Create index.html];
108 |     H --> I[Create src/App.tsx];
109 |     I --> J[Create src/main.tsx];
110 |     J --> K[Create src/index.css];
111 |     K --> L[Develop PhoneFrame Component];
112 |     L --> M[Develop GlitchText Component];
113 |     M --> N[Develop ScanlineOverlay Component];
114 |     N --> O[Develop Button Component];
115 |     O --> P[Develop HealthBar Component];
116 |     P --> Q[Develop CombatLog Component];
117 |     Q --> R[Develop SplashScreen View];
118 |     R --> S[Develop MainMenu View];
119 |     S --> T[Develop BattleScreen View];
120 |     T --> U[Implement Backend Integration];
121 |     U --> V[Apply Global Styling & Aesthetics];
122 |     V --> W[Final Output: index.html & App.tsx];


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
/backend/src/match_engine/bot_ai.ts:
--------------------------------------------------------------------------------
 1 | import { MatchState, PlayerState, TurnAction } from './types';
 2 | import { Ability } from '../types/db';
 3 | import { hasStatus } from './status_manager';
 4 | 
 5 | export const generateBotAction = (botPlayer: PlayerState, opponentPlayer: PlayerState, matchState: MatchState): TurnAction => {
 6 |   // Simple weighted logic:
 7 |   // 1. If stunned, do nothing (or try to use a cleansing ability if available)
 8 |   if (hasStatus(botPlayer, 'stun')) {
 9 |     console.log(`${botPlayer.username} is stunned and cannot act.`);
10 |     // Return a "do nothing" action or a specific "stunned" ability if implemented
11 |     return {
12 |       actorId: botPlayer.profile.id,
13 |       abilityId: 'stunned_action_id', // Placeholder for a "stunned" ability
14 |       targetId: opponentPlayer.profile.id,
15 |     };
16 |   }
17 | 
18 |   // Filter available abilities (not on cooldown, enough energy)
19 |   const availableAbilities = botPlayer.abilities.filter(ability => {
20 |     const onCooldown = botPlayer.cooldowns[ability.id] && botPlayer.cooldowns[ability.id] > 0;
21 |     const hasEnergy = (ability.energy_cost || 0) <= botPlayer.energy;
22 |     return !onCooldown && hasEnergy;
23 |   });
24 | 
25 |   if (availableAbilities.length === 0) {
26 |     console.log(`${botPlayer.username} has no available abilities. Skipping turn.`);
27 |     // Return a "do nothing" action
28 |     return {
29 |       actorId: botPlayer.profile.id,
30 |       abilityId: 'no_action_id', // Placeholder for a "no action" ability
31 |       targetId: opponentPlayer.profile.id,
32 |     };
33 |   }
34 | 
35 |   // Basic weighted logic:
36 |   // Prioritize damage if opponent is low health
37 |   // Prioritize healing if self is low health
38 |   // Otherwise, pick a random available ability
39 | 
40 |   // Example: Prioritize damage if opponent is below 30% health
41 |   const damageAbilities = availableAbilities.filter(ab => ab.effect_json?.type === 'damage');
42 |   if (opponentPlayer.hp / opponentPlayer.maxHealth < 0.3 && damageAbilities.length > 0) {
43 |     // Pick the highest damage ability
44 |     const bestDamageAbility = damageAbilities.reduce((prev, current) =>
45 |       (prev.effect_json?.value || 0) > (current.effect_json?.value || 0) ? prev : current
46 |     );
47 |     return {
48 |       actorId: botPlayer.profile.id,
49 |       abilityId: bestDamageAbility.id,
50 |       targetId: opponentPlayer.profile.id,
51 |     };
52 |   }
53 | 
54 |   // Example: Prioritize healing if self is below 50% health
55 |   const healAbilities = availableAbilities.filter(ab => ab.effect_json?.type === 'heal');
56 |   if (botPlayer.hp / botPlayer.maxHealth < 0.5 && healAbilities.length > 0) {
57 |     // Pick the highest healing ability
58 |     const bestHealAbility = healAbilities.reduce((prev, current) =>
59 |       (prev.effect_json?.value || 0) > (current.effect_json?.value || 0) ? prev : current
60 |     );
61 |     return {
62 |       actorId: botPlayer.profile.id,
63 |       abilityId: bestHealAbility.id,
64 |       targetId: botPlayer.profile.id, // Target self for healing
65 |     };
66 |   }
67 | 
68 |   // Default: Pick a random available ability
69 |   const randomIndex = Math.floor(Math.random() * availableAbilities.length);
70 |   const chosenAbility = availableAbilities[randomIndex];
71 | 
72 |   // Determine target based on ability type (e.g., damage abilities target enemy, heal abilities target self)
73 |   let targetId = opponentPlayer.profile.id;
74 |   if (chosenAbility.effect_json?.target === 'self') {
75 |     targetId = botPlayer.profile.id;
76 |   }
77 | 
78 |   return {
79 |     actorId: botPlayer.profile.id,
80 |     abilityId: chosenAbility.id,
81 |     targetId: targetId,
82 |   };
83 | };


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
/backend/src/match_engine/resolver.ts:
--------------------------------------------------------------------------------
  1 | import { MatchState, PlayerState, TurnAction, CombatLogEntry, StatusEffect, MatchTurnResult, TurnLogEntry, StatusEffectType } from './types';
  2 | import { applyDamage, applyEnergyCost, updatePlayerState, decrementCooldowns, updateCooldown } from './state';
  3 | import { addLogEntry } from './combat_log';
  4 | import { Ability, EffectJson } from '../types/db'; // Import EffectJson
  5 | import { getAbilityById } from './abilities'; // Import getAbilityById
  6 | import { applyStatus, hasStatus, processStatusEffects, applyEffect } from './status_manager'; // Import status manager functions
  7 | import { BotModels } from './bot_ai/index'; // Import BotModels
  8 | import { v4 as uuidv4 } from 'uuid'; // Import uuid for generating unique IDs
  9 | 
 10 | export const runMatchTurn = (matchState: MatchState, turnAction: TurnAction): MatchTurnResult => {
 11 |   let { actorId, abilityId, targetId } = turnAction;
 12 |   let actor = matchState.playerA.profile.id === actorId ? matchState.playerA : matchState.playerB;
 13 |   let target = matchState.playerA.profile.id === targetId ? matchState.playerA : matchState.playerB;
 14 |   let combatLog: CombatLogEntry[] = [];
 15 |   const effectsAppliedForLog: StatusEffect[] = []; // To collect effects for turn log
 16 | 
 17 |   // If playerB is a bot, determine its action
 18 |   if (matchState.playerB.isBot && actor.profile.id === matchState.playerB.profile.id) {
 19 |     const botAction = BotModels.random.getAction(actor, matchState.playerA); // Assuming playerA is always the human opponent for the bot
 20 |     actorId = botAction.actorId;
 21 |     abilityId = botAction.abilityId;
 22 |     targetId = botAction.targetId;
 23 |     actor = matchState.playerA.profile.id === actorId ? matchState.playerA : matchState.playerB;
 24 |     target = matchState.playerA.profile.id === targetId ? matchState.playerA : matchState.playerB;
 25 |   }
 26 | 
 27 |   const ability = getAbilityById(abilityId);
 28 | 
 29 |   if (!ability) {
 30 |     combatLog.push(addLogEntry(matchState.turnNumber, `${actor.username} tried to use an unknown ability!`, actor.profile.id));
 31 |     return {
 32 |       updatedMatchState: matchState,
 33 |       combatLog,
 34 |       winner: null
 35 |     };
 36 |   }
 37 | 
 38 |   if (hasStatus(actor, 'stun')) {
 39 |     combatLog.push(addLogEntry(matchState.turnNumber, `${actor.username} is stunned and misses their turn.`, actor.profile.id));
 40 |   } else {
 41 |     // Energy and Cooldown checks
 42 |     if (actor.energy < (ability.energy_cost || 0)) {
 43 |       combatLog.push(addLogEntry(matchState.turnNumber, `${actor.username} doesn't have enough energy to use ${ability.name}!`, actor.profile.id));
 44 |       return { updatedMatchState: matchState, combatLog, winner: null };
 45 |     }
 46 | 
 47 |     if (actor.cooldowns[abilityId] && actor.cooldowns[abilityId] > 0) {
 48 |       combatLog.push(addLogEntry(matchState.turnNumber, `${ability.name} is still on cooldown!`, actor.profile.id));
 49 |       return { updatedMatchState: matchState, combatLog, winner: null };
 50 |     }
 51 | 
 52 |     combatLog.push(addLogEntry(matchState.turnNumber, `${actor.username} used ${ability.name} on ${target.username}.`, actor.profile.id, ability.id));
 53 | 
 54 |     // Deduct energy and set cooldown
 55 |     actor.energy -= (ability.energy_cost || 0);
 56 |     actor.cooldowns[abilityId] = (ability.cooldown || 0);
 57 | 
 58 |     // Apply ability effects
 59 |     // Apply ability effects
 60 |     const effectsAppliedForLog: StatusEffect[] = []; // To collect effects for turn log
 61 | 
 62 |     if (ability.effects && ability.effects.length > 0) {
 63 |       ability.effects.forEach(effectJson => {
 64 |         const newStatusEffect: StatusEffect = {
 65 |           ...effectJson,
 66 |           id: uuidv4(),
 67 |           sourceAbilityId: ability.id,
 68 |           appliedAtTurn: matchState.turnNumber,
 69 |           type: effectJson.type as StatusEffectType,
 70 |           duration: effectJson.duration || 0, // Ensure duration is a number
 71 |         };
 72 | 
 73 |         let effectTarget = effectJson.target === 'self' ? actor : target;
 74 |         effectTarget = applyEffect(effectTarget, newStatusEffect);
 75 | 
 76 |         // Update actor or target based on who was affected
 77 |         if (effectJson.target === 'self') {
 78 |           actor = effectTarget;
 79 |         } else {
 80 |           target = effectTarget;
 81 |         }
 82 | 
 83 |         effectsAppliedForLog.push(newStatusEffect);
 84 | 
 85 |         // Add combat log entries for each effect
 86 |         switch (effectJson.type) {
 87 |           case 'burn':
 88 |             combatLog.push(addLogEntry(matchState.turnNumber, `${effectTarget.username} is burned for ${effectJson.duration} turn(s).`, effectTarget.profile.id, ability.id, effectJson.type, effectJson.duration));
 89 |             break;
 90 |           case 'stun':
 91 |             combatLog.push(addLogEntry(matchState.turnNumber, `${effectTarget.username} is stunned for ${effectJson.duration} turn(s).`, effectTarget.profile.id, ability.id, effectJson.type, effectJson.duration));
 92 |             break;
 93 |           case 'shield':
 94 |             combatLog.push(addLogEntry(matchState.turnNumber, `${effectTarget.username} gains a ${effectJson.value} point shield.`, effectTarget.profile.id, ability.id, effectJson.type, effectJson.value));
 95 |             break;
 96 |           case 'buff':
 97 |             combatLog.push(addLogEntry(matchState.turnNumber, `${effectTarget.username} gains a buff to ${effectJson.stat} for ${effectJson.duration} turn(s).`, effectTarget.profile.id, ability.id, effectJson.type, effectJson.duration));
 98 |             break;
 99 |           case 'debuff':
100 |             combatLog.push(addLogEntry(matchState.turnNumber, `${effectTarget.username} suffers a debuff to ${effectJson.stat} for ${effectJson.duration} turn(s).`, effectTarget.profile.id, ability.id, effectJson.type, effectJson.duration));
101 |             break;
102 |           case 'damage': // Direct damage from ability, not a status effect
103 |             combatLog.push(addLogEntry(matchState.turnNumber, `${effectTarget.username} takes ${effectJson.value} damage.`, effectTarget.profile.id, ability.id, effectJson.type, effectJson.value));
104 |             break;
105 |           case 'heal': // Direct heal from ability, not a status effect
106 |             combatLog.push(addLogEntry(matchState.turnNumber, `${effectTarget.username} heals for ${effectJson.value} HP.`, effectTarget.profile.id, ability.id, effectJson.type, effectJson.value));
107 |             break;
108 |         }
109 |       });
110 |     }
111 |   }
112 | 
113 |   // Process status effects for both players at the end of their turn
114 |   actor = processStatusEffects(actor);
115 |   target = processStatusEffects(target);
116 | 
117 |   // Cooldown Ticker Per Turn
118 |   actor.cooldowns = Object.fromEntries(
119 |     Object.entries(actor.cooldowns).map(([key, val]) => [key, Math.max(0, val - 1)])
120 |   );
121 |   target.cooldowns = Object.fromEntries(
122 |     Object.entries(target.cooldowns).map(([key, val]) => [key, Math.max(0, val - 1)])
123 |   );
124 | 
125 |   // Update match state with new player states
126 |   let updatedMatchState = {
127 |     ...matchState,
128 |     playerA: matchState.playerA.profile.id === actor.profile.id ? actor : matchState.playerA,
129 |     playerB: matchState.playerB.profile.id === target.profile.id ? target : matchState.playerB,
130 |     combatLog: [...matchState.combatLog, ...combatLog],
131 |     turnNumber: matchState.turnNumber + 1, // Increment turn number
132 |   };
133 | 
134 |   // Create TurnLogEntry
135 |   const damageDealt = combatLog.filter(log => log.effectType === 'damage').reduce((sum, log) => sum + (log.value || 0), 0);
136 |   // effectsAppliedForLog is already populated in the ability.effects loop
137 | 
138 |   const turnLogEntry: TurnLogEntry = {
139 |     turn: matchState.turnNumber,
140 |     actorId: turnAction.actorId,
141 |     abilityId: turnAction.abilityId,
142 |     targetId: turnAction.targetId,
143 |     effectsApplied: effectsAppliedForLog,
144 |     damageDealt: damageDealt,
145 |     resultSummary: combatLog.map(log => log.message).join(' ')
146 |   };
147 | 
148 |   updatedMatchState.turnLog = [...(matchState.turnLog || []), turnLogEntry];
149 | 
150 |   // Check for KO
151 |   const playerA = updatedMatchState.playerA;
152 |   const playerB = updatedMatchState.playerB;
153 | 
154 |   let winner: string | null = null;
155 | 
156 |   if (playerA.hp <= 0 && playerB.hp <= 0) {
157 |     combatLog.push(addLogEntry(updatedMatchState.turnNumber, "It's a draw!"));
158 |     winner = 'draw';
159 |   } else if (playerA.hp <= 0) {
160 |     combatLog.push(addLogEntry(updatedMatchState.turnNumber, `${playerB.profile.id} wins by KO!`));
161 |     winner = playerB.profile.id;
162 |   } else if (playerB.hp <= 0) {
163 |     combatLog.push(addLogEntry(updatedMatchState.turnNumber, `${playerA.profile.id} wins by KO!`));
164 |     winner = playerA.profile.id;
165 |   }
166 | 
167 |   return {
168 |     updatedMatchState,
169 |     combatLog,
170 |     winner
171 |   };
172 | };


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
/backend/src/match_engine/status_manager.ts:
--------------------------------------------------------------------------------
  1 | import { PlayerState, StatusEffect, StatusEffectType } from './types';
  2 | 
  3 | export function applyStatus(player: PlayerState, effect: StatusEffect): PlayerState {
  4 |   // Check if a similar unique effect already exists and update its duration instead of adding a new one
  5 |   const existingEffectIndex = player.statusEffects.findIndex(
  6 |     (e) => e.type === effect.type && e.sourceAbilityId === effect.sourceAbilityId
  7 |   );
  8 | 
  9 |   if (existingEffectIndex > -1) {
 10 |     const updatedEffects = [...player.statusEffects];
 11 |     updatedEffects[existingEffectIndex].duration = effect.duration; // Refresh duration
 12 |     if (effect.value !== undefined) {
 13 |       updatedEffects[existingEffectIndex].value = effect.value; // Update value if applicable
 14 |     }
 15 |     if (effect.stat !== undefined) {
 16 |       updatedEffects[existingEffectIndex].stat = effect.stat; // Update stat if applicable
 17 |     }
 18 |     return { ...player, statusEffects: updatedEffects };
 19 |   } else {
 20 |     return {
 21 |       ...player,
 22 |       statusEffects: [...player.statusEffects, { ...effect }],
 23 |     };
 24 |   }
 25 | }
 26 | 
 27 | export function applyEffect(player: PlayerState, effect: StatusEffect): PlayerState {
 28 |   let updated = { ...player };
 29 | 
 30 |   switch (effect.type) {
 31 |     case 'burn':
 32 |     case 'stun':
 33 |     case 'shield':
 34 |     case 'poison':
 35 |       // These are status effects that are added to the array
 36 |       updated = applyStatus(updated, effect);
 37 |       break;
 38 |     case 'buff':
 39 |     case 'debuff':
 40 |       // These are status effects that modify stats and are added to the array
 41 |       updated = applyStatus(updated, effect);
 42 |       // Apply immediate stat modification if needed, or handle it in processStatusEffects
 43 |       // For now, we'll handle stat modification in processStatusEffects for consistency
 44 |       break;
 45 |   }
 46 | 
 47 |   return updated;
 48 | }
 49 | 
 50 | export function processStatusEffects(character: PlayerState): PlayerState {
 51 |   let updatedCharacter = { ...character };
 52 |   const effectsToRemove: string[] = [];
 53 | 
 54 |   updatedCharacter.statusEffects = updatedCharacter.statusEffects.filter((effect) => {
 55 |     switch (effect.type) {
 56 |       case 'burn':
 57 |         updatedCharacter.hp -= effect.value || 0; // Apply burn damage
 58 |         break;
 59 |       case 'poison':
 60 |         updatedCharacter.hp -= effect.value || 0; // Poison damage each turn
 61 |         break;
 62 |       case 'stun':
 63 |         // Stun effect is handled in the action phase (resolver.ts)
 64 |         break;
 65 |       case 'shield':
 66 |         // Shield is consumed on damage, not ticked down here
 67 |         break;
 68 |       case 'buff':
 69 |         // Apply buff: increase stat
 70 |         if (effect.stat && effect.value !== undefined) {
 71 |           (updatedCharacter as any)[effect.stat] += effect.value;
 72 |         }
 73 |         break;
 74 |       case 'debuff':
 75 |         // Apply debuff: decrease stat
 76 |         if (effect.stat && effect.value !== undefined) {
 77 |           (updatedCharacter as any)[effect.stat] -= effect.value;
 78 |         }
 79 |         break;
 80 |     }
 81 | 
 82 |     effect.duration -= 1;
 83 |     if (effect.duration <= 0) {
 84 |       effectsToRemove.push(effect.id);
 85 |       // Revert buff/debuff when it expires
 86 |       if (effect.type === 'buff' && effect.stat && effect.value !== undefined) {
 87 |         (updatedCharacter as any)[effect.stat] -= effect.value;
 88 |       } else if (effect.type === 'debuff' && effect.stat && effect.value !== undefined) {
 89 |         (updatedCharacter as any)[effect.stat] += effect.value;
 90 |       }
 91 |     }
 92 |     return effect.duration > 0;
 93 |   });
 94 | 
 95 |   return updatedCharacter;
 96 | }
 97 | 
 98 | export function hasStatus(player: PlayerState, type: StatusEffectType): boolean {
 99 |   return player.statusEffects.some((e) => e.type === type);
100 | }
101 | 
102 | function getShieldAmount(player: PlayerState): number {
103 |   return player.statusEffects.filter((e) => e.type === 'shield').reduce((sum, s) => sum + (s.value || 0), 0);
104 | }
105 | 
106 | function consumeShield(effects: StatusEffect[], incomingDamage: number): StatusEffect[] {
107 |   const updated = [...effects];
108 |   let remaining = incomingDamage;
109 | 
110 |   for (const effect of updated) {
111 |     if (effect.type === 'shield') {
112 |       const used = Math.min(effect.value || 0, remaining);
113 |       effect.value = (effect.value || 0) - used;
114 |       remaining -= used;
115 |     }
116 |     if (remaining <= 0) break;
117 |   }
118 | 
119 |   return updated.filter((e) => e.type !== 'shield' || (e.value || 0) > 0);
120 | }
121 | 


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
76 |   [key: string]: any; // Allow other properties
77 |   // Add more properties like potency, tickDamage, etc.
78 | }
79 | 
80 | export interface CombatLogEntry {
81 |   turnNumber: number;
82 |   message: string;
83 |   playerId?: string; // Player involved in the log entry
84 |   abilityId?: string; // Ability involved
85 |   effectType?: string; // Type of effect (e.g., 'damage', 'heal')
86 |   value?: number; // Value of the effect
87 | }


--------------------------------------------------------------------------------
/backend/src/match_engine/validator.ts:
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
/backend/src/match_engine/victory_checker.ts:
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
/backend/src/server.ts:
--------------------------------------------------------------------------------
  1 | import express from 'express';
  2 | import http from 'http';
  3 | import WebSocket from 'ws';
  4 | import cors from 'cors';
  5 | 
  6 | const app = express();
  7 | const server = http.createServer(app);
  8 | const wss = new WebSocket.Server({ server });
  9 | 
 10 | import { createMatch, createPlayerProfile, getPlayerProfileById, updateMatchStatus, createTurn } from './db';
 11 | import { initializePlayerState } from './match_engine/state';
 12 | import { runTurn } from './match_engine';
 13 | import { loadAllAbilities } from './utils/abilityLoader';
 14 | import { MatchState, TurnAction, CombatLogEntry } from './match_engine/types';
 15 | import { PlayerProfile, Ability } from './types/db';
 16 | import { v4 as uuidv4 } from 'uuid'; // For generating UUIDs
 17 | import matchRouter from './api/match';
 18 | import turnRouter from './api/turn';
 19 | import { createMatchState } from './utils/matchStateStore'; // Import createMatchState
 20 | 
 21 | app.use(express.json());
 22 | app.use(cors({
 23 |   origin: 'http://localhost:3001', // frontend
 24 |   credentials: true, // if using cookies
 25 | }));
 26 | 
 27 | // In-memory storage for active matches (for MVP, will be replaced by Redis/DB for scaling)
 28 | const activeMatches: Map<string, { matchState: MatchState; players: { [playerId: string]: WebSocket } }> = new Map();
 29 | 
 30 | app.get('/', (_req, res) => {
 31 |   res.send('Backend is up!');
 32 | });
 33 | 
 34 | app.use('/api/match', matchRouter);
 35 | app.use('/api/match', turnRouter); // Mount the turn router
 36 | 
 37 | // Mock endpoint for frontend testing
 38 | app.post("/api/match/:matchId/turn", (req, res) => {
 39 |   const { matchId } = req.params;
 40 |   const { move } = req.body;
 41 | 
 42 |   console.log(`Match ${matchId} received move: ${move}`);
 43 | 
 44 |   // Mock result:
 45 |   res.json({
 46 |     result: "ok",
 47 |     enemyHP: 80,
 48 |     playerHP: 100,
 49 |     log: `You used ${move}.`,
 50 |   });
 51 | });
 52 | 
 53 | // API to start a new match
 54 | app.post('/api/match/start', async (req: express.Request, res: express.Response) => {
 55 |   try {
 56 |     // For MVP, we'll simulate a player and a bot
 57 |     // In a real scenario, player_id would come from authentication
 58 |     const playerAUsername = req.body.username || `Player_${uuidv4().substring(0, 4)}`;
 59 |     const playerBUsername = `Bot_${uuidv4().substring(0, 4)}`;
 60 | 
 61 |     // Create dummy character class IDs for now
 62 |     const dummyWarriorClassId = uuidv4(); // Replace with actual class IDs from DB
 63 |     const dummyMageClassId = uuidv4();
 64 | 
 65 |     // Create player profiles (or retrieve existing ones)
 66 |     let playerAProfile: PlayerProfile;
 67 |     // For simplicity, always create new profiles for now
 68 |     playerAProfile = await createPlayerProfile(uuidv4(), dummyWarriorClassId); // Dummy user_id
 69 | 
 70 |     let playerBProfile: PlayerProfile;
 71 |     playerBProfile = await createPlayerProfile(null, dummyMageClassId, true); // Bot has no user_id
 72 | 
 73 |     // Create match in DB
 74 |     const dbMatch = await createMatch(playerAProfile.id, playerBProfile.id, true); // is_bot = true
 75 | 
 76 |     // Load all abilities for the match engine
 77 |     const allAbilities = loadAllAbilities();
 78 | 
 79 |     // Filter abilities for each player's class (for MVP, just assign all for now)
 80 |     const playerAAbilities = allAbilities.filter(ab => ab.class_id === dummyWarriorClassId || ab.class_id === null); // Assign all for now
 81 |     const playerBAbilities = allAbilities.filter(ab => ab.class_id === dummyMageClassId || ab.class_id === null); // Assign all for now
 82 | 
 83 |     // Initialize player states
 84 |     const playerAState = initializePlayerState(playerAProfile, playerAUsername, playerAAbilities, false);
 85 |     const playerBState = initializePlayerState(playerBProfile, playerBUsername, playerBAbilities, true);
 86 | 
 87 |     // Initialize match state
 88 | // Initialize match state
 89 |     const initialMatchState: MatchState = {
 90 |       id: dbMatch.id,
 91 |       playerA: { ...playerAState, hp: 100, energy: 100, statusEffects: [], cooldowns: {}, id: playerAProfile.id },
 92 |       playerB: { ...playerBState, hp: 100, energy: 100, statusEffects: [], cooldowns: {}, id: playerBProfile.id },
 93 |       turnNumber: 1,
 94 |       activePlayerId: playerAState.profile.id, // Player A starts
 95 |       combatLog: [],
 96 |       status: 'active',
 97 |       winnerId: null,
 98 |       isBot: true,
 99 |       turnLog: [], // Initialize turnLog as an empty array
100 |     };
101 | 
102 |     // Store initial match state in the in-memory store
103 |     createMatchState(dbMatch.id, initialMatchState);
104 | 
105 |     activeMatches.set(dbMatch.id, { matchState: initialMatchState, players: {} });
106 | 
107 |     res.status(201).json({
108 |       matchId: dbMatch.id,
109 |       initialState: initialMatchState,
110 |       message: 'Match started successfully!',
111 |     });
112 |   } catch (error) {
113 |     console.error('Error starting match:', error);
114 |     res.status(500).json({ message: 'Failed to start match', error: (error as Error).message });
115 |   }
116 | });
117 | 
118 | // WebSocket connection handler
119 | wss.on('connection', ws => {
120 |   console.log('Client connected via WebSocket');
121 | 
122 |   ws.on('message', async message => {
123 |     try {
124 |       const parsedMessage = JSON.parse(message.toString());
125 |       const { type, payload } = parsedMessage;
126 | 
127 |       if (type === 'JOIN_MATCH' && payload.matchId && payload.playerId) {
128 |         const matchEntry = activeMatches.get(payload.matchId);
129 |         if (matchEntry) {
130 |           matchEntry.players[payload.playerId] = ws;
131 |           console.log(`Player ${payload.playerId} joined match ${payload.matchId}`);
132 |           // Send initial state to the joining player
133 |           ws.send(JSON.stringify({ type: 'MATCH_STATE_UPDATE', state: matchEntry.matchState }));
134 |         } else {
135 |           ws.send(JSON.stringify({ type: 'ERROR', message: 'Match not found' }));
136 |         }
137 |       } else if (type === 'SUBMIT_TURN' && payload.matchId && payload.turnAction) {
138 |         const { matchId, turnAction } = payload as { matchId: string; turnAction: TurnAction };
139 |         const matchEntry = activeMatches.get(matchId);
140 | 
141 |         if (!matchEntry) {
142 |           ws.send(JSON.stringify({ type: 'ERROR', message: 'Match not found or inactive' }));
143 |           return;
144 |         }
145 | 
146 |         let currentMatchState = matchEntry.matchState;
147 |         let playerATurn: TurnAction | null = null;
148 |         let playerBTurn: TurnAction | null = null;
149 | 
150 |         // Determine which player submitted the turn
151 |         if (turnAction.actorId === currentMatchState.playerA.profile.id) {
152 |           playerATurn = turnAction;
153 |         } else if (turnAction.actorId === currentMatchState.playerB.profile.id) {
154 |           playerBTurn = turnAction;
155 |         } else {
156 |           ws.send(JSON.stringify({ type: 'ERROR', message: 'Invalid player for this match' }));
157 |           return;
158 |         }
159 | 
160 |         // Ensure it's the active player's turn
161 |         if (turnAction.actorId !== currentMatchState.activePlayerId) {
162 |           ws.send(JSON.stringify({ type: 'ERROR', message: 'Not your turn' }));
163 |           return;
164 |         }
165 | 
166 |         // For PvE, if player A submits, bot's turn is generated immediately
167 |         if (currentMatchState.isBot && turnAction.actorId === currentMatchState.playerA.profile.id) {
168 |           // The bot's turn will be generated within runTurn if it's player B's turn
169 |           // We pass null for playerBTurn here, and runTurn will handle bot_ai
170 |         } else if (currentMatchState.isBot && turnAction.actorId === currentMatchState.playerB.profile.id) {
171 |           // This case should ideally not happen in PvE as bot's turn is auto-generated
172 |           ws.send(JSON.stringify({ type: 'ERROR', message: 'Bot turn cannot be submitted manually' }));
173 |           return;
174 |         }
175 | 
176 |         // Run the turn resolution
177 |         const allAbilities = loadAllAbilities(); // Load abilities for each turn (can be optimized)
178 |         const { newMatchState, logs, isGameOver, winnerId } = runTurn(
179 |           currentMatchState,
180 |           playerATurn,
181 |           playerBTurn, // This will be null for PvE if player A submitted, and bot_ai will generate
182 |           allAbilities
183 |         );
184 | 
185 |         matchEntry.matchState = newMatchState;
186 | 
187 |         // Save turns to DB
188 |         if (playerATurn) {
189 |           await createTurn({
190 |             match_id: newMatchState.id,
191 |             turn_number: newMatchState.turnNumber -1, // Turn number before increment
192 |             acting_player_id: playerATurn.actorId,
193 |             ability_id: playerATurn.abilityId,
194 |             target_id: playerATurn.targetId,
195 |             result_json: { logs: logs.filter(log => log.playerId === playerATurn.actorId) }, // Store relevant logs
196 |           });
197 |         }
198 |         // If bot took a turn, log it as well
199 |         if (newMatchState.isBot && newMatchState.activePlayerId === newMatchState.playerA.profile.id) { // If it's now player A's turn, bot must have acted
200 |           // This is a simplification. A more robust solution would track bot's specific action.
201 |           // For now, we'll log a generic bot action if the turn advanced and it's PvE.
202 |           const botPlayerId = newMatchState.playerB.profile.id;
203 |           const botLogs = logs.filter(log => log.playerId === botPlayerId);
204 |           if (botLogs.length > 0) {
205 |              await createTurn({
206 |                 match_id: newMatchState.id,
207 |                 turn_number: newMatchState.turnNumber -1,
208 |                 acting_player_id: botPlayerId,
209 |                 ability_id: botLogs[0]?.abilityId || 'bot_ability_unknown', // Use first bot ability in logs or placeholder
210 |                 target_id: botLogs[0]?.playerId === botPlayerId ? newMatchState.playerA.profile.id : botPlayerId, // Target is opponent if bot is acting
211 |                 result_json: { logs: botLogs },
212 |              });
213 |           }
214 |         }
215 | 
216 | 
217 |         // Broadcast updated state and logs to all players in the match
218 |         for (const playerId in matchEntry.players) {
219 |           const playerWs = matchEntry.players[playerId];
220 |           if (playerWs.readyState === WebSocket.OPEN) {
221 |             playerWs.send(JSON.stringify({ type: 'MATCH_STATE_UPDATE', state: newMatchState, logs }));
222 |           }
223 |         }
224 | 
225 |         if (isGameOver) {
226 |           await updateMatchStatus(newMatchState.id, newMatchState.status, newMatchState.winnerId);
227 |           console.log(`Match ${newMatchState.id} ended. Winner: ${newMatchState.winnerId}`);
228 |           // Clean up match from activeMatches
229 |           activeMatches.delete(newMatchState.id);
230 |         }
231 | 
232 |       } else {
233 |         ws.send(JSON.stringify({ type: 'ERROR', message: 'Unknown message type or missing payload' }));
234 |       }
235 |     } catch (error) {
236 |       console.error('WebSocket message error:', error);
237 |       ws.send(JSON.stringify({ type: 'ERROR', message: 'Server error processing message', error: (error as Error).message }));
238 |     }
239 |   });
240 | 
241 |   ws.on('close', () => {
242 |     console.log('Client disconnected');
243 |     // TODO: Handle player disconnection from active matches
244 |   });
245 | 
246 |   ws.on('error', error => {
247 |     console.error('WebSocket error:', error);
248 |   });
249 | });
250 | 
251 | const PORT = process.env.PORT || 3000;
252 | server.listen(PORT, () => {
253 |   console.log(`Server is running on port ${PORT}`);
254 | });


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
/game_system_diagram.svg:
--------------------------------------------------------------------------------
  1 | <svg viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
  2 |   <defs>
  3 |     <linearGradient id="frontendGrad" x1="0%" y1="0%" x2="100%" y2="100%">
  4 |       <stop offset="0%" style="stop-color:#3B82F6;stop-opacity:0.8"/>
  5 |       <stop offset="100%" style="stop-color:#1E40AF;stop-opacity:0.9"/>
  6 |     </linearGradient>
  7 |     <linearGradient id="backendGrad" x1="0%" y1="0%" x2="100%" y2="100%">
  8 |       <stop offset="0%" style="stop-color:#10B981;stop-opacity:0.8"/>
  9 |       <stop offset="100%" style="stop-color:#047857;stop-opacity:0.9"/>
 10 |     </linearGradient>
 11 |     <linearGradient id="dbGrad" x1="0%" y1="0%" x2="100%" y2="100%">
 12 |       <stop offset="0%" style="stop-color:#F59E0B;stop-opacity:0.8"/>
 13 |       <stop offset="100%" style="stop-color:#D97706;stop-opacity:0.9"/>
 14 |     </linearGradient>
 15 |     <linearGradient id="engineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
 16 |       <stop offset="0%" style="stop-color:#EF4444;stop-opacity:0.8"/>
 17 |       <stop offset="100%" style="stop-color:#DC2626;stop-opacity:0.9"/>
 18 |     </linearGradient>
 19 |     <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
 20 |       <feDropShadow dx="2" dy="2" stdDeviation="3" flood-opacity="0.3"/>
 21 |     </filter>
 22 |   </defs>
 23 | 
 24 |   <!-- Background -->
 25 |   <rect width="1200" height="800" fill="#0F172A"/>
 26 |   
 27 |   <!-- Title -->
 28 |   <text x="600" y="30" text-anchor="middle" fill="#F1F5F9" font-size="24" font-weight="bold">Game MVP System Architecture</text>
 29 |   
 30 |   <!-- Frontend Layer -->
 31 |   <g id="frontend">
 32 |     <rect x="50" y="70" width="300" height="180" rx="10" fill="url(#frontendGrad)" filter="url(#shadow)"/>
 33 |     <text x="200" y="95" text-anchor="middle" fill="white" font-size="16" font-weight="bold">React Frontend</text>
 34 |     <text x="200" y="115" text-anchor="middle" fill="#E2E8F0" font-size="12">(TypeScript + Tailwind)</text>
 35 |     
 36 |     <!-- Frontend Components -->
 37 |     <rect x="70" y="130" width="80" height="30" rx="5" fill="#1E40AF" stroke="#3B82F6" stroke-width="1"/>
 38 |     <text x="110" y="148" text-anchor="middle" fill="white" font-size="10">Multi-Screen UI</text>
 39 |     
 40 |     <rect x="160" y="130" width="80" height="30" rx="5" fill="#1E40AF" stroke="#3B82F6" stroke-width="1"/>
 41 |     <text x="200" y="148" text-anchor="middle" fill="white" font-size="10">Terminal Style</text>
 42 |     
 43 |     <rect x="250" y="130" width="80" height="30" rx="5" fill="#1E40AF" stroke="#3B82F6" stroke-width="1"/>
 44 |     <text x="290" y="148" text-anchor="middle" fill="white" font-size="10">Combat Log</text>
 45 |     
 46 |     <rect x="70" y="170" width="80" height="30" rx="5" fill="#1E40AF" stroke="#3B82F6" stroke-width="1"/>
 47 |     <text x="110" y="188" text-anchor="middle" fill="white" font-size="10">Lobby Screen</text>
 48 |     
 49 |     <rect x="160" y="170" width="80" height="30" rx="5" fill="#1E40AF" stroke="#3B82F6" stroke-width="1"/>
 50 |     <text x="200" y="188" text-anchor="middle" fill="white" font-size="10">Battle Screen</text>
 51 |     
 52 |     <rect x="250" y="170" width="80" height="30" rx="5" fill="#1E40AF" stroke="#3B82F6" stroke-width="1"/>
 53 |     <text x="290" y="188" text-anchor="middle" fill="white" font-size="10">Results Screen</text>
 54 |   </g>
 55 | 
 56 |   <!-- Backend API Layer -->
 57 |   <g id="backend">
 58 |     <rect x="450" y="70" width="300" height="280" rx="10" fill="url(#backendGrad)" filter="url(#shadow)"/>
 59 |     <text x="600" y="95" text-anchor="middle" fill="white" font-size="16" font-weight="bold">Node.js API Backend</text>
 60 |     <text x="600" y="115" text-anchor="middle" fill="#D1FAE5" font-size="12">(TypeScript)</text>
 61 |     
 62 |     <!-- WebSocket Server -->
 63 |     <rect x="470" y="130" width="120" height="40" rx="5" fill="#047857" stroke="#10B981" stroke-width="2"/>
 64 |     <text x="530" y="148" text-anchor="middle" fill="white" font-size="11" font-weight="bold">WebSocket Server</text>
 65 |     <text x="530" y="162" text-anchor="middle" fill="#D1FAE5" font-size="9">Real-time Turns</text>
 66 |     
 67 |     <!-- Match Resolution Engine -->
 68 |     <rect x="610" y="130" width="120" height="60" rx="5" fill="url(#engineGrad)" stroke="#EF4444" stroke-width="2"/>
 69 |     <text x="670" y="148" text-anchor="middle" fill="white" font-size="11" font-weight="bold">Match Resolution</text>
 70 |     <text x="670" y="162" text-anchor="middle" fill="white" font-size="11" font-weight="bold">Engine</text>
 71 |     <text x="670" y="176" text-anchor="middle" fill="#FEE2E2" font-size="9">(Embedded)</text>
 72 |     
 73 |     <!-- API Endpoints -->
 74 |     <rect x="470" y="200" width="100" height="30" rx="5" fill="#047857" stroke="#10B981" stroke-width="1"/>
 75 |     <text x="520" y="218" text-anchor="middle" fill="white" font-size="10">Auth and Users</text>
 76 |     
 77 |     <rect x="580" y="200" width="100" height="30" rx="5" fill="#047857" stroke="#10B981" stroke-width="1"/>
 78 |     <text x="630" y="218" text-anchor="middle" fill="white" font-size="10">Match History</text>
 79 |     
 80 |     <!-- Matchmaking Service -->
 81 |     <rect x="470" y="240" width="120" height="40" rx="5" fill="#047857" stroke="#10B981" stroke-width="1"/>
 82 |     <text x="530" y="258" text-anchor="middle" fill="white" font-size="11">Matchmaking</text>
 83 |     <text x="530" y="272" text-anchor="middle" fill="#D1FAE5" font-size="9">Quick-Join and PvE</text>
 84 |     
 85 |     <!-- PvE Bot Module -->
 86 |     <rect x="610" y="240" width="120" height="40" rx="5" fill="#7C2D12" stroke="#EA580C" stroke-width="2"/>
 87 |     <text x="670" y="258" text-anchor="middle" fill="white" font-size="11" font-weight="bold">PvE Bot Module</text>
 88 |     <text x="670" y="272" text-anchor="middle" fill="#FED7AA" font-size="9">Static AI Logic</text>
 89 |     
 90 |     <!-- Status Effect Manager -->
 91 |     <rect x="470" y="290" width="120" height="30" rx="5" fill="#047857" stroke="#10B981" stroke-width="1"/>
 92 |     <text x="530" y="308" text-anchor="middle" fill="white" font-size="10">Status Effects</text>
 93 |     
 94 |     <!-- XP & Rewards -->
 95 |     <rect x="610" y="290" width="120" height="30" rx="5" fill="#047857" stroke="#10B981" stroke-width="1"/>
 96 |     <text x="670" y="308" text-anchor="middle" fill="white" font-size="10">XP and Rewards</text>
 97 |   </g>
 98 | 
 99 |   <!-- Ability Registry -->
100 |   <g id="abilities">
101 |     <rect x="850" y="70" width="250" height="120" rx="10" fill="#581C87" stroke="#7C3AED" stroke-width="2" filter="url(#shadow)"/>
102 |     <text x="975" y="95" text-anchor="middle" fill="white" font-size="14" font-weight="bold">JSON Ability Registry</text>
103 |     <text x="975" y="115" text-anchor="middle" fill="#DDD6FE" font-size="11">(File-based for MVP)</text>
104 |     
105 |     <rect x="870" y="130" width="70" height="25" rx="3" fill="#6B21A8" stroke="#7C3AED" stroke-width="1"/>
106 |     <text x="905" y="145" text-anchor="middle" fill="white" font-size="9">Warrior.json</text>
107 |     
108 |     <rect x="950" y="130" width="70" height="25" rx="3" fill="#6B21A8" stroke="#7C3AED" stroke-width="1"/>
109 |     <text x="985" y="145" text-anchor="middle" fill="white" font-size="9">Mage.json</text>
110 |     
111 |     <rect x="1030" y="130" width="70" height="25" rx="3" fill="#6B21A8" stroke="#7C3AED" stroke-width="1"/>
112 |     <text x="1065" y="145" text-anchor="middle" fill="white" font-size="9">Rogue.json</text>
113 |     
114 |     <rect x="910" y="160" width="70" height="25" rx="3" fill="#6B21A8" stroke="#7C3AED" stroke-width="1"/>
115 |     <text x="945" y="175" text-anchor="middle" fill="white" font-size="9">Healer.json</text>
116 |     
117 |     <rect x="990" y="160" width="70" height="25" rx="3" fill="#6B21A8" stroke="#7C3AED" stroke-width="1"/>
118 |     <text x="1025" y="175" text-anchor="middle" fill="white" font-size="9">Tank.json</text>
119 |   </g>
120 | 
121 |   <!-- Database Layer -->
122 |   <g id="database">
123 |     <rect x="200" y="450" width="800" height="200" rx="10" fill="url(#dbGrad)" filter="url(#shadow)"/>
124 |     <text x="600" y="475" text-anchor="middle" fill="white" font-size="16" font-weight="bold">PostgreSQL / Supabase Database</text>
125 |     
126 |     <!-- Database Tables -->
127 |     <rect x="230" y="500" width="120" height="80" rx="5" fill="#D97706" stroke="#F59E0B" stroke-width="1"/>
128 |     <text x="290" y="520" text-anchor="middle" fill="white" font-size="12" font-weight="bold">Users Table</text>
129 |     <text x="290" y="540" text-anchor="middle" fill="#FEF3C7" font-size="10">id, username</text>
130 |     <text x="290" y="555" text-anchor="middle" fill="#FEF3C7" font-size="10">level, xp</text>
131 |     <text x="290" y="570" text-anchor="middle" fill="#FEF3C7" font-size="10">class_id</text>
132 |     
133 |     <rect x="370" y="500" width="120" height="80" rx="5" fill="#D97706" stroke="#F59E0B" stroke-width="1"/>
134 |     <text x="430" y="520" text-anchor="middle" fill="white" font-size="12" font-weight="bold">Matches Table</text>
135 |     <text x="430" y="540" text-anchor="middle" fill="#FEF3C7" font-size="10">match_id</text>
136 |     <text x="430" y="555" text-anchor="middle" fill="#FEF3C7" font-size="10">players, result</text>
137 |     <text x="430" y="570" text-anchor="middle" fill="#FEF3C7" font-size="10">timestamp</text>
138 |     
139 |     <rect x="510" y="500" width="120" height="80" rx="5" fill="#D97706" stroke="#F59E0B" stroke-width="1"/>
140 |     <text x="570" y="520" text-anchor="middle" fill="white" font-size="12" font-weight="bold">Turns Table</text>
141 |     <text x="570" y="540" text-anchor="middle" fill="#FEF3C7" font-size="10">turn_id</text>
142 |     <text x="570" y="555" text-anchor="middle" fill="#FEF3C7" font-size="10">match_id</text>
143 |     <text x="570" y="570" text-anchor="middle" fill="#FEF3C7" font-size="10">action_data</text>
144 |     
145 |     <rect x="650" y="500" width="120" height="80" rx="5" fill="#D97706" stroke="#F59E0B" stroke-width="1"/>
146 |     <text x="710" y="520" text-anchor="middle" fill="white" font-size="12" font-weight="bold">Classes Table</text>
147 |     <text x="710" y="540" text-anchor="middle" fill="#FEF3C7" font-size="10">class_id, name</text>
148 |     <text x="710" y="555" text-anchor="middle" fill="#FEF3C7" font-size="10">abilities</text>
149 |     <text x="710" y="570" text-anchor="middle" fill="#FEF3C7" font-size="10">progression</text>
150 | 
151 |     <rect x="790" y="500" width="120" height="80" rx="5" fill="#D97706" stroke="#F59E0B" stroke-width="1"/>
152 |     <text x="850" y="520" text-anchor="middle" fill="white" font-size="12" font-weight="bold">User Progress</text>
153 |     <text x="850" y="540" text-anchor="middle" fill="#FEF3C7" font-size="10">• user_id</text>
154 |     <text x="850" y="555" text-anchor="middle" fill="#FEF3C7" font-size="10">• unlocked abilities</text>
155 |     <text x="850" y="570" text-anchor="middle" fill="#FEF3C7" font-size="10">• cosmetics</text>
156 |   </g>
157 | 
158 |   <!-- Optional Redis Cache -->
159 |   <g id="redis">
160 |     <rect x="850" y="230" width="200" height="80" rx="10" fill="#7F1D1D" stroke="#DC2626" stroke-width="2" stroke-dasharray="5,5" filter="url(#shadow)"/>
161 |     <text x="950" y="255" text-anchor="middle" fill="white" font-size="14" font-weight="bold">Redis Cache</text>
162 |     <text x="950" y="275" text-anchor="middle" fill="#FECACA" font-size="11">(Optional)</text>
163 |     <text x="950" y="290" text-anchor="middle" fill="#FEE2E2" font-size="10">Matchmaking Queue</text>
164 |   </g>
165 | 
166 |   <!-- Future Features Box -->
167 |   <g id="future">
168 |     <rect x="50" y="700" width="1100" height="80" rx="10" fill="#1F2937" stroke="#6B7280" stroke-width="2" stroke-dasharray="10,5" filter="url(#shadow)"/>
169 |     <text x="600" y="725" text-anchor="middle" fill="#9CA3AF" font-size="16" font-weight="bold">Future Features (Post-MVP)</text>
170 |     
171 |     <rect x="80" y="740" width="150" height="30" rx="5" fill="#374151" stroke="#6B7280" stroke-width="1"/>
172 |     <text x="155" y="758" text-anchor="middle" fill="#D1D5DB" font-size="10">Blockchain Integration</text>
173 |     
174 |     <rect x="250" y="740" width="120" height="30" rx="5" fill="#374151" stroke="#6B7280" stroke-width="1"/>
175 |     <text x="310" y="758" text-anchor="middle" fill="#D1D5DB" font-size="10">NFT Cosmetics</text>
176 |     
177 |     <rect x="390" y="740" width="140" height="30" rx="5" fill="#374151" stroke="#6B7280" stroke-width="1"/>
178 |     <text x="460" y="758" text-anchor="middle" fill="#D1D5DB" font-size="10">Cosmetics Marketplace</text>
179 |     
180 |     <rect x="550" y="740" width="120" height="30" rx="5" fill="#374151" stroke="#6B7280" stroke-width="1"/>
181 |     <text x="610" y="758" text-anchor="middle" fill="#D1D5DB" font-size="10">Wager Contracts</text>
182 |     
183 |     <rect x="690" y="740" width="100" height="30" rx="5" fill="#374151" stroke="#6B7280" stroke-width="1"/>
184 |     <text x="740" y="758" text-anchor="middle" fill="#D1D5DB" font-size="10">Match Replays</text>
185 |     
186 |     <rect x="810" y="740" width="120" height="30" rx="5" fill="#374151" stroke="#6B7280" stroke-width="1"/>
187 |     <text x="870" y="758" text-anchor="middle" fill="#D1D5DB" font-size="10">Scalable Bot AI</text>
188 |     
189 |     <rect x="950" y="740" width="120" height="30" rx="5" fill="#374151" stroke="#6B7280" stroke-width="1"/>
190 |     <text x="1010" y="758" text-anchor="middle" fill="#D1D5DB" font-size="10">Async Matches</text>
191 |   </g>
192 | 
193 |   <!-- Connection Lines -->
194 |   
195 |   <!-- Frontend to Backend WebSocket -->
196 |   <path d="M 350 160 Q 400 160 450 160" stroke="#3B82F6" stroke-width="3" fill="none" marker-end="url(#arrowhead)"/>
197 |   <text x="375" y="150" text-anchor="middle" fill="#60A5FA" font-size="10" font-weight="bold">WebSocket</text>
198 |   
199 |   <!-- Backend to Database -->
200 |   <path d="M 600 350 Q 600 400 600 450" stroke="#10B981" stroke-width="3" fill="none" marker-end="url(#arrowhead)"/>
201 |   <text x="620" y="400" fill="#34D399" font-size="10" font-weight="bold">SQL Queries</text>
202 |   
203 |   <!-- Backend to Abilities -->
204 |   <path d="M 750 160 Q 800 160 850 160" stroke="#10B981" stroke-width="3" fill="none" marker-end="url(#arrowhead)"/>
205 |   <text x="800" y="150" text-anchor="middle" fill="#34D399" font-size="10" font-weight="bold">Load JSON</text>
206 |   
207 |   <!-- Backend to Redis (optional) -->
208 |   <path d="M 750 250 Q 800 250 850 270" stroke="#10B981" stroke-width="2" stroke-dasharray="5,5" fill="none" marker-end="url(#arrowhead)"/>
209 |   <text x="800" y="240" text-anchor="middle" fill="#F87171" font-size="9">Optional</text>
210 | 
211 |   <!-- Arrow marker definition -->
212 |   <defs>
213 |     <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
214 |       <polygon points="0 0, 10 3.5, 0 7" fill="#60A5FA"/>
215 |     </marker>
216 |   </defs>
217 | 
218 |   <!-- Data Flow Labels -->
219 |   <g id="dataflow">
220 |     <text x="100" y="380" fill="#94A3B8" font-size="12" font-weight="bold">Data Flow:</text>
221 |     <text x="100" y="400" fill="#CBD5E1" font-size="10">1. User action → WebSocket → Match Engine</text>
222 |     <text x="100" y="415" fill="#CBD5E1" font-size="10">2. Engine processes → Updates DB → Broadcasts result</text>
223 |     <text x="100" y="430" fill="#CBD5E1" font-size="10">3. Real-time UI updates via WebSocket</text>
224 |   </g>
225 | 
226 | </svg>


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
https://raw.githubusercontent.com/fakesavian/OZF-GAME/20524882a4be977769ab85ca07b8c9e785377682/public/assets/images/character-default.png


--------------------------------------------------------------------------------
/public/assets/images/enemy-default.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/fakesavian/OZF-GAME/20524882a4be977769ab85ca07b8c9e785377682/public/assets/images/enemy-default.png


--------------------------------------------------------------------------------
/public/favicon.ico:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/fakesavian/OZF-GAME/20524882a4be977769ab85ca07b8c9e785377682/public/favicon.ico


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
https://raw.githubusercontent.com/fakesavian/OZF-GAME/20524882a4be977769ab85ca07b8c9e785377682/public/logo192.png


--------------------------------------------------------------------------------
/public/logo512.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/fakesavian/OZF-GAME/20524882a4be977769ab85ca07b8c9e785377682/public/logo512.png


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
/src/App.css:
--------------------------------------------------------------------------------
  1 | .App {
  2 |   text-align: center;
  3 | }
  4 | 
  5 | .App-logo {
  6 |   height: 40vmin;
  7 |   pointer-events: none;
  8 | }
  9 | 
 10 | @media (prefers-reduced-motion: no-preference) {
 11 |   .App-logo {
 12 |     animation: App-logo-spin infinite 20s linear;
 13 |   }
 14 | }
 15 | 
 16 | .App-header {
 17 |   background-color: #282c34;
 18 |   min-height: 100vh;
 19 |   display: flex;
 20 |   flex-direction: column;
 21 |   align-items: center;
 22 |   justify-content: center;
 23 |   font-size: calc(10px + 2vmin);
 24 |   color: white;
 25 | }
 26 | 
 27 | .App-link {
 28 |   color: #61dafb;
 29 | }
 30 | 
 31 | @keyframes App-logo-spin {
 32 |   from {
 33 |     transform: rotate(0deg);
 34 |   }
 35 |   to {
 36 |     transform: rotate(360deg);
 37 |   }
 38 | }
 39 | 
 40 | .animate-glitch {
 41 |   animation: glitch-skew 1s infinite linear alternate-reverse;
 42 | }
 43 | 
 44 | @keyframes glitch-skew {
 45 |   0% {
 46 |     transform: skew(3deg, 1deg);
 47 |   }
 48 |   50% {
 49 |     transform: skew(-2deg, -5deg);
 50 |   }
 51 |   100% {
 52 |     transform: skew(-1deg, 2deg);
 53 |   }
 54 | }
 55 | 
 56 | .App {
 57 |   font-family: monospace;
 58 |   text-align: center;
 59 | }
 60 | 
 61 | .glitch-bg {
 62 |   background: repeating-linear-gradient(
 63 |     black,
 64 |     #111 1px,
 65 |     black 2px
 66 |   );
 67 |   animation: glitch 1.5s infinite;
 68 | }
 69 | 
 70 | @keyframes glitch {
 71 |   0%, 100% { filter: none; }
 72 |   50% { filter: hue-rotate(5deg) contrast(1.2); }
 73 | }
 74 | 
 75 | .hover\:glitch-button:hover {
 76 |   box-shadow: 0 0 10px white;
 77 |   transform: scale(1.05);
 78 | }
 79 | 
 80 | /* Loading overlay styles */
 81 | .loading-overlay {
 82 |   position: absolute;
 83 |   top: 0; left: 0;
 84 |   width: 100%;
 85 |   height: 100%;
 86 |   background: rgba(0, 0, 0, 0.85);
 87 |   display: flex;
 88 |   flex-direction: column;
 89 |   justify-content: center;
 90 |   align-items: center;
 91 |   z-index: 100;
 92 | }
 93 | 
 94 | .loading-bar {
 95 |   width: 60%;
 96 |   height: 12px;
 97 |   background: #111;
 98 |   border: 1px solid green;
 99 |   overflow: hidden;
100 |   margin-bottom: 10px;
101 | }
102 | 
103 | .bar-fill {
104 |   height: 100%;
105 |   width: 100%;
106 |   background: green;
107 |   animation: loadingBar 1s ease-in-out;
108 | }
109 | 
110 | @keyframes loadingBar {
111 |   0% { transform: translateX(-100%); }
112 |   100% { transform: translateX(0); }
113 | }
114 | 
115 | .loading-text {
116 |   color: green;
117 |   font-family: monospace;
118 |   font-size: 1rem;
119 |   text-shadow: 0 0 2px green;
120 | }
121 | 
122 | /* App.css updates (append this if missing) */
123 | .screen { background: black; color: green; padding: 20px; font-family: monospace; position: relative; }
124 | .title { text-align: center; font-size: 1.5rem; border: 1px solid green; padding: 10px; margin-bottom: 1rem; }
125 | .enemy-section, .player-section { display: flex; flex-direction: column; align-items: center; margin-bottom: 1rem; }
126 | .enemy-hp, .player-hp { width: 100%; max-width: 600px; margin: 0.5rem 0; }
127 | .hp-bar { height: 10px; background: green; border: 1px solid green; transition: width 0.3s ease; }
128 | .hp-bar.enemy { background: red; }
129 | .enemy-box, .player-box { width: 150px; height: 150px; border: 1px solid green; display: flex; align-items: center; justify-content: center; font-weight: bold; margin: 10px 0; }
130 | .action-row { display: flex; justify-content: center; gap: 1rem; margin-top: 1rem; }
131 | .attack-button { border: 1px solid green; padding: 10px; background: transparent; color: green; font-weight: bold; cursor: pointer; }
132 | .log { background: #0c0c0c; color: lightgreen; padding: 10px; margin-top: 1rem; border: 1px solid green; height: 150px; overflow-y: scroll; }
133 | .quit-button { background: transparent; color: red; border: none; font-size: 1.5rem; cursor: pointer; position: absolute; right: 10px; top: 10px; }
134 | 
135 | /* Terminal Flicker Effect */
136 | @keyframes typing {
137 |   from { width: 0 }
138 |   to { width: 100% }
139 | }
140 | 
141 | @keyframes flicker {
142 |   0%, 100% { opacity: 1 }
143 |   50% { opacity: 0.4 }
144 | }
145 | 
146 | .typing-text {
147 |   overflow: hidden;
148 |   white-space: nowrap;
149 |   border-right: 2px solid #22c55e;
150 |   width: 0;
151 |   animation: typing 2s steps(40, end) forwards, flicker 1s infinite;
152 | }
153 | 
154 | @keyframes crtFlicker {
155 |   0%, 100% {
156 |     opacity: 0.92;
157 |     text-shadow: 0 0 1px #00ff99, 0 0 2px #00ff99, 0 0 4px #00ff99;
158 |   }
159 |   50% {
160 |     opacity: 1;
161 |     text-shadow: 0 0 2px #00ff99, 0 0 4px #00ff99, 0 0 8px #00ff99;
162 |   }
163 | }
164 | 
165 | @keyframes scanlineSweep {
166 |   0% {
167 |     transform: translateY(-100%);
168 |     opacity: 0.1;
169 |   }
170 |   100% {
171 |     transform: translateY(100%);
172 |     opacity: 0;
173 |   }
174 | }
175 | 
176 | .crt-title {
177 |   animation: crtFlicker 1.2s infinite alternate;
178 |   position: relative;
179 |   z-index: 1;
180 | }
181 | 
182 | .crt-scanline::after {
183 |   content: '';
184 |   position: absolute;
185 |   top: 0;
186 |   left: 0;
187 |   height: 100%;
188 |   width: 100%;
189 |   background: linear-gradient(to bottom, transparent 0%, rgba(0,255,128,0.2) 2%, transparent 4%);
190 |   animation: scanlineSweep 2s ease-out 1;
191 |   pointer-events: none;
192 |   z-index: 2;
193 | }
194 | 
195 | /* HP Bar Fill Styles */
196 | .hp-bar-fill { height: 100%; }
197 | .hp-bar-fill.enemy { background: red; }
198 | .hp-bar-fill.player { background: green; }
199 | 
200 | .glitch {
201 |   animation: glitch-flicker 0.5s infinite alternate;
202 | }
203 | 
204 | @keyframes glitch-flicker {
205 |   0% {
206 |     text-shadow: 0 0 5px rgba(0, 255, 0, 0.7), 0 0 10px rgba(0, 255, 0, 0.5);
207 |     transform: skewX(0deg);
208 |   }
209 |   20% {
210 |     text-shadow: 0 0 5px rgba(0, 255, 0, 0.7), 0 0 10px rgba(0, 255, 0, 0.5);
211 |     transform: skewX(-5deg);
212 |   }
213 |   40% {
214 |     text-shadow: 0 0 5px rgba(0, 255, 0, 0.7), 0 0 10px rgba(0, 255, 0, 0.5);
215 |     transform: skewX(5deg);
216 |   }
217 |   60% {
218 |     text-shadow: 0 0 5px rgba(0, 255, 0, 0.7), 0 0 10px rgba(0, 255, 0, 0.5);
219 |     transform: skewX(-2deg);
220 |   }
221 |   80% {
222 |     text-shadow: 0 0 5px rgba(0, 255, 0, 0.7), 0 0 10px rgba(0, 255, 0, 0.5);
223 |     transform: skewX(2deg);
224 |   }
225 |   100% {
226 |     text-shadow: 0 0 5px rgba(0, 255, 0, 0.7), 0 0 10px rgba(0, 255, 0, 0.5);
227 |     transform: skewX(0deg);
228 |   }
229 | }
230 | 
231 | .blinking-cursor {
232 |   animation: blink 1s step-end infinite;
233 | }
234 | 
235 | @keyframes blink {
236 |   0%, 100% { opacity: 1; }
237 |   50% { opacity: 0; }
238 | }
239 | 
240 | @keyframes fade-in {
241 |   from { opacity: 0; transform: translateY(0.25rem); }
242 |   to { opacity: 1; transform: translateY(0); }
243 | }
244 | 
245 | .animate-fade-in {
246 |   animation: fade-in 0.3s ease-out forwards;
247 | }
248 | 
249 | .glitch {
250 |   animation: glitch-flicker 0.5s infinite alternate;
251 | }
252 | 
253 | @keyframes glitch-flicker {
254 |   0% {
255 |     text-shadow: 0 0 5px rgba(0, 255, 0, 0.7), 0 0 10px rgba(0, 255, 0, 0.5);
256 |     transform: skewX(0deg);
257 |   }
258 |   20% {
259 |     text-shadow: 0 0 5px rgba(0, 255, 0, 0.7), 0 0 10px rgba(0, 255, 0, 0.5);
260 |     transform: skewX(-5deg);
261 |   }
262 |   40% {
263 |     text-shadow: 0 0 5px rgba(0, 255, 0, 0.7), 0 0 10px rgba(0, 255, 0, 0.5);
264 |     transform: skewX(5deg);
265 |   }
266 |   60% {
267 |     text-shadow: 0 0 5px rgba(0, 255, 0, 0.7), 0 0 10px rgba(0, 255, 0, 0.5);
268 |     transform: skewX(-2deg);
269 |   }
270 |   80% {
271 |     text-shadow: 0 0 5px rgba(0, 255, 0, 0.7), 0 0 10px rgba(0, 255, 0, 0.5);
272 |     transform: skewX(2deg);
273 |   }
274 |   100% {
275 |     text-shadow: 0 0 5px rgba(0, 255, 0, 0.7), 0 0 10px rgba(0, 255, 0, 0.5);
276 |     transform: skewX(0deg);
277 |   }
278 | }
279 | 
280 | .blinking-cursor {
281 |   animation: blink 1s step-end infinite;
282 | }
283 | 
284 | @keyframes blink {
285 |   0%, 100% { opacity: 1; }
286 |   50% { opacity: 0; }
287 | }
288 | 
289 | @keyframes fade-in {
290 |   from { opacity: 0; transform: translateY(0.5rem); }
291 |   to { opacity: 1; transform: translateY(0); }
292 | }
293 | 
294 | .animate-fade-in {
295 |   animation: fade-in 0.3s ease-out forwards;
296 | }
297 | 
298 | @keyframes crt-glow {
299 |   0% { opacity: 0.8; transform: scale(1.01); }
300 |   50% { opacity: 1; transform: scale(1); }
301 |   100% { opacity: 0.8; transform: scale(1.01); }
302 | }
303 | 
304 | .animate-crt-glow {
305 |   animation: crt-glow 0.7s infinite;
306 | }
307 | 
308 | @keyframes type {
309 |   from { width: 0; }
310 |   to { width: 100%; }
311 | }
312 | 
313 | .animate-type {
314 |   display: inline-block;
315 |   white-space: nowrap;
316 |   overflow: hidden;
317 |   animation: type 1.5s steps(30, end) forwards;
318 | }
319 | 
320 | @keyframes glitch-fast {
321 |   0% { text-shadow: 1px 0 red, -1px 0 blue; }
322 |   50% { text-shadow: -1px 0 red, 1px 0 blue; }
323 |   100% { text-shadow: 1px 0 red, -1px 0 blue; }
324 | }
325 | 
326 | .animate-glitch-fast {
327 |   animation: glitch-fast 0.3s infinite;
328 | }
329 | 
330 | @keyframes shake {
331 |   0%, 100% { transform: translateX(0); }
332 |   20%, 60% { transform: translateX(-5px); }
333 |   40%, 80% { transform: translateX(5px); }
334 | }
335 | 
336 | .shake {
337 |   animation: shake 0.5s ease;
338 | }
339 | 
340 | .flash-red {
341 |   filter: brightness(1.3) sepia(1) hue-rotate(-50deg);
342 | }
343 | 
344 | @keyframes pop-damage {
345 |   0% {
346 |     transform: scale(0.7);
347 |   }
348 |   50% {
349 |     transform: scale(1.4);
350 |   }
351 |   100% {
352 |     transform: scale(1);
353 |   }
354 | }
355 | 
356 | @keyframes float-damage {
357 |   0% {
358 |     opacity: 1;
359 |     transform: translateY(0);
360 |   }
361 |   100% {
362 |     opacity: 0;
363 |     transform: translateY(-60px) scale(1);
364 |   }
365 | }
366 | .animate-float-damage {
367 |   animation:
368 |     pop-damage 0.25s ease-out,
369 |     float-damage 1.35s ease-out forwards 0.25s;
370 | }
371 | 
372 | @keyframes idleTwitch {
373 |   0%, 100% { transform: translate(0, 0); }
374 |   20% { transform: translate(-1px, 1px); }
375 |   40% { transform: translate(1px, -1px); }
376 |   60% { transform: translate(-2px, 0); }
377 |   80% { transform: translate(0, 2px); }
378 | }
379 | 
380 | .animate-idle-twitch {
381 |   animation: idleTwitch 1s infinite steps(1, end);
382 | }
383 | 
384 | .glitch-text {
385 |   text-shadow:
386 |     1px 0 lime,
387 |     -1px 0 #0f0,
388 |     0 1px #0f0,
389 |     0 -1px lime;
390 |   animation: flicker 1.2s infinite;
391 | }
392 | 
393 | @keyframes flicker {
394 |   0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
395 |     opacity: 0.9;
396 |   }
397 |   20%, 22%, 24%, 55% {
398 |     opacity: 0.3;
399 |   }
400 | }
401 | 
402 | @keyframes camera-shake {
403 |   0% { transform: translate(0); }
404 |   25% { transform: translate(-3px, 3px); }
405 |   50% { transform: translate(3px, -3px); }
406 |   75% { transform: translate(-2px, 2px); }
407 |   100% { transform: translate(0); }
408 | }
409 | 
410 | .camera-shake {
411 |   animation: camera-shake 0.4s;
412 | }
413 | 
414 | .glitch-lines {
415 |   background: repeating-linear-gradient(
416 |       180deg,
417 |       rgba(255, 255, 255, 0.15) 0,
418 |       rgba(255, 255, 255, 0.15) 1px,
419 |       transparent 1px,
420 |       transparent 4px
421 |     );
422 |   mix-blend-mode: overlay;
423 |   pointer-events: none;
424 | }
425 | 
426 | /* Attack effect styles */
427 | .attack-effect { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); pointer-events: none; }
428 | .attack-effect.burst { width: 60px; height: 60px; border-radius: 50%; background: radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(255,0,0,0.6) 40%, rgba(255,0,0,0) 70%); animation: effect-burst 0.4s ease-out forwards; }
429 | .attack-effect.slash { width: 80px; height: 20px; background: linear-gradient(45deg, rgba(255,255,255,0.9), rgba(255,0,0,0.5)); animation: effect-slash 0.4s ease-out forwards; }
430 | @keyframes effect-burst { from { transform: translate(-50%, -50%) scale(0.2); opacity: 1; } to { transform: translate(-50%, -50%) scale(1.5); opacity: 0; } }
431 | @keyframes effect-slash { from { transform: translate(-50%, -50%) rotate(0deg) scaleX(0); opacity: 1; } to { transform: translate(-50%, -50%) rotate(-45deg) scaleX(1); opacity: 0; } }
432 | 
433 | 


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
37 |       <Route path="/settings" element={<SettingsScreen />} />
38 |       <Route path="/character" element={<CharacterScreen />} />
39 |       <Route path="*" element={<Navigate to={initialRoute} />} />
40 |     </Routes>
41 |   );
42 | }
43 | 
44 | // BootWrapper handles boot transition
45 | const BootWrapper = () => {
46 |   const navigate = useNavigate();
47 |   const seenBoot = sessionStorage.getItem('seenBoot');
48 |   if (seenBoot) {
49 |     return <Navigate to="/menu" />;
50 |   }
51 |   return <BootSequence onContinue={() => navigate("/login")} />;
52 | };
53 | 
54 | export default App;
55 | 


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
/src/context/PlayerContext.tsx:
--------------------------------------------------------------------------------
  1 | import React, { createContext, useContext, useState } from 'react';
  2 | 
  3 | export interface Stats {
  4 |   hp: number;
  5 |   str: number;
  6 |   dex: number;
  7 |   int: number;
  8 |   def: number;
  9 | }
 10 | 
 11 | export type StatusEffectType = 'burn' | 'stun' | 'shield' | 'buff' | 'debuff' | 'poison';
 12 | 
 13 | export interface StatusEffect {
 14 |   type: StatusEffectType;
 15 |   duration: number;
 16 |   value?: number;
 17 |   stat?: string;
 18 | }
 19 | 
 20 | export interface Item {
 21 |   name: string;
 22 |   type: 'Weapon' | 'Armor' | 'Trinket' | 'Consumable';
 23 |   description: string;
 24 |   bonuses?: Partial<Stats>;
 25 |   heal?: number;
 26 |   statusEffect?: StatusEffect;
 27 | }
 28 | 
 29 | export const items: Item[] = [
 30 |   {
 31 |     name: 'Iron Cleaver',
 32 |     type: 'Weapon',
 33 |     description: 'A jagged blade forged from scrap metal. Deals moderate damage.',
 34 |     bonuses: { str: 3 },
 35 |   },
 36 |   {
 37 |     name: 'Med Patch',
 38 |     type: 'Consumable',
 39 |     description: 'Restores 25 HP when applied.',
 40 |     heal: 25,
 41 |   },
 42 |   {
 43 |     name: 'Old Locket',
 44 |     type: 'Trinket',
 45 |     description: 'A mysterious charm. Boosts INT slightly.',
 46 |     bonuses: { int: 1 },
 47 |   },
 48 |   {
 49 |     name: 'Nano Mesh Vest',
 50 |     type: 'Armor',
 51 |     description: 'Basic protection against physical damage.',
 52 |     bonuses: { def: 2 },
 53 |   },
 54 |   {
 55 |     name: 'Toxic Grenade',
 56 |     type: 'Consumable',
 57 |     description: 'Applies poison to the enemy for 3 turns.',
 58 |     statusEffect: { type: 'poison', duration: 3, value: 4 },
 59 |   },
 60 | ];
 61 | 
 62 | interface PlayerContextValue {
 63 |   stats: Stats;
 64 |   equipped: { [K in 'Weapon' | 'Armor' | 'Trinket']?: Item };
 65 |   equip: (item: Item) => void;
 66 |   consumeItem: (item: Item) => void;
 67 |   statusEffects: StatusEffect[];
 68 | }
 69 | 
 70 | const PlayerContext = createContext<PlayerContextValue | undefined>(undefined);
 71 | 
 72 | export const PlayerProvider = ({ children }: { children: React.ReactNode }) => {
 73 |   const baseStats: Stats = { hp: 100, str: 15, dex: 12, int: 10, def: 8 };
 74 | 
 75 |   const [hp, setHP] = useState(baseStats.hp);
 76 |   const [equipped, setEquipped] = useState<{ [K in 'Weapon' | 'Armor' | 'Trinket']?: Item }>({});
 77 |   const [statusEffects, setStatusEffects] = useState<StatusEffect[]>([]);
 78 | 
 79 |   const equip = (item: Item) => {
 80 |     if (item.type === 'Consumable') return;
 81 |     setEquipped(prev => ({ ...prev, [item.type]: item }));
 82 |   };
 83 | 
 84 |   const consumeItem = (item: Item) => {
 85 |     if (item.heal) {
 86 |       setHP(prev => Math.min(baseStats.hp, prev + item.heal));
 87 |     }
 88 |     if (item.statusEffect) {
 89 |       setStatusEffects(prev => [...prev, item.statusEffect!]);
 90 |     }
 91 |   };
 92 | 
 93 |   const stats: Stats = {
 94 |     hp,
 95 |     str: baseStats.str + (equipped.Weapon?.bonuses?.str ?? 0),
 96 |     dex: baseStats.dex + (equipped.Weapon?.bonuses?.dex ?? 0) + (equipped.Armor?.bonuses?.dex ?? 0) + (equipped.Trinket?.bonuses?.dex ?? 0),
 97 |     int: baseStats.int + (equipped.Trinket?.bonuses?.int ?? 0),
 98 |     def: baseStats.def + (equipped.Armor?.bonuses?.def ?? 0),
 99 |   };
100 | 
101 |   return (
102 |     <PlayerContext.Provider value={{ stats, equipped, equip, consumeItem, statusEffects }}>
103 |       {children}
104 |     </PlayerContext.Provider>
105 |   );
106 | };
107 | 
108 | export const usePlayer = () => {
109 |   const ctx = useContext(PlayerContext);
110 |   if (!ctx) throw new Error('usePlayer must be used within PlayerProvider');
111 |   return ctx;
112 | };
113 | 


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
/src/screens/BattleScreen.tsx:
--------------------------------------------------------------------------------
  1 | import React, { useState, useEffect } from 'react';
  2 | import { motion } from 'framer-motion';
  3 | import AbilityAnnouncement from '../components/AbilityAnnouncement';
  4 | import AttackEffect from '../components/AttackEffect';
  5 | import { useNavigate } from 'react-router-dom'; // New import
  6 | import { EndBattleScreen } from './EndBattleScreen'; // New import
  7 | 
  8 | type StatusEffectType =
  9 |   | 'burn'
 10 |   | 'stun'
 11 |   | 'shield'
 12 |   | 'buff'
 13 |   | 'debuff'
 14 |   | 'poison';
 15 | 
 16 | interface StatusEffect {
 17 |   type: StatusEffectType;
 18 |   duration: number; // in turns
 19 |   value?: number; // For damage, heal, shield, buff values
 20 |   stat?: string; // For buffs (e.g., 'defense', 'attack')
 21 |   justApplied?: boolean; // Flag to skip duration tick on the turn it's applied
 22 | }
 23 | 
 24 | type Ability = {
 25 |   name: string;
 26 |   id: "cleave" | "shield_wall" | "fireball" | "bite" | "scratch" | "acid_spit" | "stun_blast" | "battle_cry" | "weakening_curse"; // Updated to include new abilities
 27 |   damage: number;
 28 |   type: "physical" | "magic" | "defensive";
 29 |   description: string;
 30 |   effects?: StatusEffect[]; // Changed to StatusEffect[]
 31 |   cooldown?: number;
 32 |   weight?: number;
 33 |   hpThreshold?: number;
 34 | };
 35 | 
 36 | const abilities: Ability[] = [
 37 |   {
 38 |     id: "cleave",
 39 |     name: "Cleave",
 40 |     type: "physical",
 41 |     damage: 12,
 42 |     description: "A brutal slash that deals 12 damage.",
 43 |   },
 44 |   {
 45 |     id: "shield_wall",
 46 |     name: "Shield Wall",
 47 |     type: "defensive",
 48 |     damage: 0,
 49 |     description: "Raise a barrier to absorb the next attack.",
 50 |     effects: [{ type: 'shield', duration: 1, value: 20 }], // Example shield value
 51 |   },
 52 |   {
 53 |     id: "fireball",
 54 |     name: "Fireball",
 55 |     type: "magic",
 56 |     damage: 16,
 57 |     description: "A blazing projectile that deals 16 damage.",
 58 |     effects: [{ type: 'burn', duration: 3, value: 5 }], // Example burn damage
 59 |   },
 60 |   {
 61 |     id: "stun_blast",
 62 |     name: "Stun Blast",
 63 |     type: "magic",
 64 |     damage: 5,
 65 |     description: "A concussive blast that deals minor damage and stuns the enemy.",
 66 |     effects: [{ type: 'stun', duration: 1 }],
 67 |   },
 68 |   {
 69 |     id: "battle_cry",
 70 |     name: "Battle Cry",
 71 |     type: "defensive",
 72 |     damage: 0,
 73 |     description: "Inspire yourself, gaining a temporary buff.",
 74 |     effects: [{ type: 'buff', duration: 2, stat: 'attack', value: 5 }],
 75 |   },
 76 |   {
 77 |     id: "weakening_curse",
 78 |     name: "Weakening Curse",
 79 |     type: "magic",
 80 |     damage: 0,
 81 |     description: "Curse the enemy, reducing their defense.",
 82 |     effects: [{ type: 'debuff', duration: 2, stat: 'defense', value: -5 }],
 83 |   },
 84 | ];
 85 | 
 86 | const BattleScreen = ({ onQuit }: { onQuit: () => void }) => {
 87 |   const navigate = useNavigate(); // New hook
 88 |   const [playerHP, setPlayerHP] = useState(100);
 89 |   const [enemyHP, setEnemyHP] = useState(100);
 90 |   const [playerStatusEffects, setPlayerStatusEffects] = useState<StatusEffect[]>([]);
 91 |   const [enemyStatusEffects, setEnemyStatusEffects] = useState<StatusEffect[]>([]);
 92 |   const [log, setLog] = useState<string[]>([]);
 93 |   const [enemyDamage, setEnemyDamage] = useState<number | null>(null);
 94 |   const [playerDamage, setPlayerDamage] = useState<number | null>(null);
 95 |   const [battleOver, setBattleOver] = useState(false);
 96 |   const [winner, setWinner] = useState<"player" | "opponent" | null>(null);
 97 |   const [enemyDefeated, setEnemyDefeated] = useState(false);
 98 |   const [playerDefeated, setPlayerDefeated] = useState(false); // Added playerDefeated state
 99 |   const [showSplash, setShowSplash] = useState(false);
100 |   const [isAnimating, setIsAnimating] = useState(false); // New state for animation delay
101 |   const [isPlayerDamaged, setIsPlayerDamaged] = useState(false); // New state for player hit animation
102 |   const [isEnemyDamaged, setIsEnemyDamaged] = useState(false); // New state for enemy hit animation
103 |   const [showPlayerEffect, setShowPlayerEffect] = useState(false);
104 |   const [showEnemyEffect, setShowEnemyEffect] = useState(false);
105 |   const [enemyCooldowns, setEnemyCooldowns] = useState<Record<string, number>>({});
106 |   const [wasJustPlayerDamaged, setWasJustPlayerDamaged] = useState(false); // New state for player damage trigger
107 |   const [wasJustEnemyDamaged, setWasJustEnemyDamaged] = useState(false); // New state for enemy damage trigger
108 |   const [cameraShake, setCameraShake] = useState(false);
109 |   const [announcement, setAnnouncement] = useState<{ name: string; actor: 'player' | 'enemy' } | null>(null);
110 | 
111 |   const triggerCameraShake = () => {
112 |     setCameraShake(true);
113 |     setTimeout(() => setCameraShake(false), 300);
114 |   };
115 | 
116 |   const applyStatus = (
117 |     target: 'player' | 'enemy',
118 |     effect: StatusEffect,
119 |     message: string
120 |   ) => {
121 |     if (target === 'player') {
122 |       setPlayerStatusEffects(prev => [
123 |         ...prev,
124 |         { ...effect, justApplied: true },
125 |       ]);
126 |     } else {
127 |       setEnemyStatusEffects(prev => [
128 |         ...prev,
129 |         { ...effect, justApplied: true },
130 |       ]);
131 |     }
132 |     setLog(prev => [...prev, message]);
133 |   };
134 | 
135 |   const enemyAbilities: Ability[] = [ // Explicitly type enemyAbilities
136 |     {
137 |       id: "bite",
138 |       name: "Bite",
139 |       damage: 10,
140 |       type: "physical",
141 |       description: "A basic bite attack.",
142 |       effects: [{ type: 'burn', duration: 2, value: 3 }], // Example enemy effect
143 |       cooldown: 0,
144 |       weight: 1,
145 |     },
146 |     {
147 |       id: "scratch",
148 |       name: "Scratch",
149 |       damage: 6,
150 |       type: "physical",
151 |       description: "A quick scratch attack.",
152 |       cooldown: 0,
153 |       weight: 2,
154 |     },
155 |     {
156 |       id: "acid_spit",
157 |       name: "Acid Spit",
158 |       damage: 14,
159 |       type: "magic",
160 |       description: "Spits corrosive acid.",
161 |       effects: [{ type: 'poison', duration: 3, value: 4 }],
162 |       cooldown: 2,
163 |       weight: 3,
164 |     hpThreshold: 50,
165 |   },
166 |   ];
167 | 
168 |   const chooseEnemyAbility = (): Ability => {
169 |     const current: Record<string, number> = Object.fromEntries(
170 |       Object.entries(enemyCooldowns).map(([id, cd]) => [id, Math.max(0, cd - 1)])
171 |     );
172 |     setEnemyCooldowns(current);
173 |     const available = enemyAbilities.filter(
174 |       a => (current[a.id] || 0) === 0 && (!a.hpThreshold || enemyHP <= a.hpThreshold)
175 |     );
176 |     const total = available.reduce((sum, a) => sum + (a.weight || 1), 0);
177 |     let r = Math.random() * total;
178 |     for (const a of available) {
179 |       r -= a.weight || 1;
180 |       if (r <= 0) return a;
181 |     }
182 |     return available[0];
183 |   };
184 | 
185 |   const runEnemyTurn = () => {
186 |     setIsAnimating(true); // Start animation
187 |     const enemyMove = chooseEnemyAbility();
188 |     setEnemyCooldowns(prev => ({ ...prev, [enemyMove.id]: enemyMove.cooldown || 0 }));
189 |     setLog(prev => [...prev, `> Enemy used ${enemyMove.name}`]);
190 | 
191 |     setTimeout(() => {
192 |       setAnnouncement({ name: enemyMove.name, actor: 'enemy' });
193 |       setTimeout(() => {
194 |         setAnnouncement(null);
195 |         setTimeout(() => { // Delay damage application
196 |         // Check for stun on enemy
197 |         const isEnemyStunned = enemyStatusEffects.some(effect => effect.type === 'stun');
198 |         if (isEnemyStunned) {
199 |           setLog(prev => [...prev, `> Enemy is stunned and cannot act!`]);
200 |           // Reduce stun duration when enemy would act
201 |           setEnemyStatusEffects(prev => {
202 |             const updated: StatusEffect[] = [];
203 |             prev.forEach(effect => {
204 |               if (effect.type === 'stun') {
205 |                 const next = { ...effect };
206 |                 if (!next.justApplied) {
207 |                   next.duration -= 1;
208 |                 }
209 |                 if (next.duration > 0) {
210 |                   updated.push(next);
211 |                 }
212 |               } else {
213 |                 updated.push(effect);
214 |               }
215 |             });
216 |             return updated;
217 |           });
218 |         } else {
219 |           // Apply enemy ability effects
220 |           enemyMove.effects?.forEach(effect => {
221 |             if (effect.type === 'shield') {
222 |               applyStatus('player', effect, `> You gain a ${effect.value} point shield.`);
223 |             } else if (effect.type === 'burn') {
224 |               applyStatus('player', effect, `> You are burned for ${effect.duration} turn(s).`);
225 |             } else if (effect.type === 'stun') {
226 |               applyStatus('player', effect, `> You are stunned for ${effect.duration} turn(s).`);
227 |             } else if (effect.type === 'buff') {
228 |               applyStatus('player', effect, `> You gain a buff to ${effect.stat} for ${effect.duration} turn(s).`);
229 |             } else if (effect.type === 'debuff') {
230 |               applyStatus('player', effect, `> You suffer a debuff to ${effect.stat} for ${effect.duration} turn(s).`);
231 |             } else if (effect.type === 'poison') {
232 |               applyStatus('player', effect, `> You are poisoned for ${effect.duration} turn(s).`);
233 |             }
234 |           });
235 | 
236 |           // Apply damage, considering shield
237 |           let actualDamage = enemyMove.damage;
238 |           let shieldAbsorbed = 0;
239 |           setPlayerStatusEffects(prevEffects => {
240 |             const updatedEffects = [...prevEffects];
241 |             const shieldIndex = updatedEffects.findIndex(e => e.type === 'shield');
242 |             if (shieldIndex !== -1) {
243 |               const shieldEffect = updatedEffects[shieldIndex];
244 |               shieldAbsorbed = Math.min(actualDamage, shieldEffect.value || 0);
245 |               actualDamage = Math.max(0, actualDamage - shieldAbsorbed);
246 |               shieldEffect.value = (shieldEffect.value || 0) - shieldAbsorbed;
247 |               if ((shieldEffect.value || 0) <= 0) {
248 |                 updatedEffects.splice(shieldIndex, 1); // Remove shield if fully consumed
249 |               }
250 |               setLog(prev => [...prev, `> Your shield absorbed ${shieldAbsorbed} damage!`]);
251 |             }
252 |             return updatedEffects;
253 |           });
254 | 
255 |           setPlayerDamage(actualDamage);
256 |           setShowPlayerEffect(true);
257 |           setIsPlayerDamaged(true); // Trigger player hit animation
258 |           if (actualDamage >= 15) triggerCameraShake();
259 |           setPlayerHP(prev => {
260 |             const newPlayerHP = Math.max(0, prev - actualDamage);
261 |             if (newPlayerHP <= 0) {
262 |               setWinner("opponent"); // Set winner immediately
263 |               setPlayerDefeated(true); // Trigger player defeat animation
264 |               setTimeout(() => {
265 |                 setShowSplash(true); // Show splash after player animation (1.2s)
266 |               }, 1200);
267 |               setTimeout(() => {
268 |                 setShowSplash(false); // Hide splash
269 |                 setBattleOver(true);  // Show EndBattleScreen
270 |               }, 3200); // Total 1.2s (animation) + 2s (splash) = 3.2s
271 |             }
272 |             return newPlayerHP;
273 |           });
274 |         }
275 |         setTimeout(() => setPlayerDamage(null), 1600); // Slower fade out for damage number
276 |         setIsAnimating(false); // End animation
277 |       }, 600); // Delay damage application
278 |     }, 800); // Show announcement briefly
279 |   }, 2000); // 2-second pause before enemy strikes
280 |   };
281 | 
282 |   const handleAbilityUse = (ability: Ability) => {
283 |     setIsAnimating(true); // Start animation
284 |     setLog(prev => [...prev, `> You used ${ability.name}`]);
285 | 
286 |     // Check for stun on player
287 |     const isPlayerStunned = playerStatusEffects.some(effect => effect.type === 'stun');
288 |     if (isPlayerStunned) {
289 |       setLog(prev => [...prev, `> You are stunned and cannot act!`]);
290 |       // Reduce stun duration when player would act
291 |       setPlayerStatusEffects(prev => {
292 |         const updated: StatusEffect[] = [];
293 |         prev.forEach(effect => {
294 |           if (effect.type === 'stun') {
295 |             const next = { ...effect };
296 |             if (!next.justApplied) {
297 |               next.duration -= 1;
298 |             }
299 |             if (next.duration > 0) {
300 |               updated.push(next);
301 |             }
302 |           } else {
303 |             updated.push(effect);
304 |           }
305 |         });
306 |         return updated;
307 |       });
308 |       setTimeout(() => {
309 |         setIsAnimating(false);
310 |         runEnemyTurn();
311 |       }, 600);
312 |       return;
313 |     }
314 | 
315 |     // Apply player ability effects
316 |     ability.effects?.forEach(effect => {
317 |       if (effect.type === 'shield') {
318 |         applyStatus('player', effect, `> You gain a ${effect.value} point shield.`);
319 |       } else if (effect.type === 'burn') {
320 |         applyStatus('enemy', effect, `> Enemy is burned for ${effect.duration} turn(s).`);
321 |       } else if (effect.type === 'stun') {
322 |         applyStatus('enemy', effect, `> Enemy is stunned for ${effect.duration} turn(s).`);
323 |       } else if (effect.type === 'buff') {
324 |         applyStatus('player', effect, `> You gain a buff to ${effect.stat} for ${effect.duration} turn(s).`);
325 |       } else if (effect.type === 'debuff') {
326 |         applyStatus('enemy', effect, `> Enemy suffers a debuff to ${effect.stat} for ${effect.duration} turn(s).`);
327 |       } else if (effect.type === 'poison') {
328 |         applyStatus('enemy', effect, `> Enemy is poisoned for ${effect.duration} turn(s).`);
329 |       }
330 |     });
331 | 
332 |     setAnnouncement({ name: ability.name, actor: 'player' });
333 |     setTimeout(() => {
334 |       setAnnouncement(null);
335 |       setTimeout(() => { // Delay damage application
336 |       const actualDamage = ability.damage;
337 |       setEnemyHP(prev => {
338 |         const newEnemyHP = Math.max(0, prev - actualDamage);
339 |         setEnemyDamage(actualDamage);
340 |         setShowEnemyEffect(true);
341 |         setWasJustEnemyDamaged(true); // Trigger enemy damage effect
342 |         if (actualDamage >= 15) triggerCameraShake();
343 |         if (newEnemyHP <= 0) {
344 |           setWinner("player"); // Set winner immediately
345 |           setEnemyDamage(null);
346 |           setEnemyDefeated(true);
347 |           setTimeout(() => {
348 |             setShowSplash(true);
349 |           }, 1200);
350 |           setTimeout(() => {
351 |             setShowSplash(false);
352 |             setBattleOver(true);
353 |           }, 3200);
354 |         }
355 |         return newEnemyHP;
356 |       });
357 |       setTimeout(() => setEnemyDamage(null), 1600); // Slower fade out for damage number
358 | 
359 |       setIsAnimating(false); // End animation
360 |       setTimeout(() => {
361 |         runEnemyTurn();
362 |       }, 600); // Delay for enemy turn after player attack animation
363 |     }, 600); // Delay to allow animation (~600ms)
364 |     }, 400); // Announcement duration
365 |   };
366 | 
367 |   useEffect(() => {
368 |     if (wasJustPlayerDamaged) {
369 |       setIsPlayerDamaged(true);
370 |       const timeout = setTimeout(() => setIsPlayerDamaged(false), 400);
371 |       setWasJustPlayerDamaged(false); // Reset the trigger
372 |       return () => clearTimeout(timeout);
373 |     }
374 |   }, [wasJustPlayerDamaged]);
375 | 
376 |   useEffect(() => {
377 |     if (wasJustEnemyDamaged) {
378 |       setIsEnemyDamaged(true);
379 |       const timeout = setTimeout(() => setIsEnemyDamaged(false), 400);
380 |       setWasJustEnemyDamaged(false); // Reset the trigger
381 |       return () => clearTimeout(timeout);
382 |     }
383 |   }, [wasJustEnemyDamaged]);
384 | 
385 |   useEffect(() => {
386 |     if (battleOver) {
387 |       const timer = setTimeout(() => {
388 |         navigate('/menu'); // return to main menu directly
389 |       }, 5000);
390 |       return () => clearTimeout(timer);
391 |     }
392 |   }, [battleOver, navigate]);
393 | 
394 |   const handleRestart = () => {
395 |     setBattleOver(false);
396 |     setWinner(null);
397 |     setEnemyHP(100);
398 |     setPlayerHP(100);
399 |     setPlayerStatusEffects([]);
400 |     setEnemyStatusEffects([]);
401 |     setLog([]);
402 |     setEnemyDefeated(false);
403 |     setPlayerDefeated(false); // Reset player defeated state
404 |     navigate("/menu");
405 |     setShowSplash(false);
406 |   };
407 | 
408 |   // Effect colors for visual flair
409 |   const effectColors: Record<StatusEffectType, string> = {
410 |     burn: "text-red-400",
411 |     stun: "text-yellow-400",
412 |     shield: "text-blue-400",
413 |     buff: "text-green-400",
414 |     debuff: "text-purple-400",
415 |     poison: "text-teal-400",
416 |   };
417 | 
418 |   // Process status effects at the end of each turn
419 |   useEffect(() => {
420 |     if (battleOver || isAnimating) return;
421 | 
422 |     const processEffects = (
423 |       currentHP: number,
424 |       currentEffects: StatusEffect[],
425 |       setHP: React.Dispatch<React.SetStateAction<number>>,
426 |       setEffects: React.Dispatch<React.SetStateAction<StatusEffect[]>>,
427 |       characterName: string
428 |     ) => {
429 |       let newHP = currentHP;
430 |       const updatedEffects: StatusEffect[] = [];
431 |       currentEffects.forEach(effect => {
432 |         const updated = { ...effect };
433 |         if (updated.type === 'burn') {
434 |           const burnDamage = updated.value || 0;
435 |           newHP -= burnDamage;
436 |           setLog(prev => [...prev, `> ${characterName} takes ${burnDamage} burn damage.`]);
437 |         } else if (updated.type === 'poison') {
438 |           const poisonDamage = updated.value || 0;
439 |           newHP -= poisonDamage;
440 |           setLog(prev => [...prev, `> ${characterName} suffers ${poisonDamage} poison damage.`]);
441 |         }
442 | 
443 |         if (updated.justApplied) {
444 |           updated.justApplied = false;
445 |           updatedEffects.push(updated);
446 |           return;
447 |         }
448 | 
449 |         if (updated.type !== 'stun') {
450 |           updated.duration -= 1;
451 |         }
452 | 
453 |         if (updated.duration > 0) {
454 |           updatedEffects.push(updated);
455 |         }
456 |       });
457 |       setHP(newHP);
458 |       setEffects(updatedEffects);
459 |     };
460 | 
461 |     // Process player effects
462 |     processEffects(playerHP, playerStatusEffects, setPlayerHP, setPlayerStatusEffects, "You");
463 | 
464 |     // Process enemy effects
465 |     processEffects(enemyHP, enemyStatusEffects, setEnemyHP, setEnemyStatusEffects, "Enemy");
466 | 
467 |   }, [isAnimating, battleOver]); // Trigger when animation ends (turn completes)
468 | 
469 |   return (
470 |     <div className={`screen font-mono text-green-400 bg-black min-h-screen p-4 relative flex flex-col justify-between ${cameraShake ? 'camera-shake' : ''}`}> 
471 |       {cameraShake && <div className="absolute inset-0 glitch-lines" />}
472 |       {showSplash && (
473 |         <motion.div
474 |           initial={{ opacity: 0, scale: 0.8 }}
475 |           animate={{ opacity: 1, scale: 1 }}
476 |           exit={{ opacity: 0 }}
477 |           transition={{ duration: 0.5 }}
478 |           className="absolute inset-0 z-50 bg-black bg-opacity-95 flex flex-col items-center justify-center text-center"
479 |         >
480 |           <h1 className="text-5xl text-red-500 font-bold animate-pulse glitch">{winner === "player" ? "ENEMY DEFEATED" : "YOU WERE DESTROYED"}</h1>
481 |           <p className="text-green-400 mt-4 italic">
482 |             {winner === "player"
483 |               ? "The core watches silently as another fragment collapses."
484 |               : "Your signal fades into static. Try again, operative."}
485 |           </p>
486 |           <div className="mt-2 text-sm text-green-300">Returning to Main Menu...</div>
487 |         </motion.div>
488 |       )}
489 | 
490 |       <button
491 |         onClick={() => navigate('/')}
492 |         className="absolute top-2 right-4 text-red-400 text-xl hover:text-red-600"
493 |       >
494 |         ✕
495 |       </button>
496 | 
497 |       {/* Top bar title */}
498 |       <div className="text-center text-lg border-b border-green-400 pb-2 mb-4">
499 |         BATTLE SIMULATION
500 |       </div>
501 | 
502 |       {/* Character Portraits & HP Bars */}
503 |       <div className="flex justify-center items-center gap-8 mt-12">
504 | 
505 |         {/* PLAYER */}
506 |         <div className="relative flex flex-col items-center">
507 |           {announcement && announcement.actor === 'player' && (
508 |             <AbilityAnnouncement name={announcement.name} />
509 |           )}
510 |           {playerDamage !== null && (
511 |             <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-red-500 text-5xl animate-float-damage glitch-text pointer-events-none">
512 |               -{playerDamage}
513 |             </div>
514 |           )}
515 |           <div className="relative animate-idle-twitch">
516 |             <motion.img
517 |               src="/assets/images/character-default.png"
518 |               alt="Player"
519 |               className={`w-48 h-48 object-cover border-2 border-green-400 mb-2 transition-all duration-200 ${isPlayerDamaged ? 'shake flash-red' : ''}`}
520 |               initial={{ x: playerDefeated ? 0 : -300, opacity: playerDefeated ? 1: 0 }} // Adjust initial for defeat
521 |               animate={
522 |                 playerDefeated
523 |                   ? { x: [0, -10, 10, -10, 10, 0], rotate: -10, y: 500, opacity: 0, filter: "grayscale(100%) brightness(50%)" }
524 |                   : { x: 0, y: 0, rotate: 0, opacity: 1, filter: "none" }
525 |               }
526 |               transition={{
527 |                 duration: playerDefeated ? 1.2 : 0.6,
528 |                 ease: "easeInOut",
529 |               }}
530 |             />
531 |             {showPlayerEffect && (
532 |               <AttackEffect onComplete={() => setShowPlayerEffect(false)} />
533 |             )}
534 |           </div>
535 |           <p className="text-green-300">YOU</p>
536 |           <div className="w-40 h-3 bg-green-900 border border-green-400 mt-2">
537 |             <motion.div
538 |               className="bg-green-500 h-full"
539 |               animate={{ width: `${playerHP}%` }}
540 |               transition={{ duration: 0.5 }}
541 |             ></motion.div>
542 |           </div>
543 |           {/* Player Status Effects */}
544 |           <div className="flex space-x-2 mt-1">
545 |             {playerStatusEffects.map((effect, i) => (
546 |               <div
547 |                 key={i}
548 |                 className={`text-xs px-2 py-0.5 rounded bg-green-900 border border-green-400 font-mono glitch ${effectColors[effect.type]}`}
549 |               >
550 |                 {effect.type.toUpperCase()} ({effect.duration})
551 |               </div>
552 |             ))}
553 |           </div>
554 |         </div>
555 | 
556 |         {/* ENEMY */}
557 |         <div className="relative flex flex-col items-center">
558 |           {announcement && announcement.actor === 'enemy' && (
559 |             <AbilityAnnouncement name={announcement.name} />
560 |           )}
561 |           {enemyDamage !== null && (
562 |             <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-red-500 text-5xl animate-float-damage glitch-text pointer-events-none">
563 |               -{enemyDamage}
564 |             </div>
565 |           )}
566 |           <div className="relative animate-idle-twitch">
567 |             <motion.img
568 |               src="/assets/images/enemy-default.png"
569 |               alt="Enemy"
570 |               className={`w-48 h-48 object-cover border-2 border-red-400 mb-2 transition-all duration-200 ${isEnemyDamaged ? 'shake flash-red' : ''}`}
571 |               initial={{ x: 300, opacity: 0 }}
572 |               animate={
573 |                 enemyDefeated
574 |                   ? {
575 |                       x: [0, -12, 12, -18, 18, -12, 12, 0], // Enhanced shake
576 |                       rotate: [0, 12, -12, 18, -18, 12, -12, 0], // Rotational shake
577 |                       filter: "sepia(50%) saturate(400%) hue-rotate(-45deg) brightness(85%)", // Turns red
578 |                       y: 500, // Falls
579 |                       opacity: 0, // Fades
580 |                     }
581 |                   : { x: 0, y: 0, rotate: 0, opacity: 1, filter: 'none' } // Normal state with filter reset
582 |               }
583 |               transition={{
584 |                 duration: enemyDefeated ? 1.2 : 0.6,
585 |                 ease: "easeInOut",
586 |               }}
587 |             />
588 |             {showEnemyEffect && (
589 |               <AttackEffect onComplete={() => setShowEnemyEffect(false)} />
590 |             )}
591 |           </div>
592 |           <p className="text-red-400">ENEMY</p>
593 |           <div className="w-40 h-3 bg-red-900 border border-red-400 mt-2">
594 |             <motion.div
595 |               className="bg-red-500 h-full"
596 |               animate={{ width: `${enemyHP}%` }}
597 |               transition={{ duration: 0.5 }}
598 |             ></motion.div>
599 |           </div>
600 |           {/* Enemy Status Effects */}
601 |           <div className="flex space-x-2 mt-1">
602 |             {enemyStatusEffects.map((effect, i) => (
603 |               <div
604 |                 key={i}
605 |                 className={`text-xs px-2 py-0.5 rounded bg-red-900 border border-red-400 font-mono glitch ${effectColors[effect.type]}`}
606 |               >
607 |                 {effect.type.toUpperCase()} ({effect.duration})
608 |               </div>
609 |             ))}
610 |           </div>
611 |         </div>
612 |       </div>
613 | 
614 |       {/* Action Buttons */}
615 |       <div className="mt-8 flex justify-center space-x-4">
616 |         {abilities.map((a, idx) => (
617 |           <button
618 |             key={idx}
619 |             onClick={() => handleAbilityUse(a)}
620 |             className="border border-green-400 px-4 py-2 hover:bg-green-900"
621 |             disabled={isAnimating} // Disable buttons during animation
622 |           >
623 |             ▶ {a.name}
624 |           </button>
625 |         ))}
626 |       </div>
627 | 
628 |       {/* Action Log */}
629 |       <div className="bg-black mt-8 border border-green-400 p-4 h-40 overflow-y-auto">
630 |         {log.map((line, i) => (
631 |           <p key={i} className="text-xs text-green-300 font-mono typing-text">
632 |             {line}
633 |           </p>
634 |         ))}
635 |       </div>
636 | 
637 |       {battleOver && (
638 |         <EndBattleScreen winner={winner} onRestart={handleRestart} />
639 |       )}
640 |     </div>
641 |   );
642 | };
643 | 
644 | // Add new CSS for hp-bar-fill
645 | /* App.css updates (append this if missing)
646 | .hp-bar-fill { height: 100%; }
647 | .hp-bar-fill.enemy { background: red; }
648 | .hp-bar-fill.player { background: green; }
649 | */
650 | 
651 | export default BattleScreen;


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
/src/views/BattleScreen.tsx:
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
/src/views/MainMenu.tsx:
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
/src/views/SplashScreen.tsx:
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