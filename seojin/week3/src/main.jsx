import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Global } from '@emotion/react'
import App from './App.jsx'
import GlobalStyle from './global.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Global styles={GlobalStyle} />
    <App />
  </StrictMode>,
)
