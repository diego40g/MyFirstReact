import React from 'react'

const Element = ({ data }) => {
  const { fecha, pago } = data
  let fechaFormato
  //const fechaFormato = `${fecha.toDate().getFullYear()}-${fecha.toDate().getMonth()}-${fecha.toDate().getDate()}`
  if (fecha.seconds) {
    const date = fecha.toDate()
    fechaFormato = date.toLocaleDateString()
  }else{
    fechaFormato= fecha
  }
  return (
    <>
        <td>{fechaFormato}</td>
        <td>${pago}</td>
        <td>
            <button className="btn red">Borrar</button>
        </td>
    </>
  )
}

export default Element