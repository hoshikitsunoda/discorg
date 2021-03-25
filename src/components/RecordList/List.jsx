import {
  makeStyles,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Box,
  Grid,
} from '@material-ui/core'
import Skeleton from '@material-ui/lab/Skeleton'
import { Link } from 'react-router-dom'

import CloseIcon from '../../images/icons/close-icon.svg'
import { shortenString, mediaIcon } from '../../utils/helper'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    boxShadow: 'none',
    border: '1px solid #e4e4e4',
  },
  media: {
    width: '100%',
    borderRadius: '5px 0 0 5px',
    paddingBottom: '100%',
  },
  bottomText: {
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
  cardContent: {
    padding: 8,
  },
  cardGird: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  flex: {
    display: 'flex',
    alignItems: 'center',
  },
}))

const List = ({ recordData, uid, handleDelete }) => {
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
        <CardActionArea>
          <CardContent className={classes.cardContent}>
            <Grid container spacing={2}>
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
              <Grid item xs={4} className={classes.flex}>
                <Typography
                  variant="h6"
                  component="h2"
                  className={classes.title}
                >
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
              <Grid item xs={1} className={classes.flex}>
                <Typography
                  variant="body2"
                  component="p"
                  style={{ fontSize: 10 }}
                >
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
              <Grid
                item
                xs={1}
                className={classes.flex}
                style={{ justifyContent: 'center' }}
              >
                <Box width={20}>
                  <img
                    src={CloseIcon}
                    alt="delete item"
                    style={{ width: 20 }}
                    onClick={(event) => handleDelete(event, uid, id)}
                  />
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  )
}

export default List
