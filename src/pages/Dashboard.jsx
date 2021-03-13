import { useEffect, useState } from 'react'
import firebase from 'firebase'
import { v4 as uuidv4 } from 'uuid'

import MainLayout from '../hoc/Layout/MainLayout'
import { useGetRecords, useToggle } from '../hooks'
import AddRecord from '../components/AddRecord'

const Dashboard = () => {
  const { data, loading, getRecords } = useGetRecords()
  const { value, toggleValue } = useToggle()
  const [imageSrc, setImageSrc] = useState({})
  const uid = uuidv4()

  const dataArray = Object.keys(data)

  useEffect(() => {
    const imageStorageRef = firebase.storage().ref().child('images')
    let isMounted = true
    if (isMounted) {
      getRecords()
      imageStorageRef
        .listAll()
        .then((res) => {
          res.items.forEach((itemRef) => {
            const fileName = itemRef.name.split('.').slice(0, -1).join('')
            itemRef
              .getDownloadURL()
              .then((url) =>
                setImageSrc((src) => ({ ...src, [fileName]: url }))
              )
          })
        })
        .catch((error) => {
          console.log(error)
        })
    }

    return () => {
      isMounted = false
    }
  }, [getRecords])

  const dataKeys = dataArray.map((item) => {
    return (
      <div key={item}>
        <img
          src={imageSrc[item]}
          alt={`${data[item]?.artist} - ${data[item]?.title}`}
        />
        <div>{data[item]?.artist}</div>
        <div>{data[item]?.title}</div>
      </div>
    )
  })

  if (loading) {
    return 'Loading...'
  }

  return (
    <>
      <MainLayout title="dashboard">
        {dataKeys}
        <button onClick={toggleValue}>Click</button>
        <AddRecord open={value} handleClose={toggleValue} uid={uid} />
      </MainLayout>
    </>
  )
}

export default Dashboard
