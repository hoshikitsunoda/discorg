import { Helmet } from 'react-helmet'
import { Container, Box, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.primary.main,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  container: {
    padding: theme.spacing(2),
    maxWidth: 380,
  },
}))

const AuthLayout = ({ title, children }) => {
  const classes = useStyles()
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Recorg | {title}</title>
        <meta
          name="description"
          content="Recorg: Record collection organizer"
        />
      </Helmet>
      <Container maxWidth={false} className={classes.root}>
        <Box
          className={classes.container}
          component="main"
          width={1}
          boxShadow={2}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          {children}
        </Box>
      </Container>
    </>
  )
}

export default AuthLayout
