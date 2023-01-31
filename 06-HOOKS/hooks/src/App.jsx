import Calculadora from "./components/Calculadora";
import StateUse from "./components/State-use"
import EffectUse from "./components/Effect-use"
import './App.css'
import FormPreventDefault from "./components/Form-PreventDefault";
import EffectAsync from "./components/Effect-async";
import EffectUseDependency from "./components/Effect-use-dependency";
import EffectUseDanger from "./components/Effect-use-danger";
import EffectUseCleanUp from "./components/Effect-use-clean-up";
import EffectUseLayout from "./components/Effect-use-layout";
import RefUse from "./components/Ref-use";
import Memorize from "./components/memos/Memorize";
import CallbackUse from "./components/memos/Callback-use";

const App = () => {
  return (
    <div className="container text-center">
    {/* <StateUse/>
    <EffectUse/> */}
    <CallbackUse/>
    </div>
    // <div className="container text-center">
    //   <h1>Calculadora React PWA</h1>
    //   <hr />
    //   <Calculadora/>
    // </div>
  )
}

export default App
