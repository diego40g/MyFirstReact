import React, { useCallback, useState } from 'react'
import Btn from './Btn'
import Dato from './Data'

const CallbackUse = () => {
  const [counter, setCounter] = useState(5)
  const [view, setView] = useState(true)
  const add = useCallback(() => {
    //setCounter(counter+1)
    setCounter( actual => actual + 1)
  }, [setCounter])
  return (
    <>
        <h1>CallbackUse</h1>
        <hr />
        <p><Dato value={counter}/></p>
        <Btn add={add}/>
        <button onClick={() => setView(!view)}>Ver / Quitar</button>
    </>
  )
}

export default CallbackUse