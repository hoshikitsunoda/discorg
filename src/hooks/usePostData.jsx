import { useState, useCallback } from 'react'
import { toast } from 'react-toastify'
import firebase from 'firebase'

const usePostData = () => {
  const [submitting, setSubmitting] = useState(false)
  const [close, setClose] = useState(false)
  const [error, setError] = useState('')

  const postData = useCallback(async (data, id) => {
    setSubmitting(true)
    try {
      await firebase.database().ref(`records/${id}`).set(data)
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
