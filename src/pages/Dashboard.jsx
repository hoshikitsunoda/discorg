import { useEffect } from 'react'

import MainLayout from '../hoc/Layout/MainLayout'
import useGetRecords from '../hooks/useGetRecords'

const Dashboard = () => {
  const { data, loading, getRecords } = useGetRecords()

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

  return <MainLayout title="dashboard">{dataKeys}</MainLayout>
}

export default Dashboard
