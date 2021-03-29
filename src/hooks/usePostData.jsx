import { useState, useCallback } from 'react'
import { toast } from 'react-toastify'

import axios from '../utils/axios-instance'
import { db } from '../services/firebase'
import { flatten } from '../utils/helper'
import { useAuth } from '../hooks'

const usePostData = () => {
  const [submitting, setSubmitting] = useState(false)
  const [close, setClose] = useState(false)
  const [error, setError] = useState('')
  const { user } = useAuth()

  const { uid } = user || {}

  const postData = useCallback(
    async (data) => {
      setSubmitting(true)
      try {
        await axios.post(`/user/${uid}/records.json`, data)
        toast.success('Success!')
        setSubmitting(false)
        setClose(true)
      } catch (err) {
        toast.error(err.message)
        setSubmitting(false)
        setError(err.message)
      }
    },
    [uid]
  )

  const deleteData = useCallback(
    async (id) => {
      setSubmitting(true)
      try {
        await axios.delete(`/user/${uid}/records/${id}.json`)
        toast.success('Successfully deleted!')
        setSubmitting(false)
        setClose(true)
      } catch (err) {
        toast.error(err.message)
        setSubmitting(false)
        setError(err.message)
      }
    },
    [uid]
  )

  const editData = useCallback(
    async (id, newData) => {
      setSubmitting(true)
      try {
        let updates = {}
        flatten(newData, id, updates, uid)
        await db.ref().update(updates)
        toast.success('Successfully updated!')
        setSubmitting(false)
      } catch (err) {
        toast.error(err.message)
        setSubmitting(false)
        setError(err.message)
      }
    },
    [uid]
  )

  return { submitting, close, postData, error, deleteData, editData }
}

export default usePostData
