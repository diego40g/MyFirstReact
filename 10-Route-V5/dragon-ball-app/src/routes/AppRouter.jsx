import React, { lazy, Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Navbar from '../components/Navbar'

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
            <div>
              <h2>Loading...</h2>
            </div>
          }
        >
          <Switch>
              <Route exact path='/men' component={MenScreen}/>
              <Route exact path='/women' component={WomenScreen}/>
              <Route exact path='/search' component={SearchScreen}/>

              <Route exact path='/character/:id' component={CharacterScreen}/>
              <Redirect to={'/men'} />
          </Switch>   
        </Suspense>
    </>
  )
}

export default AppRouter