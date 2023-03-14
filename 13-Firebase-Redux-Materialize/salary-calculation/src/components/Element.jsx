import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteRegister } from '../actions/nomina'

const Element = ({ data }) => {
  const { fecha, pago, id } = data
  const dispatch = useDispatch()
  let fechaFormato
  //const fechaFormato = `${fecha.toDate().getFullYear()}-${fecha.toDate().getMonth()}-${fecha.toDate().getDate()}`
  if (fecha.seconds) {
    const date = fecha.toDate()
    fechaFormato = date.toLocaleDateString()
  }else{
    fechaFormato= fecha
  }
  const handleDelete = () => {
    dispatch(deleteRegister(id))
  }
  return (
    <>
        <td>{fechaFormato}</td>
        <td>${pago}</td>
        <td>
            <button onClick={handleDelete} className="btn red">Borrar</button>
        </td>
    </>
  )
}

export default Element