import {
  Grid,
  Box,
  Typography,
  Button,
  makeStyles,
  useMediaQuery,
  useTheme,
} from '@material-ui/core'
import { Link } from 'react-router-dom'

import MainLayout from '../hoc/Layout/MainLayout'
import Logo from '../images/discorg.png'
import Album1 from '../images/albums/tatsuro-yamashita.jpg'
import Album2 from '../images/albums/charles-mingus.jpeg'
import Album3 from '../images/albums/erykah-badu.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 180,

    [theme.breakpoints.down('sm')]: {
      margin: '1rem 0',
      flexDirection: 'column',
    },
  },
  button: {
    margin: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    fontSize: 14,
    textDecoration: 'none',

    [theme.breakpoints.down('sm')]: {
      marginLeft: 'auto',
      margin: '0 0 1rem',
    },
  },
  image: {
    overflow: 'hidden',
  },
  gallery: {
    order: 1,

    [theme.breakpoints.down('sm')]: {
      order: 2,
    },
  },
  detail: {
    order: 2,

    [theme.breakpoints.down('sm')]: {
      order: 1,
    },
  },
}))

const Landing = () => {
  const classes = useStyles()
  const albumImages = [Album1, Album2, Album3]
  const theme = useTheme()
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <MainLayout title="home">
      <Box className={classes.root} py={6}>
        <Box
          width={1}
          height={1}
          p={isSmall ? 1 : 4}
          className={classes.gallery}
        >
          <Grid container spacing={0}>
            {albumImages.map((image, i) => (
              <Grid key={image} item xs={4} className={classes.image}>
                <img src={image} alt={`home page album cover ${i}`} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box width={1} p={isSmall ? 1 : 4} className={classes.detail}>
          <Box display="flex" flexDirection="column">
            <Box mt={2} mb={3}>
              <img
                src={Logo}
                alt="discorg homepage"
                style={{ width: '100%' }}
              />
            </Box>
            <Typography variant="h4" component="h4" style={{ fontWeight: 600 }}>
              Social media for record lovers
            </Typography>
            <Typography variant="subtitle1" component="h4">
              Meet other collectors.
            </Typography>
            <Typography variant="subtitle1" component="h4">
              Trade records.
            </Typography>
            <Box className={classes.buttons} mt={2}>
              <Link to="/signin" className={classes.button}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                  Sign In
                </Button>
              </Link>
              <Link to="/signup" className={classes.button}>
                <Button
                  type="submit"
                  fullWidth
                  variant="outlined"
                  color="primary"
                >
                  Register
                </Button>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </MainLayout>
  )
}

export default Landing
