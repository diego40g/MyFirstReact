import React, { useState } from 'react'

const Counter = () => {
  const [counter, setCounter] = useState(0)
  return (
    <>
        <h2>Counter: {counter}</h2>
    </>
  )
}

export default Counter