import React, {useEffect, useState} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { useDispatch } from 'react-redux'

import AppScreen from '../pages/AppScreen'

import {auth} from '../firebase/config-firebase'
import { login } from '../actions/auth'

import AuthRouter from './AuthRouter'
import PublicRouter from './PublicRouter'
import PrivateRouter from './PrivateRouter'

const AppRouter = () => {
  const dispatch = useDispatch()
  const [log, setLog] = useState(false)
  useEffect(() => {
    auth.onAuthStateChanged(
    (user) => {
      if(user){
        dispatch(login(user.uid, user.displayName))
        setLog(true)
      } else {
        setLog(false)
      }
    })
  }, [dispatch])

  return (
    <Router>
      <AuthRouter />
      <Routes>
        <Route path='*' element={
          <PrivateRouter log={log}>
            <AppScreen/>
          </PrivateRouter>
        }/>
      </Routes>
    </Router>
  )
}

export default AppRouter