import { useCallback, useMemo } from 'react'
import firebase from 'firebase'
import { useDropzone } from 'react-dropzone'
import { toast } from 'react-toastify'

import { useAuth } from '../../hooks'

const baseStyle = {
  padding: '0 20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#b6b6b6',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#535353',
  outline: 'none',
  transition: 'border .24s ease-in-out',
  fontSize: '14px',
}

const activeStyle = {
  borderColor: '#2196f3',
}

const acceptStyle = {
  borderColor: '#00e676',
}

const rejectStyle = {
  borderColor: '#ff1744',
}

const ImageUpload = ({ uid, handleFile, handleUrl, setUploaded }) => {
  const { user } = useAuth()

  const { uid: userId } = user || {}

  const onDrop = useCallback(
    async (acceptedFiles) => {
      setUploaded(true)
      try {
        handleFile(URL.createObjectURL(acceptedFiles[0]))
        const storageRef = firebase
          .storage()
          .ref()
          .child('images')
          .child(userId)
          .child(`${uid}.jpg`)
        await storageRef.put(acceptedFiles[0])
        storageRef.getDownloadURL().then((url) => handleUrl(url))
      } catch (err) {
        toast.error(err.message)
        setUploaded(false)
      }
    },
    [handleFile, handleUrl, setUploaded, uid, userId]
  )

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({ onDrop })

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  )

  return (
    <div {...getRootProps({ style })}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>
          Drag 'n' drop some files here, or{' '}
          <span
            style={{
              color: '#2196f3',
              textDecoration: 'underline',
              cursor: 'pointer',
            }}
          >
            click
          </span>{' '}
          to select files
        </p>
      )}
    </div>
  )
}

export default ImageUpload
