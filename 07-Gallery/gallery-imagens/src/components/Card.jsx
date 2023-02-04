import React from 'react'
import PropTypes from 'prop-types'

const Card = ({imgUrl}) => {
  return (
    <div 
      className="card" 
      style={{
        width: "15rem"
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