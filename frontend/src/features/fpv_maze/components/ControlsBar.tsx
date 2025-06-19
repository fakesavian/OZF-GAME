import React from 'react';
import { InputKey } from '../../../types/maze'; // Adjusted path

interface ControlsBarProps {
  onAction: (key: InputKey) => void;
}

const ControlsBar: React.FC<ControlsBarProps> = ({ onAction }) => {
  return (
    <div className="controls-bar" style={{ marginTop: '1rem' }}>
      <div className="flex flex-col items-center gap-2">
        <button
          onClick={() => onAction('forward')}
          className="ascii-arrow p-2 bg-gray-800 rounded hover:bg-gray-700 w-12 h-12 text-xl" // Added text-xl for larger arrow
          aria-label="Move Forward"
        >
          ↑
        </button>
        <div className="flex gap-10">
          <button
            onClick={() => onAction('turnLeft')}
            className="ascii-arrow p-2 bg-gray-800 rounded hover:bg-gray-700 w-12 h-12 text-xl"
            aria-label="Turn Left"
          >
            ←
          </button>
          <button
            onClick={() => onAction('backward')}
            className="ascii-arrow p-2 bg-gray-800 rounded hover:bg-gray-700 w-12 h-12 text-xl"
            aria-label="Move Backward"
          >
            ↓
          </button>
          <button
            onClick={() => onAction('turnRight')}
            className="ascii-arrow p-2 bg-gray-800 rounded hover:bg-gray-700 w-12 h-12 text-xl"
            aria-label="Turn Right"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default ControlsBar;