import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'

import axios from '../utils/axios-instance'
import { useAuth } from '.'

const useUserData = () => {
  const [submitting, setSubmitting] = useState(false)
  const [currentUser, setCurrentUser] = useState({})
  const {
    user: { uid },
  } = useAuth()

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
  }
}

export default useUserData
