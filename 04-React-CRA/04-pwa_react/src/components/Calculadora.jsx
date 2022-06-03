import { useState } from 'react'
import NumberInput from './NumberInput';

const Calculadora = () => {
  const [suma, setSuma] = useState(0);
  return (
    <div>
        <NumberInput name="Número 1"/>
        <NumberInput name="Número 2"/>
        <br/>
        <span>Suma: {suma}</span>
    </div>
  )
}

export default Calculadora