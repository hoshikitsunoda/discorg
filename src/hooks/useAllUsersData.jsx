import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'

import axios from '../utils/axios-instance'
import { useAuth } from '.'

const useAllUsersData = () => {
  const [submitting, setSubmitting] = useState(false)
  const [allUsers, setAllUsers] = useState({})
  const {
    user: { uid },
  } = useAuth()

  useEffect(() => {
    setSubmitting(true)
    let isMounted = true
    try {
      axios.get(`/user.json`).then(({ data }) => {
        if (data && isMounted) setAllUsers(data)
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
    allUsers,
  }
}

export default useAllUsersData
