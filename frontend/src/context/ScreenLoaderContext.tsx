import React, { createContext, useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const ScreenLoaderContext = createContext<{ isLoading: boolean }>({ isLoading: false });

export const ScreenLoaderProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => setIsLoading(false), 1000); // 1 second transition
    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <ScreenLoaderContext.Provider value={{ isLoading }}>
      {children}
    </ScreenLoaderContext.Provider>
  );
};

export const useScreenLoader = () => useContext(ScreenLoaderContext);