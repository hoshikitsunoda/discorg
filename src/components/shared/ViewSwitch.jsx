import { makeStyles, Box, IconButton } from '@material-ui/core'
import ListIcon from '@material-ui/icons/List'
import AppsIcon from '@material-ui/icons/Apps'
import clsx from 'clsx'

const useStyles = makeStyles((theme) => ({
  root: {
    border: '1px solid #e4e4e4',
  },
  iconWrapper: {
    borderRadius: 0,
    padding: theme.spacing(1),
  },
  active: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
  },
}))

const ViewSwitch = ({ setViewOption, viewOption }) => {
  const classes = useStyles({ viewOption })
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      className={classes.root}
    >
      <IconButton
        onClick={() => setViewOption('list')}
        className={clsx(
          classes.iconWrapper,
          viewOption === 'list' && classes.active
        )}
      >
        <ListIcon />
      </IconButton>
      <IconButton
        onClick={() => setViewOption('panel')}
        className={clsx(
          classes.iconWrapper,
          viewOption === 'panel' && classes.active
        )}
      >
        <AppsIcon />
      </IconButton>
    </Box>
  )
}

export default ViewSwitch
