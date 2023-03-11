import React, {useEffect, useState} from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import AppScreen from '../pages/AppScreen'
import AuthRouter from './AuthRouter'
import PrivateRouter from './PrivateRouter'

import {auth} from '../firebase/config-firebase'
import { login } from '../actions/auth'
import PublicRouter from './PublicRouter'
import { loadData } from '../helpers/loadData'
import { readRegister } from '../actions/nomina'

const AppRouter = () => {
  const dispatch = useDispatch()
  const [log, setLog] = useState(false)
  useEffect(() => {
    auth.onAuthStateChanged(
    async(user) => {
      if(user){
        dispatch(login(user.uid, user.displayName))
        setLog(true)
        const nominaData = await loadData(user.uid)
        dispatch(readRegister(nominaData))
      } else {
        setLog(false)
      }
    })
  }, [dispatch])

  return (
    <Router>
      <Switch>
        <PublicRouter path="/auth" log={log} component={AuthRouter} />
        <PrivateRouter exact path="/" log={log} component={AppScreen} />
      </Switch>
    </Router>
  )
}

export default AppRouter