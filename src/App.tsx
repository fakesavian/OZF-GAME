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
import SettingsScreen from "./screens/SettingsScreen";


function App() {
  const seenBoot = sessionStorage.getItem('seenBoot');
  const initialRoute = seenBoot ? "/menu" : "/"; // Changed from /title to /menu as per existing routes

  return (
    <Routes>
      <Route path="/" element={<BootWrapper />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/menu" element={<MenuScreen />} />
      <Route path="/battle" element={<BattleScreen />} />
      <Route path="/inventory" element={<InventoryScreen />} />
      <Route path="/settings" element={<SettingsScreen />} />
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
