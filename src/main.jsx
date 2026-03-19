import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import emailjs from '@emailjs/browser'
import { initAnalytics } from './utils/analytics'

// Initialize EmailJS with the public key (Vite env variable)
try {
  const userId = import.meta.env.VITE_EMAILJS_USER_ID;
  if (userId) emailjs.init(userId);
  else console.debug('VITE_EMAILJS_USER_ID not set; EmailJS not initialized');
} catch (err) {
  console.debug('Error initializing EmailJS:', err);
}

try {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  if (measurementId) initAnalytics(measurementId);
  else console.debug('VITE_GA_MEASUREMENT_ID not set; analytics not initialized');
} catch (err) {
  console.debug('Error initializing analytics:', err);
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
