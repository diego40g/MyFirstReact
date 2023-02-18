import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import MenScreen from '../pages/MenScreen'
import WomenScreen from '../pages/WomenScreen'
import SearchScreen from '../pages/SearchScreen'
import CharacterScreen from '../pages/CharacterScreen'
import Navbar from '../components/Navbar'

const AppRouter = () => {
  return (
    <>
        <Navbar/>
        <Routes>
            <Route exact path='/men' element={<MenScreen/>}/>
            <Route exact path='/women' element={<WomenScreen/>}/>
            <Route exact path='/search' element={<SearchScreen/>}/>

            <Route exact path='/character/:id' element={<CharacterScreen/>}/>
            {/* <Route path='*' element={<Navigate to={'/men'} replace state={state}/>} /> */}
        </Routes>   
    </>
  )
}

export default AppRouter