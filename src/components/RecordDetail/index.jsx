import {
  Typography,
  Box,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  makeStyles,
} from '@material-ui/core'
import { useParams } from 'react-router-dom'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import CloseIcon from '@material-ui/icons/Close'
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined'

import { LinkButton } from '../shared/Button'
import Edit from './Edit'
import { useToggle } from '../../hooks'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
  },
}))

const RecordDetail = ({ recordData }) => {
  const classes = useStyles()
  const { id: itemId } = useParams()
  const { value: edit, toggleValue } = useToggle(false)

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
    <Box pt={4}>
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <LinkButton pathName="/dashboard">
          <ArrowBackIcon fontSize="small" style={{ marginRight: 8 }} />
          <Typography variant="subtitle1" component="p">
            Back to list
          </Typography>
        </LinkButton>
        <Box p={1}>
          {edit ? (
            <CloseIcon onClick={toggleValue} fontSize="large" />
          ) : (
            <CreateOutlinedIcon onClick={toggleValue} fontSize="large" />
          )}
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        px={4}
      >
        <Box width={1} height={1}>
          <img
            style={{ width: '100%' }}
            src={imageUrl}
            alt={`${artist} - ${title}`}
          />
        </Box>
        <Box width={1} p={4} className={classes.detail}>
          {edit ? (
            <Edit recordData={itemToDisplay} />
          ) : (
            <>
              <Typography variant="h3" component="h3">
                {title}
              </Typography>
              <Box py={2} fontStyle="italic">
                <Typography variant="h4" component="h4">
                  {artist}
                </Typography>
              </Box>
              <TableContainer>
                <Table className={classes.table} aria-label="customized table">
                  <TableBody>
                    <TableRow>
                      <TableCell variant="head">Label:</TableCell>
                      <TableCell>
                        <Typography variant="h5" component="h5">
                          {`${label} - ${catalogNumber}`}
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell variant="head">Format:</TableCell>
                      <TableCell>
                        <Typography variant="h6" component="h6">
                          {format}
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell variant="head">Released:</TableCell>
                      <TableCell>
                        <Typography variant="h6" component="h6">
                          {`${country} in ${releaseYear}`}
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell variant="head">Genre:</TableCell>
                      <TableCell>
                        <Typography variant="subtitle1" component="p">
                          {`${genre}, ${style}`}
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell variant="head">Condition:</TableCell>
                      <TableCell>
                        <Typography variant="subtitle1" component="p">
                          {`${mediaCondition} / ${coverCondition}`}
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell variant="head">Stored in:</TableCell>
                      <TableCell>
                        <Typography variant="body1" component="p">
                          {location}
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell variant="head">Note:</TableCell>
                      <TableCell>
                        <Typography variant="body1" component="p">
                          {note}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </>
          )}
        </Box>
      </Box>
    </Box>
  )
}

export default RecordDetail
