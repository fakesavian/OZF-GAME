import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // New import
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ScreenLoaderProvider } from './context/ScreenLoaderContext'; // New import
import { PlayerProvider } from './context/PlayerContext';
import { EffectSequenceProvider } from './utils/EffectSequenceManager';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <PlayerProvider>
        <ScreenLoaderProvider>
          <EffectSequenceProvider>
            <App />
          </EffectSequenceProvider>
        </ScreenLoaderProvider>
      </PlayerProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
