import React from 'react';

interface Props {
  current: number;
  max: number;
}

const HealthBar: React.FC<Props> = ({ current, max }) => {
  const percentage = (current / max) * 100;

  return (
    <div className="w-full bg-gray-800 rounded-full h-2">
      <div
        className="bg-green-500 h-2 rounded-full"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

export default HealthBar;