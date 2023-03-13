import React, { useState } from 'react'

import { createRegister } from '../actions/nomina'
import { useDispatch } from 'react-redux'

const FormAdd = () => {
  const dispatch = useDispatch()
  const [viewForm, setViewForm] = useState(false)
  const [cantidadPago, setCantidadPago] = useState({
    precioHora: 0,
    horas: 0
  })
  const { precioHora, horas } = cantidadPago
  const handleAdd = () => {
    setViewForm(!viewForm)
  }
  const handleChange = (e) => {
    setCantidadPago({
        ...cantidadPago,
        [e.target.name]: e.target.value
    })
  }
  const handleSave = () => {
    const cantidadResult = horas * precioHora
    dispatch(createRegister(cantidadResult))
    setCantidadPago({
      precioHora: 0,
      horas: 0,
    })
  }
  return (
    <div>
        <button onClick={handleAdd} className='btn green'>
            {
                !viewForm ? "Add" : "Close"
            }
        </button>
        {
            viewForm 
            &&  
            <>
                <input 
                    type="text" 
                    placeholder='Ingrese cantidad a pagar por hora:' 
                    value={precioHora} 
                    onChange={handleChange} 
                    name='precioHora'
                />
                <input 
                    type="text" 
                    placeholder='Ingrese cantidad de horas:' 
                    value={horas} 
                    onChange={handleChange}
                    name='horas'
                />
                <button onClick={handleSave} className='btn purple'>Calcular y guardar</button>
            </>
        }
    </div>
  )
}

export default FormAdd