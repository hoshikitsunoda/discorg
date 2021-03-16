import { useState, useEffect } from 'react'
import {
  Typography,
  Box,
  IconButton,
  Grid,
  Button,
  CircularProgress,
  Input,
  makeStyles,
} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import firebase from 'firebase'

import CustomModal from '../shared/Modal'
import AddRecordForm from './AddRecordForm'
import { usePostData } from '../../hooks'

const useStyles = makeStyles((theme) => ({
  form: {
    '& .MuiFilledInput-root': {
      borderRadius: 0,
    },
  },
  rightCol: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  buttons: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',

    '& .MuiButton-root': {
      padding: theme.spacing(1),
    },

    '& > :first-child': {
      marginBottom: theme.spacing(1),
    },
  },
}))

const AddRecord = ({ open, handleClose, uid, getRecords }) => {
  const classes = useStyles()
  const [recordInfo, setRecordInfo] = useState({})
  const [imageUrl, setImageUrl] = useState('')
  const { submitting, close, postData, error } = usePostData()

  const handleChange = ({ target: { name, value } }) => {
    setRecordInfo({
      ...recordInfo,
      [name]: value,
    })
  }

  const handleFile = ({ target: { files } }) => {
    setImageUrl(URL.createObjectURL(files[0]))
  }

  const handleSubmit = () => {
    const storageRef = firebase.storage().ref('images')
    storageRef.child(`${uid}.jpg`).put(imageUrl)

    const formData = {
      ...recordInfo,
      id: uid,
      imageUrl,
    }
    postData(formData)
  }

  useEffect(() => {
    // close modal if close state from usePostData is true
    if (close) {
      handleClose()
      getRecords()
    }
  }, [handleClose, close, getRecords])

  return (
    <CustomModal open={open} handleClose={handleClose}>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h6">What record are you adding?</Typography>
        <IconButton onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Grid container spacing={2} className={classes.form}>
        {error ? (
          'Oops, something went wrong:('
        ) : (
          <>
            <Grid item xs={8}>
              <AddRecordForm handleChange={handleChange} />
            </Grid>
            <Grid item xs={4} className={classes.rightCol}>
              <Input type="file" onChange={handleFile} />
              <img src={imageUrl} alt="" />
              <Box className={classes.buttons}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                >
                  {submitting ? <CircularProgress /> : 'Add to collection'}
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={handleClose}
                >
                  Cancel
                </Button>
              </Box>
            </Grid>
          </>
        )}
      </Grid>
    </CustomModal>
  )
}

export default AddRecord
