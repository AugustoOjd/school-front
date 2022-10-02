import { Avatar, Box, Stack, Typography } from '@mui/material'
import React, { FC } from 'react'
import { deepOrange, deepPurple, orange } from '@mui/material/colors';


interface Props {
    iniciales: string,
    nombre: string,
    apellido: string,
    puntos: number
}

const CardDashboardUser:FC<Props> = ({iniciales, puntos, nombre, apellido}) => {
  return (
    <>
        <Box 
            width={'100%'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            height={'90%'}
        >
            <Stack
                width={'90%'}
                height={'100%'}
                spacing={2}
                direction={{xs: 'column', sm: 'row'}}
                mt={5}
            >
                <Box
                    width={{ xs: '95%', sm: '50%'}}
                    height={'100%'}
                    bgcolor={'primary.dark'}
                    borderRadius={2}
                    p={1}
                    boxShadow={3}
                >
                    <Stack
                        bgcolor={'primary.light'}
                        direction={'column'}
                        spacing={1}
                        width={{xs: '100%', sm: '100%'}}
                        height={{xs: '100%', sm:'100%'}}
                        justifyContent={'center'}
                        alignItems={'center'}
                        borderRadius={2}
                        boxShadow={2}
                        >
                        <Typography></Typography>
                        <Avatar sx={{ bgcolor: deepPurple[500], width: 56, height: 56 }}>{iniciales}</Avatar>
                        <Box
                            bgcolor={'secondary.dark'}
                            borderRadius={3}
                            p={0.5}
                            width={'90%'}
                        >
                            <Typography 
                                color={'white'}   
                                fontSize={25}
                                textAlign={'center'}
                                >Nombre: </Typography>
                        </Box>                 
                        <Typography color={'secondary.light'} fontSize={40}>{nombre}</Typography>
                        <Box
                            bgcolor={'secondary.dark'}
                            borderRadius={3}
                            p={0.5}
                            width={'90%'}
                        >
                            <Typography 
                                color={'white'}   
                                fontSize={25}
                                textAlign={'center'}
                                >Apellido: </Typography>
                        </Box>
                        <Typography color={'secondary.light'} fontSize={40}>{apellido}</Typography>
                    </Stack>
                </Box>

                <Box
                    width={{ xs: '95%', sm: '50%'}}
                    height={'100%'}
                    bgcolor={'primary.dark'}
                    display={'flex'}
                    alignItems={'center'}
                    borderRadius={2}
                    p={1}
                    boxShadow={3}
                    >
                    <Stack
                        bgcolor={'primary.light'}
                        direction={'column'}
                        spacing={2}
                        width={{xs: '100%', sm: '100%'}}
                        height={{xs: '100%', sm:'100%'}}
                        justifyContent={'center'}
                        alignItems={'center'}
                        borderRadius={2}
                        boxShadow={2}
                    >
                        {/* <Box>
                            
                        </Box> */}
                        <Box
                            bgcolor={'secondary.dark'}
                            borderRadius={3}
                            p={0.5}
                            width={'90%'}
                        >
                            <Typography 
                                color={'white'} 
                                fontSize={'25px'}
                                textAlign={'center'}
                                > Puntos </Typography>
                        </Box>            
                        <Typography 
                            color={orange[600]} 
                            fontSize={45}
                            fontWeight={'bold'}
                            >{puntos}</Typography>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    </>
  )
}

export default CardDashboardUser