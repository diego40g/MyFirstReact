import React from 'react'

const Element = ({data}) => {
  const { fecha, pago} = data
  //const fechaFormato = `${fecha.toDate().getFullYear()}-${fecha.toDate().getMonth()}-${fecha.toDate().getDate()}`
  const fechaFormato = fecha.toDate().toLocaleDateString("es-EC")
  return (
    <>
        <td>{fechaFormato}</td>
        <td>{pago}</td>
        <td>
            <button className="btn red">Borrar</button>
        </td>
    </>
  )
}

export default Element