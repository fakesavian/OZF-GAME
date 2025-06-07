import React from 'react';

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string; // Add className prop
  style?: React.CSSProperties; // Add style prop for completeness
}

const Button: React.FC<Props> = ({ children, onClick, className, style }) => {
  const baseClasses = "bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline";
  return (
    <button
      className={`${baseClasses} ${className || ''}`} // Merge classes
      onClick={onClick}
      style={style} // Apply style prop
    >
      {children}
    </button>
  );
};

export default Button;