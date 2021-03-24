import { makeStyles, Chip, Box, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {},
  button: {
    marginRight: theme.spacing(3),
  },
}))

const Filter = ({ recordData, activeGenre, setActiveGenre }) => {
  const classes = useStyles()

  let genres = []
  for (let key in recordData) {
    genres.push(recordData[key].genre)
  }
  genres = [...new Set(genres)]

  return (
    <Box display="flex" flexDirection="row" alignItems="center" py={4}>
      <Box mr={3}>
        <Typography variant="h4" component="h2">
          {activeGenre}
        </Typography>
      </Box>
      <Box>
        {genres.map((genre) => (
          <Chip
            key={genre}
            label={genre}
            variant="outlined"
            className={classes.button}
            onClick={() => setActiveGenre(genre)}
          />
        ))}
        <Chip
          label="All"
          variant="outlined"
          className={classes.button}
          onClick={() => setActiveGenre('Collection')}
        />
      </Box>
    </Box>
  )
}

export default Filter
