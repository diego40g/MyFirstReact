import React from 'react'
import PropTypes from 'prop-types'

const NumberInput = ({name}) => {
  return (
    <>
        <label>
            {name}: <input type="text" />
        </label>
    </>
  )
}

NumberInput.propTypes = {
    name:PropTypes.string
}

export default NumberInput