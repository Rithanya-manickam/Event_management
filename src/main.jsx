import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FeedbackProvider } from './context/FeedbackContext';

import './index.css'
import './App.css';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FeedbackProvider>
      <App />
    </FeedbackProvider>
  </StrictMode>,
)
