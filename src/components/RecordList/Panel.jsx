import {
  makeStyles,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from '@material-ui/core'
import Skeleton from '@material-ui/lab/Skeleton'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    maxWidth: 345,
    boxShadow: 'none',
    border: '1px solid #e4e4e4',
  },
  media: {
    width: '100%',
    minHeight: 210,
  },
  textRight: {
    textAlign: 'right',
    marginTop: theme.spacing(4),
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
    id,
  } = recordData[uid]

  const shortenString = (string, maxLength) =>
    string?.length > maxLength
      ? string?.substring(0, maxLength) + '...'
      : string

  return (
    <Card className={classes.root}>
      <Link
        to={{
          pathname: `/dashboard/item/${id}`,
        }}
        className={classes.panel}
      >
        <CardActionArea>
          {!!imageUrl ? (
            <img
              className={classes.media}
              src={imageUrl}
              alt={`${artist} - ${title}`}
            />
          ) : (
            <Skeleton variant="rect" width={345} height={200} />
          )}
          <CardContent>
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
            <div className={classes.textRight}>
              <Typography variant="body2" component="p">
                {label}
              </Typography>
              <Typography variant="body2" component="p">
                {`${releaseYear} / ${country}`}
              </Typography>
            </div>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  )
}

export default Panel
