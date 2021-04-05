import { Switch, Route } from 'react-router-dom'

import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import Landing from './pages/Landing'
import Search from './pages/Search'
import Profile from './pages/Profile'
import NotFound from './pages/404'
import ProtectedRoute from './hoc/ProtectedRoute'

// Show dashboard only for logged in users, no /:id.
// use /user/:id for both own items and other users items.
function App() {
  return (
    <>
      <Switch>
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <ProtectedRoute path="/dashboard" component={Dashboard} />
        <Route path="/explore" component={Search} />
        <Route path="/user" component={Profile} />
        <Route path="/" exact component={Landing} />
        <Route path="*" component={NotFound} />
      </Switch>
    </>
  )
}

export default App
