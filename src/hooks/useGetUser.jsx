import { useState, useCallback } from 'react'
import { toast } from 'react-toastify'

import { auth } from '../services/firebase'
import { useStateValue } from '../context/StateProvider'
import { actionTypes } from '../context/reducer'

const useGetUser = () => {
  const [loading, setLoading] = useState(false)
  const [state, dispatch] = useStateValue()

  const getUser = useCallback(async () => {
    setLoading(true)
    try {
      auth().onAuthStateChanged((user) => {
        if (user) {
          dispatch({
            type: actionTypes.SET_USER,
            user: user,
          })
        }
        setLoading(false)
      })
    } catch (err) {
      toast.error(err.message)
      setLoading(false)
    }
  }, [dispatch])

  return { loading, getUser, state }
}

export default useGetUser
