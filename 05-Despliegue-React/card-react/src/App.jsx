import './App.css'
import Contador from "./components/Contador"
import Card from './components/Card'

function App() {
  return (
    <>
    <Contador inicial={5} factor={3} />
    <Card/>
    </>
  )
}

export default App
