import { makeStyles, Chip, Box, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {},
  button: {
    marginRight: theme.spacing(1.5),
    '&&:focus': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.secondary.main,
    },
  },
  active: {
    marginRight: theme.spacing(1.5),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
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
            className={`${classes.button} ${
              genre === activeGenre && classes.active
            }`}
            onClick={() => setActiveGenre(genre)}
          />
        ))}
        <Chip
          label="All"
          variant="outlined"
          className={`${classes.button} ${
            activeGenre === 'Collection' && classes.active
          }`}
          onClick={() => setActiveGenre('Collection')}
        />
      </Box>
    </Box>
  )
}

export default Filter
