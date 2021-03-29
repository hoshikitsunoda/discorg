import { useState, useEffect } from 'react'
import {
  Typography,
  Box,
  IconButton,
  Grid,
  Button,
  CircularProgress,
  makeStyles,
} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'

import { CustomModal } from '../shared/Modal'
import RecordForm from '../shared/RecordForm'
import ImageUpload from './ImageUpload'
import { useData } from '../../hooks'
import ImagePreview from '../AddRecord/ImagePreview'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '800px !important',
  },
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
  // stores as full url
  const [imageUrl, setImageUrl] = useState('')
  // stores as blob
  const [imagePreview, setImagePreview] = useState('')
  const [uploaded, setUploaded] = useState(false)

  const { submitting, close, postData, error } = useData()

  const handleChange = ({ target: { name, value } }) => {
    setRecordInfo({
      ...recordInfo,
      [name]: value,
    })
  }

  const handleSubmit = async () => {
    const formData = {
      ...recordInfo,
      id: uid,
      imageUrl,
      createdAt: Date.now(),
    }
    await postData(formData)
  }

  const handleCloseModal = () => {
    handleClose()
    setImagePreview('')
  }

  useEffect(() => {
    // close modal if close state from usePostData is true
    if (close) {
      handleClose()
      getRecords()
    }
  }, [handleClose, close, getRecords])

  return (
    <CustomModal
      open={open}
      handleClose={handleClose}
      style={{ maxWidth: 800 }}
    >
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h6">What record are you adding?</Typography>
        <IconButton onClick={handleCloseModal}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Grid container spacing={2} className={classes.form}>
        {error ? (
          'Oops, something went wrong:('
        ) : (
          <>
            <Grid item xs={12} sm={8}>
              <RecordForm handleChange={handleChange} />
            </Grid>
            <Grid item xs={12} sm={4} className={classes.rightCol}>
              <ImageUpload
                uid={uid}
                handleFile={setImagePreview}
                handleUrl={setImageUrl}
                setUploaded={setUploaded}
              />
              <ImagePreview imagePreview={imagePreview} uploaded={uploaded} />
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
                  onClick={handleCloseModal}
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
