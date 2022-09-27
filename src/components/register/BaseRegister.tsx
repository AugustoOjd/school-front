import React from 'react'
import { Box, Typography, Stack } from '@mui/material';
import Formulario from './Formulario'
import FormLoginUser from '../user/loginUser/form/FormLoginUser';

const BaseRegister = () => {
  return (
    <>
        <Box 
          display={'flex'} 
          bgcolor={'primary.light'} 
          width={'100%'} 
          height={{ xs: '1200px', md:'700px'}}
          >

          <Stack 
            direction={{base: 'column', md: 'row'}} 
            spacing={2} 
            padding={2}
            width={'100%'}
            >
            
            <Box
              bgcolor={'orange'}
              width={'100%'}
              height={{xs: '50%', md: '100%'}}
            >
              <Typography>
                Explicacion del registo
              </Typography>
            </Box>

            <Box 
              width={'100%'}
              marginRight={5}
              marginTop={5}
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