import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const PublicRouter = ({log, component:Component}) => {
  return (
    <Route
        component={(props) => {
            !log ? <Redirect to="/auth/login"/> : <Component {...props} /> 
        }
    } />
  )
}

export default PublicRouter