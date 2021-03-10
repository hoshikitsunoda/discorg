import { makeStyles, TextField, Box, Button, Grid } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiFilledInput-root': {
      borderRadius: 0,
    },
  },
  buttons: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',

    '& .MuiButton-root': {
      padding: theme.spacing(1),
    },
  },
}))

const AddRecordForm = ({ handleClose }) => {
  const classes = useStyles()
  return (
    <Grid container spacing={2} className={classes.root}>
      <Grid item xs={8}>
        <Box display="flex" flexDirection="row" justifyContent="space-between">
          <TextField label="Artist" variant="filled" fullWidth />
          <TextField label="Title" variant="filled" fullWidth />
        </Box>
        <TextField label="Label" variant="filled" fullWidth />
        <Box display="flex" flexDirection="row" justifyContent="space-between">
          <TextField label="Format" variant="filled" fullWidth />
          <TextField label="Country" variant="filled" fullWidth />
        </Box>
        <Box display="flex" flexDirection="row" justifyContent="space-between">
          <TextField label="Release year" variant="filled" fullWidth />
          <TextField label="Genre" variant="filled" fullWidth />
        </Box>
        <TextField label="Location" variant="filled" fullWidth />
        <Box display="flex" flexDirection="row" justifyContent="space-between">
          <TextField label="Media condition" variant="filled" fullWidth />
          <TextField label="Cover condition" variant="filled" fullWidth />
        </Box>
        <TextField label="Note" variant="filled" multiline rows={4} fullWidth />
      </Grid>
      <Grid item xs={4}>
        <Box className={classes.buttons}>
          <Button variant="contained" color="primary">
            Add to collection
          </Button>
          <Button variant="outlined" color="primary" onClick={handleClose}>
            Cancel
          </Button>
        </Box>
      </Grid>
    </Grid>
  )
}

export default AddRecordForm
