import React from 'react'

const LoginScreen = (props) => {
  const handleLogin = () => {
    console.log(props);
  }
  return (
    <div className='container mt-5 text-center'>
        <img src="/public/assets/animate.gif" alt="Animate of Goku" />
        <h1 className='my-3'>Login Screen</h1>
        <button onClick={handleLogin} className='btn btn-primary'>Login</button>
    </div>
  )
}

export default LoginScreen