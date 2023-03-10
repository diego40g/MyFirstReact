import React, { useState } from 'react'

import { createRegister } from '../actions/nomina'
import { useDispatch } from 'react-redux'

const FormAdd = () => {
  const dispatch = useDispatch()
  const [viewForm, setViewForm] = useState(false)
  const [cantidadPago, setCantidadPago] = useState({
    horas: 0,
    precioHora: 0
  })
  const handleAdd = () => {
    setViewForm(!viewForm)
  }
  const handleChange = (e) => {
    setCantidadPago(parseFloat(e.target.value))
  }
  const handleSave = () => {
    dispatch(createRegister(cantidadPago))
  }
  return (
    <div>
        <button onClick={handleAdd} className='btn green'>
            Add
        </button>
        {
            viewForm 
            &&  
            <>
                <input 
                    type="text" 
                    placeholder='Ingrese cantidad a pagar por hora:' 
                    value={cantidadPago} 
                    onChange={handleChange} 
                />
                <input 
                    type="text" 
                    placeholder='Ingrese cantidad de horas:' 
                    value={cantidadPago} 
                    onChange={handleChange} 
                />
                <button onClick={handleSave} className='btn purple'>Calcular y guardar</button>
            </>
        }
    </div>
  )
}

export default FormAdd