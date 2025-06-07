import React from 'react';
import TypewriterText from '../../../components/TypewriterText'; // Adjusted path
import { motion } from 'framer-motion'; // Assuming framer-motion is installed
// Import LoreFragment and LoreChoice from the source file
import { LoreFragment, LoreChoice } from '../LoreEvents';


interface LorePopupProps {
  activeLore: LoreFragment; // Use the full LoreFragment type
  onClose: () => void;
  onChoiceMade?: (choice: LoreChoice) => void; // Optional: only if choices exist
}

const LorePopup: React.FC<LorePopupProps> = ({ activeLore, onClose, onChoiceMade }) => {
  if (!activeLore) return null;

  const handleChoiceClick = (choice: LoreChoice) => {
    if (onChoiceMade) {
      onChoiceMade(choice);
    }
    // onClose(); // Decide if popup should close immediately after a choice or if StoryModeScreen handles it
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-2xl bg-black border-2 border-green-400 p-6 font-mono text-green-400 text-lg shadow-2xl crt-glow z-50"
      style={{ boxShadow: '0 0 15px #0f0, 0 0 25px #0f0 inset' }} // CRT glow effect
    >
      <h2 className="text-2xl mb-4 border-b border-green-500 pb-2">{activeLore.title}</h2>
      <TypewriterText text={activeLore.text} speed={30} />

      {activeLore.choices && activeLore.choices.length > 0 && (
        <div className="mt-6 pt-4 border-t border-green-700">
          <h3 className="text-xl mb-3 text-yellow-400">Make a choice:</h3>
          <div className="flex flex-col space-y-3">
            {activeLore.choices.map((choice) => (
              <button
                key={choice.id}
                onClick={() => handleChoiceClick(choice)}
                className="ascii-arrow text-left p-2 hover:bg-green-700 transition-colors duration-150"
              >
                &gt; {choice.text}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Close button is always present, but its behavior might be overridden by choices */}
      <button
        onClick={onClose} // This might be redundant if choices always lead to closure or new state
        className="absolute top-3 right-3 text-red-500 hover:text-red-300 text-2xl font-bold transition-all crt-glitch-hover"
        aria-label="Close Lore"
        style={{ textShadow: '0 0 5px #f00' }} // Red glow for X
      >
        ✕
      </button>
    </motion.div>
  );
};

export default LorePopup;