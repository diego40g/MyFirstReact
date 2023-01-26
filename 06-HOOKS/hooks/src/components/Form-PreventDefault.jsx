import React from 'react'

const FormPreventDefault = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({
        name:"Diego",
        email: "dipaz@correo.com",
        password: "sadasw1q"
    });
  }
  return (
    <>
        <h1>FormPreventDefault</h1>
        <hr />
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail" className="form-label">
                    Search
                </label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="exampleInputEmail" 
                    aria-describedby="emailHelp" 
                />
            </div>
            <button type="submit" className="btn btn-primary mb-3">
                Submit
            </button>
      </form>
    </>
  )
}

export default FormPreventDefault