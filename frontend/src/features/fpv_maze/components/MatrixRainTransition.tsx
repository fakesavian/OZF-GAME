import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './matrixRain.css'; // Import the CSS
import TypewriterText from '../../../components/TypewriterText'; // For optional log

interface MatrixRainTransitionProps {
  target?: string; // Default will be '/battle'
  onTransitionEnd?: () => void; // Callback when navigation occurs
  showLog?: boolean; // To control optional log display
}

const MatrixRainTransition: React.FC<MatrixRainTransitionProps> = ({ 
  target = '/battle', 
  onTransitionEnd,
  showLog = true // Default to show log
}) => {
  const navigate = useNavigate();
  const [logVisible, setLogVisible] = useState(false);
  const [startRain, setStartRain] = useState(false);

  const logText = ">> SYSTEM BREACH DETECTED\n>> INITIALIZING CONFLICT PROTOCOL...";
  const transitionDelay = 2500; // Total time for animation + log
  const logDelay = 500; // When to show the log after transition starts
  const rainStartDelay = 100; // Slight delay before rain starts for flash effect

  useEffect(() => {
    // Optional: CRT Flash
    const flashTimeout = setTimeout(() => {
      // Add flash class to body or a specific element if desired
      // document.body.classList.add('crt-flash');
      // setTimeout(() => document.body.classList.remove('crt-flash'), 300);
      setStartRain(true); // Start rain after flash
    }, rainStartDelay);
    
    const logTimer = setTimeout(() => {
      if (showLog) {
        setLogVisible(true);
      }
    }, logDelay);

    const navigationTimeout = setTimeout(() => {
      navigate(`${target}?fromStory=true`);
      if (onTransitionEnd) {
        onTransitionEnd();
      }
    }, transitionDelay);

    return () => {
      clearTimeout(flashTimeout);
      clearTimeout(logTimer);
      clearTimeout(navigationTimeout);
      // document.body.classList.remove('crt-flash'); // Clean up flash class
    };
  }, [navigate, target, onTransitionEnd, showLog, transitionDelay, logDelay, rainStartDelay]);

  return (
    <div 
      className="fixed inset-0 bg-black z-[9999] flex items-center justify-center overflow-hidden"
      // Add crt-flash here if you want the whole screen to flash
    >
      {startRain && <div className="matrixRain" />}
      {showLog && logVisible && (
        <div className="matrix-log-text">
          <TypewriterText text={logText} speed={50} />
        </div>
      )}
    </div>
  );
};

export default MatrixRainTransition;