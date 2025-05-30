import React from 'react';

interface Props {
  text: string;
}

const GlitchText: React.FC<Props> = ({ text }) => {
  return (
    <div className="relative">
      <span className="text-white">{text}</span>
      <span className="absolute top-0 left-0 text-white animate-glitch">{text}</span>
    </div>
  );
};

export default GlitchText;