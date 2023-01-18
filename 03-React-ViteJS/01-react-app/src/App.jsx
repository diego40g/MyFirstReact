import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

const App = () => {
  const nombre="Diego"

  const [contador, setContador] = useState(10)

  const disminuir = () => {
    setContador(contador-1)
  }
  const aumentar = () => {
    setContador(contador+1)
  }
  return (
    <div className="App">
      <header>
        <a href="https://vitejs.dev" width="250" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" width="250" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <p>
          <button onClick={disminuir}> - </button>
          <h1>{contador}</h1>
          <button onClick={aumentar}> + </button>
        </p>
      </header>
      <h2>{nombre}</h2>
      <pre>{new Date().getDate() +"/"+ new Date().getMonth() +"/"+ new Date().getFullYear()}</pre>
    </div>
  )
}

export default App
