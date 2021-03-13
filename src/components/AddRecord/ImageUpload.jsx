import firebase from 'firebase'
import FileUploader from 'react-firebase-file-uploader'

const ImageUpload = ({ uid, handlePreview }) => {
  const handleUploadSuccess = (filename) => {
    firebase
      .storage()
      .ref('images')
      .child(filename)
      .getDownloadURL()
      .then((url) => handlePreview(url))
  }
  return (
    <FileUploader
      accept="image/*"
      name="albumCover"
      filename={uid}
      storageRef={firebase.storage().ref('images')}
      onUploadSuccess={handleUploadSuccess}
    />
  )
}

export default ImageUpload
