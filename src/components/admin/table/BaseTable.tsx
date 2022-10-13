import { Box, Typography } from '@mui/material';
import React from 'react'
import CardTable from './CardTable';

const BaseTable = () => {
  return (
    <>
        <Box
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            bgcolor={'secondary.light'}
            width={'100%'}
            height={'400px'}
            // p={1}
        >
            <CardTable/>
        </Box>
    </>
  )
}

export default BaseTable