import React from 'react';
import ReactDOM from 'react-dom/client';
import MainMenu from './components/MainMenu';

import App from './app';

import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);