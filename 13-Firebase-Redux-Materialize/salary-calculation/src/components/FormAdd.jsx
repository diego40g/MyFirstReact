import React, { useState } from 'react'

import { createRegister } from '../actions/nomina'
import { useDispatch } from 'react-redux'

const FormAdd = () => {
  const dispatch = useDispatch()
  const [viewForm, setViewForm] = useState(false)
  const [cantidadPago, setCantidadPago] = useState({
    precioHora: "",
    horas: ""
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
      precioHora: "",
      horas: "",
    })
  }
  return (
    <>
        <button onClick={handleAdd} className='btn green'>
            {
                !viewForm ? "Add" : "Close"
            }
        </button>
        {
            viewForm 
            &&  
            <div className='animate__animated animate__fadeIn'>
              <div className='input-field col s12'>
                <input 
                  id='pago'
                  className='materialize-textarea'
                  type="text" 
                  // placeholder='Ingrese cantidad a pagar por hora:' 
                  value={precioHora} 
                  onChange={handleChange} 
                  name='precioHora'
                />
                <label htmlFor='pago'>Pago por hora</label>
              </div>
              <div className="input-field col s12">
                <input 
                  id='horas'
                  className='materialize-textarea'
                  type="text" 
                  // placeholder='Ingrese cantidad de horas:' 
                  value={horas} 
                  onChange={handleChange}
                  name='horas'
                />
                <label htmlFor="horas">Cantidad de horas</label>
              </div>
                <button onClick={handleSave} className='btn purple'>Calcular y guardar</button>
            </div>
        }
    </>
  )
}

export default FormAdd