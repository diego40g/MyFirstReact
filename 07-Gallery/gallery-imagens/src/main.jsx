import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ReloadPropmt from "./ReloadPrompt";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ReloadPropmt/>
    <App />
  </React.StrictMode>,
)
