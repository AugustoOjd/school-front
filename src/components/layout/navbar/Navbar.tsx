import { Box, Typography, Button, AppBar, Stack } from '@mui/material';
import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      
      <AppBar position='sticky'>

          <Box
            display={'flex'}
            alignItems={'center'}
            bgcolor={'green'} 
            width={'100%'} 
            height={'75px'}
            >

                <Box margin={1}>
                  <Typography color={'white'} fontSize={'30px'}>Logo</Typography>
                </Box>

              <Box           
                width={'100%'}
                display={'flex'}
                justifyContent={'end'}
                alignItems={'center'}>
                
                <Stack direction={'row'} spacing={1} margin={1}>

                  <NavLink to={'/'}>
                    <Button 
                      variant='contained' 
                      color='primary'> Home 
                    </Button>
                  </NavLink>

                  <NavLink to={'/user/login'}>
                    <Button 
                      variant='contained' 
                      color='primary'> Estudiante 
                    </Button>
                  </NavLink>

                  <NavLink to={'/admin/login'}>
                    <Button 
                    variant='contained' 
                    color='primary'> Admin
                    </Button>
                  </NavLink>
                </Stack>
              </Box>

          </Box>

        </AppBar>
    </>
  )
}

export default Navbar