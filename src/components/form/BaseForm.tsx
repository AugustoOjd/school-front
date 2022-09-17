import React from 'react'
import { Box, Typography, Stack } from '@mui/material';
import Formulario from './Formulario'

const Form = () => {
  return (
    <>
        <Box 
          display={'flex'} 
          bgcolor={'white'} 
          width={'100%'} 
          height={'600px'}
          >

          <Stack 
            direction={'row'} 
            spacing={2} 
            padding={2}
            width={'100%'}
            >
            <Box width={'100%'}>

              <Formulario/>

            </Box>

            
            <Box width={'100%'}>
              <Typography color={'black'} fontSize={'30px'}> Instruciones del registro</Typography>
            </Box>
            
          </Stack>


        </Box>
    </>
  )
}

export default Form