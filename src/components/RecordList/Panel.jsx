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
import CassetteIcon from '../../images/icons/cassette.png'
import RecordIcon from '../../images/icons/record.png'

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
  textRight: {
    textAlign: 'right',
    marginTop: theme.spacing(3),
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
}))

const Panel = ({ recordData, uid }) => {
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
            <Box p={1}>
              {icon && (
                <Box width={20} mb={2}>
                  <img src={icon} alt="" style={{ width: '100%' }} />
                </Box>
              )}
              <Typography variant="h6" component="h2" className={classes.title}>
                {shortenString(title, 18)}
              </Typography>
              <Typography
                variant="body1"
                color="textSecondary"
                component="p"
                className={classes.artist}
              >
                {shortenString(artist, 25)}
              </Typography>
              <Box
                display="flex"
                justifyContent="space-between"
                className={classes.textRight}
              >
                <Typography variant="body2" component="p">
                  {label}
                </Typography>
                <Typography variant="body2" component="p">
                  {`${releaseYear} / ${country}`}
                </Typography>
              </Box>
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
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  )
}

export default Panel
