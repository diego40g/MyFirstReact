import React from 'react'
import { useState } from 'react'

const StateUse = () => {
  const [state, setState] = useState(0)

  setInterval(() => {
    console.log(state);
    setState(state +1)
  }, 3000)
  return (
    <div className='container text-center'>
        <h1>UseState</h1>
        <hr />
        <p>Cuenta: {state} </p>
    </div>
  )
}

export default StateUse