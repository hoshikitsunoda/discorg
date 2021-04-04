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
}))

const Stats = ({ recordData, topGenre }) => {
  const classes = useStyles()
  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography className={classes.stats}>
            <span>Followers: </span>10k
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.stats}>
            <span>Following: </span>968
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.stats}>
            <span>Collections:</span> {recordData.length}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.stats} variant="body1">
            Top genre:
          </Typography>
          <Box py={1}>
            <Chip label={topGenre} />
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default Stats
