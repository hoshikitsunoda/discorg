import { useState } from 'react'
import { makeStyles, Container, Grid, IconButton, Box } from '@material-ui/core'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import { useParams } from 'react-router-dom'

import Panel from './Panel'
import Filter from './Filter'
import Sort from './Sort'
import Search from './Search'
import List from './List'
import ViewSwitch from '../shared/ViewSwitch'
import { useData, useImage } from '../../hooks'
import { sortItems } from '../../utils/helper'
import User from '../User'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
  },
  button: {
    position: 'fixed',
    bottom: 30,
    right: 100,

    [theme.breakpoints.down('sm')]: {
      bottom: 20,
      right: '50%',
      transform: 'translateX(50%)',
    },
  },
  icon: {
    fontSize: 64,
    color: theme.palette.primary.main,
  },
}))

const RecordList = ({
  recordData,
  toggleValue,
  setViewOption,
  viewOption,
  getRecords,
  profile,
}) => {
  const classes = useStyles()
  const [activeGenre, setActiveGenre] = useState('Collection')
  const [sort, setSort] = useState('newest')
  const [searchTerm, setSearchTerm] = useState('')
  const { deleteData } = useData()
  const { deleteImage } = useImage()
  const { userId } = useParams()

  let dataArray = Object.keys(recordData)

  dataArray = !searchTerm
    ? dataArray
    : dataArray.filter((record) => {
        const items =
          recordData[record].title
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          recordData[record].artist
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
        return items
      })

  const filteredDataArray = dataArray.filter(
    (record) => recordData[record].genre === activeGenre
  )
  dataArray =
    activeGenre === 'Collection' ? dataArray.reverse() : filteredDataArray

  dataArray = sortItems(sort, dataArray, recordData)

  const handleDelete = async (event, itemId, imageId) => {
    event.stopPropagation()
    event.preventDefault()
    await deleteData(itemId)
    await deleteImage(imageId)
    getRecords()
  }

  return (
    <>
      <Container maxWidth="md" className={classes.root}>
        <User userId={userId} />
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Search setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
          <ViewSwitch setViewOption={setViewOption} viewOption={viewOption} />
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Filter
            recordData={recordData}
            activeGenre={activeGenre}
            setActiveGenre={setActiveGenre}
          />
          <Sort setSort={setSort} sort={sort} />
        </Box>
        {dataArray.length > 0 ? (
          <>
            <Grid container spacing={2}>
              {dataArray.map((uid) => {
                return viewOption === 'panel' ? (
                  <Grid item xs={12} sm={4} md={3} key={uid}>
                    <Panel
                      recordData={recordData}
                      uid={uid}
                      handleDelete={handleDelete}
                      profile={profile}
                      accountId={userId}
                    />
                  </Grid>
                ) : (
                  <Grid item xs={12} key={uid}>
                    <List
                      recordData={recordData}
                      uid={uid}
                      handleDelete={handleDelete}
                      profile={profile}
                      accountId={userId}
                    />
                  </Grid>
                )
              })}
            </Grid>
          </>
        ) : (
          'No record to show'
        )}
      </Container>
      {!profile && (
        <IconButton onClick={toggleValue} className={classes.button}>
          <AddCircleIcon fontSize="large" className={classes.icon} />
        </IconButton>
      )}
    </>
  )
}

export default RecordList
