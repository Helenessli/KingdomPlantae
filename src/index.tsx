import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <div className='bg-black w-[200px] h-[100px]'>a</div>
  </React.StrictMode>
);