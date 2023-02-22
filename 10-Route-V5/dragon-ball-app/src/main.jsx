import React from 'react'
import ReactDOM, { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App'
import ReloadPrompt from './ReloadPrompt'

const container = document.getElementById("root")

if (container.hasChildNodes()){
  const root = hydrateRoot(container,<><ReloadPrompt/><App/></>)
} else {
  const root = createRoot(container)
  root.render(<><ReloadPrompt/><App/></>)
}

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <ReloadPrompt />
//     <App />
//   </React.StrictMode>,
// )
