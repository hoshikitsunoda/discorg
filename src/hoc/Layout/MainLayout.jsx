import { Helmet } from 'react-helmet'
import { Container, makeStyles } from '@material-ui/core'

import Header from '../../components/shared/Header'

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.primary.main,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100vh',
    padding: 0,
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
        <Header />
        <Container component="main">{children}</Container>
      </Container>
    </>
  )
}

export default MainLayout
