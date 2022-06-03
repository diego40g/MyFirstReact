import { useState } from 'react'

const Calculadora = () => {
  const [suma, setSuma] = useState(0);
  return (
    <div>
        <label>
            Número 1: 
            <input type="text" />
        </label>
        <label>
            Número 2: 
            <input type="text" />
        </label>
        <br/>
        <span>Suma: {suma}</span>
    </div>
  )
}

export default Calculadora