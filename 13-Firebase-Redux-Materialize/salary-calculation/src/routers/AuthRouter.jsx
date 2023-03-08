import { Route, Routes } from 'react-router-dom'

import LoginScreen from '../pages/LoginScreen'
import RegisterScreen from '../pages/RegisterScreen'


const AuthRouter = () => {
 
  return (
    <Routes>
      <Route path="/login" element={<LoginScreen/>}/>
      <Route path="/register" element={<RegisterScreen/>}/>
    </Routes>  
  )
}

export default AuthRouter