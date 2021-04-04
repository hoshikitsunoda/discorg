import {
  makeStyles,
  Grid,
  Typography,
  Avatar,
  Divider,
  Box,
  IconButton,
  Button,
} from '@material-ui/core'
import clsx from 'clsx'
import CloseIcon from '@material-ui/icons/Close'
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined'

import {
  useSingleUserData,
  useAllUsersData,
  useToggle,
  useData,
  useAuth,
} from '../../hooks'
import AvatarPlaceholder from '../../images/avatar-placeholder.svg'
import Edit from './Edit'
import { countObjectKeys } from '../../utils/helper'
import Stats from './Stats'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 660,
    margin: '0 auto',

    [theme.breakpoints.down('sm')]: {
      maxWidth: 'auto',
      margin: -16,
    },
  },
  userInfo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    [theme.breakpoints.down('sm')]: {
      paddingBottom: '0 !important',
    },
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
    margin: `${theme.spacing(3)}px 0`,
  },
  iconWrapper: {
    textAlign: 'right',
    marginTop: ({ userId }) => (userId ? 32 : 0),
  },
  button: {
    width: '100%',
  },
  avatarWrapper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    marginBottom: 16,
  },
}))

const User = ({ userId }) => {
  const classes = useStyles({ userId })
  const {
    currentUser: { account = {} },
  } = useSingleUserData()
  const { allUsers = {} } = useAllUsersData()
  const { value: edit, toggleValue } = useToggle(false)
  const { user } = useAuth()
  const { uid } = user || {}

  const { data } = useData(userId ? userId : uid)

  let userAccount = account
  if (userId) {
    const userKey = Object.keys(allUsers).find((user) => user === userId)
    userAccount = allUsers[userKey]?.account
  }

  const { username, firstName, lastName, bio } = userAccount || {}

  const recordData = Object.entries(data)
  const recordDataArray = recordData.map((record) =>
    Object.assign({}, record[1])
  )

  const genreCount = countObjectKeys(recordDataArray, 'genre')

  const topGenre = Object.keys(genreCount).reduce(
    (acc, curr) => (genreCount[acc] > genreCount[curr] ? acc : curr),
    ''
  )

  return (
    <Box>
      <Box className={classes.iconWrapper}>
        {!userId && (
          <IconButton
            color="primary"
            aria-label="toggle edit"
            onClick={toggleValue}
          >
            {edit ? <CloseIcon /> : <CreateOutlinedIcon />}
          </IconButton>
        )}
      </Box>
      <Grid
        container
        spacing={4}
        justify="space-between"
        className={classes.root}
      >
        <Grid item container xs={12} className={classes.userInfo}>
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
          <Grid item xs={12} sm={6}>
            <Stats recordData={recordData} topGenre={topGenre} />
            <Grid container spacing={1} style={{ marginTop: 8 }}>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  Follow
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.button}
                >
                  Message
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} className={classes.textWrapper}>
          <div>
            {edit ? (
              <Edit user={userAccount} />
            ) : (
              <>
                <Typography variant="h6" component="h6">
                  {firstName} {lastName}
                </Typography>
                <Typography variant="body1" component="p">
                  {bio}
                </Typography>
              </>
            )}
          </div>
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
    </Box>
  )
}

export default User
