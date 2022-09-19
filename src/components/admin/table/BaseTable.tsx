import { Box, Typography } from '@mui/material';
import React from 'react'

const BaseTable = () => {
  return (
    <>
        <Box
            bgcolor={'brown'}
            width={'100%'}
            height={'300px'}
        >
            <Typography fontSize={'20px'}>Base de la tabla</Typography>
        </Box>
    </>
  )
}

export default BaseTable