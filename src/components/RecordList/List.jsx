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
import CassetteIcon from '../../images/icons/cassette.png'
import RecordIcon from '../../images/icons/record.png'

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

const List = ({ recordData, uid }) => {
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

  const shortenString = (string, maxLength) =>
    string?.length > maxLength
      ? string?.substring(0, maxLength) + '...'
      : string

  let icon

  switch (format) {
    case 'LP':
      icon = RecordIcon
      break
    case '2 x LP':
      icon = RecordIcon
      break
    case '3 x LP':
      icon = RecordIcon
      break
    case 'Cassette':
      icon = CassetteIcon
      break
    default:
      icon = ''
  }

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
              <Grid item xs={2} className={classes.flex}>
                <Typography variant="body2" component="p">
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
            </Grid>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  )
}

export default List
