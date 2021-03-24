import { makeStyles, Container, Grid, IconButton } from '@material-ui/core'
import AddCircleIcon from '@material-ui/icons/AddCircle'

import Panel from './Panel'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
  },
  button: {
    position: 'fixed',
    bottom: 30,
    right: 100,
  },
  icon: {
    fontSize: 64,
    color: theme.palette.primary.main,
  },
}))

const RecordList = ({ recordData, toggleValue }) => {
  const classes = useStyles()
  const dataArray = Object.keys(recordData).reverse()

  return (
    <>
      <Container maxWidth="md" className={classes.root}>
        {recordData ? (
          <Grid container spacing={2}>
            {dataArray.map((uid) => (
              <Grid item xs={12} sm={4} md={3} key={uid}>
                <Panel recordData={recordData} uid={uid} />
              </Grid>
            ))}
          </Grid>
        ) : (
          'No record to show'
        )}
      </Container>
      <IconButton onClick={toggleValue} className={classes.button}>
        <AddCircleIcon fontSize="large" className={classes.icon} />
      </IconButton>
    </>
  )
}

export default RecordList
