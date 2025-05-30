## MVP Flow
## MVP Flow

A clear, step-by-step description of the core minimum-viable process:

1. User visits the game website and either logs in or plays as a guest
2. User selects a character class (e.g., Warrior, Mage, etc.)
3. User is placed into a 1v1 real-time match (quick-join or PvE vs bot)
4. Each player takes turns selecting an ability from their available pool
5. The Match Resolution Engine processes the turn based on ability JSON and updates the state
6. Status effects, cooldowns, and effects are applied; combat log updates in real-time
7. Victory is determined via KO or timeout conditions
8. XP and rewards are distributed and match history is saved

---

## Launch Features (MVP)

### 1v1 Real-Time Turn-Based Combat

Allows players to face off in strategic, speed-ordered combat rounds with status effects, energy management, and cooldowns.

* JSON-driven abilities
* Real-time turn system (WebSockets)
* Server-authoritative engine

#### Tech Involved

* Node.js (API + match logic)
* TypeScript (frontend + logic)
* PostgreSQL / Supabase
* WebSockets (real-time communication)

#### Main Requirements

* Deterministic, testable battle logic
* Status effect manager
* Bot fallback for testing
* AI actions logged as turns

---

### Class Progression System

Players level up from 1 to 30 and unlock new abilities tied to their class.

* XP-based level system
* Passive and Ultimate abilities
* 5 total classes with 5–6 abilities each (3 starting, 2 unlockable, 1 passive)

#### Tech Involved

* PostgreSQL schema for class/ability tracking

#### Main Requirements

* Ability unlock conditions
* Persistent user state

---

### Matchmaking (Quick-Join)

Auto-pairs players or launches bot matches without needing lobbies.

* Real-time PvP or PvE
* Bot AI system with static logic (scalable later)

#### Tech Involved

* WebSockets or HTTP fallback
* Redis (optional for matchmaking cache)

#### Main Requirements

* Match creation service
* Bot AI logic handler

---

### Multi-Screen Terminal UI

A terminal-inspired interface with screens for lobby, battle, and post-match results.

* Dynamic combat log output
* Ability menu input

#### Tech Involved

* React + Tailwind
* GSAP or Canvas text animations

#### Main Requirements

* Terminal-style transitions
* Screen-based routing

---

## Future Features (Post-MVP)

### Blockchain Integration (Solana)

* NFT-based cosmetics (metadata during MVP)
* Wager-based smart contracts

#### Tech Involved

* Solana Web3.js
* Smart contracts (Anchor)

#### Main Requirements

* On-chain item sync
* Wallet login

---

### Cosmetics Marketplace

* Buy/sell cosmetic gear with stat modifiers
* Sync off-chain gear with NFT layer

#### Tech Involved

* Supabase for metadata
* On-chain ID tracking (later)

#### Main Requirements

* Trade and escrow system
* Item rarity and effects

---

## System Diagram

Pending update — will include:

* React frontend (multi-screen)
* Node.js API backend
* Match Resolution Engine (embedded in API for MVP)
* JSON-based Ability Registry (file-based for MVP)
* PostgreSQL (user, match, turn tables)
* Optional Redis cache layer
* PvE Bot logic module
* WebSocket server for real-time play

---

## Questions & Clarifications (Answered)

* **Will real-time turns use WebSockets or HTTP?** → WebSockets for low-latency play
* **Do bots scale in difficulty or are they static?** → Static for MVP, scalable later
* **How many classes and abilities should MVP support initially?** → 5 classes, \~5 abilities per class
* **Should users earn cosmetics at launch or post-blockchain?** → Metadata-based cosmetics available at MVP, NFTs later

---

## Architecture Consideration Questions (Answered)

* **Should match engine be a service or embedded in API layer?** → Embedded for MVP
* **Can PvE and PvP share the same engine module?** → Yes, both use same logic core
* **Do you want JSON abilities to sync to DB or stay file-based?** → File-based for MVP, DB sync post-launch
* **Will async matches or replays be added later?** → Post-MVP, logs enable replay support
* **Should AI actions be logged like player turns?** → Yes
