import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePlayer } from '../context/PlayerContext';

const characters = [
  {
    name: 'Player',
    image: '/assets/images/character-default.png'
  },
  {
    name: 'Enemy',
    image: '/assets/images/enemy-default.png'
  }
];

const CharacterScreen = () => {
  const navigate = useNavigate();
  const { stats, equipped } = usePlayer();
  const [currentIndex, setCurrentIndex] = useState(0);
  const selected = characters[currentIndex];

  const prevCharacter = () => {
    setCurrentIndex((currentIndex - 1 + characters.length) % characters.length);
  };

  const nextCharacter = () => {
    setCurrentIndex((currentIndex + 1) % characters.length);
  };

  return (
    <div className="screen font-mono text-green-400 bg-black h-screen p-4 relative">
      <button className="absolute top-2 right-4 text-xl" onClick={() => navigate(-1)}>✕</button>

      <div className="flex flex-col md:flex-row justify-between h-full">
        {/* Avatar and Arrows */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
          <div className="flex items-center space-x-4">
            <button onClick={prevCharacter} className="text-2xl hover:text-green-300">◀</button>

            <img
              src={selected.image}
              alt={selected.name}
              className="w-48 h-48 object-cover border-2 border-green-400"
            />

            <button onClick={nextCharacter} className="text-2xl hover:text-green-300">▶</button>
          </div>
          <p className="mt-2 text-green-300">{selected.name}</p>
        </div>

        {/* Stats & Gear */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0 p-4">
          <h2 className="text-lg mb-2 border-b border-green-400">Stats</h2>
          <ul className="mb-4">
            <li>HP: {stats.hp}</li>
            <li>STR: {stats.str}</li>
            <li>DEX: {stats.dex}</li>
            <li>INT: {stats.int}</li>
            <li>DEF: {stats.def}</li>
          </ul>

          <h2 className="text-lg mb-2 border-b border-green-400">Equipped</h2>
          <ul>
            <li>Weapon: {equipped.Weapon?.name || 'None'}</li>
            <li>Armor: {equipped.Armor?.name || 'None'}</li>
            <li>Trinket: {equipped.Trinket?.name || 'None'}</li>
          </ul>
        </div>
      </div>

      {/* Quick Slots */}
      <div className="absolute bottom-4 w-full flex justify-center space-x-4">
        {[1, 2, 3, 4].map((_, i) => (
          <div key={i} className="w-16 h-16 border-2 border-green-400 flex items-center justify-center">
            Slot {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterScreen;