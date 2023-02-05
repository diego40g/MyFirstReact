import React, { useEffect, useState } from 'react'
import Card from './Card'

const Cards = () => {
  const [images, setImages] = useState([]);
  const peticion = async () => {
    //const res = await fetch(`https://api.unsplash.com/photos/?client_id=${import.meta.env.VITE_KEY_UNPLASH}`)
    const data = await res.json()

    //console.log(data)
    setImages(data)
  }
  useEffect(() => {
    peticion();
  }, [])
  return (
    <>
      {
        images.map((img) => {
          return <Card key={img.id} imgUrl={img.urls.regular}/>
        })
      }
    </>
  )
}

export default Cards