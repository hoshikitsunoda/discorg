import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const colors = {
  palette: {
    black: '#0D0A0B',
    grey: '#454955',
    white: '#F3EFF5',
    success: '#72B01D',
    error: '#FF6542',
  },
}

const theme = extendTheme({ colors })

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>,
  document.getElementById('root')
)
