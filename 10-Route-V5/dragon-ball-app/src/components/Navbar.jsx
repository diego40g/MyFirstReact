import React from 'react'
import { NavLink, useNavigate  } from 'react-router-dom'

const Navbar = () => {
  let navigate = useNavigate();
  const handleLogout = () => {
    navigate("/login");
  }
  return (
    <nav className="navbar navbar-expand-lg bg-info">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">
                <h2>DB App</h2>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav me-auto mb-2 mb-lg-0">
                <NavLink 
                    className={({isActive})=> isActive ? "nav-link active text-white" : "nav-link" }
                    aria-current="page" 
                    to="/men"
                    >
                    Men
                </NavLink>
                <NavLink 
                    className={({isActive})=> isActive ? "nav-link active text-white" : "nav-link" }
                    aria-current="page" 
                    to="/women"
                >
                    Women
                </NavLink>
                <NavLink 
                    className={({isActive})=> isActive ? "nav-link active text-white" : "nav-link" }
                    aria-current="page" 
                    to="/search"
                >
                    Search
                </NavLink>
            </div>
            <div className="d-flex">
                <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
            </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar