import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { EndBattleScreen } from "./EndBattleScreen";

const BattleScreen = () => {
  const navigate = useNavigate();
  const [log, setLog] = useState<string[]>([]);
  const [enemyHp, setEnemyHp] = useState(100);
  const [playerHp, setPlayerHp] = useState(100);
  const [gameEnded, setGameEnded] = useState(false);
  const [winner, setWinner] = useState<"player" | "opponent" | null>(null);
  const [summary, setSummary] = useState({ damageDealt: 0, damageTaken: 0, turns: 0 });

  const abilities = [
    { id: "cleave", label: "Cleave" },
    { id: "shield_wall", label: "Shield Wall" },
    { id: "fireball", label: "Fireball" },
  ];

  const matchId = "test-match"; // TODO: dynamically assign or get from props
  const actorId = "player-1";   // TODO: dynamically assign

  const handleAction = async (abilityId: string) => {
    const actionMsg = `> Sending ${abilityId.toUpperCase()} to backend...`;
    setLog((prev) => [actionMsg, ...prev.slice(0, 7)]);

    try {
      const response = await fetch(`http://localhost:3000/api/${matchId}/turn`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          actorId,
          abilityId
        })
      });

      if (!response.ok) throw new Error("Failed to send turn");

      const data = await response.json();

      // Example response parsing — adjust based on your actual API shape
      const { resultLog, updatedEnemyHp, updatedPlayerHp, winner: winnerResult } = data;

      setEnemyHp(updatedEnemyHp);
      setPlayerHp(updatedPlayerHp);
      setLog((prev) => [resultLog, ...prev.slice(0, 7)]);

      if (updatedPlayerHp <= 0 || updatedEnemyHp <= 0) {
        const winningPlayer = updatedPlayerHp > updatedEnemyHp ? "player" : "opponent";
        setWinner(winningPlayer);
        setGameEnded(true);
      }

    } catch (err) {
      setLog((prev) => [`> Error: ${err}`, ...prev]);
    }
  };

  const handleRestart = () => {
    // Reset battle state
    setGameEnded(false);
    setWinner(null);
    setEnemyHp(100);
    setPlayerHp(100);
    setLog([]);
    setSummary({ damageDealt: 0, damageTaken: 0, turns: 0 });
    // Reset matchId
    // setMatchId(null); // Assuming you have a matchId state
    // Navigate back to the main menu
    navigate("/menu");
  };

  if (gameEnded) {
    return (
      <EndBattleScreen
        winner={winner}
        onRestart={handleRestart}
      />
    );
  }

  return (
    <div className="bg-black text-green-400 min-h-screen p-4 font-mono flex flex-col">
      <pre className="text-xl mb-2 leading-none">
{String.raw`
╔════════════════════════════╗
║      BATTLE SIMULATION     ║
╚════════════════════════════╝`}
      </pre>

      {/* HP Bars */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p>👾 Enemy HP</p>
          <div className="bg-red-900 h-4 w-full border border-red-500 glitch">
            <div
              className="bg-red-500 h-full"
              style={{ width: `${enemyHp}%` }}
            />
          </div>
        </div>
        <div>
          <p>🧠 Player HP</p>
          <div className="bg-green-900 h-4 w-full border border-green-500 glitch">
            <div
              className="bg-green-400 h-full"
              style={{ width: `${playerHp}%` }}
            />
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="grid grid-cols-3 gap-2 mb-4">
        {abilities.map((a) => (
          <button
            key={a.id}
            onClick={() => handleAction(a.id)}
            className="border border-green-400 px-4 py-2 hover:bg-green-800 transition-all glitch"
          >
            ▶ {a.label}
          </button>
        ))}
      </div>

      {/* Combat Log */}
      <div className="bg-gray-900 p-2 border border-green-700 h-48 overflow-y-auto text-sm">
        {log.length === 0 && <p className="text-gray-500">Awaiting input...</p>}
        {log.map((entry, index) => (
          <p key={index} className="glitch-text">
            {entry}
          </p>
        ))}
      </div>
    </div>
  );
};

export default BattleScreen;