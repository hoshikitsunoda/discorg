import axios from 'axios'

const option = {
  baseURL: process.env.REACT_APP_DATABASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
}

const instance = axios.create(option)

export default instance
