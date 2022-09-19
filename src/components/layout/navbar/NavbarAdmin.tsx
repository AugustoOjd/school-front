import { AppBar, Box, Typography, Stack, Button } from '@mui/material'
import React from 'react'

const NavbarAdmin = () => {
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
                <Typography>
                    Nombre admin
                </Typography>
                <Button 
                  variant='contained' 
                  color='primary'> Logout </Button>
              </Stack>
            </Box>
        
        </Box>
        
        </AppBar>
    </>
  )
}

export default NavbarAdmin