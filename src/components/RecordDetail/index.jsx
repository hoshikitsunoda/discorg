import { useState, useEffect } from 'react'
import {
  Typography,
  Box,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Button,
  makeStyles,
  useMediaQuery,
  useTheme,
} from '@material-ui/core'
import { useParams } from 'react-router-dom'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import CloseIcon from '@material-ui/icons/Close'
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined'

import { LinkButton } from '../shared/Button'
import Edit from './Edit'
import { ConfirmModal } from '../shared/Modal'
import { useToggle } from '../../hooks'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
}))

const RecordDetail = ({ recordData, getRecords }) => {
  const classes = useStyles()
  const { id: itemId } = useParams()
  const theme = useTheme()
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'))

  const { value: edit, toggleValue } = useToggle(false)
  const [recordInfo, setRecordInfo] = useState({})
  const [touched, setTouched] = useState({})
  const [open, setOpen] = useState(false)

  const singleRecord = Object.keys(recordData).filter(
    (record) => recordData[record].id === itemId
  )
  const itemToDisplay = recordData[singleRecord]

  useEffect(() => {
    setRecordInfo(recordData[singleRecord])
  }, [recordData, singleRecord])

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
  } = recordInfo || {}

  const handleClick = () => {
    let isTouched = false
    for (let o in touched) {
      if (touched[o]) isTouched = true
    }
    if (!isTouched) {
      toggleValue()
    } else {
      setOpen(true)
    }
  }

  const handleClose = () => {
    toggleValue()
    setOpen(false)
  }

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
            <CloseIcon
              onClick={handleClick}
              fontSize="large"
              style={{ cursor: 'pointer' }}
            />
          ) : (
            <CreateOutlinedIcon
              onClick={toggleValue}
              fontSize="large"
              style={{ cursor: 'pointer' }}
            />
          )}
        </Box>
      </Box>
      <Box className={classes.item} px={1}>
        <Box width={1} height={1} my={isSmall ? 4 : 0}>
          <img
            style={{ width: '100%' }}
            src={imageUrl}
            alt={`${artist} - ${title}`}
          />
        </Box>
        <Box width={1} p={isSmall ? 1 : 4}>
          {edit ? (
            <Edit
              recordData={itemToDisplay}
              recordToUpdate={singleRecord}
              exitEdit={toggleValue}
              getRecords={getRecords}
              setTouched={setTouched}
              touched={touched}
            />
          ) : (
            <>
              <Typography variant={isSmall ? 'h4' : 'h3'} component="h3">
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
                        <Typography variant="h6" component="h5">
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
      {open && (
        <ConfirmModal
          setOpen={setOpen}
          open={open}
          handleClose={handleClose}
          title="Are you sure you want to exit edit mode?"
          subtitle="Some fields are edited."
        >
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
            <Button variant="contained" color="secondary" onClick={handleClose}>
              Exit
            </Button>
          </Box>
        </ConfirmModal>
      )}
    </Box>
  )
}

export default RecordDetail
