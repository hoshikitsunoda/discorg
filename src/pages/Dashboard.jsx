import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Route, Switch } from 'react-router-dom'

import MainLayout from '../hoc/Layout/MainLayout'
import { useData, useToggle } from '../hooks'
import AddRecord from '../components/AddRecord'
import RecordList from '../components/RecordList'
import RecordDetail from '../components/RecordDetail'

const Dashboard = () => {
  const { data, submitting, getData } = useData()
  const { value, toggleValue } = useToggle()
  const [viewOption, setViewOption] = useState('panel')
  const uid = uuidv4()

  useEffect(() => {
    getData()
  }, [getData])

  if (submitting) {
    return 'Loading...'
  }

  return (
    <>
      <MainLayout title="dashboard">
        <Switch>
          <Route
            path="/dashboard/:user_id"
            exact
            render={() => (
              <RecordList
                recordData={data}
                toggleValue={toggleValue}
                setViewOption={setViewOption}
                viewOption={viewOption}
                getRecords={getData}
              />
            )}
          />
          <Route
            path="/dashboard/:user_id/item/:id"
            exact
            render={() => (
              <RecordDetail recordData={data} getRecords={getData} />
            )}
          />
        </Switch>
        <AddRecord
          open={value}
          handleClose={toggleValue}
          uid={uid}
          getRecords={getData}
        />
      </MainLayout>
    </>
  )
}

export default Dashboard
