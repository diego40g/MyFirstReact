import React from 'react'

const Footer = () => {
  return (
    <nav className="navbar bg-primary mt-3" data-bs-theme="dark">
        <p className="text-light text-center w-100 h5">
            Diego Paz - &copy; {new Date().getFullYear()} {" "}
        </p>
    </nav>
  )
}

export default Footer