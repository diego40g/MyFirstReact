import './App.css'
import Contador from "./components/Contador"
import Cards from './components/Cards'

function App() {
  return (
    <>
    <Contador inicial={5} factor={3} />
    <Cards/>
    </>
  )
}

export default App
