import {
  makeStyles,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    boxShadow: 'none',
    border: '1px solid #e4e4e4',
  },
  media: {
    width: '100%',
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
}))

const Panel = ({ recordData, imgSrc, uid }) => {
  const classes = useStyles()

  const { artist, title, releaseYear, label, country } = recordData[uid]

  const shortenString = (string, maxLength) =>
    string?.length > maxLength
      ? string?.substring(0, maxLength) + '...'
      : string

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <img
          className={classes.media}
          src={imgSrc[uid]}
          alt={`${artist} - ${title}`}
        />
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
    </Card>
  )
}

export default Panel
