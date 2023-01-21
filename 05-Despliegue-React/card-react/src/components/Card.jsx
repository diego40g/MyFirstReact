import React from 'react'
import PropTypes from "prop-types"

import "./Card.css"

const Card = ({lang, img, fcolor, scolor}) => {
  return (
    <div className='card'>
        <img src={img} alt={lang+" image"} />
        <h3>
          {lang}
        </h3>
    </div>
  )
}

Card.propTypes = {
  lang: PropTypes.string,
  img: PropTypes.string,
  fcolor: PropTypes.string,
  scolor: PropTypes.string,
}

export default Card