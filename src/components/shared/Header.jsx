import { useEffect, useState } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  makeStyles,
  Box,
  Menu,
  MenuItem,
} from '@material-ui/core'
import AccountCircle from '@material-ui/icons/AccountCircle'

import { useGetUser, useAuth } from '../../hooks'
import { randomColor } from '../../utils/randomColor'

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: 'none',
  },
  border: {
    borderBottom: '8px solid #F72C25',

    '&::after': {
      borderBottom: ({ borderColor }) => `8px solid ${borderColor}`,
      background: 'none',
      content: '""',
      display: 'block',
      transition: 'all 1s ease-in-out',
    },

    '&::before': {
      borderBottom: '8px solid #2F52E0',
      background: 'none',
      content: '""',
      display: 'block',
    },
  },
}))

const Header = () => {
  const { data, getUser } = useGetUser()
  const { signOut } = useAuth()
  const [borderColor, setBorderColor] = useState('#F7B32B')
  const [anchorEl, setAnchorEl] = useState(null)
  const classes = useStyles({ borderColor })

  useEffect(() => {
    let isMounted = true
    if (isMounted) {
      getUser()
    }

    const intervalID = setTimeout(() => {
      setBorderColor(randomColor())
    }, 1000)

    return () => {
      isMounted = false
      clearInterval(intervalID)
    }
  }, [getUser, borderColor])

  const handleClick = ({ currentTarget }) => {
    setAnchorEl(currentTarget)
  }

  const handleClose = () => {
    signOut()
    setAnchorEl(null)
  }

  const { email, uid } = data

  return (
    <AppBar position="static" color="transparent" className={classes.root}>
      <Toolbar>
        {uid && (
          <>
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="primary"
                onClick={handleClick}
              >
                <AccountCircle />
              </IconButton>
            </div>
            <Typography variant="body1">{email}</Typography>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Log Out</MenuItem>
            </Menu>
          </>
        )}
      </Toolbar>
      <Box className={classes.border} borderColor={borderColor}></Box>
    </AppBar>
  )
}

export default Header
