import React from 'react'
import { Box, Typography } from '@mui/material'
import FooterCard from './FooterCard'

const Footer = () => {
  return (
    <>
        <Box
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          bgcolor={'secondary.dark'} 
          width={'100%'} 
          height={'100px'}
          >
            <FooterCard/>
        </Box>
    </>
  )
}

export default Footer