import React, { useCallback, useEffect, useState } from 'react'
import Card from './Card'

const Cards = () => {
  const [images, setImages] = useState([]);
  const [input, setInput] = useState("")

  const peticion = useCallback( async () => {
    const key = `client_id=${import.meta.env.VITE_KEY_UNPLASH}`
    let route = `https://api.unsplash.com/photos/?${key}`

    if(input !== ""){
      route = `https://api.unsplash.com/search/photos?page=1&query=${encodeURI(input)}&${key}`
    }

    const res = await fetch(route)
    const data = await res.json()

    if (data.results) {
      setImages(data.results)
    }else{
      setImages(data)
    }
  }, [input])

  useEffect(() => {
    peticion();
  }, [peticion])

  const handleSubmit = (e) => {
    e.preventDefault()
    const text = e.target[0].value

    setInput(text)
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Buscar:{" "}
          <input type="text" name="inputText"/>
        </label>
      </form>
      {
        images.map((img) => {
          return <Card key={img.id} imgUrl={img.urls.regular}/>
        })
      }
    </>
  )
}

export default Cards