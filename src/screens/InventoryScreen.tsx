import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { items, usePlayer } from '../context/PlayerContext';

const InventoryScreen = () => {
  const navigate = useNavigate();
  const { equip, consumeItem, equipped } = usePlayer();
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const selected = items[selectedItemIndex];

  const next = () => setSelectedItemIndex((selectedItemIndex + 1) % items.length);
  const prev = () => setSelectedItemIndex((selectedItemIndex - 1 + items.length) % items.length);

  return (
    <div className="screen font-mono text-green-400 bg-black min-h-screen p-4 relative">
      {/* Back Button */}
      <button onClick={() => navigate(-1)} className="absolute top-2 left-4 text-xl">✕</button>

      {/* Title */}
      <h1 className="text-center text-xl mb-4 border-b border-green-400 pb-2">INVENTORY</h1>

      {/* Main Layout */}
      <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 md:space-x-6 h-full">
        
        {/* Inventory Grid */}
        <div className="grid grid-cols-2 gap-4 w-full md:w-2/3">
          {items.map((item, index) => {
            const equippedName = equipped[item.type as 'Weapon' | 'Armor' | 'Trinket']?.name;
            const isEquipped = equippedName === item.name;
            return (
              <button
                key={index}
                className={`border p-4 text-left hover:bg-green-900 transition-all ${
                  index === selectedItemIndex ? 'border-green-300' : 'border-green-400'
                } ${isEquipped ? 'bg-green-800' : ''}`}
                onClick={() => setSelectedItemIndex(index)}
              >
                <p className="text-sm">{item.name}</p>
                <p className="text-xs text-green-300">{item.type}</p>
              </button>
            );
          })}
        </div>

        {/* Item Detail Panel */}
        <div className="flex-1 border border-green-400 p-4 relative">
          <div className="absolute top-2 right-2 space-x-2">
            <button onClick={prev} className="hover:text-green-300">◀</button>
            <button onClick={next} className="hover:text-green-300">▶</button>
          </div>
          <h2 className="text-lg border-b border-green-400 pb-1 mb-2">{selected.name}</h2>
          <p className="text-green-300 text-sm mb-2">{selected.type}</p>
          <p className="text-xs text-green-400">{selected.description}</p>
          <div className="mt-4">
            {selected.type === 'Consumable' ? (
              <button
                onClick={() => consumeItem(selected)}
                className="border px-3 py-1 hover:bg-green-900"
              >
                Use
              </button>
            ) : (
              <button
                onClick={() => equip(selected)}
                className="border px-3 py-1 hover:bg-green-900"
              >
                Equip
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryScreen;