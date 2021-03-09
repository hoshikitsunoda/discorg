import { useEffect } from 'react'
import MainLayout from '../hoc/Layout/MainLayout'
import useGetData from '../hooks/useGetData'

const Dashboard = () => {
  const { data = '', getRecordData } = useGetData()

  useEffect(() => {
    getRecordData()
  }, [getRecordData])

  return (
    <MainLayout title="dashboard">
      {typeof data === 'string' && data}
    </MainLayout>
  )
}

export default Dashboard
