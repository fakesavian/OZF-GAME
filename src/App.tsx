import React from 'react';
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { BootSequence } from "./screens/BootSequence";
import { LoginScreen } from "./screens/LoginScreen";
import MenuScreen from "./screens/MainMenu";
import BattleScreen from "./screens/BattleScreen";
import InventoryScreen from "./screens/InventoryScreen";
import CharacterScreen from "./screens/CharacterScreen";
import { useEffect, useState } from "react";

// Wrapper for BattleScreen to handle navigation prop
const BattleScreenWrapper = () => {
  const navigate = useNavigate();
  const handleQuit = () => {
    navigate("/menu");
  };
  return <BattleScreen onQuit={handleQuit} />;
};

function App() {
  const seenBoot = sessionStorage.getItem('seenBoot');
  const initialRoute = seenBoot ? "/menu" : "/"; // Changed from /title to /menu as per existing routes

  return (
    <Routes>
      <Route path="/" element={<BootWrapper />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/menu" element={<MenuScreen />} />
      <Route path="/battle" element={<BattleScreenWrapper />} />
      <Route path="/inventory" element={<InventoryScreen />} />
      <Route path="/character" element={<CharacterScreen />} />
      <Route path="*" element={<Navigate to={initialRoute} />} />
    </Routes>
  );
}

// BootWrapper handles boot transition
const BootWrapper = () => {
  const navigate = useNavigate();
  const seenBoot = sessionStorage.getItem('seenBoot');
  if (seenBoot) {
    return <Navigate to="/menu" />;
  }
  return <BootSequence onContinue={() => navigate("/login")} />;
};

export default App;
