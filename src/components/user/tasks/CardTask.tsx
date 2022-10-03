import { Box } from '@mui/material'
import React from 'react'
import DetailsCardTask from './DetailsCardTask'

const CardTask = () => {
  return (
    <>
        <Box
            bgcolor={'primary.light'}
            height={{xs: '500px', lg: '800px'}}
            width={'100%'}
        >
            <DetailsCardTask/>
        </Box>
    </>
  )
}

export default CardTask