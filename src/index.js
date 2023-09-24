import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import ThemeProvider from './providers/ThemeProvider'

import App from './components/App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
