import { useState } from 'react'
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

import { useAuth } from '../../hooks'
import Logo from '../../images/discorg.png'
import { MultiColorBorder } from '../shared/Border'

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: 'none',
  },
  logo: {
    width: 120,
  },
}))

const Header = ({ title }) => {
  const { user } = useAuth()

  const { signOut } = useAuth()
  const [anchorEl, setAnchorEl] = useState(null)
  const classes = useStyles()

  const handleClick = ({ currentTarget }) => {
    setAnchorEl(currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const { email, uid } = user || {}

  return (
    <AppBar position="static" color="transparent" className={classes.root}>
      <Toolbar>
        {uid && (
          <>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              width={1}
            >
              <Box display="flex" alignItems="center">
                {!!user && title === 'dashboard' && (
                  <>
                    <Box>
                      <IconButton
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        color="primary"
                        onClick={handleClick}
                      >
                        <AccountCircle />
                      </IconButton>
                    </Box>
                    <Typography variant="body1">{email}</Typography>
                  </>
                )}
              </Box>
              <Box display="flex" alignItems="center" p={2}>
                {title === 'dashboard' && (
                  <img src={Logo} alt="discorg logo" className={classes.logo} />
                )}
              </Box>
            </Box>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={signOut}>Log Out</MenuItem>
            </Menu>
          </>
        )}
      </Toolbar>
      <MultiColorBorder />
    </AppBar>
  )
}

export default Header
