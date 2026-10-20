import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles.css'
import { startUpdateCheck } from './updateCheck.js'

startUpdateCheck()

createRoot(document.getElementById('root')).render(<App />)
