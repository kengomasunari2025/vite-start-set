import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
// git clone https://github.com/kengomasunari2025/vite-start-set.git
// cd 20250128
// git config --global user.name "kengomasunari2025"
// git config --global user.email "kengomasunari2025@gmail.com"
// git push origin main
// git pull origin main