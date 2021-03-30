import { useState } from 'react'
import { Button, makeStyles, Box, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'

import AuthLayout from '../hoc/Layout/AuthLayout'
import useAuth from '../hooks/useAuth'
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
  flex: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}))

const SignUp = () => {
  const classes = useStyles()
  const { signUp, handleCredentials, credentials } = useAuth()
  const [userInfo, setUserInfo] = useState({})

  const { email, password } = credentials

  const handleChange = ({ target: { name, value } }) => {
    setUserInfo({
      ...userInfo,
      [name]: value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    signUp(email, password, userInfo)
  }

  return (
    <AuthLayout title="Sign Up">
      <form>
        <Box className={classes.flex}>
          <FormInput
            id="first-name"
            label="First Name"
            name="firstName"
            autoComplete="first-name"
            autoFocus
            onChange={handleChange}
            required
            className={classes.input}
          />
          <FormInput
            id="last-name"
            label="Last Name"
            name="lastName"
            autoComplete="last-name"
            onChange={handleChange}
            required
            className={classes.input}
          />
        </Box>
        <FormInput
          id="username"
          label="Username"
          name="username"
          autoComplete="username"
          onChange={handleChange}
          required
          className={classes.input}
        />
        <FormInput
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          onChange={handleCredentials}
          required
          className={classes.input}
        />
        <FormInput
          id="password"
          label="Password"
          name="password"
          type="password"
          autoComplete="current-password"
          onChange={handleCredentials}
          required
          className={classes.input}
        />
        <FormInput
          required
          name="confirm-password"
          label="Confirm Password"
          type="password"
          id="confirm-password"
          autoComplete="current-password"
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
          Register
        </Button>
        <Box width={1} className={classes.link}>
          <Typography>
            <Link to="/signin" color="inherit">
              Already have an account?
            </Link>
          </Typography>
        </Box>
      </form>
    </AuthLayout>
  )
}

export default SignUp
