import { useState } from 'react'
import { makeStyles, Container, Grid, IconButton, Box } from '@material-ui/core'
import AddCircleIcon from '@material-ui/icons/AddCircle'

import Panel from './Panel'
import Filter from './Filter'
import Sort from './Sort'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
  },
  button: {
    position: 'fixed',
    bottom: 30,
    right: 100,
  },
  icon: {
    fontSize: 64,
    color: theme.palette.primary.main,
  },
}))

const RecordList = ({ recordData, toggleValue }) => {
  const classes = useStyles()
  const [activeGenre, setActiveGenre] = useState('Collection')
  const [sort, setSort] = useState('newest')

  let dataArray = Object.keys(recordData)

  const filteredDataArray = dataArray.filter(
    (record) => recordData[record].genre === activeGenre
  )
  dataArray =
    activeGenre === 'Collection' ? dataArray.reverse() : filteredDataArray

  let sortedDataArray = []

  switch (sort) {
    case 'newest':
      sortedDataArray = dataArray.sort(
        (a, b) => recordData[b].createdAt - recordData[a].createdAt
      )
      break
    case 'oldest':
      sortedDataArray = dataArray.sort(
        (a, b) => recordData[a].createdAt - recordData[b].createdAt
      )
      break
    case 'artist-a-z':
      sortedDataArray = dataArray.sort((a, b) =>
        recordData[a].artist.localeCompare(recordData[b].artist)
      )
      break
    case 'artist-z-a':
      sortedDataArray = dataArray.sort((a, b) =>
        recordData[b].artist.localeCompare(recordData[a].artist)
      )
      break
    case 'title-a-z':
      sortedDataArray = dataArray.sort((a, b) =>
        recordData[a].title.localeCompare(recordData[b].title)
      )
      break
    case 'title-z-a':
      sortedDataArray = dataArray.sort((a, b) =>
        recordData[b].title.localeCompare(recordData[a].title)
      )
      break
    default:
      return
  }
  console.log(sortedDataArray)
  return (
    <>
      <Container maxWidth="md" className={classes.root}>
        {recordData ? (
          <>
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
            <Grid container spacing={2}>
              {dataArray.map((uid) => (
                <Grid item xs={12} sm={4} md={3} key={uid}>
                  <Panel recordData={recordData} uid={uid} />
                </Grid>
              ))}
            </Grid>
          </>
        ) : (
          'No record to show'
        )}
      </Container>
      <IconButton onClick={toggleValue} className={classes.button}>
        <AddCircleIcon fontSize="large" className={classes.icon} />
      </IconButton>
    </>
  )
}

export default RecordList
