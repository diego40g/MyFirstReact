import React from 'react'
import { useSelector } from 'react-redux'

import Navbar from '../components/Navbar'
import FormAdd from '../components/FormAdd'
import Element from '../components/Element'

const AppScreen = () => {
  const name = useSelector((state) => state.auth.displayname);
  const data = useSelector((state) => state.nomina.data);
  
  return (
    <>
        <Navbar/>
        <div className="container">
          <h1 className='center'>Hola {name}</h1>
          <hr />
          <FormAdd />
          <table>
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Cantidad</th>
                <th>Borrar</th>
              </tr>
            </thead>
            <tbody>
            {
              data.map((element) => {
                return( <tr key={element.id}>
                  <Element data={element}/>
                </tr>)
              })
            }
            </tbody>
          </table>
        </div>
    </>
  )
}

export default AppScreen