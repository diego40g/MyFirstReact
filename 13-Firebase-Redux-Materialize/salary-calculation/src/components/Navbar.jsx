import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../actions/auth'
import { clean } from '../actions/nomina'

const Navbar = () => {
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(clean())
    dispatch(logout())
  }

  return (
    <nav className='green'>
        <div className="nav-wrapper">
            <span className="brand-logo">Calculadora Nominal</span>
            <ul className="right hide-on-med-and-down" id="nav-mobile">
                <li>
                    <button onClick={handleLogout} className='btn red waves-effect waves-light'>Logout</button>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar