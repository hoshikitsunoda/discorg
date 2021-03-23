import { useEffect } from 'react'
import {
  Typography,
  Box,
  IconButton,
  Grid,
  Button,
  CircularProgress,
  makeStyles,
} from '@material-ui/core'
import { useParams } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
  },
}))

const RecordDetail = ({ recordData }) => {
  const classes = useStyles()
  const { id: itemId } = useParams()
  const singleRecord = Object.keys(recordData).filter(
    (record) => recordData[record].id === itemId
  )
  const itemToDisplay = recordData[singleRecord]

  const {
    artist = '',
    catalogNumber = '',
    country = '',
    coverCondition = '',
    format = '',
    genre = '',
    id = '',
    imageUrl = '',
    label = '',
    location = '',
    mediaCondition = '',
    note = '',
    releaseYear = '',
    style = '',
    title = '',
  } = itemToDisplay || {}

  return (
    <Box display="flex" flexDirection="row" justifyContent="space-between">
      <img src={imageUrl} alt={`${artist} - ${title}`} />
      <div className={classes.detail}>
        <h3>{title}</h3>
        <h4>{artist}</h4>
      </div>
    </Box>
  )
}

export default RecordDetail
