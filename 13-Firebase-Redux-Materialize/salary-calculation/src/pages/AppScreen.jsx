import React from 'react'
import { useSelector } from 'react-redux'

import Navbar from '../components/Navbar'
import FormAdd from '../components/FormAdd'

const AppScreen = () => {
  const {auth} = useSelector( (state) => state )
  
  return (
    <>
        <Navbar/>
        <div className="container">
          <h1 className='center'>Hola {auth.displayname}</h1>
          <hr />
          <FormAdd />
        </div>
    </>
  )
}

export default AppScreen