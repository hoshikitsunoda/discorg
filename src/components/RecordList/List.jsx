import {
  makeStyles,
  Typography,
  Box,
  Grid,
  Button,
  useMediaQuery,
  useTheme,
} from '@material-ui/core'
import Skeleton from '@material-ui/lab/Skeleton'
import CloseIcon from '@material-ui/icons/Close'

import { shortenString, mediaIcon } from '../../utils/helper'
import { useToggle, useAuth } from '../../hooks'
import { ConfirmModal } from '../shared/Modal'
import { CustomCard } from '../shared/Card'

const useStyles = makeStyles((theme) => ({
  media: {
    width: '100%',
    borderRadius: '5px 0 0 5px',
    paddingBottom: '100%',
  },
  title: {
    fontSize: 16,
  },
  artist: {
    fontSize: 14,
  },
  panel: {
    textDecoration: 'none',
    color: theme.palette.primary.main,
  },
  flex: {
    display: 'flex',
    alignItems: 'center',
  },
}))

const List = ({ recordData, uid, handleDelete, profile, accountId }) => {
  const classes = useStyles()
  const theme = useTheme()
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'))
  const { value, toggleValue } = useToggle(false)
  const { user } = useAuth()
  const { uid: userId } = user || {}

  const {
    artist,
    title,
    releaseYear,
    label,
    country,
    imageUrl,
    format,
    id,
  } = recordData[uid]

  const icon = mediaIcon(format)

  const handleClick = (event) => {
    event.preventDefault()
    event.stopPropagation()
    toggleValue()
  }

  return (
    <CustomCard
      url={
        profile
          ? `/user/${accountId}/item/${id}`
          : `/dashboard/${userId}/item/${id}`
      }
    >
      <Grid container spacing={2}>
        {!isSmall && (
          <Grid item xs={1} style={{ padding: 0 }}>
            <Box mr={2}>
              {!!imageUrl ? (
                <div
                  className={classes.media}
                  title={`${artist} - ${title}`}
                  style={{
                    backgroundImage: `url(${imageUrl})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center',
                  }}
                />
              ) : (
                <Skeleton variant="rect" width={345} height={200} />
              )}
            </Box>
          </Grid>
        )}
        <Grid item xs={isSmall ? 5 : 4} className={classes.flex}>
          <Typography variant="h6" component="h2" className={classes.title}>
            {shortenString(title, 30)}
          </Typography>
        </Grid>
        <Grid item xs={2} className={classes.flex}>
          <Typography
            variant="body1"
            color="textSecondary"
            component="p"
            className={classes.artist}
          >
            {shortenString(artist, 25)}
          </Typography>
        </Grid>
        <Grid item xs={2} className={classes.flex}>
          <Typography variant="body2" component="p">
            {label}
          </Typography>
        </Grid>
        <Grid item xs={profile ? 2 : 1} className={classes.flex}>
          <Typography variant="body2" component="p" style={{ fontSize: 10 }}>
            {`${releaseYear} / ${country}`}
          </Typography>
        </Grid>
        <Grid
          item
          xs={1}
          className={classes.flex}
          style={{ justifyContent: 'center' }}
        >
          {icon && (
            <Box width={20}>
              <img src={icon} alt="" style={{ width: '100%' }} />
            </Box>
          )}
        </Grid>
        {!profile && (
          <Grid
            item
            xs={1}
            className={classes.flex}
            style={{ justifyContent: 'center' }}
          >
            <Box>
              <CloseIcon
                style={{ width: 30 }}
                onClick={(event) => handleClick(event)}
              />
            </Box>
          </Grid>
        )}
      </Grid>
      {value && (
        <ConfirmModal
          setOpen={toggleValue}
          open={value}
          handleClose={toggleValue}
          title="Are you sure you want to delete this item?"
          subtitle="It can't be undone."
        >
          <Box
            p={2}
            pb={0}
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            width={1}
          >
            <Button
              variant="contained"
              color="primary"
              onClick={(event) => handleDelete(event, uid, id)}
            >
              Delete
            </Button>
            <Button variant="contained" color="secondary" onClick={toggleValue}>
              Cancel
            </Button>
          </Box>
        </ConfirmModal>
      )}
    </CustomCard>
  )
}

export default List
