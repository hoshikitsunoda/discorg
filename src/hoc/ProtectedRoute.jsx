import { Route, Redirect } from 'react-router-dom'

const ProtectedRoute = ({ component: Component, uid, ...rest }) => {
  const token = localStorage.getItem('discorg_user_information')
  return (
    <Route
      {...rest}
      render={(props) =>
        token ? <Component {...props} /> : <Redirect to="/404" />
      }
    />
  )
}

export default ProtectedRoute
