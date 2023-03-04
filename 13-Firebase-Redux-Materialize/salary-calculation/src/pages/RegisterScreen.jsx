import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { register } from '../actions/auth'

const RegisterScreen = () => {
  const dispatch = useDispatch()
  const [data, setData] = useState({
    email: "",
    password: "",
    passwordRepeat: "",
    username: "",
  })

  const { email, password, passwordRepeat, username} = data;

  const handleChange = (e) => {
    const value = e.target.value;
    
    setData({
      ...data,
      [e.target.name]: value,
    })
  }

  const handleRegister = (e) => {
    e.preventDefault()

    if (email.trim() === "" || !email.trim().includes("@")) {
      return 
    }

    if (username.trim().length < 2) {
      return
    }

    if (password.trim().length < 6) {
      return
    } else {
      if (password.trim() !== passwordRepeat.trim()) {
        return
      }
    }

    dispatch(register(email, password, username))
  }
  return (
    <div className='container'>
      <h3>Register</h3>
      <hr />
      <div className="row container">
      <form onSubmit={handleRegister} className='col s12'>
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
              assignment_ind
            </i>
            <input 
              id="icon_prefix2"
              className="materialize-textarea"
              type="text"
              onChange={handleChange}
              value={username}
              name='username'
            />
            <label htmlFor="icon_prefix2">Username</label>
          </div>
          <div className="input-field col s12">
            <i className="material-icons prefix">
              vpn_key
            </i>
            <input 
              id="icon_prefix3"
              className="materialize-textarea"
              type="password"
              onChange={handleChange}
              value={password}
              name='password'
            />
            <label htmlFor="icon_prefix3">Password</label>
          </div>
          <div className="input-field col s12">
            <i className="material-icons prefix">
              vpn_key
            </i>
            <input 
              id="icon_prefix4"
              className="materialize-textarea"
              type="password"
              onChange={handleChange}
              value={passwordRepeat}  
              name='passwordRepeat'          
            />
            <label htmlFor="icon_prefix4">Confirm Password</label>
          </div>
        </div>
        <button className='btn waves-effect' type='submit'>
          Send
        </button>
        <hr />
        <Link to={"/login"}>Login into account</Link>
      </form>
      </div>
    </div>
  )
}

export default RegisterScreen