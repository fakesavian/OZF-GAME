import { useNavigate } from 'react-router-dom';

const MainMenuScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="screen font-mono text-green-400 bg-black h-screen flex flex-col items-center justify-center space-y-4 p-4">
      <div className="relative crt-scanline mb-8">
        <pre className="crt-title text-green-400 text-xs leading-none text-center font-mono">
{String.raw`
 _____                                                _____
( ___ )                                              ( ___ )
 |   |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|   |
 |   |     __    ___ _       ____    ________________ |   |
 |   |    / /   /   | |     / / /   / ____/ ___/ ___/ |   |
 |   |   / /   / /| | | /| / / /   / __/  \__ \\__ \  |   |
 |   |  / /___/ ___ | |/ |/ / /___/ /___ ___/ /__/ /  |   |
 |   | /_____/_/ _|_|__/|__/_____/_____//____/____/   |   |
 |   |    / /   /   |  / | / / __ \/ ___/             |   |
 |   |   / /   / /| | /  |/ / / / /\__ \              |   |
 |   |  / /___/ ___ |/ /|  / /_/ /___/ /              |   |
 |   | /_____/_/  |_/_/ |_/_____//____/               |   |
 |___|~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|___|
(_____)                                              (_____)
`}
        </pre>
      </div>

      <button
        onClick={() => navigate('/battle')}
        className="border border-green-400 px-6 py-2 hover:bg-green-900 transition-all w-64 text-left"
      >
        ▶ Battle Mode
      </button>

      <button
        onClick={() => navigate('/character')}
        className="border border-green-400 px-6 py-2 hover:bg-green-900 transition-all w-64 text-left"
      >
        ▶ Character
      </button>

      <button
        onClick={() => navigate('/inventory')}
        className="border border-green-400 px-6 py-2 hover:bg-green-900 transition-all w-64 text-left"
      >
        ▶ Inventory
      </button>

      <button
        onClick={() => navigate('/settings')}
        className="border border-green-400 px-6 py-2 hover:bg-green-900 transition-all w-64 text-left"
      >
        ▶ Settings
      </button>
    </div>
  );
};

export default MainMenuScreen;