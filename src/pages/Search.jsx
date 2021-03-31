import { useEffect } from 'react'
import { makeStyles, Typography } from '@material-ui/core'

import MainLayout from '../hoc/Layout/MainLayout'
import { useAuth, useData } from '../hooks'
import { CustomCard } from '../components/shared/Card'

const Search = () => {
  const { getData, data } = useData()
  const { user } = useAuth()
  const { uid } = user || {}

  useEffect(() => {
    getData(`/user.json`)
  }, [getData])

  const userKeys = Object.keys(data)

  return (
    <MainLayout title="search">
      {userKeys.map((account) => {
        let accountData = data[account].account
        const accountKeys = Object.keys(accountData)
        accountData = accountData[accountKeys]
        const { username } = accountData
        return (
          <CustomCard key={data[account]} url={`user/${uid}`}>
            <Typography variant="body1" component="h4">
              @{username}
            </Typography>
          </CustomCard>
        )
      })}
    </MainLayout>
  )
}

export default Search
