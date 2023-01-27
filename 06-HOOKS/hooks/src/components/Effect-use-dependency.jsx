import React, { useEffect, useState } from 'react'

const EffectUseDependency = () => {
  const [users, setUsers] = useState([]);
  const [id, setId] = useState(10)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        //.then((res) => {return res.json()} )
        .then(data => {
            setUsers(data);
        })
  }, [])

  useEffect(() => {
    setUsers([
        {
            hola: "Cambie en el id"
        }
    ])
    console.log(users)
  }, [id])

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div>
        <h1>EffectUseDependency</h1>
        <hr />
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail" className="form-label">
                    Search
                </label>
                <input 
                    value={id}
                    onChange={(e) => setId(e.target.value)}
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
    </div>
  )
}

export default EffectUseDependency