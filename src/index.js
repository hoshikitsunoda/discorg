import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'

const theme = createMuiTheme({
  palette: {
    primary: '#F3EFF5',
    secondary: '#0D0A0B',
    grey: '#454955',
    success: '#72B01D',
    error: '#FF6542',
  },
})

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)
