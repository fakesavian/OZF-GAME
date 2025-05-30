import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const SplashScreen = () => {
  const navigate = useNavigate();
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setGlitch(prev => !prev), 300);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      onClick={() => navigate("/menu")}
      style={{
        background: "#000",
        color: "#00FF00",
        fontFamily: "monospace",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        cursor: "pointer",
        textAlign: "center"
      }}
    >
      <pre style={{ fontSize: "2rem", filter: glitch ? "blur(1px)" : "none" }}>
{String.raw`
   ██████╗ ███████╗███████╗
  ██╔═══██╗██╔════╝██╔════╝
  ██║   ██║█████╗  ███████╗
  ██║   ██║██╔══╝  ╚════██║
  ╚██████╔╝███████╗███████║
   ╚═════╝ ╚══════╝╚══════╝
`}
      </pre>
      <p style={{ marginTop: "1rem", opacity: glitch ? 0.3 : 1 }}>
        click to enter system...
      </p>
    </div>
  );
};

export default SplashScreen;