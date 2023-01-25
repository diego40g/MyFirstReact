import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Result from './Resultado'
import { operations } from '../helpers/operations'

const NumberInput = () => {
  const [numeros, setNumeros] = useState({
    numero1:0,
    numero2:0
  });
  
  const {handleChange,sumar,restar,multiplicar,dividir,numero1,numero2} = operations(numeros,setNumeros)

  return (
    <>
        <label className='mx-2'>
            Número 1:{""} 
            <input name="numero1" value={numero1} onChange={handleChange} type="number" />
        </label>
        <label className='mx-2'>
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