import CustomModal from '../shared/Modal'

const AddRecord = ({ open, handleClose }) => {
  const text = <h3>MODAL!</h3>
  return (
    <CustomModal open={open} handleClose={handleClose}>
      {text}
    </CustomModal>
  )
}

export default AddRecord
