# ✅ OZF Game Backend Development Checklist (Resynced)

## ✅ Completed

### 🔧 Project Setup
- [x] Initialized TypeScript + Express backend
- [x] Created `tsconfig.json`, `package.json`, and base server
- [x] Live backend server with `/` root test route

### 🔁 Match Flow
- [x] `/api/match/start` creates match instance (PvE or PvP)
- [x] In-memory match state storage via `matchStateStore.ts`
- [x] `/api/match/:matchId/turn` processes submitted player turns
- [x] `runMatchTurn()` handles resolution logic and result

### ⚔️ Ability & Status System
- [x] JSON-based Warrior class with 3 active abilities, 1 passive, 1 ultimate
- [x] `warrior.json` created and loaded in `abilityRegistry`
- [x] Status system for stuns, buffs, shields, DOTs
- [x] Real-time effect ticking and cleanup
- [x] Log reflects combat effects, status changes, and damage

### 🔋 Energy + Cooldowns
- [x] Players have energy pools and ability cooldown tracking
- [x] Prevents ability use if on cooldown or lacking energy
- [x] Energy/cooldowns update each turn

### 🤖 PvE Bot AI
- [x] Modular bot AI system implemented
- [x] Includes random, aggressive, defensive, tactical models
- [x] Match engine dynamically uses bot AI for PvE matches
- [x] Fully type-safe status effect conversion and application

## 🔜 In Progress / To Do

### 🧠 Engine Enhancements
- [ ] Add win condition check (KO or surrender)
- [ ] Return `winner` from `runMatchTurn()`
- [ ] Log full `TurnLog` per match
- [ ] Add XP system on win and class-based level progression

### 💾 Persistence (Post-MVP)
- [ ] Replace in-memory state with PostgreSQL match model
- [ ] Persist `TurnLog`, XP, and level
- [ ] Add user auth + session linking

### 🖥️ Frontend (Future)
- [ ] Terminal-style UI with combat log and turn input
- [ ] Lobby + post-match screens
- [ ] Real-time updates with WebSockets

## 🧪 Testing Tools
- [ ] Add unit tests for `runMatchTurn`, `applyEffect`, and bots
- [ ] Add mock match data for local dev
- [ ] Add ability JSON validator