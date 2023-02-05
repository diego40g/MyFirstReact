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
        <label className='w-100 text-center'>
          Buscar:{" "}
          <input className='w-75' type="text" name="inputText"/> 
          <button type='submit' className='btn btn-warning mx-2'>
            <span className="material-symbols-outlined">
              search
            </span>
          </button>
        </label>
      </form>
      <div className="row">
        {
          images.map((img) => {
            return <div key={img.id} className="col">
              <Card imgUrl={img.urls.regular}/>
            </div>
          })
        }
      </div>
    </>
  )
}

export default Cards