import { Box, Typography } from '@mui/material'
import React from 'react'
import FormLoginUser from './form/FormLoginUser'

const BaseLoginUser = () => {
  return (
    <>
        <Box
            bgcolor={'primary.light'}
            width={'100%'}
            height={'500px'}
            paddingTop={'80px'}
        >
            <FormLoginUser/>
        </Box>
    </>
  )
}

export default BaseLoginUser