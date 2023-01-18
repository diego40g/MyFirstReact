import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const nombre="Diego"
  return (
    <div className="App">
      <header>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h1>{nombre}</h1>
        <pre>{new Date().getDate()}</pre>
      </header>
    </div>
  )
}

export default App
