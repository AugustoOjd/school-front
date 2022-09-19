import { Box } from '@mui/material'
import React from 'react'
import BaseAnalytics from './analytics/BaseAnalytics'
import BaseStatus from './status/BaseStatus'
import BaseTable from './table/BaseTable'

const BaseAdmin = () => {
  return (
    <>
        <Box>
            <BaseStatus/>
            <BaseTable/>
            <BaseAnalytics/>
        </Box>
    </>
  )
}

export default BaseAdmin