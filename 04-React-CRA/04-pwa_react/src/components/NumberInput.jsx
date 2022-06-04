import { useState } from 'react'
import PropTypes from 'prop-types'

const NumberInput = () => {
  //const [numeros, setNumeros] = useState(0)
  const [numeros, setNumeros] = useState({
    numero1:0,
    numero2:0
  });
  const {numero1, numero2} = numeros
  const handleChange=(e)=>{
      //console.log(e)
      //setNumeros(e.target.value)
      setNumeros({
        //spread mantiene la estrucutra inicial
        ...numeros,
        //computar una respuesta (objetos distintos al state)
        [e.target.name]: parseFloat(e.target.value),
      });
      
  }
  /*const handleChange2=(e)=>{
    setNumeros({
      numero1: parseFloat(e.target.value),
      numero2: numero2
    })
  }*/

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
    </>
  )
}

NumberInput.propTypes = {
    name:PropTypes.string
}

export default NumberInput