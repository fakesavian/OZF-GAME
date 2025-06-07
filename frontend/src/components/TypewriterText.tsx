import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
  speed?: number;
  onComplete?: () => void; // Optional callback when typing finishes
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({ text = "", speed = 20, onComplete }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    setDisplayedText(""); // Reset when text changes
    if (!text) return;

    let i = 0;
    const intervalId = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(prev => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(intervalId);
        if (onComplete) {
          onComplete();
        }
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed, onComplete]);

  return <pre className="whitespace-pre-wrap">{displayedText}</pre>;
};

export default TypewriterText;