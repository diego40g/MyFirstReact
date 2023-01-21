import React from 'react'

import "./Card.css"

const Card = ({lang, img}) => {
  return (
    <div className='card'>
        <img src={img} alt={lang+" image"} />
        <h3>
          {lang}
        </h3>
    </div>
  )
}

export default Card