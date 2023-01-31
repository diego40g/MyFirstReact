import React from 'react'

const Btn = ({add}) => {
  console.log("Agrego add")
  return (
    <button onClick={add}>+1</button>
  )
}

export default React.memo(Btn)