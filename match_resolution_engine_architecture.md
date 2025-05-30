# Match Resolution Engine – Architectural Overview

## Directory Structure

```
/match_engine/
│
├── index.ts               # Main entrypoint to run a turn
├── resolver.ts            # Determines turn order, applies abilities
├── effect_runner.ts       # Applies JSON-based effects (damage, stun, etc.)
├── status_manager.ts      # Handles ongoing effects (poison, burn, cooldowns)
├── validator.ts           # Ensures submitted actions are legal
├── state.ts               # Defines and mutates MatchState and PlayerState
├── combat_log.ts          # Generates turn-by-turn logs for frontend
├── victory_checker.ts     # Declares match result (KO, timeout, surrender)
├── bot_ai.ts              # Generates actions for PvE bot opponents
└── types.ts               # Shared interfaces (TurnAction, MatchState, etc.)
```

## Module Responsibilities

### `index.ts`
- Accepts input: MatchState + 2 TurnActions
- Calls validator → resolver → effect_runner
- Updates state and returns results

### `resolver.ts`
- Orders turns by initiative (e.g., speed stat or tie-breaker)
- Handles PvP and PvE match flow
- Calls applyAbility() in order

### `effect_runner.ts`
- Loads effects from JSON ability file
- Applies effects through handlers:
```ts
runEffect({ type: 'burn', duration: 2 }, source, target, state)
```

### `status_manager.ts`
- Manages ongoing status:
  - Buffs/debuffs
  - Immunities, shields, damage-over-time
- Clears expired effects

### `validator.ts`
- Verifies submitted turn legality:
  - Ability unlocked, not on cooldown, not silenced

### `state.ts`
- Holds core schemas:
  - MatchState
  - PlayerState
  - Effect
- Functions like applyDamage, applyStatus

### `combat_log.ts`
- Logs turn-by-turn summaries:
```
"Warrior used Meteoric Charge!"
"Mage was stunned for 1 turn!"
```

### `victory_checker.ts`
- Detects KO, timeout, forfeit

### `bot_ai.ts`
- Chooses AI abilities from context
- Weighted logic: aggression, disable, heal

## Data Flow Summary

```
[Player Turn Input]
     ↓
[validator.ts]
     ↓
[resolver.ts]
     ↓
→ applyAbility (from JSON)
     ↓
[effect_runner.ts]
     ↓
[status_manager.ts] → updates effects
     ↓
[combat_log.ts] → writes log
     ↓
[victory_checker.ts] → match result
```

## Benefits
- Modular + testable
- Real-time & async compatible
- Clean bot and multiplayer integration
- JSON ability driven