import { Box, Typography } from '@mui/material'
import React from 'react'
import CardIntro from './CardIntro'

const Intro = () => {
  return (
    <>
        <Box 
          // paddingY={{xs: 2, md: 4}}
          bgcolor={'secondary.light'} 
          height={{ xs: '400px', md: '500px', lg: '700px'}} 
          width={'100%'}
          >
            <CardIntro/>
        </Box>
    </>
  )
}

export default Intro