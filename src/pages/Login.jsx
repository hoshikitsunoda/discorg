import {
  TextField,
  Button,
  makeStyles,
  Box,
  Typography,
  Link,
} from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'

import AuthLayout from '../shared/Layout/AuthLayout'

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: theme.spacing(2),
  },
  link: {
    marginTop: theme.spacing(1),
  },
}))

const Login = () => {
  const classes = useStyles()
  return (
    <AuthLayout title="Login">
      <AccountCircleIcon fontSize="large" />
      <form>
        <TextField
          variant="filled"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          variant="filled"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <Button
          className={classes.button}
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
        >
          Sign In
        </Button>
        <Button
          className={classes.button}
          type="submit"
          fullWidth
          variant="outlined"
          color="primary"
        >
          Sign Up
        </Button>
        <Box width={1} className={classes.link}>
          <Typography>
            <Link href="/forgot-password" color="inherit">
              Forgot password?
            </Link>
          </Typography>
        </Box>
      </form>
    </AuthLayout>
  )
}

export default Login
