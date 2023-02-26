import React from 'react'
import Button from './components/Button'

const App = () => {
  return (
    <div>
      <h1 className='title'>Hola SASS</h1>
      <hr />
      <ul>
        <li>
          <a className='link' href="#">Google</a>
        </li>
        <li>
          <a className='link' href="#">Facebook</a>
        </li>
        <li>
          <a className='link' href="#">Youtube</a>
        </li>
      </ul>
      <hr />
      <h2>Counter: 0</h2>
      <Button type="btn" text="+1"/>
      <Button type="btn btn-primary" text="-1"/>
    </div>
  )
}

export default App