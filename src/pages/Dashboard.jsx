import { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Route, Switch } from 'react-router-dom'

import MainLayout from '../hoc/Layout/MainLayout'
import { useGetRecords, useToggle } from '../hooks'
import AddRecord from '../components/AddRecord'
import RecordList from '../components/RecordList'
import RecordDetail from '../components/RecordDetail'

const Dashboard = () => {
  const { data, loading, getRecords } = useGetRecords()
  const { value, toggleValue } = useToggle()
  const uid = uuidv4()

  useEffect(() => {
    getRecords()
  }, [getRecords])
  console.log(data)
  if (loading) {
    return 'Loading...'
  }

  return (
    <>
      <MainLayout title="dashboard">
        <Switch>
          {/* {data ? <RecordList recordData={data} /> : 'No record to show'} */}
          <Route
            path="/dashboard"
            exact
            render={() => <RecordList recordData={data} />}
          />
          <Route
            path="/dashboard/item/:id"
            exact
            render={() => <RecordDetail uid={uid} />}
          />
          <button onClick={toggleValue}>Click</button>
          <AddRecord
            open={value}
            handleClose={toggleValue}
            uid={uid}
            getRecords={getRecords}
          />
        </Switch>
      </MainLayout>
    </>
  )
}

export default Dashboard
