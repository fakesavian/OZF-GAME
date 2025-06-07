import React from 'react';

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "default" | "outline";
}

const Button: React.FC<Props> = ({ children, onClick, variant }) => {
  const buttonStyle =
    variant === "outline"
      ? "border border-green-500 bg-transparent hover:bg-green-700 text-green-400"
      : "bg-green-700 hover:bg-green-500 text-white";

  return (
    <button
      className={`${buttonStyle} font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;