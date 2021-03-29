import { useState } from 'react'
import { Box, Button, CircularProgress, makeStyles } from '@material-ui/core'

import RecordFrom from '../shared/RecordForm'
import { useData } from '../../hooks'

const useStyles = makeStyles((theme) => ({
  form: {
    '& .MuiFilledInput-root': {
      borderRadius: 0,
    },
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

const Edit = ({
  recordData,
  recordToUpdate,
  exitEdit,
  getRecords,
  setTouched,
  touched,
}) => {
  const classes = useStyles()
  const [input, setInput] = useState({})
  const { editData, submitting } = useData()

  const handleChange = ({ target: { name, value } }) => {
    setInput({
      ...input,
      [name]: value,
    })
    setTouched({
      ...touched,
      [name]: recordData[name] === value ? false : true,
    })
  }

  const handleSubmit = async () => {
    await editData(recordToUpdate[0], input)
    exitEdit(false)
    getRecords()
  }

  return (
    <>
      <RecordFrom
        handleChange={handleChange}
        recordData={recordData}
        heading="Edit:"
      />
      <Box className={classes.buttons}>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          {submitting ? <CircularProgress /> : 'Update field(s)'}
        </Button>
      </Box>
    </>
  )
}

export default Edit
