import { Box, Typography } from '@mui/material'
import React from 'react'
import FormLoginUser from './form/FormLoginUser'

const BaseLoginUser = () => {
  return (
    <>
        <Box
            bgcolor={'white'}
            width={'100%'}
            height={'800px'}
        >
            <Typography fontSize={'30px'}> Login User</Typography>
            <FormLoginUser/>
        </Box>
    </>
  )
}

export default BaseLoginUser