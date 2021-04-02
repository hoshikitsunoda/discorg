import { useEffect } from 'react'
import { Typography } from '@material-ui/core'

import MainLayout from '../hoc/Layout/MainLayout'
import { useData, useAuth } from '../hooks'
import { CustomCard } from '../components/shared/Card'

const Search = () => {
  const { getData, data } = useData()
  const {
    user: { uid },
  } = useAuth()

  useEffect(() => {
    getData(`/user.json`)
  }, [getData])

  const userKeys = Object.keys(data).filter((user) => user !== uid)

  return (
    <MainLayout title="dashboard">
      {userKeys.map((account) => {
        let accountData = data[account].account
        const accountKeys = Object.keys(accountData)
        accountData = accountData[accountKeys]
        const { username } = accountData
        return (
          <CustomCard key={username} url={`user/${account}`}>
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
