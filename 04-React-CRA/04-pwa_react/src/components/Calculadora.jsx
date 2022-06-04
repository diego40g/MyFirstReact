import { useState } from 'react'
import NumberInput from './NumberInput';
import Result from './Result';

const Calculadora = () => {
  const [suma, setSuma] = useState(50);
  
  return (
    <div>
        <NumberInput name="Número 1"/>
        <br/>
        <Result operacion='Suma' calculo={suma}/>
        <Result operacion='Resta' calculo={suma}/>
        <Result operacion='Multiplicación' calculo={suma}/>
        <Result operacion='Divición' calculo={suma}/>
    </div>
  )
}

export default Calculadora