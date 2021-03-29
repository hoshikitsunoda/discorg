import { useCallback, useState } from 'react'
import { toast } from 'react-toastify'
import firebase from 'firebase'

import { useAuth } from '../hooks'

const useImage = () => {
  const [loading, setLoading] = useState(false)
  const { user } = useAuth()

  const { uid } = user || {}

  const deleteImage = useCallback(
    async (id) => {
      setLoading(true)
      try {
        const storageRef = firebase
          .storage()
          .ref()
          .child('images')
          .child(uid)
          .child(`${id}.jpg`)
        await storageRef.delete()
        setLoading(false)
      } catch (err) {
        toast.error(err.message)
        setLoading(false)
      }
    },
    [uid]
  )

  return { deleteImage, loading }
}

export default useImage
