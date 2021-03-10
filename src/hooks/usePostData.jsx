import { useState, useCallback } from 'react'
import { toast } from 'react-toastify'
import firebase from 'firebase'

const usePostData = () => {
  const [submitting, setSubmitting] = useState(false)

  const postData = useCallback(async (data, id) => {
    setSubmitting(true)
    try {
      await firebase.database().ref(`records/${id}`).set(data)
      toast.success('Success!')
    } catch (err) {
      toast.error(err.message)
      setSubmitting(false)
    }
  }, [])

  return { submitting, postData }
}

export default usePostData
