import { Switch, Route, Redirect } from 'react-router-dom'

import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import Landing from './pages/Landing'
import Search from './pages/Search'
import Profile from './pages/Profile'
import NotFound from './pages/404'
import ProtectedRoute from './hoc/ProtectedRoute'
import { useAuth } from './hooks'

function App() {
  const { user } = useAuth()

  return (
    <>
      <Switch>
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <ProtectedRoute path="/dashboard" component={Dashboard} />
        <Route path="/explore" component={Search} />
        <Route path="/user" component={Profile} />
        <Route exact path="/">
          {user?.uid ? <Redirect to="/dashboard" /> : <Landing />}
        </Route>
        <Route path="*" component={NotFound} />
      </Switch>
    </>
  )
}

export default App
