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

  const deleteData = useCallback(async (id) => {
    setSubmitting(true)
    try {
      await axios.delete(`/records/${id}.json`)
      toast.success('Successfully deleted!')
      setSubmitting(false)
      setClose(true)
    } catch (err) {
      toast.error(err.message)
      setSubmitting(false)
      setError(err.message)
    }
  }, [])

  return { submitting, close, postData, error, deleteData }
}

export default usePostData
