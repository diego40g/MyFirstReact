import React from 'react'
import PropTypes from 'prop-types'

const FormImg = ({handleSubmit}) => {
  return (
    <>
        <form onSubmit={handleSubmit}>
            <label className='w-100 text-center'>
            Buscar:{" "}
            <input className='w-75' type="text" name="inputText"/> 
            <button type='submit' className='btn btn-warning m-2'>
                <span className="material-symbols-outlined">
                search
                </span>
            </button>
            </label>
        </form>
    </>
  )
}

FormImg.propTypes = {
    handleSubmit: PropTypes.func,
}

export default FormImg