import { Box, Typography, Button } from '@material-ui/core'
import CustomModal from '../shared/Modal'

const ConfirmModal = ({ toggleValue, setOpen, open }) => {
  const handleClick = () => {
    toggleValue()
    setOpen(false)
  }

  return (
    <CustomModal open={open}>
      <Box p={3} display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h5" component="h5">
          Are you sure you want to exit edit mode?
        </Typography>
        <Box py={2}>
          <Typography variant="body1" component="p">
            Some fields are edited.
          </Typography>
        </Box>
        <Box
          p={2}
          pb={0}
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          width={1}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={() => setOpen(false)}
          >
            Stay
          </Button>
          <Button variant="contained" color="secondary" onClick={handleClick}>
            Exit
          </Button>
        </Box>
      </Box>
    </CustomModal>
  )
}

export default ConfirmModal
