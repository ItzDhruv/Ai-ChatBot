import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ContextProvider from './context/context.jsx'
import Web3Wrapper from './components/Web3Wrapper.jsx'

createRoot(document.getElementById('root')).render(

  <ContextProvider>
<Web3Wrapper>
    <App />
</Web3Wrapper>
  </ContextProvider>
)
