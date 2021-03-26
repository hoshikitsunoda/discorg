import { makeStyles, Modal } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    position: 'absolute',
    backgroundColor: theme.palette.background.paper,
    borderRadius: 5,
    boxShadow: theme.shadows[4],
    padding: theme.spacing(2, 4, 3),
    outline: 'none',
  },
}))

const CustomModal = ({ open, handleClose, children, ...props }) => {
  const classes = useStyles()
  return (
    <Modal
      open={open}
      onClose={handleClose}
      className={classes.modal}
      {...props}
    >
      <main className={classes.paper}>{children}</main>
    </Modal>
  )
}

export default CustomModal
