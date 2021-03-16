import { useState, useCallback } from 'react'
import { toast } from 'react-toastify'

import axios from '../utils/axios-instance'

const usePostData = () => {
  const [submitting, setSubmitting] = useState(false)
  const [close, setClose] = useState(false)
  const [error, setError] = useState('')

  const postData = useCallback(async (data) => {
    setSubmitting(true)
    try {
      await axios.post(`/records.json`, data)
      toast.success('Success!')
      setSubmitting(false)
      setClose(true)
    } catch (err) {
      toast.error(err.message)
      setSubmitting(false)
      setError(err.message)
    }
  }, [])

  return { submitting, close, postData, error }
}

export default usePostData
