import React, { useEffect, useLayoutEffect, useState } from 'react'

const EffectUseLayout = () => {
  const [data, setData] = useState([])
  const [length, setLength] = useState(0)
  const newData = [
    {
      name:"Diego",
      lastname:"Paz"
    },
    {
      name:"Diego",
      lastname:"Paz"
    }
  ]
  useEffect(() => {
    setTimeout(() => {
      setData(newData)
    },5000)
  }, [newData])
  /*useLayoutEffect(() => {
    setTimeout(() => {
      setData(newData)
    },5000)
  }, [])*/
  useLayoutEffect(() => {
    const tam = data.length 
    setLength(tam)
  }, [])
  return (
    <>
        <h1>EffectUseLayout</h1>
        <hr />
        <p>Data { data.length }</p>
        <p>Length { length }</p>
    </>
  )
}

export default EffectUseLayout