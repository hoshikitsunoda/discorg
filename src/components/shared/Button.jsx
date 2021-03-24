import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

export const LinkButton = ({ children, pathName, ...props }) => {
  return (
    <Link to={pathName}>
      <Button {...props}>{children}</Button>
    </Link>
  )
}
