import React from 'react'; // Import React library
import ReactDOM from 'react-dom/client'; // Import ReactDOM for rendering components
import App from './App'; // Import the main App component

// Create a root element by getting the element with the ID 'root' from the HTML
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside the root element
root.render(
  <App />
);
