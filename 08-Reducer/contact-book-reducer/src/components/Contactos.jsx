import React, { useReducer, useEffect, useState } from 'react'
import TableContacts from './TableContacts'
import FormularioAdd from './FormularioAdd'
import { ContactsReducer } from '../reducers/ContactosReducer'

// const contactos = [
//     {
//         id: "dp12",
//         nombre: "Diego",
//         numero: "213123"
//     },
//     {
//         id: "ip12",
//         nombre: "Ismael",
//         numero: "762132"
//     },
//     {
//         id: "an12",
//         nombre: "Ana",
//         numero: "659874"
//     },
// ]
const init = () => {
  const contactos = localStorage.getItem("contactos");
  return contactos ? JSON.parse(contactos) : [];
};

const Contactos = () => {
  //const [state, dispatch] = useReducer(ContactsReducer, contactos)
  const [state, dispatch] = useReducer(ContactsReducer, [], init)
  useEffect(() => {
    localStorage.setItem("contactos", JSON.stringify(state))
  }, [state])
  const [formView, setFormView] = useState(false)
  return (
    <div className='container mt-3'>
        <button className='btn btn-success' onClick={() => setFormView(!formView)}>
            {!formView ? "+ Agregar contacto" : "- Cerrar formulario"}
        </button>
        {formView && <FormularioAdd dispatch={dispatch}/>}
        <TableContacts contactos={state} dispatch={dispatch}/>
    </div>
  )
}

export default Contactos