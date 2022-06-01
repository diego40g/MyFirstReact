import React from 'react';
import PropTypes, { number } from 'prop-types';

import "./Card.css";

console.log(PropTypes)

const Card = ({lang,img,fcolor,scolor}) => {
  return (
    <section>
        <div className="card-container">
            <img src={img} alt="lang.svg" />
            <h3>{lang}</h3>
        </div>
    </section>
  );
};

Card.propTypes = {
    lang: PropTypes.string,
    img: PropTypes.string,
    fcolor: PropTypes.string,
    scolor: PropTypes.string
}

export default Card