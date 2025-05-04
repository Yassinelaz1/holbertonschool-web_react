import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'
import Notifications from './Notifications.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Notifications />
    <App />
  </StrictMode>,
)
