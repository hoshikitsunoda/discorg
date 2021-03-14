import { useState, useCallback } from 'react'
import { toast } from 'react-toastify'

import axios from '../utils/axios-instance'

const useGetRecords = () => {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(false)

  const getRecords = useCallback(async () => {
    setLoading(true)
    try {
      const { data } = await axios.get('/records.json')
      if (data) {
        setData(data)
        setLoading(false)
      }
    } catch (err) {
      toast.error(err.message)
      setLoading(false)
    }
  }, [])

  return { data, loading, getRecords }
}

export default useGetRecords
