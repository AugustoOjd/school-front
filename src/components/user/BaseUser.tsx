import React from 'react'
import BaseRank from '../rank/BaseRank'
import BaseDashboardUser from './dashboard/BaseDashboardUser'
import BaseTasks from './tasks/BaseTasks'

const BaseUser = () => {
  return (
    <>
        <BaseRank/>
        <BaseDashboardUser/>
        <BaseTasks/>
    </>
  )
}

export default BaseUser