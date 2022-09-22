import React from 'react'
import BaseRank from '../rank/BaseRank'
import Datos from './Datos'
import BaseTasks from './tasks/BaseTasks'

const BaseUser = () => {
  return (
    <>
        <BaseRank/>
        <Datos/>
        <BaseTasks/>
    </>
  )
}

export default BaseUser