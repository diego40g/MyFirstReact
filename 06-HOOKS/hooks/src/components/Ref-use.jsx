import React, { useRef } from 'react'

const RefUse = () => {
  const ref1 = useRef(null)
  const handleRef = () => {
    const ref = document.getElementById("area")
    console.log(ref);
  }
  const handleRef1 = () => {
    ref1.current.value = "Hola mundo!!!";

    ref1.current.select();
    console.log(ref1);
  }
  return (
    <div>
        <h1 onClick={handleRef}>RefUse-Document</h1>
        <hr />
        <textarea placeholder="Escribe un mensaje..." id="area"></textarea>
        <hr />
        <h2 onClick={handleRef1}>UseRef</h2>
        <textarea ref={ref1} placeholder="Escribe un mensaje..." id="areaRef"></textarea>
    </div>
  )
}

export default RefUse