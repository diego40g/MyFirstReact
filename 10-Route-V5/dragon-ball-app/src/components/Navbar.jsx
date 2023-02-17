import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-info">
        <div className="container-fluid">
            <h2 className="navbar-brand" href="#">DB App</h2>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
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
            </div>
        </div>
    </nav>
  )
}

export default Navbar