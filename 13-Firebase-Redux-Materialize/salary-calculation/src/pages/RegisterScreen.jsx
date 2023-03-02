import React from 'react'
import { Link } from 'react-router-dom'

const RegisterScreen = () => {
  return (
    <div className='container'>
      <h3>Register</h3>
      <hr />
      <div className="row container">
      <form className='col s12'>
        <div className="row">
          <div className="input-field col s12">
            <i className="material-icons prefix">
              email
            </i>
            <input 
              id="icon_prefix1"
              className="materialize-textarea"
              type="email" 
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