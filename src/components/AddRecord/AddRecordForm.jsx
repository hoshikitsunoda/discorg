import { TextField, Box } from '@material-ui/core'

const AddRecordForm = ({ handleChange }) => {
  return (
    <>
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <TextField
          label="Artist"
          name="artist"
          variant="filled"
          fullWidth
          onChange={handleChange}
        />
        <TextField
          label="Title"
          name="title"
          variant="filled"
          fullWidth
          onChange={handleChange}
        />
      </Box>
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <TextField
          label="Label"
          name="label"
          variant="filled"
          fullWidth
          onChange={handleChange}
        />
        <TextField
          label="Cat#"
          name="catalogNumber"
          variant="filled"
          fullWidth
          onChange={handleChange}
        />
      </Box>
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <TextField
          label="Format"
          name="format"
          variant="filled"
          fullWidth
          onChange={handleChange}
        />
        <TextField
          label="Country"
          name="country"
          variant="filled"
          fullWidth
          onChange={handleChange}
        />
      </Box>
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <TextField
          label="Release year"
          name="releaseYear"
          variant="filled"
          fullWidth
          onChange={handleChange}
        />
        <TextField
          label="Genre"
          name="genre"
          variant="filled"
          fullWidth
          onChange={handleChange}
        />
      </Box>
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <TextField
          label="Style"
          name="style"
          variant="filled"
          fullWidth
          onChange={handleChange}
        />
        <TextField
          label="Location"
          name="location"
          variant="filled"
          fullWidth
          onChange={handleChange}
        />
      </Box>

      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <TextField
          label="Media condition"
          name="mediaCondition"
          variant="filled"
          fullWidth
          onChange={handleChange}
        />
        <TextField
          label="Cover condition"
          name="coverCondition"
          variant="filled"
          fullWidth
          onChange={handleChange}
        />
      </Box>
      <TextField
        label="Note"
        name="note"
        variant="filled"
        multiline
        rows={4}
        fullWidth
        onChange={handleChange}
      />
    </>
  )
}

export default AddRecordForm
