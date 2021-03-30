import { Button, makeStyles, Box, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'

import AuthLayout from '../hoc/Layout/AuthLayout'
import { useAuth } from '../hooks'
import { FormInput } from '../components/shared/Input'

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(1.5),
  },
  link: {
    marginTop: theme.spacing(1),

    '& a': {
      fontSize: 14,
      textDecoration: 'none',
    },
  },
  input: {
    marginBottom: 0,

    '& .MuiFilledInput-root': {
      borderRadius: 0,
    },
  },
}))

const SignIn = () => {
  const classes = useStyles()

  const { signIn, handleCredentials, credentials } = useAuth()

  const { email, password } = credentials

  const handleSubmit = (event) => {
    event.preventDefault()
    signIn(email, password)
  }

  return (
    <AuthLayout title="Sign In">
      <form>
        <FormInput
          required
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          onChange={handleCredentials}
          className={classes.input}
        />
        <FormInput
          required
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          onChange={handleCredentials}
          className={classes.input}
        />
        <Button
          className={classes.button}
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          Sign In
        </Button>
        <Link to="/signup">
          <Button
            className={classes.button}
            type="submit"
            fullWidth
            variant="outlined"
            color="primary"
          >
            Register
          </Button>
        </Link>
        <Box width={1} className={classes.link}>
          <Typography>
            <Link to="/forgot-password" color="inherit">
              Forgot password?
            </Link>
          </Typography>
        </Box>
      </form>
    </AuthLayout>
  )
}

export default SignIn
