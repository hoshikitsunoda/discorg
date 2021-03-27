import { makeStyles, Chip, Box, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'scroll',
  },
  button: {
    marginRight: theme.spacing(1),
    backgroundColor: '#eee',
    border: '1px solid #e4e4e4',
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
  title: {
    fontWeight: 600,

    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      fontSize: 22,
    },
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
    <Box className={classes.root} py={4}>
      <Box mr={2}>
        <Typography variant="h4" component="h2" className={classes.title}>
          {activeGenre}
        </Typography>
      </Box>
      <Box display="flex">
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
