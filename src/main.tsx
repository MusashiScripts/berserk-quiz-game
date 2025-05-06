import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
// Supports weights 100-900
import '@fontsource-variable/roboto'

createRoot(document.getElementById('root')!).render(
    <App />
)
