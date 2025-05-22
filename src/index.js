// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Make sure the DOM is loaded before trying to access elements
document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.getElementById('root');
  
  // Check if root element exists before creating root
  if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } else {
    console.error("Unable to find element with id 'root'. Make sure it exists in your HTML file.");
  }
});