import { Box, Typography } from '@mui/material'
import React from 'react'
import FormLoginAdmin from './form/FormLoginAdmin'

const BaseLoginAdmin = () => {
  return (
    <>
        <Box
            paddingTop={'80px'}
            bgcolor={'primary.light'}
            width={'100%'}
            height={'500px'}
        >
            <FormLoginAdmin/>
        </Box>
    </>
  )
}

export default BaseLoginAdmin