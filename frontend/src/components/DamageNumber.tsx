import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  value: number;
  keyId: string;
  type?: 'normal' | 'crit' | 'burn' | 'heal';
}

export default function DamageNumber({ value, keyId, type = 'normal' }: Props) {
  const colorMap = {
    normal: '#FF3333', // Standard damage red
    crit: '#FF00FF',   // Magenta for crits
    burn: '#FF8844',   // Orange for burn
    heal: '#00FF88',   // Green for heal
  };

  return (
    <motion.div
      key={keyId}
      initial={{ opacity: 0, y: 0, scale: 0.8 }}
      animate={{
        opacity: [0, 1, 0], // Fade in, then fade out
        y: [-10, -40, -80], // Move upwards
        scale: [0.9, 1.2, 1.0], // Pulse effect
        rotate: [0, -3, 3, -2, 0], // Slight wobble
      }}
      transition={{
        duration: 1.2, // Animation duration
        ease: 'easeOut',
      }}
      className="absolute text-[24px] font-mono pointer-events-none" // Base styling
      style={{
        left: '50%',
        transform: 'translateX(-50%)', // Center horizontally
        color: colorMap[type], // Dynamic color based on type
        filter: type === 'heal' ? 'drop-shadow(0 0 4px #00FF88)' : 'drop-shadow(0 0 4px #ff0000)', // Dynamic shadow
        // textShadow: `0 0 5px ${colorMap[type]}, 0 0 10px ${colorMap[type]}`, // Optional: for a softer glow
      }}
    >
      {value > 0 ? `-${value}` : `+${Math.abs(value)}`}
    </motion.div>
  );
}