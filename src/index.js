import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Correct import for React 18
import App from "./App";

// Get the root element from index.html
const rootElement = document.getElementById("root");

// Create a root and render the app
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);