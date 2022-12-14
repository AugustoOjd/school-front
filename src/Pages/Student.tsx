import React from 'react'
import Layout from '../components/layout/Layout'
import BaseRank from '../components/rank/BaseRank'
import BaseUser from '../components/user/BaseUser'
import BaseTasks from '../components/user/tasks/BaseTasks'

const Student = () => {
  return (
    <>
        <Layout>
            <BaseUser>
              <BaseTasks/>
            </BaseUser>
        </Layout>

    </>
  )
}

export default Student