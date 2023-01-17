import React, { useState } from 'react'

const Contador = ({inicial,factor}) => {
  //console.log(React);
  const [rContador, setRContador] = React.useState(101)
  const [contador, setContador] = useState(10);
  const [pContador, setPContador]=useState(inicial);

  //console.log(props.inicial)

  const aumentar=()=>{
    setContador((actual)=>{//valor es el estado actual
      //console.log(actual);
      return actual+1;
    });
    setPContador((actual)=>actual+factor);
  }
  const disminuir=()=>{
    setContador(contador-1);
    setPContador(pContador-factor);
  }

  return (
    <div>
        <h1>Contador-React: {rContador}</h1>
        <h1>Contador-Props: {pContador}</h1>
        <h1>Contador: {contador}</h1>
        <hr/>

        <button onClick={aumentar}>Aumentar</button>
        <button onClick={disminuir}>Disminuir</button>
    </div>
  );
};

export default Contador