import React from 'react';

interface Props {
  messages: string[];
}

const CombatLog: React.FC<Props> = ({ messages }) => {
  return (
    <div className="h-32 overflow-y-auto text-sm text-gray-400">
      {messages.map((message, index) => (
        <div key={index}>{message}</div>
      ))}
    </div>
  );
};

export default CombatLog;