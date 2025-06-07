import React, { useState, useEffect, useRef } from "react";

const bootLines = [
  ">>> INITIATING OZF SYSTEM...",
  "[OK] BIOS: LAWLESSLANDS.v3.4",
  "[OK] MOUNTING /fragments/memory_core",
  "[ERR] INDEX TABLE CORRUPTED — Attempting Recovery",
  ">>> SYSTEM LOG ██████▒▒▒▒▒▒▒▒▒▒",
  "LOADING... ███████░░░░░░░░░░",
  ">>> AUTH MODULE BREACHED",
  "!! WARNING: ARCHITECT PRESENCE DETECTED",
  "_boot complete. PRESS ANY KEY OR CLICK TO CONTINUE_"
];

export const BootSequence = ({ onContinue }: { onContinue: () => void }) => {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const indexRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (indexRef.current < bootLines.length) {
        setDisplayedLines((prev) => [...prev, bootLines[indexRef.current++]])
      } else {
        clearInterval(interval);
      }
    }, 500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleContinue = () => {
      if (indexRef.current >= bootLines.length) {
        onContinue();
      }
    };
    window.addEventListener("keydown", handleContinue);
    window.addEventListener("click", handleContinue);
    return () => {
      window.removeEventListener("keydown", handleContinue);
      window.removeEventListener("click", handleContinue);
    };
  }, [onContinue]);

  return (
    <div className="w-screen h-screen bg-black relative overflow-hidden flex flex-col justify-center items-start px-8 text-green-400 font-mono text-sm sm:text-base">
      <div className="absolute top-0 left-0 w-full h-full scanlines pointer-events-none" />
      {displayedLines.map((line, i) => (
        <div key={i} className="animate-crt-glow animate-type whitespace-pre-wrap">{line}</div>
      ))}
      {indexRef.current >= bootLines.length && (
        <div className="mt-4 animate-crt-glow">[ CLICK ANYWHERE OR PRESS A KEY TO PROCEED ]</div>
      )}
    </div>
  );
};