import React, { useReducer } from 'react'
import TableContacts from './TableContacts'
import FormularioAdd from './FormularioAdd'
import { ContactsReducer } from '../reducers/ContactosReducer'

const contactos = [
    {
        id: "dp12",
        nombre: "Diego",
        numero: "213123"
    },
    {
        id: "ip12",
        nombre: "Ismael",
        numero: "762132"
    },
    {
        id: "an12",
        nombre: "Ana",
        numero: "659874"
    },
]

const Contactos = () => {
  const [state, dispatch] = useReducer(ContactsReducer, contactos)
  
  return (
    <div className='container mt-3'>
        <FormularioAdd dispatch={dispatch}/>
        <TableContacts contactos={state} dispatch={dispatch}/>
    </div>
  )
}

export default Contactos