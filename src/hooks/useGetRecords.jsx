import { useState, useCallback } from 'react'
import { toast } from 'react-toastify'
import firebase from 'firebase'

const useGetRecords = () => {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(false)

  const getRecords = useCallback(async () => {
    const recordRef = firebase.database().ref('/records')
    setLoading(true)
    try {
      recordRef.on('value', (snapshot) => {
        if (snapshot) {
          const data = snapshot.val()
          setData(data)
          setLoading(false)
        }
      })
    } catch (err) {
      toast.error(err.message)
      setLoading(false)
    }
  }, [])

  return { data, loading, getRecords }
}

export default useGetRecords
