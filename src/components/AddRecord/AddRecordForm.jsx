import { useState, useEffect } from 'react'
import {
  makeStyles,
  TextField,
  Box,
  Button,
  Grid,
  CircularProgress,
} from '@material-ui/core'
import { v4 as uuidv4 } from 'uuid'

import { usePostData } from '../../hooks'

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
  const [recordInfo, setRecordInfo] = useState({})
  const { submitting, close, postData, error } = usePostData()
  const id = uuidv4()

  const handleChange = ({ target: { name, value } }) => {
    setRecordInfo({
      ...recordInfo,
      [name]: value,
    })
  }

  const handleSubmit = () => {
    const formData = {
      ...recordInfo,
      id: id,
    }
    postData(formData, id)
  }

  useEffect(() => {
    // closed state from usePostData hook is a source of truth for modal state
    if (close) {
      handleClose()
    }
  }, [handleClose, close])

  return (
    <Grid container spacing={2} className={classes.root}>
      {error ? (
        'Something went wrong:('
      ) : (
        <>
          <Grid item xs={8}>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
            >
              <TextField
                label="Artist"
                name="artist"
                variant="filled"
                fullWidth
                onChange={handleChange}
              />
              <TextField
                label="Title"
                name="title"
                variant="filled"
                fullWidth
                onChange={handleChange}
              />
            </Box>
            <TextField
              label="Label"
              name="label"
              variant="filled"
              fullWidth
              onChange={handleChange}
            />
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
            >
              <TextField
                label="Format"
                name="format"
                variant="filled"
                fullWidth
                onChange={handleChange}
              />
              <TextField
                label="Country"
                name="country"
                variant="filled"
                fullWidth
                onChange={handleChange}
              />
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
            >
              <TextField
                label="Release year"
                name="releaseYear"
                variant="filled"
                fullWidth
                onChange={handleChange}
              />
              <TextField
                label="Genre"
                name="genre"
                variant="filled"
                fullWidth
                onChange={handleChange}
              />
            </Box>
            <TextField
              label="Location"
              name="location"
              variant="filled"
              fullWidth
              onChange={handleChange}
            />
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
            >
              <TextField
                label="Media condition"
                name="mediaCondition"
                variant="filled"
                fullWidth
                onChange={handleChange}
              />
              <TextField
                label="Cover condition"
                name="coverCondition"
                variant="filled"
                fullWidth
                onChange={handleChange}
              />
            </Box>
            <TextField
              label="Note"
              name="note"
              variant="filled"
              multiline
              rows={4}
              fullWidth
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={4}>
            <Box className={classes.buttons}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
              >
                {submitting ? <CircularProgress /> : 'Add to collection'}
              </Button>
              <Button variant="outlined" color="primary" onClick={handleClose}>
                Cancel
              </Button>
            </Box>
          </Grid>
        </>
      )}
    </Grid>
  )
}

export default AddRecordForm
