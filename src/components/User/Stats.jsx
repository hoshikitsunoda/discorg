import { makeStyles, Grid, Typography, Box, Chip } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  stats: {
    fontWeight: 600,

    '& span': {
      fontWeight: 400,
      color: '#888',
      fontSize: 12,
    },
  },
  topGenre: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',

    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },
}))

const Stats = ({ recordData, topGenre }) => {
  const classes = useStyles()
  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={4} align="center">
          <Typography className={classes.stats}>{recordData.length}</Typography>
          <Typography>Items</Typography>
        </Grid>
        <Grid item xs={4} align="center">
          <Typography className={classes.stats}>10k</Typography>
          <Typography>Followers</Typography>
        </Grid>
        <Grid item xs={4} align="center">
          <Typography className={classes.stats}>968</Typography>
          <Typography>Following</Typography>
        </Grid>
        <Grid item xs={12} className={classes.topGenre}>
          <Box mr={1}>
            <Typography className={classes.stats} variant="body1">
              Top genre:
            </Typography>
          </Box>
          <Box py={1}>
            <Chip label={topGenre} />
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default Stats
