import { useState, useCallback } from 'react'
import { toast } from 'react-toastify'
import firebase from 'firebase'

import { auth } from '../services/firebase'

const useGetData = () => {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(false)
  const recordRef = firebase.database().ref('/sample')

  const getUser = useCallback(async () => {
    setLoading(true)
    try {
      await auth().onAuthStateChanged((user) => {
        if (user) {
          setData(user)
        }
        setLoading(false)
      })
    } catch (err) {
      toast.error(err.message)
      setLoading(false)
    }
  }, [])

  const getRecordData = useCallback(async () => {
    try {
      recordRef.on('value', (snapshot) => {
        if (snapshot) {
          const data = snapshot.val()
          setData(data)
        }
      })
    } catch (err) {
      toast.error(err.message)
      setLoading(false)
    }
  }, [recordRef])

  return { data, loading, getUser, getRecordData }
}

export default useGetData
