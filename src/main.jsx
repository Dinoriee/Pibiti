import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ReviewProvider } from './context/ReviewContext.jsx'
import './style.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReviewProvider>
      <App />
    </ReviewProvider>
  </StrictMode>,
)
