import { Box, Typography } from '@mui/material'
import React from 'react'
import FormLoginUser from './form/FormLoginUser'

const BaseLoginUser = () => {
  return (
    <>
        <Box
            bgcolor={'primary.light'}
            width={'100%'}
            height={{ xs: '700px', md: '600px'}}
            paddingTop={{ xs: '90px', md: '120px'}}
        >
            <FormLoginUser/>
        </Box>
    </>
  )
}

export default BaseLoginUser