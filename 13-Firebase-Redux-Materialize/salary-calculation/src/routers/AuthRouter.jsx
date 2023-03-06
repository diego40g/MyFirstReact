import React, {useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import {auth} from '../firebase/config-firebase'

import LoginScreen from '../pages/LoginScreen'
import RegisterScreen from '../pages/RegisterScreen'
import { login } from '../actions/auth'
import AppRouter from './AppRouter'

const AuthRouter = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    auth.onAuthStateChanged(
    (user) => {
      if(user){
        dispatch(login(user.uid, user.displayName))
      }
    })
  }, [])
  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginScreen/>}/>
          <Route path="/register" element={<RegisterScreen/>}/>
        </Routes>
        <AppRouter/>
      </Router>
    </>
  )
}

export default AuthRouter