import {
  makeStyles,
  Card,
  CardActionArea,
  CardContent,
} from '@material-ui/core'

import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    boxShadow: 'none',
    border: '1px solid #e4e4e4',
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
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  cardActionArea: {
    height: '100%',
  },
}))

export const CustomCard = ({ url, children, ...props }) => {
  const classes = useStyles()

  return (
    <Card className={classes.root} {...props}>
      <Link
        to={{
          pathname: url,
        }}
        className={classes.panel}
      >
        <CardActionArea className={classes.cardActionArea}>
          <CardContent className={classes.cardContent}>{children}</CardContent>
        </CardActionArea>
      </Link>
    </Card>
  )
}
