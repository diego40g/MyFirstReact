import React from 'react'
import Btn from './Btn'
import Dato from "./Data";
import { useMemorizationApp } from '../../hooks/useMemorizationApp'

const MemorizeHook = () => {
  const [ counter, pesadoMemo, add, hide] = useMemorizationApp();
  return (
    <>
        <h1>MemorizeHook</h1>
        <hr />
        <div>Value: <Dato value={counter}/></div>
        <pre>{pesadoMemo}</pre>
        <Btn add={add}/>
        <button onClick={hide}>Ver/Quitar</button>
    </>
  )
}

export default MemorizeHook