import { TextField, Box, Typography } from '@material-ui/core'

const RecordForm = ({ handleChange, recordData, heading }) => {
  const {
    artist = '',
    catalogNumber = '',
    country = '',
    coverCondition = '',
    format = '',
    genre = '',
    label = '',
    location = '',
    mediaCondition = '',
    note = '',
    releaseYear = '',
    style = '',
    title = '',
  } = recordData || {}

  return (
    <>
      {heading && (
        <Box mb={2}>
          <Typography variant="h4" component="h4">
            {heading}
          </Typography>
        </Box>
      )}
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <TextField
          label="Artist"
          name="artist"
          variant="filled"
          fullWidth
          onChange={handleChange}
          defaultValue={artist}
        />
        <TextField
          label="Title"
          name="title"
          variant="filled"
          fullWidth
          onChange={handleChange}
          defaultValue={title}
        />
      </Box>
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <TextField
          label="Label"
          name="label"
          variant="filled"
          fullWidth
          onChange={handleChange}
          defaultValue={label}
        />
        <TextField
          label="Cat#"
          name="catalogNumber"
          variant="filled"
          fullWidth
          onChange={handleChange}
          defaultValue={catalogNumber}
        />
      </Box>
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <TextField
          label="Format"
          name="format"
          variant="filled"
          fullWidth
          onChange={handleChange}
          defaultValue={format}
        />
        <TextField
          label="Country"
          name="country"
          variant="filled"
          fullWidth
          onChange={handleChange}
          defaultValue={country}
        />
      </Box>
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <TextField
          label="Release year"
          name="releaseYear"
          variant="filled"
          fullWidth
          onChange={handleChange}
          defaultValue={releaseYear}
        />
        <TextField
          label="Genre"
          name="genre"
          variant="filled"
          fullWidth
          onChange={handleChange}
          defaultValue={genre}
        />
      </Box>
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <TextField
          label="Style"
          name="style"
          variant="filled"
          fullWidth
          onChange={handleChange}
          defaultValue={style}
        />
        <TextField
          label="Location"
          name="location"
          variant="filled"
          fullWidth
          onChange={handleChange}
          defaultValue={location}
        />
      </Box>

      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <TextField
          label="Media condition"
          name="mediaCondition"
          variant="filled"
          fullWidth
          onChange={handleChange}
          defaultValue={mediaCondition}
        />
        <TextField
          label="Cover condition"
          name="coverCondition"
          variant="filled"
          fullWidth
          onChange={handleChange}
          defaultValue={coverCondition}
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
        defaultValue={note}
      />
    </>
  )
}

export default RecordForm
