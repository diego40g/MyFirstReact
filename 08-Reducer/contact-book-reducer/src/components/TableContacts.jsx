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
                    return (
                        <tr key={contacto.id}>
                            <th>{contacto.id}</th>
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