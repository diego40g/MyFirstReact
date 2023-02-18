import React from 'react'
import { useParams } from 'react-router'
import { Characters } from '../models/Characters';

import { useNavigate } from 'react-router-dom';

const CharacterScreen = () => {
  const navigate = useNavigate();

  const {id} = useParams();
  const { type, name, description } = Characters.find(character => character.id === id)
  const path = `/public/assets/${type}-${id}.png`
  const handleBack = () => {
    navigate(-1)
  }
  return (
    <div className='container row mt-5'>
        <div className="col-8">
            <img 
                className='img-thumbnail'
                src={path} 
                alt={id} 
                style={{
                    height: "400px",
                }}    
            />
        </div>
        <div className="col-4">
            <h2>Nombre: {name}</h2>
            <p>Descripción: {description}</p>
            <button onClick={handleBack} className='btn btn-outline-warning'>Go Back</button>
        </div>
    </div>
  )
}

export default CharacterScreen