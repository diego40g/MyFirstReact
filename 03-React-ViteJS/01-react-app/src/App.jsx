import reactLogo from './assets/react.svg'
import './App.css'

const App = () => {
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
        <p>
          <button> - </button>
          <h1>10</h1>
          <button> + </button>
        </p>
      </header>
      <h2>{nombre}</h2>
      <pre>{new Date().getDate() +"/"+ new Date().getMonth() +"/"+ new Date().getFullYear()}</pre>
    </div>
  )
}

export default App
