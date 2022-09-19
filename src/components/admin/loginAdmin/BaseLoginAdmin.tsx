import { Box, Typography } from '@mui/material'
import React from 'react'
import FormLoginAdmin from './form/FormLoginAdmin'

const BaseLoginAdmin = () => {
  return (
    <>
        <Box
            bgcolor={'white'}
            width={'100%'}
            height={'800px'}
        >
          <Typography fontSize={'30px'}> Login Admin</Typography>
            <FormLoginAdmin/>
        </Box>
    </>
  )
}

export default BaseLoginAdmin