import React, { useMemo } from "react";

interface EndBattleScreenProps {
  winner: "player" | "opponent" | null;
  onRestart: () => void;
}

const loreQuotes = [
  "01010011 // A memory resurfaced — but whose?",
  ">>> DATA FRAGMENT RECOVERED: 'We were not the first...'",
  "_!_ ARCHIVE BREACH DETECTED... Reconstructing...",
  "/* The core pulsed once... then silence. */",
  "`SYSTEM ECHO:` 'You have deviated from protocol.'",
];

export function EndBattleScreen({ winner, onRestart }: EndBattleScreenProps) {
  const selectedQuote = useMemo(() => {
    return loreQuotes[Math.floor(Math.random() * loreQuotes.length)];
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-full text-white font-mono glitch-bg p-4">
      <h1 className="text-4xl mb-4">
        {winner === "player" ? "YOU WIN!" : "YOU LOSE"}
      </h1>
      <div className="text-green-400 font-mono text-center text-xl glitch">
        {selectedQuote}
      </div>
      <button
        onClick={onRestart}
        className="bg-white text-black px-6 py-2 rounded mt-4 hover:glitch-button"
      >
        Return to Main Menu
      </button>
    </div>
  );
}