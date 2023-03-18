import React, { useState } from 'react'

const Counter = () => {
  const [counter, setCounter] = useState(0)

  const handleAdd = () => {
    setCounter(counter+1)
  }
  return (
    <>
        <h2>Counter: {counter}</h2>

        <button onClick={handleAdd}>+1</button>
        <button>-1</button>
    </>
  )
}

export default Counter