import { makeStyles, Container, Grid } from '@material-ui/core'

import Panel from './Panel'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
  },
}))

const RecordList = ({ recordData, uid }) => {
  const classes = useStyles()
  const dataArray = Object.keys(recordData).reverse()

  return (
    <Container maxWidth="md" className={classes.root}>
      <Grid container spacing={2}>
        {dataArray.map((uid) => (
          <Grid item xs={12} sm={4} md={3} key={uid}>
            <Panel key={uid} recordData={recordData} uid={uid} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default RecordList
