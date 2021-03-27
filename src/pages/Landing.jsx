import { Grid, Box, Typography, Button, makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'

import MainLayout from '../hoc/Layout/MainLayout'
import Logo from '../images/discorg.png'
import Album1 from '../images/albums/tatsuro-yamashita.jpg'
import Album2 from '../images/albums/charles-mingus.jpeg'
import Album3 from '../images/albums/erykah-badu.jpg'

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    fontSize: 14,
    textDecoration: 'none',
  },
  image: {
    overflow: 'hidden',
  },
}))

const Landing = () => {
  const classes = useStyles()
  const albumImages = [Album1, Album2, Album3]

  return (
    <MainLayout title="home">
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        py={6}
      >
        <Box width={1} height={1} p={4}>
          <Grid container spacing={0}>
            {albumImages.map((image, i) => (
              <Grid key={image} item xs={4} className={classes.image}>
                <img src={image} alt={`home page album cover ${i}`} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box width={1} p={4} className={classes.detail}>
          <Box display="flex" flexDirection="column">
            <Box mt={2} mb={3}>
              <img src={Logo} alt="discorg homepage" />
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
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              mt={2}
              mr="180px"
            >
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
