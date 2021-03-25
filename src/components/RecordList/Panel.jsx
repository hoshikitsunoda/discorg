import {
  makeStyles,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Box,
} from '@material-ui/core'
import Skeleton from '@material-ui/lab/Skeleton'
import { Link } from 'react-router-dom'

import CloseIcon from '../../images/icons/close-icon.svg'
import { shortenString, mediaIcon } from '../../utils/helper'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    maxWidth: 345,
    boxShadow: 'none',
    border: '1px solid #e4e4e4',
  },
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
  },
  artist: {
    fontSize: 14,
  },
  panel: {
    textDecoration: 'none',
    color: theme.palette.primary.main,
  },
  cardActionArea: {
    height: '100%',
  },
  cardContent: {
    padding: 8,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
}))

const Panel = ({ recordData, uid, handleDelete }) => {
  const classes = useStyles()

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

  return (
    <Card className={classes.root}>
      <Link
        to={{
          pathname: `/dashboard/item/${id}`,
        }}
        className={classes.panel}
      >
        <CardActionArea className={classes.cardActionArea}>
          <CardContent className={classes.cardContent}>
            <Box p={1}>
              {icon && (
                <Box width={20} mb={1}>
                  <img src={icon} alt="" style={{ width: '100%' }} />
                </Box>
              )}
              <Typography variant="h6" component="h2" className={classes.title}>
                {shortenString(title, 30)}
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
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="center"
                p={1}
                mt={1}
              >
                <img
                  src={CloseIcon}
                  alt="delete item"
                  style={{ width: 30 }}
                  onClick={(event) => handleDelete(event, uid, id)}
                />
              </Box>
            </Box>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  )
}

export default Panel
