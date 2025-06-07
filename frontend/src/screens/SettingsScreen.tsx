import React from 'react';
import { useNavigate } from 'react-router-dom';

const SettingsScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="screen font-mono text-green-400 bg-black h-screen p-6 relative">
      <button className="absolute top-2 right-4 text-xl" onClick={() => navigate(-1)}>✕</button>
      <h1 className="text-2xl mb-6 border-b border-green-400 pb-2">⚙ Settings</h1>

      <div className="space-y-6">
        <div>
          <label className="block mb-1">Sound</label>
          <input type="range" min="0" max="100" className="w-full accent-green-400" />
        </div>
        <div>
          <label className="block mb-1">Difficulty</label>
          <select className="w-full bg-black border border-green-400 text-green-400 p-2">
            <option>Easy</option>
            <option>Normal</option>
            <option>Hard</option>
          </select>
        </div>
        <div>
          <label className="block mb-1">CRT Screen Flicker</label>
          <input type="checkbox" className="accent-green-400" />
        </div>
      </div>
    </div>
  );
};

export default SettingsScreen;