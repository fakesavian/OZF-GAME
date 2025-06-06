import React from 'react';
import type { LucideIcon } from 'lucide-react';
import {
  Flame,
  Bolt,
  Shield,
  ArrowUpCircle,
  ArrowDownCircle,
  Biohazard,
} from 'lucide-react';
import type { StatusEffectType } from '../context/PlayerContext';

const iconMap: Record<StatusEffectType, LucideIcon> = {
  burn: Flame,
  stun: Bolt,
  shield: Shield,
  buff: ArrowUpCircle,
  debuff: ArrowDownCircle,
  poison: Biohazard,
};

interface StatusEffectIconProps {
  type: StatusEffectType;
  size?: number | string;
  className?: string;
}

const StatusEffectIcon: React.FC<StatusEffectIconProps> = ({ type, size = 16, className }) => {
  const Icon = iconMap[type];
  return <Icon size={size} className={className} />;
};

export default StatusEffectIcon;
