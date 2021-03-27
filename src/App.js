import { Switch, Route } from 'react-router-dom'

import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import Landing from './pages/Landing'

function App() {
  return (
    <>
      <Switch>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/" exact>
          <Landing />
        </Route>
      </Switch>
    </>
  )
}

export default App
