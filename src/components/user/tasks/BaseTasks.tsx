import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

const BaseTasks = () => {
  return (
    <>
        <Box
            bgcolor={'coral'}
            width={'100%'}
            height={'600px'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}   
        >   

        <Stack 
            direction={'column'} 
            spacing={3}
            width={'80%'}
            >
            <Box
                textAlign={'center'}
                >
                <Typography fontSize={'20px'}>Nivel 1</Typography>
                <NavLink to={'/user/123/nivel1'}>
                    <Button
                        variant='contained'
                        color={'primary'}
                        size={'large'}
                        fullWidth 
                    >
                        Nivel 1
                    </Button>
                </NavLink>
            </Box>
            <Box
                textAlign={'center'}
                >
                <Typography fontSize={'20px'}>Nivel 2</Typography>
                <NavLink to={'/user/123/nivel2'}>
                    <Button
                        variant='contained'
                        color={'primary'}
                        size={'large'}
                        fullWidth  
                    >
                        Nivel 2
                    </Button>
                </NavLink>
            </Box>
            <Box
                textAlign={'center'}
            >
                <Typography fontSize={'20px'}>Nivel 3</Typography>
                <NavLink to={'/user/123/nivel3'}>
                    <Button
                        variant='contained'
                        color={'primary'}
                        size={'large'}
                        fullWidth  
                    >
                        Nivel 3
                    </Button>
                </NavLink>
            </Box>
            <Box
                textAlign={'center'}
            >
                <Typography fontSize={'20px'}>Nivel 4</Typography>
                <NavLink to={'/user/123/nivel4'}>
                    <Button
                        variant='contained'
                        color={'primary'}
                        size={'large'}
                        fullWidth  
                    >
                        Nivel 4
                    </Button>
                </NavLink>
            </Box>
        </Stack>
            
        </Box>
    </>
  )
}

export default BaseTasks