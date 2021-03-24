import { makeStyles, FormControl, Select, MenuItem } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}))

const Sort = ({ setSort, sort }) => {
  const classes = useStyles()

  const handleChange = ({ target: { value } }) => {
    setSort(value)
  }

  return (
    <>
      <FormControl className={classes.formControl}>
        <Select
          inputProps={{ 'aria-label': 'Sort by' }}
          value={sort}
          onChange={handleChange}
        >
          <MenuItem value="newest">Newest</MenuItem>
          <MenuItem value="oldest">Oldest</MenuItem>
          <MenuItem value="artist-a-z">Artist A - Z</MenuItem>
          <MenuItem value="artist-z-a">Artist Z - A</MenuItem>
          <MenuItem value="title-a-z">Title A - Z</MenuItem>
          <MenuItem value="title-z-a">Title Z - A</MenuItem>
        </Select>
      </FormControl>
    </>
  )
}

export default Sort
