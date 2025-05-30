import React from 'react';

const ScanlineOverlay: React.FC = () => {
  return (
    <div
      className="absolute top-0 left-0 w-full h-full pointer-events-none"
      style={{
        background: 'repeating-linear-gradient(0deg, rgba(0,0,0,0), rgba(0,0,0,0.3) 5px, rgba(0,0,0,0.3) 5px, rgba(0,0,0,0) 10px)'
      }}
    ></div>
  );
};

export default ScanlineOverlay;