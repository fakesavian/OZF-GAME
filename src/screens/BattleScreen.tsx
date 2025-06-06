import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AbilityAnnouncement from '../components/AbilityAnnouncement';
import { useNavigate } from 'react-router-dom'; // New import
import { EndBattleScreen } from './EndBattleScreen'; // New import

type StatusEffectType =
  | 'burn'
  | 'stun'
  | 'shield'
  | 'buff'
  | 'debuff'
  | 'poison';

interface StatusEffect {
  type: StatusEffectType;
  duration: number; // in turns
  value?: number; // For damage, heal, shield, buff values
  stat?: string; // For buffs (e.g., 'defense', 'attack')
  justApplied?: boolean; // Flag to skip duration tick on the turn it's applied
}

type Ability = {
  name: string;
  id: "cleave" | "shield_wall" | "fireball" | "bite" | "scratch" | "acid_spit" | "stun_blast" | "battle_cry" | "weakening_curse"; // Updated to include new abilities
  damage: number;
  type: "physical" | "magic" | "defensive";
  description: string;
  effects?: StatusEffect[]; // Changed to StatusEffect[]
  cooldown?: number;
  weight?: number;
  hpThreshold?: number;
};

const abilities: Ability[] = [
  {
    id: "cleave",
    name: "Cleave",
    type: "physical",
    damage: 12,
    description: "A brutal slash that deals 12 damage.",
  },
  {
    id: "shield_wall",
    name: "Shield Wall",
    type: "defensive",
    damage: 0,
    description: "Raise a barrier to absorb the next attack.",
    effects: [{ type: 'shield', duration: 1, value: 20 }], // Example shield value
  },
  {
    id: "fireball",
    name: "Fireball",
    type: "magic",
    damage: 16,
    description: "A blazing projectile that deals 16 damage.",
    effects: [{ type: 'burn', duration: 3, value: 5 }], // Example burn damage
  },
  {
    id: "stun_blast",
    name: "Stun Blast",
    type: "magic",
    damage: 5,
    description: "A concussive blast that deals minor damage and stuns the enemy.",
    effects: [{ type: 'stun', duration: 1 }],
  },
  {
    id: "battle_cry",
    name: "Battle Cry",
    type: "defensive",
    damage: 0,
    description: "Inspire yourself, gaining a temporary buff.",
    effects: [{ type: 'buff', duration: 2, stat: 'attack', value: 5 }],
  },
  {
    id: "weakening_curse",
    name: "Weakening Curse",
    type: "magic",
    damage: 0,
    description: "Curse the enemy, reducing their defense.",
    effects: [{ type: 'debuff', duration: 2, stat: 'defense', value: -5 }],
  },
];

