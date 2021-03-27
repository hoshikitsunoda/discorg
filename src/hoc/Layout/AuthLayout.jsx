import { Helmet } from 'react-helmet'
import { Container, Box, makeStyles } from '@material-ui/core'

import Header from '../../components/shared/Header'
import Logo from '../../images/discorg.png'

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.primary.main,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: 0,
    height: '100vh',
  },
  container: {
    height: '100%',
    width: '100%',
  },
  modal: {
    padding: theme.spacing(4),
    maxWidth: 380,
    border: '1px solid #e4e4e4',
    borderRadius: 5,
  },
  logo: {
    width: 120,
    margin: '8px auto 24px',
    display: 'block',
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
        <Header title={title} />
        <Box
          className={classes.container}
          component="main"
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Box width={1} className={classes.modal}>
            <img src={Logo} alt="discorg logo" className={classes.logo} />
            {children}
          </Box>
        </Box>
      </Container>
    </>
  )
}

export default AuthLayout
