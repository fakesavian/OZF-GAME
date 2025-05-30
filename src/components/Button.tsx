import React from 'react';

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<Props> = ({ children, onClick }) => {
  return (
    <button
      className="bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;