const BattleScreen = ({ onQuit }: { onQuit: () => void }) => {
  const navigate = useNavigate(); // New hook
  const [playerHP, setPlayerHP] = useState(100);
  const [enemyHP, setEnemyHP] = useState(100);
  const [playerStatusEffects, setPlayerStatusEffects] = useState<StatusEffect[]>([]);
  const [enemyStatusEffects, setEnemyStatusEffects] = useState<StatusEffect[]>([]);
  const [log, setLog] = useState<string[]>([]);
  const [enemyDamage, setEnemyDamage] = useState<number | null>(null);
  const [playerDamage, setPlayerDamage] = useState<number | null>(null);
  const [battleOver, setBattleOver] = useState(false);
  const [winner, setWinner] = useState<"player" | "opponent" | null>(null);
  const [enemyDefeated, setEnemyDefeated] = useState(false);
  const [playerDefeated, setPlayerDefeated] = useState(false); // Added playerDefeated state
  const [showSplash, setShowSplash] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false); // New state for animation delay
  const [isPlayerDamaged, setIsPlayerDamaged] = useState(false); // New state for player hit animation
  const [isEnemyDamaged, setIsEnemyDamaged] = useState(false); // New state for enemy hit animation
  const [enemyCooldowns, setEnemyCooldowns] = useState<Record<string, number>>({});
  const [wasJustPlayerDamaged, setWasJustPlayerDamaged] = useState(false); // New state for player damage trigger
  const [wasJustEnemyDamaged, setWasJustEnemyDamaged] = useState(false); // New state for enemy damage trigger
  const [cameraShake, setCameraShake] = useState(false);
  const [announcement, setAnnouncement] = useState<{ name: string; actor: 'player' | 'enemy' } | null>(null);

  const triggerCameraShake = () => {
    setCameraShake(true);
    setTimeout(() => setCameraShake(false), 300);
  };

  const applyStatus = (
    target: 'player' | 'enemy',
    effect: StatusEffect,
    message: string
  ) => {
    if (target === 'player') {
      setPlayerStatusEffects(prev => [
        ...prev,
        { ...effect, justApplied: true },
      ]);
    } else {
      setEnemyStatusEffects(prev => [
        ...prev,
        { ...effect, justApplied: true },
      ]);
    }
    setLog(prev => [...prev, message]);
  };

  const enemyAbilities: Ability[] = [ // Explicitly type enemyAbilities
    {
      id: "bite",
      name: "Bite",
      damage: 10,
      type: "physical",
      description: "A basic bite attack.",
      effects: [{ type: 'burn', duration: 2, value: 3 }], // Example enemy effect
      cooldown: 0,
      weight: 1,
    },
    {
      id: "scratch",
      name: "Scratch",
      damage: 6,
      type: "physical",
      description: "A quick scratch attack.",
      cooldown: 0,
      weight: 2,
    },
    {
      id: "acid_spit",
      name: "Acid Spit",
      damage: 14,
      type: "magic",
      description: "Spits corrosive acid.",
      effects: [{ type: 'poison', duration: 3, value: 4 }],
      cooldown: 2,
      weight: 3,
    hpThreshold: 50,
  },
  ];

  const chooseEnemyAbility = (): Ability => {
    const current: Record<string, number> = Object.fromEntries(
      Object.entries(enemyCooldowns).map(([id, cd]) => [id, Math.max(0, cd - 1)])
    );
    setEnemyCooldowns(current);
    const available = enemyAbilities.filter(
      a => (current[a.id] || 0) === 0 && (!a.hpThreshold || enemyHP <= a.hpThreshold)
    );
    const total = available.reduce((sum, a) => sum + (a.weight || 1), 0);
    let r = Math.random() * total;
    for (const a of available) {
      r -= a.weight || 1;
      if (r <= 0) return a;
    }
    return available[0];
  };

  const runEnemyTurn = () => {
    setIsAnimating(true); // Start animation
    const enemyMove = chooseEnemyAbility();
    setEnemyCooldowns(prev => ({ ...prev, [enemyMove.id]: enemyMove.cooldown || 0 }));
    setLog(prev => [...prev, `> Enemy used ${enemyMove.name}`]);

    setTimeout(() => {
      setAnnouncement({ name: enemyMove.name, actor: 'enemy' });
      setTimeout(() => {
        setAnnouncement(null);
        setTimeout(() => { // Delay damage application
        // Check for stun on enemy
        const isEnemyStunned = enemyStatusEffects.some(effect => effect.type === 'stun');
        if (isEnemyStunned) {
          setLog(prev => [...prev, `> Enemy is stunned and cannot act!`]);
          // Reduce stun duration when enemy would act
          setEnemyStatusEffects(prev => {
            const updated: StatusEffect[] = [];
            prev.forEach(effect => {
              if (effect.type === 'stun') {
                const next = { ...effect };
                if (!next.justApplied) {
                  next.duration -= 1;
                }
                if (next.duration > 0) {
                  updated.push(next);
                }
              } else {
                updated.push(effect);
              }
            });
            return updated;
          });
        } else {
          // Apply enemy ability effects
          enemyMove.effects?.forEach(effect => {
            if (effect.type === 'shield') {
              applyStatus('player', effect, `> You gain a ${effect.value} point shield.`);
            } else if (effect.type === 'burn') {
              applyStatus('player', effect, `> You are burned for ${effect.duration} turn(s).`);
            } else if (effect.type === 'stun') {
              applyStatus('player', effect, `> You are stunned for ${effect.duration} turn(s).`);
            } else if (effect.type === 'buff') {
              applyStatus('player', effect, `> You gain a buff to ${effect.stat} for ${effect.duration} turn(s).`);
            } else if (effect.type === 'debuff') {
              applyStatus('player', effect, `> You suffer a debuff to ${effect.stat} for ${effect.duration} turn(s).`);
            } else if (effect.type === 'poison') {
              applyStatus('player', effect, `> You are poisoned for ${effect.duration} turn(s).`);
            }
          });

          // Apply damage, considering shield
          let actualDamage = enemyMove.damage;
          let shieldAbsorbed = 0;
          setPlayerStatusEffects(prevEffects => {
            const updatedEffects = [...prevEffects];
            const shieldIndex = updatedEffects.findIndex(e => e.type === 'shield');
            if (shieldIndex !== -1) {
              const shieldEffect = updatedEffects[shieldIndex];
              shieldAbsorbed = Math.min(actualDamage, shieldEffect.value || 0);
              actualDamage = Math.max(0, actualDamage - shieldAbsorbed);
              shieldEffect.value = (shieldEffect.value || 0) - shieldAbsorbed;
              if ((shieldEffect.value || 0) <= 0) {
                updatedEffects.splice(shieldIndex, 1); // Remove shield if fully consumed
              }
              setLog(prev => [...prev, `> Your shield absorbed ${shieldAbsorbed} damage!`]);
            }
            return updatedEffects;
          });

          setPlayerDamage(actualDamage);
          setIsPlayerDamaged(true); // Trigger player hit animation
          if (actualDamage >= 15) triggerCameraShake();
          setPlayerHP(prev => {
            const newPlayerHP = Math.max(0, prev - actualDamage);
            if (newPlayerHP <= 0) {
              setWinner("opponent"); // Set winner immediately
              setPlayerDefeated(true); // Trigger player defeat animation
              setTimeout(() => {
                setShowSplash(true); // Show splash after player animation (1.2s)
              }, 1200);
              setTimeout(() => {
                setShowSplash(false); // Hide splash
                setBattleOver(true);  // Show EndBattleScreen
              }, 3200); // Total 1.2s (animation) + 2s (splash) = 3.2s
            }
            return newPlayerHP;
          });
        }
        setTimeout(() => setPlayerDamage(null), 1600); // Slower fade out for damage number
        setIsAnimating(false); // End animation
      }, 600); // Delay damage application
    }, 800); // Show announcement briefly
  }, 2000); // 2-second pause before enemy strikes
  };

  const handleAbilityUse = (ability: Ability) => {
    setIsAnimating(true); // Start animation
    setLog(prev => [...prev, `> You used ${ability.name}`]);

    // Check for stun on player
    const isPlayerStunned = playerStatusEffects.some(effect => effect.type === 'stun');
    if (isPlayerStunned) {
      setLog(prev => [...prev, `> You are stunned and cannot act!`]);
      // Reduce stun duration when player would act
      setPlayerStatusEffects(prev => {
        const updated: StatusEffect[] = [];
        prev.forEach(effect => {
          if (effect.type === 'stun') {
            const next = { ...effect };
            if (!next.justApplied) {
              next.duration -= 1;
            }
            if (next.duration > 0) {
              updated.push(next);
            }
          } else {
            updated.push(effect);
          }
        });
        return updated;
      });
      setTimeout(() => {
        setIsAnimating(false);
        runEnemyTurn();
      }, 600);
      return;
    }

    // Apply player ability effects
    ability.effects?.forEach(effect => {
      if (effect.type === 'shield') {
        applyStatus('player', effect, `> You gain a ${effect.value} point shield.`);
      } else if (effect.type === 'burn') {
        applyStatus('enemy', effect, `> Enemy is burned for ${effect.duration} turn(s).`);
      } else if (effect.type === 'stun') {
        applyStatus('enemy', effect, `> Enemy is stunned for ${effect.duration} turn(s).`);
      } else if (effect.type === 'buff') {
        applyStatus('player', effect, `> You gain a buff to ${effect.stat} for ${effect.duration} turn(s).`);
      } else if (effect.type === 'debuff') {
        applyStatus('enemy', effect, `> Enemy suffers a debuff to ${effect.stat} for ${effect.duration} turn(s).`);
      } else if (effect.type === 'poison') {
        applyStatus('enemy', effect, `> Enemy is poisoned for ${effect.duration} turn(s).`);
      }
    });

    setAnnouncement({ name: ability.name, actor: 'player' });
    setTimeout(() => {
      setAnnouncement(null);
      setTimeout(() => { // Delay damage application
      const actualDamage = ability.damage;
      setEnemyHP(prev => {
        const newEnemyHP = Math.max(0, prev - actualDamage);
        setEnemyDamage(actualDamage);
        setWasJustEnemyDamaged(true); // Trigger enemy damage effect
        if (actualDamage >= 15) triggerCameraShake();
        if (newEnemyHP <= 0) {
          setWinner("player"); // Set winner immediately
          setEnemyDamage(null);
          setEnemyDefeated(true);
          setTimeout(() => {
            setShowSplash(true);
          }, 1200);
          setTimeout(() => {
            setShowSplash(false);
            setBattleOver(true);
          }, 3200);
        }
        return newEnemyHP;
      });
      setTimeout(() => setEnemyDamage(null), 1600); // Slower fade out for damage number

      setIsAnimating(false); // End animation
      setTimeout(() => {
        runEnemyTurn();
      }, 600); // Delay for enemy turn after player attack animation
    }, 600); // Delay to allow animation (~600ms)
    }, 400); // Announcement duration
  };

  useEffect(() => {
    if (wasJustPlayerDamaged) {
      setIsPlayerDamaged(true);
      const timeout = setTimeout(() => setIsPlayerDamaged(false), 400);
      setWasJustPlayerDamaged(false); // Reset the trigger
      return () => clearTimeout(timeout);
    }
  }, [wasJustPlayerDamaged]);

  useEffect(() => {
    if (wasJustEnemyDamaged) {
      setIsEnemyDamaged(true);
      const timeout = setTimeout(() => setIsEnemyDamaged(false), 400);
      setWasJustEnemyDamaged(false); // Reset the trigger
      return () => clearTimeout(timeout);
    }
  }, [wasJustEnemyDamaged]);

  useEffect(() => {
    if (battleOver) {
      const timer = setTimeout(() => {
        navigate('/menu'); // return to main menu directly
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [battleOver, navigate]);

  const handleRestart = () => {
    setBattleOver(false);
    setWinner(null);
    setEnemyHP(100);
    setPlayerHP(100);
    setPlayerStatusEffects([]);
    setEnemyStatusEffects([]);
    setLog([]);
    setEnemyDefeated(false);
    setPlayerDefeated(false); // Reset player defeated state
    navigate("/menu");
    setShowSplash(false);
  };

  // Effect colors for visual flair
  const effectColors: Record<StatusEffectType, string> = {
    burn: "text-red-400",
    stun: "text-yellow-400",
    shield: "text-blue-400",
    buff: "text-green-400",
    debuff: "text-purple-400",
    poison: "text-teal-400",
  };

  // Process status effects at the end of each turn
  useEffect(() => {
    if (battleOver || isAnimating) return;

    const processEffects = (
      currentHP: number,
      currentEffects: StatusEffect[],
      setHP: React.Dispatch<React.SetStateAction<number>>,
      setEffects: React.Dispatch<React.SetStateAction<StatusEffect[]>>,
      characterName: string
    ) => {
      let newHP = currentHP;
      const updatedEffects: StatusEffect[] = [];
      currentEffects.forEach(effect => {
        const updated = { ...effect };
        if (updated.type === 'burn') {
          const burnDamage = updated.value || 0;
          newHP -= burnDamage;
          setLog(prev => [...prev, `> ${characterName} takes ${burnDamage} burn damage.`]);
        } else if (updated.type === 'poison') {
          const poisonDamage = updated.value || 0;
          newHP -= poisonDamage;
          setLog(prev => [...prev, `> ${characterName} suffers ${poisonDamage} poison damage.`]);
        }

        if (updated.justApplied) {
          updated.justApplied = false;
          updatedEffects.push(updated);
          return;
        }

        if (updated.type !== 'stun') {
          updated.duration -= 1;
        }

        if (updated.duration > 0) {
          updatedEffects.push(updated);
        }
      });
      setHP(newHP);
      setEffects(updatedEffects);
    };

    // Process player effects
    processEffects(playerHP, playerStatusEffects, setPlayerHP, setPlayerStatusEffects, "You");

    // Process enemy effects
    processEffects(enemyHP, enemyStatusEffects, setEnemyHP, setEnemyStatusEffects, "Enemy");

  }, [isAnimating, battleOver]); // Trigger when animation ends (turn completes)

  return (
    <div className={`screen font-mono text-green-400 bg-black min-h-screen p-4 relative flex flex-col justify-between ${cameraShake ? 'camera-shake' : ''}`}> 
      {cameraShake && <div className="absolute inset-0 glitch-lines" />}
      {showSplash && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 z-50 bg-black bg-opacity-95 flex flex-col items-center justify-center text-center"
        >
          <h1 className="text-5xl text-red-500 font-bold animate-pulse glitch">{winner === "player" ? "ENEMY DEFEATED" : "YOU WERE DESTROYED"}</h1>
          <p className="text-green-400 mt-4 italic">
            {winner === "player"
              ? "The core watches silently as another fragment collapses."
              : "Your signal fades into static. Try again, operative."}
          </p>
          <div className="mt-2 text-sm text-green-300">Returning to Main Menu...</div>
        </motion.div>
      )}

      <button
        onClick={() => navigate('/')}
        className="absolute top-2 right-4 text-red-400 text-xl hover:text-red-600"
      >
        ✕
      </button>

      {/* Top bar title */}
      <div className="text-center text-lg border-b border-green-400 pb-2 mb-4">
        BATTLE SIMULATION
      </div>

      {/* Character Portraits & HP Bars */}
      <div className="flex justify-center items-center gap-8 mt-12">

        {/* PLAYER */}
        <div className="relative flex flex-col items-center">
          {announcement && announcement.actor === 'player' && (
            <AbilityAnnouncement name={announcement.name} />
          )}
          {playerDamage !== null && (
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-red-500 text-5xl animate-float-damage glitch-text pointer-events-none">
              -{playerDamage}
            </div>
          )}
          <div className="relative animate-idle-twitch">
            <motion.img
              src="/assets/images/character-default.png"
              alt="Player"
              className={`w-48 h-48 object-cover border-2 border-green-400 mb-2 transition-all duration-200 ${isPlayerDamaged ? 'shake flash-red' : ''}`}
              initial={{ x: playerDefeated ? 0 : -300, opacity: playerDefeated ? 1: 0 }} // Adjust initial for defeat
              animate={
                playerDefeated
                  ? { x: [0, -10, 10, -10, 10, 0], rotate: -10, y: 500, opacity: 0, filter: "grayscale(100%) brightness(50%)" }
                  : { x: 0, y: 0, rotate: 0, opacity: 1, filter: "none" }
              }
              transition={{
                duration: playerDefeated ? 1.2 : 0.6,
                ease: "easeInOut",
              }}
            />
          </div>
          <p className="text-green-300">YOU</p>
          <div className="w-40 h-3 bg-green-900 border border-green-400 mt-2">
            <motion.div
              className="bg-green-500 h-full"
              animate={{ width: `${playerHP}%` }}
              transition={{ duration: 0.5 }}
            ></motion.div>
          </div>
          {/* Player Status Effects */}
          <div className="flex space-x-2 mt-1">
            {playerStatusEffects.map((effect, i) => (
              <div
                key={i}
                className={`text-xs px-2 py-0.5 rounded bg-green-900 border border-green-400 font-mono glitch ${effectColors[effect.type]}`}
              >
                {effect.type.toUpperCase()} ({effect.duration})
              </div>
            ))}
          </div>
        </div>

        {/* ENEMY */}
        <div className="relative flex flex-col items-center">
          {announcement && announcement.actor === 'enemy' && (
            <AbilityAnnouncement name={announcement.name} />
          )}
          {enemyDamage !== null && (
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-red-500 text-5xl animate-float-damage glitch-text pointer-events-none">
              -{enemyDamage}
            </div>
          )}
          <div className="relative animate-idle-twitch">
            <motion.img
              src="/assets/images/enemy-default.png"
              alt="Enemy"
              className={`w-48 h-48 object-cover border-2 border-red-400 mb-2 transition-all duration-200 ${isEnemyDamaged ? 'shake flash-red' : ''}`}
              initial={{ x: 300, opacity: 0 }}
              animate={
                enemyDefeated
                  ? {
                      x: [0, -12, 12, -18, 18, -12, 12, 0], // Enhanced shake
                      rotate: [0, 12, -12, 18, -18, 12, -12, 0], // Rotational shake
                      filter: "sepia(50%) saturate(400%) hue-rotate(-45deg) brightness(85%)", // Turns red
                      y: 500, // Falls
                      opacity: 0, // Fades
                    }
                  : { x: 0, y: 0, rotate: 0, opacity: 1, filter: 'none' } // Normal state with filter reset
              }
              transition={{
                duration: enemyDefeated ? 1.2 : 0.6,
                ease: "easeInOut",
              }}
            />
          </div>
          <p className="text-red-400">ENEMY</p>
          <div className="w-40 h-3 bg-red-900 border border-red-400 mt-2">
            <motion.div
              className="bg-red-500 h-full"
              animate={{ width: `${enemyHP}%` }}
              transition={{ duration: 0.5 }}
            ></motion.div>
          </div>
          {/* Enemy Status Effects */}
          <div className="flex space-x-2 mt-1">
            {enemyStatusEffects.map((effect, i) => (
              <div
                key={i}
                className={`text-xs px-2 py-0.5 rounded bg-red-900 border border-red-400 font-mono glitch ${effectColors[effect.type]}`}
              >
                {effect.type.toUpperCase()} ({effect.duration})
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-8 flex justify-center space-x-4">
        {abilities.map((a, idx) => (
          <button
            key={idx}
            onClick={() => handleAbilityUse(a)}
            className="border border-green-400 px-4 py-2 hover:bg-green-900"
            disabled={isAnimating} // Disable buttons during animation
          >
            ▶ {a.name}
          </button>
        ))}
      </div>

      {/* Action Log */}
      <div className="bg-black mt-8 border border-green-400 p-4 h-40 overflow-y-auto">
        {log.map((line, i) => (
          <p key={i} className="text-xs text-green-300 font-mono typing-text">
            {line}
          </p>
        ))}
      </div>

      {battleOver && (
        <EndBattleScreen winner={winner} onRestart={handleRestart} />
      )}
    </div>
  );
};

// Add new CSS for hp-bar-fill
/* App.css updates (append this if missing)
.hp-bar-fill { height: 100%; }
.hp-bar-fill.enemy { background: red; }
.hp-bar-fill.player { background: green; }
*/

export default BattleScreen;