import { Typography, Box, IconButton } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'

import CustomModal from '../shared/Modal'
import AddRecordForm from './AddRecordForm'

const AddRecord = ({ open, handleClose }) => {
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
      <AddRecordForm handleClose={handleClose} />
    </CustomModal>
  )
}

export default AddRecord
