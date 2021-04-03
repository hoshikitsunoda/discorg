import {
  makeStyles,
  Grid,
  Typography,
  Avatar,
  Divider,
  Box,
  IconButton,
  Button,
  Chip,
} from '@material-ui/core'
import clsx from 'clsx'
import CloseIcon from '@material-ui/icons/Close'
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined'

import {
  useSingleUserData,
  useAllUsersData,
  useToggle,
  useData,
} from '../../hooks'
import AvatarPlaceholder from '../../images/avatar-placeholder.svg'
import Edit from './Edit'
import { countObjectKeys } from '../../utils/helper'

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
    margin: `${theme.spacing(7)}px 0`,
  },
  iconWrapper: {
    textAlign: 'right',
    marginTop: ({ profile }) => (profile ? 64 : 16),
  },
  button: {},
  stats: {
    fontWeight: 600,

    '& span': {
      fontWeight: 400,
      color: '#888',
      fontSize: 12,
    },
  },
}))

const User = ({ userId, profile }) => {
  const classes = useStyles({ profile })
  const {
    currentUser: { account = {} },
  } = useSingleUserData()
  const { allUsers = {} } = useAllUsersData()
  const { value: edit, toggleValue } = useToggle(false)
  const { data } = useData(userId)

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
        {!profile && (
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
        <Grid item xs={12} sm={3} className={classes.avatarWrapper}>
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
        <Grid item xs={12} sm={3}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography className={classes.stats}>
                <span>Followers: </span>10k
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography className={classes.stats}>
                <span>Following: </span>968
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography className={classes.stats}>
                <span>Collections:</span> {recordData.length}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography className={classes.stats} variant="body1">
                Top genre:
              </Typography>
              <Box py={1}>
                <Chip label={topGenre} />
              </Box>
            </Grid>
          </Grid>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Follow
          </Button>
        </Grid>
        <Divider className={classes.divider} />
      </Grid>
    </Box>
  )
}

export default User
