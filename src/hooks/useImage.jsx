import { useCallback, useState } from 'react'
import { toast } from 'react-toastify'
import firebase from 'firebase'

const useImage = () => {
  const [loading, setLoading] = useState(false)

  const deleteImage = useCallback(async (id) => {
    setLoading(true)
    try {
      const storageRef = firebase
        .storage()
        .ref()
        .child('images')
        .child(`${id}.jpg`)
      await storageRef.delete()
      setLoading(false)
    } catch (err) {
      toast.error(err.message)
      setLoading(false)
    }
  }, [])

  return { deleteImage, loading }
}

export default useImage
