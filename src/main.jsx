import React from 'react';
import { createRoot } from 'react-dom/client'; // Importa createRoot en lugar de ReactDOM
import App from './App';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
