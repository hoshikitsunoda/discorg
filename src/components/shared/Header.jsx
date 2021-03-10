import { useEffect } from 'react'
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core'
import AccountCircle from '@material-ui/icons/AccountCircle'

import useGetUser from '../../hooks/useGetUser'

const Header = () => {
  const { data, getUser } = useGetUser()

  useEffect(() => {
    let isMounted = true
    if (isMounted) {
      getUser()
    }
    return () => {
      isMounted = false
    }
  }, [getUser])

  const { email, uid } = data

  return (
    <AppBar position="static" color="transparent">
      <Toolbar>
        {uid && (
          <>
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="primary"
              >
                <AccountCircle />
              </IconButton>
            </div>
            <Typography variant="body1">{email}</Typography>
          </>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default Header
