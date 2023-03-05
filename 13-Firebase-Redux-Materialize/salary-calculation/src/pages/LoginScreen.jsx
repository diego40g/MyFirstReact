import React, {useState} from 'react'
import { useDispatch } from 'react-redux'

import GoogleButton from 'react-google-button'
import { Link } from 'react-router-dom'

import { emailAndPasswordLogin, googleLogin } from '../actions/auth'

const LoginScreen = () => {
  const dispatch = useDispatch()
  const [data, setData] = useState({
    email: "",
    password: "",
  })
  const {email, password} = data
  const handleChange = (e) => {
    const value = e.target.value
    setData({
      ...data,
      [e.target.name]: value,
    })
    console.log(email);
    console.log(password);
  }
  const handleGoogleLogin = () => {
    dispatch(googleLogin("12345", "Diego"))
  }
  const handleEmailLogin = (e) => {
    e.preventDefault()
    if (email.trim() === "" || !email.trim().includes("@")) {
      return
    }
    if (password.trim().length<6) {
      return
    }
    dispatch(emailAndPasswordLogin(email,password))
  }
  return (
    <div className='container'>
      <h3>Login</h3>
      <hr />
      <div className="row container">
      <form className='col s12' onSubmit={handleEmailLogin}>
        <div className="row">
          <div className="input-field col s12">
            <i className="material-icons prefix">
              email
            </i>
            <input 
              id="icon_prefix1"
              className="materialize-textarea"
              type="email"
              onChange={handleChange}
              value={email}
              name='email' 
            />
            <label htmlFor="icon_prefix1">Email</label>
          </div>
          <div className="input-field col s12">
            <i className="material-icons prefix">
              vpn_key
            </i>
            <input 
              id="icon_prefix2"
              className="materialize-textarea"
              type="password"
              onChange={handleChange}
              value={password}
              name='password'
            />
            <label htmlFor="icon_prefix2">Password</label>
          </div>
        </div>
        <button className='btn waves-effect' type='submit'>
          Send
        </button>
        <hr />
        <GoogleButton onClick={handleGoogleLogin} />
        <Link to={"/register"}>Register in the platform</Link>
      </form>
      </div>
    </div>
  )
}

export default LoginScreen