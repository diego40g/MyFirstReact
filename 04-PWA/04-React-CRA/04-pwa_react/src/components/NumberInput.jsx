import { useState } from 'react'
import PropTypes from 'prop-types'
import Result from './Result'

const NumberInput = () => {
  const [numeros, setNumeros] = useState({
    numero1:0,
    numero2:0
  });
  const {numero1, numero2} = numeros
  const handleChange=(e)=>{
    setNumeros({
      //spread mantiene la estrucutra inicial
      ...numeros,
      //computar una respuesta (objetos distintos al state)
      [e.target.name]: parseFloat(e.target.value),
    });
    
    //setSuma((actual)=>actual+[e.target.value])
  }

  const sumar = ()=> numero1+numero2;
  const restar = ()=> numero1-numero2;
  const multiplicar = ()=> numero1*numero2;
  const dividir = ()=> numero1/numero2;

  return (
    <>
        <label>
            Número 1:{""} 
            <input name="numero1" value={numero1} onChange={handleChange} type="number" />
        </label>
        <label>
            Número 2: {""}
            <input name="numero2" value={numero2} onChange={handleChange} type="number" />
        </label>
        <hr />
        <Result operacion='Suma' calculo={sumar()}/>
        <Result operacion='Resta' calculo={restar()}/>
        <Result operacion='Multiplicación' calculo={multiplicar()}/>
        <Result operacion='Divición' calculo={dividir()}/>
    </>
  )
}

NumberInput.propTypes = {
    name:PropTypes.string
}

export default NumberInput