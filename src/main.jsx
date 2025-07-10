// src/main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { ReviewProvider } from './context/ReviewContext.jsx';
import { AhliProvider } from './context/AhliContext.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ReviewProvider>
        <AhliProvider>
          <App />
        </AhliProvider>
      </ReviewProvider>
    </BrowserRouter>
  </StrictMode>,
);