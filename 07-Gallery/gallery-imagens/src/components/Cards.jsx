import React, { useEffect, useState } from 'react'
import Card from './Card'

const Cards = () => {
  const [images, setImages] = useState({})
  const peticion = async () => {
    const res = await fetch(`https://api.unsplash.com/photos/random?client_id=${import.meta.env.VITE_KEY_UNPLASH}`)
    const data = await res.json()

    //console.log(data)
    setImages(data)
  }
  useEffect(() => {
    peticion();
  }, [])
  return (
    <>
        <Card/>
    </>
  )
}

export default Cards