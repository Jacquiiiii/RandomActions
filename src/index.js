// External Imports
import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import App from './components/App'

// Provider Imports
import ThemeProvider from './providers/ThemeProvider'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
