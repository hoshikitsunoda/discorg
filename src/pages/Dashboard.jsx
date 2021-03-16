import { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

import MainLayout from '../hoc/Layout/MainLayout'
import { useGetRecords, useToggle } from '../hooks'
import AddRecord from '../components/AddRecord'
import RecordList from '../components/RecordList'

const Dashboard = () => {
  const { data, loading, getRecords } = useGetRecords()
  const { value, toggleValue } = useToggle()
  const uid = uuidv4()

  useEffect(() => {
    getRecords()
  }, [getRecords])

  if (loading) {
    return 'Loading...'
  }

  return (
    <>
      <MainLayout title="dashboard">
        {data ? <RecordList recordData={data} /> : 'No record to show'}
        <button onClick={toggleValue}>Click</button>
        <AddRecord
          open={value}
          handleClose={toggleValue}
          uid={uid}
          getRecords={getRecords}
        />
      </MainLayout>
    </>
  )
}

export default Dashboard
