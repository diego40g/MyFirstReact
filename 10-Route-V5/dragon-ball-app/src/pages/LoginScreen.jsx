import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { authTypes } from '../types/authTypes'

const LoginScreen = () => {
  const history = useHistory();
  const { dispatch } = useContext(AuthContext)
  const handleLogin = () => {
    dispatch({ type: authTypes.login })
    history.push("/")
  }
  return (
    <div className='container mt-5 text-center'>
        <img src="/public/assets/animate.gif" alt="Animate of Goku" />
        <h1 className='my-3'>Login Screen</h1>
        <button onClick={handleLogin} className='btn btn-primary'>
          Login
        </button>
    </div>
  )
}

export default LoginScreen