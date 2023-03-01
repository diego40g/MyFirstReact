import React from 'react'
import { useDispatch } from 'react-redux'

import GoogleButton from 'react-google-button'
import { Link } from 'react-router-dom'

import { googleLogin } from '../actions/auth'

const LoginScreen = () => {
  const dispatch = useDispatch()
  const handleGoogleLogin = () => {
    dispatch(googleLogin("12345", "Diego"))
  }
  return (
    <div>
      <h3>Login</h3>
      <hr />
      <div className="row container">
      <form className='col s12'>
        <div className="row">
          <div className="input-field col s12">
            <i className="material-icons prefix">
              email
            </i>
            <input 
              id="icon_prefix2"
              className="materialize-textarea"
              type="text" 
            />
            <label htmlFor="icon_prefix2">Email</label>
          </div>
          <div className="input-field col s12">
            <i className="material-icons prefix">
              vpn_key
            </i>
            <input 
              id="icon_prefix2"
              className="materialize-textarea"
              type="text"
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