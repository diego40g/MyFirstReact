import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { authTypes } from '../types/authTypes'
import { useNavigate } from 'react-router-dom'

const LoginScreen = () => {
  const navigate = useNavigate()
  const { dispatch } = useContext(AuthContext)
  const handleLogin = () => {
    dispatch({ type: authTypes.login })
    navigate("/")
  }
  return (
    <div className='container mt-5 text-center'>
        <img src="/assets/animate.gif" alt="Animate of Goku" />
        <h1 className='my-3'>Login Screen</h1>
        <button onClick={handleLogin} className='btn btn-primary'>
          Login
        </button>
    </div>
  )
}

export default LoginScreen