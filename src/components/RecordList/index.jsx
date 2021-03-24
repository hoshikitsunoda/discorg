import { useState } from 'react'
import { makeStyles, Container, Grid, IconButton, Box } from '@material-ui/core'
import AddCircleIcon from '@material-ui/icons/AddCircle'

import Panel from './Panel'
import Filter from './Filter'
import Sort from './Sort'
import Search from './Search'

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
  const [searchTerm, setSearchTerm] = useState('')

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

  switch (sort) {
    case 'newest':
      dataArray.sort(
        (a, b) => recordData[b].createdAt - recordData[a].createdAt
      )
      break
    case 'oldest':
      dataArray.sort(
        (a, b) => recordData[a].createdAt - recordData[b].createdAt
      )
      break
    case 'artist-a-z':
      dataArray.sort((a, b) =>
        recordData[a].artist.localeCompare(recordData[b].artist)
      )
      break
    case 'artist-z-a':
      dataArray.sort((a, b) =>
        recordData[b].artist.localeCompare(recordData[a].artist)
      )
      break
    case 'title-a-z':
      dataArray.sort((a, b) =>
        recordData[a].title.localeCompare(recordData[b].title)
      )
      break
    case 'title-z-a':
      dataArray.sort((a, b) =>
        recordData[b].title.localeCompare(recordData[a].title)
      )
      break
    default:
      return
  }

  return (
    <>
      <Container maxWidth="md" className={classes.root}>
        {recordData ? (
          <>
            <Box display="flex" flexDirection="row" alignItems="center">
              <Search setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
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
