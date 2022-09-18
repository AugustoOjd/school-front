import React from 'react'
import { Box, Typography, Stack } from '@mui/material';
import Formulario from './Formulario'
import FormLoginUser from './FormLoginUser';

const Form = () => {
  return (
    <>
        <Box 
          display={'flex'} 
          bgcolor={'white'} 
          width={'100%'} 
          height={{ xs: '1000px', md:'600px'}}
          >

          <Stack 
            direction={{base: 'column', md: 'row'}} 
            spacing={2} 
            padding={2}
            width={'100%'}
            >
            
            <Box
              width={'100%'}
            >
              <FormLoginUser/>
            </Box>

            <Box 
              width={'100%'}
              marginRight={5}
              marginTop={5}

              >

              <Formulario/>

            </Box>
            
          </Stack>


        </Box>
    </>
  )
}

export default Form