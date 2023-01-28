import React, { useState, useEffect } from 'react'

const EffectUseCleanUp = () => {
  const [state, setState]=useState(0)
  
  const evento = (e) => {
    console.log("movimiento");
  }

  useEffect(() => {
    if(state === "123"){
        window.addEventListener("mousemove", evento)
    }
  
    return () => {
        console.log("detenido");
        window.removeEventListener("mousemove",evento)
    }
  }, [state])
  

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div>
        <h1>EffectUseCleanUp</h1>
        <hr />
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail" className='form-label'>
                    Search
                </label>
                <input 
                    onChange={e => setState(e.target.value)}
                    type="text"
                    className='form-control'
                    id="exampleInputEmail"
                    aria-describedby='emailHelp'
                />
            </div>
        </form>
    </div>
  )
}
export default EffectUseCleanUp