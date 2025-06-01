import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// Import types.ts to ensure TypeScript picks up global declarations,
// though typically not needed if tsconfig includes all .ts files.
import './types';


const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);