import {Contador} from "./components/Contador-rafc"
import MiContador from "./components/Contador-rafce";

const App = () => {
  return (
    <div>
      <h1>Hola Diego</h1>
      <Contador/>
      <MiContador inicial={0} factor={3}/>
    </div>
  );
};

export default App
