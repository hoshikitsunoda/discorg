import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Route, Switch, matchPath, useHistory } from 'react-router-dom'

import MainLayout from '../hoc/Layout/MainLayout'
import { useData, useToggle } from '../hooks'
import AddRecord from '../components/AddRecord'
import RecordList from '../components/RecordList'
import RecordDetail from '../components/RecordDetail'

// getData should take an url to decide where to fetch from
const Profile = () => {
  const { data, submitting, getData } = useData()
  const { value, toggleValue } = useToggle()
  const [viewOption, setViewOption] = useState('panel')
  const uid = uuidv4()
  const history = useHistory()

  const match = matchPath(history.location.pathname, {
    path: '/user/:userId',
  })

  let userId

  if (match && match.params.userId) {
    userId = match.params.userId
  }

  useEffect(() => {
    if (userId) getData(`/user/${userId}/records.json`)
  }, [getData, userId])

  if (submitting) {
    return 'Loading...'
  }

  return (
    <>
      <MainLayout title="dashboard">
        <Switch>
          <Route
            path="/user/:userId"
            exact
            render={() => (
              <RecordList
                recordData={data}
                toggleValue={toggleValue}
                setViewOption={setViewOption}
                viewOption={viewOption}
                getRecords={getData}
                profile
              />
            )}
          />
          <Route
            path="/user/:userId/item/:id"
            render={() => (
              <RecordDetail recordData={data} getRecords={getData} profile />
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

export default Profile
