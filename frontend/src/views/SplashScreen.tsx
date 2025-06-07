import React from 'react';
import GlitchText from '../components/GlitchText';
import { useNavigate } from 'react-router-dom';

const SplashScreen: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/main-menu');
  };

  return (
    <div className="flex flex-col items-center justify-center h-full bg-black text-green-500" onClick={handleClick}>
      <GlitchText text="OZF Game" />
      <p className="text-sm mt-4">Click to Enter</p>
    </div>
  );
};

export default SplashScreen;