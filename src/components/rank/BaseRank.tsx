import { Box, Typography } from '@mui/material'
import React from 'react'
import TableRank from './TableRank'

const Rank = () => {
  return (
    <>
        <Box
          paddingTop={{xs: 5, md: 10}}
          bgcolor={'primary.light'} 
          height={{ xs: '400px', md: '500px'}} 
          width={'100%'}
          >
            <TableRank/>
        </Box>
    </>

  )
}

export default Rank