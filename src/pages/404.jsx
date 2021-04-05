import { Typography } from '@material-ui/core'

import MainLayout from '../hoc/Layout/MainLayout'

const NotFound = () => {
  return (
    <MainLayout title="dashboard">
      <Typography variant="h1" component="h1">
        Page not found :(
      </Typography>
    </MainLayout>
  )
}

export default NotFound
