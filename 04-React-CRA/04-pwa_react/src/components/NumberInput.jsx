import { useState } from 'react'
import PropTypes from 'prop-types'

const NumberInput = ({name}) => {
  const [numeros, setNumeros] = useState({
    numero1:0,
    numero2:0
  });
  const handleChange=(e)=>{
      //console.log(e)
      setNumeros(e.target.value)
  }
  return (
    <>
        <label>
            {name}: <input onChange={handleChange} type="text" />
        </label>
    </>
  )
}

NumberInput.propTypes = {
    name:PropTypes.string
}

export default NumberInput