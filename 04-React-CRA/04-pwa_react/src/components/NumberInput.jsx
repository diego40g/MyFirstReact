import { useState } from 'react'
import PropTypes from 'prop-types'

const NumberInput = ({name}) => {
  /*const [numeros, setNumeros] = useState({
    numero1:0,
    numero2:0
  });*/
  const [numeros, setNumeros] = useState(0)
  const handleChange=(e)=>{
      //console.log(e)
      //setNumeros(e.target.value)
      /*setNumeros({
        numero1: e.target.value,
        numero2: e.target.value
      })*/
      setNumeros(parseFloat(e.target.value));
  }
  return (
    <>
        <label>
            {name}: <input value={numeros} onChange={handleChange} type="number" />
        </label>
    </>
  )
}

NumberInput.propTypes = {
    name:PropTypes.string
}

export default NumberInput