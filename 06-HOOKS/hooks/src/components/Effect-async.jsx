import React, { useEffect, useState } from 'react'

const EffectAsync = () => {
  const [users, setUsers] = useState([])
  const getUsuarios = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    setUsers(data)
   }
   useEffect(() => {
    getUsuarios()
   },[])
  console.log(users);
  return (
    <div>
        <h1>EffectAsync</h1>
        <hr />
    </div>
  )
}

export default EffectAsync