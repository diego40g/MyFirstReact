import React from 'react'
import PropTypes from 'prop-types'

const Result = ({operacion, calculo}) => {
  return (
    <div>
        <br />
        <span>{operacion}: {calculo}</span>
    </div>
  )
}

Result.propTypes = {
    operacion: PropTypes.string,
    calculo: PropTypes.number
}

export default Result