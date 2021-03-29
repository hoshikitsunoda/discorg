import { useState, useCallback } from 'react'
import { toast } from 'react-toastify'

import axios from '../utils/axios-instance'
import { useAuth } from '../hooks'

const useGetRecords = () => {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(false)
  const { user } = useAuth()

  const { uid } = user || {}

  const getRecords = useCallback(async () => {
    setLoading(true)
    try {
      const { data } = await axios.get(`/user/${uid}/records.json`)
      if (uid && data) {
        setData(data)
      }
      setLoading(false)
    } catch (err) {
      toast.error(err.message)
      setLoading(false)
    }
  }, [uid])

  return { data, loading, getRecords }
}

export default useGetRecords
