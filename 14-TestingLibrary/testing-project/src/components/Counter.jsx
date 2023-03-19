import React, { useState } from 'react'

const Counter = () => {
  const [counter, setCounter] = useState(0)

  const handleAdd = () => {
    setCounter(counter+1)
  }

  const handleDis = () => {
    setCounter(counter-1)
  }

  const handleReset = () => {
    setCounter(0)
  }

  return (
    <>
        <h2 data-testid="counter" role='counterRole'>Counter: {counter}</h2>

        <button onClick={handleAdd} aria-label='aumentar'>+1</button>
        <button onClick={handleDis} aria-label='disminuir'>-1</button>
        <button onClick={handleReset} aria-label='reset'>Reset</button>
    </>
  )
}

export default Counter