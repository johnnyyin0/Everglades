import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Modal from './Modal'
import './index.css'

ReactDOM.createRoot(document.getElementById('modal')).render(
  <React.StrictMode>
    <Modal />
  </React.StrictMode>
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
