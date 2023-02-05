import React from 'react'
import PropTypes from 'prop-types'

const Card = ({imgUrl}) => {
  return (
    <div 
      className="card m-2" 
      style={{
        width: "18rem",
      }}>
        <img src={imgUrl} 
        className="card-img-top" 
        alt="imagen punto png"/>
  </div>
  )
}

Card.propTypes = {
  imgUrl: PropTypes.string,
}

export default Card