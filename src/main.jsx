import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import { ThemeProvider } from 'styled-components'
import { BrowserRouter, HashRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <App />
  </HashRouter>,
)
