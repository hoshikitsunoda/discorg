import { makeStyles, Grid, Typography } from '@material-ui/core'
import AccountCircle from '@material-ui/icons/AccountCircle'

import { useSingleUserData, useAllUsersData } from '../../hooks'

const useStyles = makeStyles((theme) => ({
  root: {},
  avatarWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  textWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
}))

const User = ({ userId }) => {
  const classes = useStyles()
  const {
    currentUser: { account = {} },
  } = useSingleUserData()
  const { allUsers = {} } = useAllUsersData()
  let userAccount = account

  if (userId) {
    const userKey = Object.keys(allUsers).find((user) => user === userId)
    userAccount = allUsers[userKey]?.account
  }

  const { username } = userAccount || {}

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} className={classes.avatarWrapper}>
        <AccountCircle style={{ fontSize: 140 }} />
        <Typography variant="h5" component="h5">
          @{username}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} className={classes.textWrapper}>
        <div>Hello</div>
      </Grid>
    </Grid>
  )
}

export default User
