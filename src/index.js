import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'

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
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)
