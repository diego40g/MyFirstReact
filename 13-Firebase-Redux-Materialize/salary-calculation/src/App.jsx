import { Provider } from 'react-redux'
import AppRoute from './routers/AppRouter'
import { store } from './store/store'

function App() {
  return (
    <Provider store={store}>
      <AppRoute/>
    </Provider>
  )
}

export default App
