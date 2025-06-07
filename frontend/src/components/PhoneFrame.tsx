import React from 'react';

interface Props {
  children: React.ReactNode;
}

const PhoneFrame: React.FC<Props> = ({ children }) => {
  return (
    <div className="relative bg-black w-64 h-96 rounded-3xl overflow-hidden">
      <div className="absolute top-2 left-2 right-2 h-2 bg-gray-800 rounded-full"></div>
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <div className="w-12 h-12 bg-gray-800 rounded-full"></div>
      </div>
      <div className="w-full h-full overflow-hidden">
        {children}
      </div>
    </div>
  );
};

export default PhoneFrame;