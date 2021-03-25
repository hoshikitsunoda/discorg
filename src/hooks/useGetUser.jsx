import { useState, useCallback } from 'react'
import { toast } from 'react-toastify'

import { auth } from '../services/firebase'

const useGetUser = () => {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(false)

  const getUser = useCallback(() => {
    setLoading(true)
    try {
      auth().onAuthStateChanged((user) => {
        if (user) {
          setData(user)
        }
        setLoading(false)
      })
    } catch (err) {
      toast.error(err.message)
      setLoading(false)
    }
  }, [])

  return { data, loading, getUser }
}

export default useGetUser
