import { useEffect } from 'react'

import MainLayout from '../hoc/Layout/MainLayout'
import { useGetRecords, useToggle } from '../hooks'
import AddRecord from '../components/AddRecord'

const Dashboard = () => {
  const { data, loading, getRecords } = useGetRecords()
  const { value, toggleValue } = useToggle()

  useEffect(() => {
    let isMounted = true
    if (isMounted) getRecords()
    return () => {
      isMounted = false
    }
  }, [getRecords])

  const dataKeys = Object.keys(data).map((item) => {
    return (
      <div key={item}>
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
        <AddRecord open={value} handleClose={toggleValue} />
      </MainLayout>
    </>
  )
}

export default Dashboard
