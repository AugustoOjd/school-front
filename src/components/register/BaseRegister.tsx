import React from 'react'
import { Box, Stack } from '@mui/material';
import Formulario from './Formulario'
import Details from './Details';

const BaseRegister = () => {
  return (
    <>
        <Box 
          display={'flex'} 
          bgcolor={'primary.light'} 
          width={'100%'} 
          height={{ xs: '1400px', md:'700px', lg: '700px' }}
          >

          <Stack 
            direction={{base: 'column', md: 'row'}} 
            spacing={2} 
            padding={1}
            px={{sm: 5, lg: 10}}
            width={'100%'}
            >
            
            <Box
              width={'100%'}
              height={{xs: '50%', md: '100%'}}
            >
                <Details/>
            </Box>

            <Box 
              width={'100%'}
              marginRight={5}
              marginTop={4}
              height={{xs: '50%', md: '100%'}}
              >

              <Formulario/>

            </Box>
            
          </Stack>


        </Box>
    </>
  )
}

export default BaseRegister