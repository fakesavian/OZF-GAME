import React from "react";

interface EndBattleScreenProps {
  winner: "player" | "opponent" | null;
  onRestart: () => void;
}

export function EndBattleScreen({ winner, onRestart }: EndBattleScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full text-white font-mono glitch-bg p-4">
      <h1 className="text-4xl mb-4">
        {winner === "player" ? "YOU WIN!" : "YOU LOSE"}
      </h1>
      <button
        onClick={onRestart}
        className="bg-white text-black px-6 py-2 rounded mt-4 hover:glitch-button"
      >
        Return to Main Menu
      </button>
    </div>
  );
}