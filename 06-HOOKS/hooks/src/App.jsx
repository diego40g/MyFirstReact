import Calculadora from "./components/Calculadora";
import StateUse from "./components/State-use"
import EffectUse from "./components/Effect-use"
import './App.css'
import FormPreventDefault from "./components/Form-PreventDefault";

const App = () => {
  return (
    <div className="container text-center">
    {/* <StateUse/>
    <EffectUse/> */}
    <FormPreventDefault/>
    </div>
    // <div className="container text-center">
    //   <h1>Calculadora React PWA</h1>
    //   <hr />
    //   <Calculadora/>
    // </div>
  )
}

export default App
