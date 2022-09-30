import { Box, Stack } from '@mui/material'
import React from 'react'

const CardIntro = () => {
  return (
    <>
        <Box
            width={'100%'}
            height={'100%'}
        >
            <Stack
                width={{xs: '100%', md: '100%'}}
                height={'100%'}
                direction={{xs: 'column', md: 'row'}}
                spacing={2}
            >
                <Box
                    width={'100%'}
                    bgcolor={'gray'}
                    // height={'100%'}
                >
                    <span>holaaaaaaaaaaaa</span>
                </Box>

                <Box
                    width={'100%'}
                    bgcolor={'red'}
                    // height={'100%'}
                    >
                    <span>holaaaaaaaaaaaa</span>
                </Box>
            </Stack>
        </Box>
    </>
  )
}

export default CardIntro