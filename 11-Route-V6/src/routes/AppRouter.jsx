import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from '../components/Navbar'
import Loading from '../components/Loading'
const MenScreen = lazy(() => import ('../pages/MenScreen'))
const WomenScreen = lazy(() => import ('../pages/WomenScreen'))
const SearchScreen = lazy(() => import ('../pages/SearchScreen'))
const CharacterScreen = lazy(() => import ('../pages/CharacterScreen'))

const AppRouter = () => {
  return (
    <>
        <Navbar/>
        <Suspense
          fallback={
              <Loading/>
          }
        >
          <Routes>
              <Route end path='/men' element={<MenScreen/>}/>
              <Route end path='/women' element={<WomenScreen/>}/>
              <Route end path='/search' element={<SearchScreen/>}/>

              <Route end path='/character/:id' element={<CharacterScreen/>}/>
              <Route path='*' element={<MenScreen/>} />
          </Routes>   
        </Suspense>
    </>
  )
}

export default AppRouter