import { makeStyles, Modal, Box, Typography } from '@material-ui/core'

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

export const CustomModal = ({ open, handleClose, children, ...props }) => {
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

export const ConfirmModal = ({ open, title, subtitle, children }) => {
  return (
    <CustomModal open={open}>
      <Box p={3} display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h5" component="h5">
          {title}
        </Typography>
        <Box py={2}>
          <Typography variant="body1" component="p">
            {subtitle}
          </Typography>
        </Box>
        {children}
      </Box>
    </CustomModal>
  )
}
