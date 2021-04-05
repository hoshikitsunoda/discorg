import { useState, useEffect, useCallback } from 'react'
import { toast } from 'react-toastify'

import axios from '../utils/axios-instance'
import { useAuth } from '.'
import { db } from '../services/firebase'
import { flatten } from '../utils/helper'

const useUserData = () => {
  const [submitting, setSubmitting] = useState(false)
  const [currentUser, setCurrentUser] = useState({})
  const [updatedInput, setUpdatedInput] = useState({})
  const {
    user: { uid },
  } = useAuth()

  const handleEditUserInfo = ({ target: { name, value } }) => {
    setUpdatedInput({
      ...updatedInput,
      [name]: value,
    })
  }

  const updateUserData = useCallback(async () => {
    setSubmitting(true)
    try {
      let updates = {}
      flatten(updatedInput, null, updates, uid, true)
      await db.ref().update(updates)
      toast.success('Successfully updated!')
      setSubmitting(false)
    } catch (err) {
      toast.error(err.message)
      setSubmitting(false)
    }
  }, [uid, updatedInput])

  useEffect(() => {
    let isMounted = true
    try {
      axios.get(`/user/${uid}.json`).then(({ data }) => {
        if (data && isMounted) setCurrentUser(data)
      })
      setSubmitting(false)
    } catch (err) {
      toast.error(err.message)
      setSubmitting(false)
    }

    return () => {
      isMounted = false
    }
  }, [uid])

  return {
    submitting,
    currentUser,
    updateUserData,
    handleEditUserInfo,
    updatedInput,
  }
}

export default useUserData
