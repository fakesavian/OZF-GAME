# Combat Improvement Plan

## Objectives

1. **Fix status effect durations** so they decrement correctly each turn.
2. **Enhance damage number presentation** for better readability and impact.
3. **Add attack visual effects** to make combat actions more dynamic.

## Implementation Outline

### 1. Fix Status Effect Durations
- Review how effects are managed in `src/screens/BattleScreen.tsx`.
- Ensure each effect's `duration` decreases only after a full turn cycle.
- Update cleanup logic so expired effects are removed consistently from `playerStatusEffects` and `enemyStatusEffects` arrays.
- Add unit tests in `src/screens/__tests__` (or create a new folder) to verify duration handling.

### 2. Enhance Damage Number Presentation
- Locate the floating damage number logic in `src/screens/BattleScreen.tsx`.
- Adjust the CSS animation in `src/App.css` (`.animate-float-damage` rule) for clearer motion and fade-out.
- Style the damage text with outlines or glows for readability against any background.
- Consider creating a small component (e.g., `DamageNumber.tsx`) if repeated logic is needed.

### 3. Add Attack Visual Effects
- Use `framer-motion` or CSS classes in `src/screens/BattleScreen.tsx` to trigger hit flashes and shakes when abilities connect.
- Extend existing classes in `src/App.css` (e.g., `.shake`, `.flash-red`) or add new ones for unique effects like sparks or energy trails.
- Reference components such as `AbilityAnnouncement.tsx` for timing attack effects alongside announcements.
- Ensure visual effects are reset correctly when turns change to avoid lingering animations.

## Key Files
- `src/screens/BattleScreen.tsx` – main combat logic and UI updates.
- `src/App.css` – global styles and animation rules.
- `src/components/AbilityAnnouncement.tsx` – shows ability names; coordinate with effect triggers.
- Additional components like `HealthBar.tsx` or future `DamageNumber.tsx` may be touched to keep UI consistent.

## Next Steps
1. Discuss this plan with the team and prioritize tasks.
2. Implement improvements iteratively, testing after each change with `npm test`.
3. Update documentation and commit messages to reflect progress.
