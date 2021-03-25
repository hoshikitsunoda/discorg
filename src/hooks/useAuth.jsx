import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import { auth } from '../services/firebase'

const useAuth = () => {
  const history = useHistory()
  const [data, setData] = useState({})

  const handleChange = ({ target: { name, value } }) => {
    setData({
      ...data,
      [name]: value,
    })
  }

  const signUp = async (email, password) => {
    try {
      await auth().createUserWithEmailAndPassword(email, password)
      history.push('/dashboard')
    } catch (err) {
      toast.error(err.message)
    }
  }

  const signIn = async (email, password) => {
    try {
      await auth().signInWithEmailAndPassword(email, password)
      history.push('/dashboard')
    } catch (err) {
      toast.error(err.message)
    }
  }

  const signOut = async () => {
    try {
      await auth().signOut()
      history.push('/signin')
    } catch (err) {
      toast.error(err.message)
    }
  }

  return { signUp, signIn, data, handleChange, signOut }
}

export default useAuth
