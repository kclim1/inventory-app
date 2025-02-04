import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Dashboard} from './Dashboard.tsx'
import { BrowserRouter as Router } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
    < Dashboard/>
    </Router>
  </StrictMode>,
)
