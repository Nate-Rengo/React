import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MyApp from './App';
import { HashRouter } from 'react-router-dom'; 

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <HashRouter> {}
      <MyApp />
    </HashRouter>
  </React.StrictMode>
);
