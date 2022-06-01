import React from 'react'
import "./Card.css";

const Card = ({lang,img}) => {
  return (
    <section>
        <div className="card-container">
            <img src={img} alt="lang.svg" />
            <h3>{lang}</h3>
        </div>
    </section>
  )
}

export default Card