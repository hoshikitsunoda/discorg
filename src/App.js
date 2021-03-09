import { Switch, Route } from 'react-router-dom'

import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

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
      </Switch>
    </>
  )
}

export default App
