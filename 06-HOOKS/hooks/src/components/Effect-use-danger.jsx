import React, { useEffect, useState } from 'react'

const EffectUseDanger = () => {
  const [state, setState]=useState(0)
  
  const evento = (e) => {
    console.log("movimiento");
  }
  
  useEffect(() => {
    if (state === "123"){
        window.addEventListener("mousemove", evento)
    }/*else{
        window.removeEventListener("mousemove", evento)
    }*/
  }, [state])

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div>
        <h1>EffectUseDanger</h1>
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

export default EffectUseDanger