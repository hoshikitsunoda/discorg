import { makeStyles, Box, CircularProgress, Button } from '@material-ui/core'

import { FormInput } from '../../components/shared/Input'
import { useSingleUserData } from '../../hooks'

const useStyles = makeStyles((theme) => ({
  input: {
    marginBottom: 0,

    '& .MuiFilledInput-root': {
      borderRadius: 0,
    },
  },
  flex: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}))

const Edit = ({ user }) => {
  const classes = useStyles()
  const { updateUserData, submitting, handleEditUserInfo } = useSingleUserData()

  const { firstName, lastName, bio } = user || {}

  return (
    <Box>
      <Box className={classes.flex}>
        <FormInput
          id="first-name"
          label="First Name"
          name="firstName"
          autoComplete="first-name"
          autoFocus
          className={classes.input}
          onChange={handleEditUserInfo}
          defaultValue={firstName}
        />
        <FormInput
          id="last-name"
          label="Last Name"
          name="lastName"
          autoComplete="last-name"
          className={classes.input}
          onChange={handleEditUserInfo}
          defaultValue={lastName}
        />
      </Box>
      <FormInput
        id="bio"
        label="Bio"
        name="bio"
        autoComplete="off"
        multiline
        rows={4}
        placeholder="160 characters max"
        className={classes.input}
        inputProps={{ maxLength: 160 }}
        onChange={handleEditUserInfo}
        defaultValue={bio}
      />
      <Button variant="contained" color="primary" onClick={updateUserData}>
        {submitting ? <CircularProgress /> : 'Update field(s)'}
      </Button>
    </Box>
  )
}

export default Edit
