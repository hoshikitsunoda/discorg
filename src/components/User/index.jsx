import {
  makeStyles,
  Grid,
  Typography,
  Avatar,
  Divider,
  Box,
} from '@material-ui/core'
import clsx from 'clsx'

import { useSingleUserData, useAllUsersData } from '../../hooks'
import AvatarPlaceholder from '../../images/avatar-placeholder.svg'

const useStyles = makeStyles((theme) => ({
  root: { paddingTop: theme.spacing(4) },
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
  avatar: {
    border: `3px solid ${theme.palette.primary.main}`,
    padding: theme.spacing(1),
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  divider: {
    width: '100%',
    margin: `${theme.spacing(8)}px 0`,
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

  const { username, firstName, lastName } = userAccount || {}

  return (
    <Grid container spacing={2} className={classes.root}>
      <Grid item xs={12} sm={6} className={classes.avatarWrapper}>
        <Box mb={2}>
          <Avatar
            alt={firstName}
            src={AvatarPlaceholder}
            className={clsx(classes.avatar, classes.large)}
          />
        </Box>
        <Typography variant="body1" component="p">
          @{username}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} className={classes.textWrapper}>
        <div>
          <Typography variant="h6" component="h6">
            {firstName} {lastName}
          </Typography>
        </div>
      </Grid>
      <Divider className={classes.divider} />
    </Grid>
  )
}

export default User
