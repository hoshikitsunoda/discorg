import { useState, useEffect, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'

import { auth } from '../services/firebase'
import { useStateValue } from '../context/StateProvider'
import { actionTypes } from '../context/reducer'
import axios from '../utils/axios-instance'

const useAuth = () => {
  const history = useHistory()
  const [credentials, setCredentials] = useState({})
  const [state, dispatch] = useStateValue()
  const [user, setUser] = useState('')

  const handleCredentials = ({ target: { name, value } }) => {
    setCredentials({
      ...credentials,
      [name]: value,
    })
  }

  const signUp = useCallback(
    async (email, password, data) => {
      try {
        const result = await auth().createUserWithEmailAndPassword(
          email,
          password
        )
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        })
        await localStorage.setItem(
          'discorg_user_information',
          JSON.stringify(result.user)
        )
        if (result.user.uid) {
          await axios.post(`/user/${result.user.uid}/account.json`, {
            ...data,
            email,
          })
          toast.success('Success!')
          history.push('/dashboard')
        }
      } catch (err) {
        toast.error(err.message)
      }
    },
    [dispatch, history]
  )

  const signIn = useCallback(
    async (email, password) => {
      try {
        const result = await auth().signInWithEmailAndPassword(email, password)
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        })
        await localStorage.setItem(
          'discorg_user_information',
          JSON.stringify(result.user)
        )
        history.push('/dashboard')
      } catch (err) {
        toast.error(err.message)
      }
    },
    [dispatch, history]
  )

  const signOut = useCallback(async () => {
    try {
      await auth().signOut()
      dispatch({
        type: actionTypes.SET_USER,
        user: null,
      })
      localStorage.removeItem('discorg_user_information')
      history.push('/signin')
    } catch (err) {
      toast.error(err.message)
    }
  }, [dispatch, history])

  useEffect(() => {
    const user = localStorage.getItem('discorg_user_information')
    if (user) {
      setUser(JSON.parse(user))
    }
  }, [state])

  return {
    signUp,
    signIn,
    handleCredentials,
    signOut,
    state,
    user,
    credentials,
  }
}

export default useAuth
