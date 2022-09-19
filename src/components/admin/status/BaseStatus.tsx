import { Box, Typography } from '@mui/material'
import React from 'react'

const BaseStatus = () => {
  return (
    <>
        <Box
            bgcolor={'gray'}
            width={'100%'}
            height={'300px'}
        >
            <Typography fontSize={'20px'}>Base Status</Typography>
        </Box>
    </>
  )
}

export default BaseStatus