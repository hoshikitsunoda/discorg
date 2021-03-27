import { Helmet } from 'react-helmet'
import { Container, makeStyles, Box } from '@material-ui/core'

import Header from '../../components/shared/Header'
import Logo from '../../images/discorg.png'

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.primary.main,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    padding: 0,
  },
  logo: {
    width: 100,
  },
}))

const MainLayout = ({ title, children }) => {
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
        <Container component="main">{children}</Container>
        {title !== 'home' && (
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            width={1}
            style={{ padding: '100px 0 40px' }}
          >
            <img src={Logo} alt="discorg logo" className={classes.logo} />
          </Box>
        )}
      </Container>
    </>
  )
}

export default MainLayout
