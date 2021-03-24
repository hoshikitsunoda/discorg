import {
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'

const Search = ({ setSearchTerm, searchTerm }) => {
  const handleChange = ({ target: { value } }) => {
    setSearchTerm(value)
  }

  return (
    <FormControl>
      <InputLabel htmlFor="standard-adornment-password">Search...</InputLabel>
      <Input
        id="standard-adornment-password"
        type="text"
        value={searchTerm}
        onChange={handleChange}
        endAdornment={
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        }
      />
    </FormControl>
  )
}

export default Search
