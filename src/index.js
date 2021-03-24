import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { createMuiTheme, ThemeProvider, CssBaseline } from '@material-ui/core'
import 'react-toastify/dist/ReactToastify.css'

import './index.css'
import App from './App'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0D0A0B',
      dark: '#F3EFF5',
    },
    secondary: {
      main: '#F3EFF5',
      dark: '#0D0A0B',
    },
    success: {
      main: '#72B01D',
    },
    error: {
      main: '#FF6542',
    },
    background: {
      main: '#F3EFF5',
      dark: '#0D0A0B',
    },
  },
})

ReactDOM.render(
  <Router>
    <ToastContainer />
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </Router>,
  document.getElementById('root')
)
