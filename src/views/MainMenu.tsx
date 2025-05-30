import React from 'react';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const MainMenu: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-full bg-black text-green-500">
      <h1 className="text-2xl font-bold mb-4">OZF Game</h1>
      <Button onClick={() => navigate('/battle')} >Battle</Button>
      <Button onClick={() => navigate('/character')} >Character</Button>
      <Button onClick={() => navigate('/inventory')} >Inventory</Button>
      <Button onClick={() => navigate('/settings')} >Settings</Button>
    </div>
  );
};

export default MainMenu;