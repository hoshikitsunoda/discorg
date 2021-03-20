import { Box, makeStyles } from '@material-ui/core'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'

const useStyles = makeStyles((theme) => ({
  image: {
    width: '100%',
    height: '100%',
  },
  backdrop: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
}))

const ImagePreview = ({ imagePreview, uploaded }) => {
  const classes = useStyles()

  return (
    <Box height={1} width={1} my={2} style={{ position: 'relative' }}>
      {uploaded && (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          className={classes.backdrop}
        >
          <CheckCircleIcon color="secondary" fontSize="large" />
        </Box>
      )}
      {imagePreview && (
        <img src={imagePreview} alt="" className={classes.image} />
      )}
    </Box>
  )
}

export default ImagePreview
