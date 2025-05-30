import { useNavigate } from "react-router-dom";
import { useState } from "react";

const MainMenu = () => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState<string | null>(null);

  const menuItems = [
    { label: "Battle Mode", action: () => navigate("/battle") },
    { label: "Character", action: () => console.log("character") },
    { label: "Inventory", action: () => console.log("inventory") },
    { label: "Settings", action: () => console.log("settings") },
  ];

  return (
    <div
      style={{
        backgroundColor: "#000",
        color: "#00ffcc",
        fontFamily: "monospace",
        height: "100vh",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <pre style={{ fontSize: "1.5rem", marginBottom: "2rem" }}>
{String.raw`
 ________  ________  ________  ___       ___     
|\   __  \|\   __  \|\   ____\|\  \     |\  \    
\ \  \|\  \ \  \|\  \ \  \___|\ \  \    \ \  \   
 \ \   ____\ \   __  \ \  \    \ \  \  __\ \  \  
  \ \  \___|\ \  \ \  \ \  \____\ \  \|\__\_\  \ 
   \ \__\    \ \__\ \__\ \_______\ \____________\
    \|__|     \|__|\|__|\|_______|\|____________|
`}
      </pre>

      <ul style={{ listStyle: "none", padding: 0, width: "100%", maxWidth: "400px" }}>
        {menuItems.map((item, index) => (
          <li
            key={index}
            onMouseEnter={() => setHovered(item.label)}
            onMouseLeave={() => setHovered(null)}
            onClick={item.action}
            style={{
              padding: "1rem",
              margin: "0.5rem 0",
              border: "1px solid #00ffcc",
              backgroundColor: hovered === item.label ? "#003333" : "transparent",
              cursor: "pointer",
              transition: "all 0.2s ease",
              textAlign: "center",
              fontWeight: hovered === item.label ? "bold" : "normal",
            }}
          >
            ▶ {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainMenu;