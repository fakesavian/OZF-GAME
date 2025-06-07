# OZF UI Design Plan

This document outlines the detailed plan for creating the functional UI design for the OZF cyberpunk turn-based RPG, adhering to the provided aesthetic and practical guidelines.

## Project Overview

OZF is a cyberpunk turn-based RPG where players select characters and engage in tactical battles through a stylized terminal UI. It features retro aesthetics with hacker-style interface elements, ASCII art, scanlines, and glitch effects.

## Design Principles

*   **Aesthetics**:
    *   Bold simplicity with intuitive navigation creating frictionless experiences.
    *   Breathable whitespace complemented by strategic color accents for visual hierarchy.
    *   Strategic negative space calibrated for cognitive breathing room and content prioritization.
    *   Systematic color theory applied through subtle gradients and purposeful accent placement.
    *   Typography hierarchy utilizing weight variance and proportional scaling for information architecture.
    *   Visual density optimization balancing information availability with cognitive load management.
    *   Motion choreography implementing physics-based transitions for spatial continuity.
    *   Accessibility-driven contrast ratios paired with intuitive navigation patterns ensuring universal usability.
    *   Feedback responsiveness via state transitions communicating system status with minimal latency.
    *   Content-first layouts prioritizing user objectives over decorative elements for task efficiency.
    *   Terminal aesthetic: black backgrounds, green ASCII styling where applicable, subtle VHS scanline overlays.
*   **Practicalities**:
    *   Simulate an iPhone device frame.
    *   Use Lucide React icons.
    *   Use Tailwind for CSS.
    *   This is meant to be a simulated phone. Do not render scroll bars.
    *   Use React + TypeScript structure with modular views.
*   **Project-Specific Guidelines**:
    *   Design for a browser-based turn-based RPG where the user controls a cyberpunk-themed avatar in battle against bots or players.
    *   Backend is complete and provides routes for:
        *   `POST /api/match/start`
        *   `POST /api/match/:matchId/turn`
    *   This frontend will interface with that backend via `fetch()`.

## Detailed Plan

### Phase 1: Project Setup and Core Structure

1.  **Create a `frontend` directory**: This will house all the React application files.
2.  **Initialize a React + TypeScript project**: Use `vite` for a quick setup.
3.  **Install Tailwind CSS**: Configure Tailwind for styling.
4.  **Install Lucide React icons**: Add the icon library.
5.  **Create `index.html`**: Set up the basic HTML structure with the iPhone device frame simulation.
6.  **Create `src/App.tsx`**: This will be the main React component that handles routing between the different views.
7.  **Create `src/main.tsx`**: The entry point for the React application.
8.  **Create `src/index.css`**: For global styles and Tailwind imports.

### Phase 2: Component Development

1.  **`src/components/PhoneFrame.tsx`**: A reusable component to simulate the iPhone device frame.
2.  **`src/components/GlitchText.tsx`**: A component for the static glitch effect on text.
3.  **`src/components/ScanlineOverlay.tsx`**: A component for the VHS scanline overlay.
4.  **`src/components/Button.tsx`**: A reusable button component with terminal aesthetic.
5.  **`src/components/HealthBar.tsx`**: A component to display health bars.
6.  **`src/components/CombatLog.tsx`**: A component to display combat messages.

### Phase 3: View Development

1.  **`src/views/SplashScreen.tsx`**:
    *   Display the OZF logo (text-based with ASCII art style).
    *   Apply `GlitchText` component.
    *   On click, transition to the Main Menu.
2.  **`src/views/MainMenu.tsx`**:
    *   Display the game title.
    *   Render buttons for "Battle", "Character", "Inventory", "Settings" using the `Button` component.
    *   Implement navigation logic for each button.
3.  **`src/views/BattleScreen.tsx`**:
    *   **HUD**:
        *   Player and Opponent character display (simple ASCII-style representations).
        *   Health bars for both players using `HealthBar` component.
        *   Energy bars for both players.
    *   **Combat Log**:
        *   Display recent combat events using `CombatLog` component.
    *   **Ability Menu**:
        *   Display available abilities for the active player.
        *   Buttons for each ability, showing name, cost, and cooldown.
        *   Highlight active player's turn.
    *   **Backend Integration**:
        *   `POST /api/match/start` to initiate a battle.
        *   `POST /api/match/:matchId/turn` to send turn actions.
        *   Update UI based on `MatchState` and `CombatLogEntry` from backend responses.

### Phase 4: Styling and Aesthetics

1.  Apply Tailwind CSS classes for layout, typography, and colors (black background, green accents).
2.  Implement VHS scanline overlay globally or on specific views.
3.  Ensure responsive design within the iPhone frame.
4.  Integrate Lucide React icons where appropriate (e.g., for abilities, menu items).
5.  Implement subtle animations and transitions for a "motion choreography" feel, especially for state changes and button interactions.

### Phase 5: Final Output

1.  Ensure `index.html` is correctly set up to render the React app.
2.  Provide the complete `index.html` and `App.tsx` (or the main entry point) as the output.

## UI Flow Diagram

```mermaid
graph TD
    A[Start] --> B{Check for existing frontend};
    B -- No --> C[Create frontend directory];
    B -- Yes --> D[Proceed with existing frontend];
    C --> E[Initialize React + TS with Vite];
    E --> F[Install Tailwind CSS];
    F --> G[Install Lucide React];
    G --> H[Create index.html];
    H --> I[Create src/App.tsx];
    I --> J[Create src/main.tsx];
    J --> K[Create src/index.css];
    K --> L[Develop PhoneFrame Component];
    L --> M[Develop GlitchText Component];
    M --> N[Develop ScanlineOverlay Component];
    N --> O[Develop Button Component];
    O --> P[Develop HealthBar Component];
    P --> Q[Develop CombatLog Component];
    Q --> R[Develop SplashScreen View];
    R --> S[Develop MainMenu View];
    S --> T[Develop BattleScreen View];
    T --> U[Implement Backend Integration];
    U --> V[Apply Global Styling & Aesthetics];
    V --> W[Final Output: index.html & App.tsx];