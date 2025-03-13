import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Rout from './Rout.jsx'
import './main.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Rout />
  </StrictMode>,
)
