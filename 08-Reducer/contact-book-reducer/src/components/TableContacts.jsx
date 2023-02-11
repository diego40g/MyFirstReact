import React from 'react'

const TableContacts = ({ contactos }) => {
  return (
    <table className='table'>
        <thead>
            <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Número</th>
                <th>Acción</th>
            </tr>
        </thead>
        <tbody>
            {
                contactos.map((contacto) => {
                    const finalId = contacto.id.split("-")[0]
                    return (
                        <tr key={contacto.id}>
                            <th>{finalId}</th>
                            <td>{contacto.nombre}</td>
                            <td>{contacto.numero}</td>
                            <td>
                                <button className="btn btn-danger">Eliminar</button>
                            </td>
                        </tr>
                    )
                })
            }
        </tbody>
    </table>
  )
}

export default TableContacts