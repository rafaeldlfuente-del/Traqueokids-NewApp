import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Service Worker registration for PWA compliance
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    console.log('App: Attempting to register SW...');
    navigator.serviceWorker.register('sw.js')
      .then(registration => {
        console.log('App: SW registered with scope:', registration.scope);
      })
      .catch(err => {
        console.error('App: SW registration failed:', err);
      });
  });
}

console.log('App: Initializing React root...');
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
