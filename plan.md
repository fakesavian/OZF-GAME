# Plan for Updating BattleScreen Component

## Project Overview
The task involves updating the `BattleScreen.tsx` component and its associated styles in `App.css` within the `frontend/src` directory. The new `BattleScreen.tsx` code includes battle simulation logic, HP management, and a loading overlay.

## Architecture Overview

```mermaid
graph TD
    A[Start] --> B{Review BattleScreen.tsx and App.css};
    B --> C[Update frontend/src/screens/BattleScreen.tsx];
    C --> D[Update frontend/src/App.css];
    D --> E[Review frontend/src/App.tsx];
    E --> F[Confirm Plan with User];
    F --> G{User Approves?};
    G -- Yes --> H[Write Plan to Markdown (Optional)];
    H --> I[Switch to Code Mode];
    I --> J[Implement Changes];
    J --> K[End];
    G -- No --> F;
```

## Detailed Plan

1.  **Update `frontend/src/screens/BattleScreen.tsx`**:
    *   **Action**: Replace the entire content of the existing [`frontend/src/screens/BattleScreen.tsx`](frontend/src/screens/BattleScreen.tsx) file with the new code provided by the user.
    *   **Reason**: The new code contains the updated battle simulation logic, state management (`useState`, `useEffect`), API calls (`fetch`), and navigation (`useNavigate`).

2.  **Update `frontend/src/App.css`**:
    *   **Action**: Append the provided CSS styles to the [`frontend/src/App.css`](frontend/src/App.css) file.
    *   **Reason**: These styles are necessary to correctly render the new UI elements and the loading overlay introduced in the updated `BattleScreen.tsx`.

3.  **Review `frontend/src/App.tsx`**:
    *   **Action**: Examine the [`frontend/src/App.tsx`](frontend/src/App.tsx) file.
    *   **Reason**: To ensure that the `BattleScreen` component is being rendered correctly and to remove any previous props like `onQuit`, as the new `BattleScreen` component handles navigation internally using `useNavigate` from `react-router-dom`. This step will also confirm that the routing is set up to display the `BattleScreen` as intended.

## Next Steps
Once this plan is written to the markdown file, I will request to switch to `code` mode to implement these changes.