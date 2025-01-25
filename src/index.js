import ReactDOM from 'react-dom/client';  // Corrigindo a importação
import React from 'react';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Método adequado para React 18
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
