import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SplashScreen from "./screens/SplashScreen";
import MainMenu from "./screens/MainMenu";
import BattleScreen from "./screens/BattleScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/menu" element={<MainMenu />} />
        <Route path="/battle" element={<BattleScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
