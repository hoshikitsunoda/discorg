import { useEffect, useState } from 'react'
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
  const [viewOption, setViewOption] = useState('panel')
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
        <Switch>
          <Route
            path="/dashboard"
            exact
            render={() => (
              <RecordList
                recordData={data}
                toggleValue={toggleValue}
                setViewOption={setViewOption}
                viewOption={viewOption}
              />
            )}
          />
          <Route
            path="/dashboard/item/:id"
            exact
            render={() => <RecordDetail recordData={data} />}
          />
        </Switch>
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
