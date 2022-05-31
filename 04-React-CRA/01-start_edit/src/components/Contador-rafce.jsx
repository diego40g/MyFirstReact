import React, { useState } from 'react'

const Contador = () => {
  //console.log(React);
  const [rContador, setRContador] = React.useState(101)
  const [contador, setContador] = useState(101);
  return (
    <div>
        <h1>Contador-React: {rContador}</h1>
        <h1>Contador: {contador}</h1>
    </div>
  );
};

export default Contador