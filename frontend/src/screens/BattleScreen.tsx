import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // New import
import { EndBattleScreen } from './EndBattleScreen'; // New import
import DamageNumber from '../components/DamageNumber'; // Import DamageNumber

type StatusEffectType = 'burn' | 'stun' | 'shield' | 'buff' | 'debuff';

interface StatusEffect {
  type: StatusEffectType;
  duration: number; // in turns
  value?: number; // For damage, heal, shield, buff values
  stat?: string; // For buffs (e.g., 'defense', 'attack')
}

type Ability = {
  name: string;
  id: "cleave" | "shield_wall" | "fireball" | "bite" | "scratch" | "acid_spit" | "stun_blast" | "battle_cry" | "weakening_curse"; // Updated to include new abilities
  damage: number;
  type: "physical" | "magic" | "defensive";
  description: string;
  effects?: StatusEffect[]; // Changed to StatusEffect[]
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
    description: "Raise a 25-point barrier and bolster defense. Blocks incoming damage until depleted.",
    effects: [
      { type: 'shield', duration: 2, value: 25 },
      { type: 'buff', stat: 'defense', value: 5, duration: 2 }
    ]
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
  const [wasJustPlayerDamaged, setWasJustPlayerDamaged] = useState(false); // New state for player damage trigger
  const [wasJustEnemyDamaged, setWasJustEnemyDamaged] = useState(false); // New state for enemy damage trigger
  const [roundStage, setRoundStage] = useState<'player' | 'enemy'>('player');
  const [playerDamageType, setPlayerDamageType] = useState<'normal' | 'crit' | 'burn' | 'heal'>('normal');
  const [enemyDamageType, setEnemyDamageType] = useState<'normal' | 'crit' | 'burn' | 'heal'>('normal');

  const enemyAbilities: Ability[] = [ // Explicitly type enemyAbilities
    {
      id: "bite",
      name: "Bite",
      damage: 10,
      type: "physical",
      description: "A basic bite attack.",
      effects: [{ type: 'burn', duration: 2, value: 3 }], // Example enemy effect
    },
    {
      id: "scratch",
      name: "Scratch",
      damage: 6,
      type: "physical",
      description: "A quick scratch attack.",
    },
    {
      id: "acid_spit",
      name: "Acid Spit",
      damage: 14,
      type: "magic",
      description: "Spits corrosive acid.",
      effects: [{ type: 'debuff', duration: 2, stat: 'defense', value: -3 }], // Example enemy effect
    },
  ];

// Centralized function to apply damage considering defense buffs and shields
  const applyDamageWithShield = (
    targetHP: number,
    setTargetHP: React.Dispatch<React.SetStateAction<number>>,
    targetEffects: StatusEffect[],
    setTargetEffects: React.Dispatch<React.SetStateAction<StatusEffect[]>>,
    rawDamage: number,
    damageSourceName: string, // "Enemy" or "Burn" or "Player Ability Name"
    targetName: "You" | "Enemy",
    setDamageDisplay: React.Dispatch<React.SetStateAction<number | null>>,
    setIsDamagedTrigger: React.Dispatch<React.SetStateAction<boolean>>,
    setTargetDefeated?: React.Dispatch<React.SetStateAction<boolean>>, // Optional for player/enemy defeat
    setWinnerState?: React.Dispatch<React.SetStateAction<"player" | "opponent" | null>> // Optional for setting winner
  ): { finalDamageDealt: number; newHP: number; newEffects: StatusEffect[] } => {
    let modifiedDamage = rawDamage;

    // Apply defense buffs
    const defenseBuff = targetEffects.find(e => e.type === 'buff' && e.stat === 'defense');
    if (defenseBuff && defenseBuff.value) {
      const defenseValue = defenseBuff.value;
      modifiedDamage = Math.max(0, rawDamage - defenseValue);
      if (rawDamage > modifiedDamage) {
        setLog(prev => [...prev, `> ${targetName}r defense reduced ${damageSourceName} damage by ${rawDamage - modifiedDamage}.`]);
      }
    }

    let finalDamage = modifiedDamage;
    let shieldAbsorbed = 0;
    const activeShield = targetEffects.find(e => e.type === 'shield' && (e.value || 0) > 0);

    let currentEffects = [...targetEffects]; // Work with a copy

    if (activeShield && activeShield.value) {
      shieldAbsorbed = Math.min(modifiedDamage, activeShield.value);
      finalDamage = Math.max(0, modifiedDamage - shieldAbsorbed);
      setLog(prev => [...prev, `> ${targetName}r shield absorbed ${shieldAbsorbed} ${damageSourceName} damage!`]);

      currentEffects = currentEffects.map(effect => {
        if (effect === activeShield) {
          return { ...effect, value: (effect.value || 0) - shieldAbsorbed };
        }
        return effect;
      }).filter(effect => effect.type !== 'shield' || (effect.value || 0) > 0);
    }
    
    setTargetEffects(currentEffects); // Update effects state once
    
    // Determine damage type for styling
    let effectType: 'normal' | 'crit' | 'burn' | 'heal' = 'normal';
    if (damageSourceName.toLowerCase().includes("burn")) {
      effectType = 'burn';
    }
    // TODO: Add logic for 'crit' or 'heal' types if applicable based on damageSourceName or other factors

    if (targetName === "You") {
      setPlayerDamageType(effectType);
    } else {
      setEnemyDamageType(effectType);
    }
    
    setDamageDisplay(finalDamage);
    setIsDamagedTrigger(true); // Trigger hit animation

    const newHP = Math.max(0, targetHP - finalDamage);
    setTargetHP(newHP);
    if (finalDamage > 0 || shieldAbsorbed > 0) { 
        setLog(prev => [...prev, `> ${targetName} took ${finalDamage} ${damageSourceName} damage.`]);
    }

    if (newHP <= 0 && setTargetDefeated && setWinnerState) {
      setWinnerState(targetName === "You" ? "opponent" : "player");
      setTargetDefeated(true);
      setTimeout(() => setShowSplash(true), 1200);
      setTimeout(() => {
        setShowSplash(false);
        setBattleOver(true);
      }, 3200);
    }
    
    setTimeout(() => setDamageDisplay(null), 1200);

    return { finalDamageDealt: finalDamage, newHP, newEffects: currentEffects };
  };
  // This function was already defined in the previous step and seems correct.
  // No changes needed for applyDamageWithShield based on the re-read file.
  // The existing applyDamageWithShield function from line 125-192 in the re-read file will be used.

  function processEndOfRoundStatusEffects() {
    setPlayerStatusEffects(prev =>
      prev
        .map(effect => ({ ...effect, duration: effect.duration - 1 }))
        .filter(effect => {
          // Revert stat changes for expiring buffs/debuffs
          // This part is tricky as direct stat modification isn't stored.
          // For now, we assume buffs/debuffs are re-evaluated or their impact is implicit.
          // A more robust system would store base stats and calculate current stats.
          return effect.duration > 0;
        })
    );

    setEnemyStatusEffects(prev =>
      prev
        .map(effect => ({ ...effect, duration: effect.duration - 1 }))
        .filter(effect => {
          return effect.duration > 0;
        })
    );
  }

  // Call this after each actor completes their move
  function handleTurnCompletion(currentActor: 'player' | 'enemy') {
    if (currentActor === 'player') {
      setRoundStage('enemy');
    } else {
      processEndOfRoundStatusEffects();
      setRoundStage('player');
    }
  }

  const runEnemyTurn = () => {
    setIsAnimating(true); // Start animation
    const enemyMove = enemyAbilities[Math.floor(Math.random() * enemyAbilities.length)];
    setLog(prev => [...prev, `> Enemy used ${enemyMove.name}`]);

    setTimeout(() => { // Delay enemy attack response
      setTimeout(() => { // Delay damage application
        // Check for stun on enemy
        const isEnemyStunned = enemyStatusEffects.some(effect => effect.type === 'stun');
        if (isEnemyStunned) {
          setLog(prev => [...prev, `> Enemy is stunned and cannot act!`]);
          // Remove stun effect after turn
          setEnemyStatusEffects(prev => prev.filter(effect => effect.type !== 'stun'));
        } else {
          // Apply enemy ability effects
          enemyMove.effects?.forEach(effect => {
            if (effect.type === 'shield') {
              setPlayerStatusEffects(prev => [...prev, effect]);
              setLog(prev => [...prev, `> You gain a ${effect.value} point shield.`]);
            } else if (effect.type === 'burn') {
              setPlayerStatusEffects(prev => [...prev, effect]);
              setLog(prev => [...prev, `> You are burned for ${effect.duration} turn(s).`]);
            } else if (effect.type === 'stun') {
              setPlayerStatusEffects(prev => [...prev, effect]);
              setLog(prev => [...prev, `> You are stunned for ${effect.duration} turn(s).`]);
            } else if (effect.type === 'buff') {
              setPlayerStatusEffects(prev => [...prev, effect]);
              setLog(prev => [...prev, `> You gain a buff to ${effect.stat} for ${effect.duration} turn(s).`]);
            } else if (effect.type === 'debuff') {
              setPlayerStatusEffects(prev => [...prev, effect]);
              setLog(prev => [...prev, `> You suffer a debuff to ${effect.stat} for ${effect.duration} turn(s).`]);
            }
          });
          
          if (enemyMove.damage > 0) {
            applyDamageWithShield(
              playerHP,
              setPlayerHP,
              playerStatusEffects,
              setPlayerStatusEffects,
              enemyMove.damage,
              enemyMove.name,
              "You",
              setPlayerDamage,
              setWasJustPlayerDamaged,
              setPlayerDefeated,
              setWinner
            );
          }
        }
        setIsAnimating(false); // End animation
        handleTurnCompletion('enemy'); // Enemy turn completed
      }, 600); // Delay to allow animation (~600ms)
    }, 2000); // 2-second pause before enemy strikes
  };

  const handleAbilityUse = (ability: Ability) => {
    setIsAnimating(true); // Start animation
    setLog(prev => [...prev, `> You used ${ability.name}`]);

    // Check for stun on player
    const isPlayerStunned = playerStatusEffects.some(effect => effect.type === 'stun');
    if (isPlayerStunned) {
      setLog(prev => [...prev, `> You are stunned and cannot act!`]);
      // Remove stun effect after turn
      setPlayerStatusEffects(prev => prev.filter(effect => effect.type !== 'stun'));
      setTimeout(() => {
        setIsAnimating(false);
        // Player's turn effectively ends, but enemy turn is initiated.
        // handleTurnCompletion('player') will be called after enemy turn is initiated.
        runEnemyTurn();
      }, 600);
      return;
    }

    // Apply player ability effects
    ability.effects?.forEach(effect => {
      if (effect.type === 'shield') {
        setPlayerStatusEffects(prev => [...prev, effect]);
        setLog(prev => [...prev, `> You gain a ${effect.value} point shield.`]);
      } else if (effect.type === 'burn') {
        setEnemyStatusEffects(prev => [...prev, effect]);
        setLog(prev => [...prev, `> Enemy is burned for ${effect.duration} turn(s).`]);
      } else if (effect.type === 'stun') {
        setEnemyStatusEffects(prev => [...prev, effect]);
        setLog(prev => [...prev, `> Enemy is stunned for ${effect.duration} turn(s).`]);
      } else if (effect.type === 'buff') {
        setPlayerStatusEffects(prev => [...prev, effect]);
        setLog(prev => [...prev, `> You gain a buff to ${effect.stat} for ${effect.duration} turn(s).`]);
      } else if (effect.type === 'debuff') {
        setEnemyStatusEffects(prev => [...prev, effect]);
        setLog(prev => [...prev, `> Enemy suffers a debuff to ${effect.stat} for ${effect.duration} turn(s).`]);
      }
    });

    setTimeout(() => { // Delay damage application
      if (ability.damage > 0) {
        applyDamageWithShield(
          enemyHP,
          setEnemyHP,
          enemyStatusEffects,
          setEnemyStatusEffects,
          ability.damage,
          ability.name,
          "Enemy",
          setEnemyDamage,
          setWasJustEnemyDamaged,
          setEnemyDefeated,
          setWinner
        );
      }
      setIsAnimating(false); // End animation
      setTimeout(() => {
        if (enemyHP > 0) { // Only run enemy turn if enemy is not defeated
          runEnemyTurn();
        }
        handleTurnCompletion('player'); // Player turn completed
      }, 600); // Delay for enemy turn after player attack animation
    }, 600); // Delay to allow animation (~600ms)
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
  };

  // Process status effects at the end of each turn (OLD LOGIC - REPLACED BY processEndOfRoundStatusEffects)
  // useEffect(() => {
  //   if (battleOver || isAnimating || roundStage === 'enemy') return; // Only process at end of player's turn for burn etc.

  //   const processImmediateEffects = (
  //     currentHP: number,
  //     currentEffects: StatusEffect[],
  //     setHP: React.Dispatch<React.SetStateAction<number>>,
  //     // setEffects: React.Dispatch<React.SetStateAction<StatusEffect[]>>, // Duration is handled by processEndOfRoundStatusEffects
  //     characterName: string
  //   ) => {
  //     let newHP = currentHP;
  //     currentEffects.forEach(effect => { // Iterate, don't filter here for duration
  //       if (effect.type === 'burn') {
  //         const burnDamage = effect.value || 0;
  //         newHP -= burnDamage;
  //         setLog(prev => [...prev, `> ${characterName} takes ${burnDamage} burn damage.`]);
  //       }
  //       // Duration is handled by processEndOfRoundStatusEffects
  //     });
  //     setHP(hp => Math.max(0, newHP)); // Ensure HP doesn't go below 0
  //     // setEffects(updatedEffects); // Duration is handled by processEndOfRoundStatusEffects
  //   };

  //   // Process player immediate effects (like burn)
  //   processImmediateEffects(playerHP, playerStatusEffects, setPlayerHP, "You");

  //   // Process enemy immediate effects (like burn)
  //   processImmediateEffects(enemyHP, enemyStatusEffects, setEnemyHP, "Enemy");

  // }, [isAnimating, battleOver, roundStage, playerHP, enemyHP, playerStatusEffects, enemyStatusEffects]);


  // Apply burn/poison damage at the START of the respective character's turn
  useEffect(() => {
    if (battleOver || isAnimating) return;

    if (roundStage === 'player') {
      const playerBurnEffect = playerStatusEffects.find(e => e.type === 'burn');
      if (playerBurnEffect && playerBurnEffect.value && playerHP > 0 && enemyHP > 0) { // Check HPs to prevent DOT on already defeated
        applyDamageWithShield(
          playerHP,
          setPlayerHP,
          playerStatusEffects,
          setPlayerStatusEffects,
          playerBurnEffect.value,
          "Burn",
          "You",
          setPlayerDamage,
          setWasJustPlayerDamaged,
          setPlayerDefeated,
          setWinner
        );
      }
      // Add poison logic similarly if needed
    } else { // roundStage === 'enemy'
      const enemyBurnEffect = enemyStatusEffects.find(e => e.type === 'burn');
      if (enemyBurnEffect && enemyBurnEffect.value && enemyHP > 0 && playerHP > 0) { // Check HPs
        applyDamageWithShield(
          enemyHP,
          setEnemyHP,
          enemyStatusEffects,
          setEnemyStatusEffects,
          enemyBurnEffect.value,
          "Burn",
          "Enemy",
          setEnemyDamage,
          setWasJustEnemyDamaged,
          setEnemyDefeated,
          setWinner
        );
      }
      // Add poison logic similarly if needed
    }
  }, [roundStage, battleOver, isAnimating]); // Dependencies might need playerHP, enemyHP if DOT depends on current HP for some reason, but applyDamageWithShield gets current HP


  return (
    <div className="screen font-mono text-green-400 bg-black min-h-screen p-4 relative flex flex-col justify-between">
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
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-full flex justify-center pointer-events-none z-10">
            {playerDamage !== null && playerDamage !== 0 && ( // Only show if there's actual damage/healing
              <DamageNumber value={playerDamage} keyId={`player-dmg-${Date.now()}-${playerDamage}`} type={playerDamageType} />
            )}
          </div>
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
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-full flex justify-center pointer-events-none z-10">
            {enemyDamage !== null && enemyDamage !== 0 && ( // Only show if there's actual damage/healing
              <DamageNumber value={enemyDamage} keyId={`enemy-dmg-${Date.now()}-${enemyDamage}`} type={enemyDamageType} />
            )}
          </div>
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