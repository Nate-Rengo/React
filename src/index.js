import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import for React 18
import './index.css'; // Import any global CSS styles
import MyApp from './App'; // Import your main app component

// Use ReactDOM.createRoot() to create a root for your app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render your app into the root element
root.render(
  <React.StrictMode>
    <MyApp /> {/* Your main component */}
  </React.StrictMode>
);
