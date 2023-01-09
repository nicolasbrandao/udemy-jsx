// Import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom/client';

// Reference the root div
const element = document.getElementById('root');

// Take control of root
const root = ReactDOM.createRoot(element);

// Create component
function App() {
    return (
        <h1>Hi there!</h1>
    );
}

// Show component
root.render(<App />);