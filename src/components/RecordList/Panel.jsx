import { makeStyles, Typography, Box, Button } from '@material-ui/core'
import Skeleton from '@material-ui/lab/Skeleton'
import CloseIcon from '@material-ui/icons/Close'

import { shortenString, mediaIcon } from '../../utils/helper'
import { useToggle } from '../../hooks'
import { ConfirmModal } from '../shared/Modal'
import { CustomCard } from '../shared/Card'

const useStyles = makeStyles((theme) => ({
  media: {
    width: '100%',
    borderRadius: 5,
    paddingBottom: '100%',
  },
  bottomText: {
    marginTop: theme.spacing(1),
    '& > p': {
      fontSize: 12,
    },
  },
  title: {
    fontSize: 16,

    [theme.breakpoints.down('sm')]: {
      fontSize: 20,
    },
  },
  artist: {
    fontSize: 14,

    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
    },
  },
}))

const Panel = ({ recordData, uid, handleDelete, profile, accountId }) => {
  const classes = useStyles()
  const { value, toggleValue } = useToggle(false)

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
      url={profile ? `/user/${accountId}/item/${id}` : `/dashboard/item/${id}`}
    >
      <Box p={1}>
        {icon && (
          <Box width={20} mb={1}>
            <img src={icon} alt="" style={{ width: '100%' }} />
          </Box>
        )}
        <Typography variant="h6" component="h2" className={classes.title}>
          {shortenString(title, 61)}
        </Typography>
        <Typography
          variant="body1"
          color="textSecondary"
          component="p"
          className={classes.artist}
        >
          {shortenString(artist, 25)}
        </Typography>
      </Box>
      <Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            className={classes.bottomText}
            p={1}
          >
            <Typography variant="body2" component="p">
              {label}
            </Typography>
            <Typography variant="body2" component="p">
              {`${releaseYear} / ${country}`}
            </Typography>
          </Box>
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
        {!profile && (
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="center"
            p={1}
            mt={1}
          >
            <CloseIcon
              style={{ width: 30 }}
              onClick={(event) => handleClick(event)}
            />
          </Box>
        )}
      </Box>
      {value && (
        <ConfirmModal
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
            <Button variant="contained" color="secondary" onClick={handleClick}>
              Cancel
            </Button>
          </Box>
        </ConfirmModal>
      )}
    </CustomCard>
  )
}

export default Panel
