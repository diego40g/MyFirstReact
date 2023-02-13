import React from 'react'
import{ BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from '../components/Header'
import Home from '../pages/Home'
import About from '../pages/About'
import NotFound from '../pages/NotFound'

const AppRouter = () => {
  return (
    <Router>
       <Header/>
       <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/about' element={<About/>}/>
            <Route path='*' element={<NotFound/>}/>
       </Routes>
    </Router>
  )
}

export default AppRouter