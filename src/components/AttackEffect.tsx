import React, { useEffect } from 'react';

interface AttackEffectProps {
  variant?: 'burst' | 'slash';
  onComplete?: () => void;
}

const AttackEffect: React.FC<AttackEffectProps> = ({ variant = 'burst', onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete && onComplete();
    }, 400); // Match CSS animation duration
    return () => clearTimeout(timer);
  }, [onComplete]);

  return <div className={`attack-effect ${variant}`} />;
};

export default AttackEffect;
