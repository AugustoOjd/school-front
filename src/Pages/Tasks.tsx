import React from 'react'
import Layout from '../components/layout/Layout'
import BaseUser from '../components/user/BaseUser'
import CardTask from '../components/user/tasks/CardTask'

const Tasks = () => {
  return (
    <>
        <Layout>
            <BaseUser>
              <CardTask/>
            </BaseUser>
        </Layout>
    </>
  )
}

export default Tasks