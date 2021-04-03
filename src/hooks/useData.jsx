import { useState, useCallback, useEffect } from 'react'
import { toast } from 'react-toastify'

import axios from '../utils/axios-instance'
import { db } from '../services/firebase'
import { flatten } from '../utils/helper'
import { useAuth } from '.'

const useData = (id) => {
  const [submitting, setSubmitting] = useState(false)
  const [close, setClose] = useState(false)
  const [error, setError] = useState('')
  const [data, setData] = useState({})
  const { user } = useAuth()
  const { uid } = user || {}

  useEffect(() => {
    setSubmitting(true)
    let isMounted = true
    try {
      axios.get(`/user/${id}/records.json`).then(({ data }) => {
        if (data && isMounted) setData(data)
      })
      setSubmitting(false)
    } catch (err) {
      toast.error(err.message)
      setSubmitting(false)
    }

    return () => {
      isMounted = false
    }
  }, [id])

  const getData = useCallback(
    async (url = `/user/${uid}/records.json`) => {
      setSubmitting(true)
      try {
        const { data } = await axios.get(url)
        if (uid && data) {
          setData(data)
        }
        setSubmitting(false)
      } catch (err) {
        toast.error(err.message)
        setSubmitting(false)
      }
    },
    [uid]
  )

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

  return {
    submitting,
    close,
    postData,
    error,
    deleteData,
    editData,
    getData,
    data,
  }
}

export default useData
