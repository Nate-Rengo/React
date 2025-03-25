import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Optional: if you have any global CSS
import MyApp from './App';  // Import your MyApp component
import { BrowserRouter } from 'react-router-dom';  // Import Router for routing

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename="/React">
    <MyApp />
  </BrowserRouter>
);
