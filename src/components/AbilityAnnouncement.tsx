import React from 'react';
import { motion } from 'framer-motion';

interface AbilityAnnouncementProps {
  name: string;
}

const AbilityAnnouncement: React.FC<AbilityAnnouncementProps> = ({ name }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.2 }}
      className="absolute -top-8 px-2 py-1 bg-black bg-opacity-80 border border-green-400 rounded text-green-300 text-sm glitch-text pointer-events-none"
    >
      {name}
    </motion.div>
  );
};

export default AbilityAnnouncement;
