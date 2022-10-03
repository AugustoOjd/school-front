import React, { FC, ReactNode } from 'react'
import BaseRank from '../rank/BaseRank'
import BaseDashboardUser from './dashboard/BaseDashboardUser'
import BaseTasks from './tasks/BaseTasks'


interface Props {
  children: ReactNode
}

const BaseUser:FC<Props> = ({children}) => {
  return (
    <>
        <BaseRank/>
        <BaseDashboardUser/>
        {children}
    </>
  )
}

export default BaseUser