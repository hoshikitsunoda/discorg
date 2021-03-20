import { useState } from 'react'
import firebase from 'firebase'
import { Input } from '@material-ui/core'

const ImageUpload = ({ uid, handleFile, handleUrl }) => {
  const [imageToUpload, setImageToUpload] = useState('')
  const handleUpload = async () => {
    const storageRef = firebase
      .storage()
      .ref()
      .child('images')
      .child(`${uid}.jpg`)
    await storageRef.put(imageToUpload)
    storageRef.getDownloadURL().then((url) => handleUrl(url))
  }

  const handleChange = ({ target: { files } }) => {
    setImageToUpload(files[0])
    handleFile(URL.createObjectURL(files[0]))
  }

  return (
    <>
      <Input type="file" onChange={handleChange} />
      <button onClick={handleUpload}>Upload</button>
    </>
  )
}

export default ImageUpload
