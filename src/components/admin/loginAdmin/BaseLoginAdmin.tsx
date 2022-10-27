import { Box, Typography } from '@mui/material'
import React from 'react'
import FormLoginAdmin from './form/FormLoginAdmin'

const BaseLoginAdmin = () => {
  return (
    <>
        <Box
            bgcolor={'primary.light'}
            width={'100%'}
            height={{ xs: '800px', md: '800px'}}
            paddingTop={{ xs: '90px', md: '120px'}}
        >
            <FormLoginAdmin/>
        </Box>
    </>
  )
}

export default BaseLoginAdmin