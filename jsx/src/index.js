// Import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Reference the root div
const element = document.getElementById('root');

// Take control of root
const root = ReactDOM.createRoot(element);

// Show component
root.render(<App />);