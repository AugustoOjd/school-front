import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { purple, orange } from '@mui/material/colors';

const CardIntro = () => {
  return (
    <>
        <Box
            // width={'100%'}
            height={'85%'}
            padding={3}
        >
            <Stack
                width={{xs: '100%', md: '100%'}}
                height={'100%'}
                direction={{xs: 'column', sm: 'row'}}
                spacing={2}
            >

                <Box
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    width={{ xs: '100%', sm: '50%'}}
                    bgcolor={'primary.dark'}
                    height={{xs: '50%', sm: '100%'}}
                    borderRadius={3}
                    boxShadow={3}
                    >
                    <Box
                        display={'flex'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        bgcolor={'primary.light'}
                        width={'95%'}
                        height={'95%'}
                        borderRadius={3}
                    >
                        <Stack
                            direction={'column'}
                            display={'flex'}
                            justifyContent={'center'}
                            alignItems={'center'}
                            padding={2}                            
                            >
                            <Stack
                                direction={'row'}
                            >
                                <Typography
                                    component={'h1'}
                                    fontStyle={'italic'}
                                    fontSize={{xs: '20px', sm: '30px', md: '40px', lg: '60px'}}
                                    color={orange[400]}
                                    fontWeight={'bold'}
                                >
                                        U
                                </Typography>
                                <Typography 
                                    component={'h2'}
                                    fontStyle={'italic'}
                                    fontSize={{xs: '20px', sm: '30px', md: '40px', lg: '60px'}}
                                    color={'secondary.light'}
                                    fontWeight={'bold'}
                                > 
                                        Culture:
                                </Typography>
                            </Stack>
                        <Typography
                            component={'p'}
                            fontSize={{xs: '12px', sm: '18px', md: '25px', lg: '35px'}}
                        >
                            Es un app de preguntas de cultura general, donde pondras a prueba tus conocimientos de historia, peliculas, series, geografia y deporte.
                        </Typography>
                        <Typography
                            component={'p'}
                            fontSize={{xs: '12px', sm: '18px', md: '25px', lg: '35px'}}
                        >
                            Para sumar la mayor cantidad de puntos y quedar en los mejores 5.
                        </Typography>
                        
                        </Stack>
                    </Box>
                </Box>

                <Box
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    width={{ xs: '100%', sm: '50%'}}
                    // bgcolor={'primary.light'}
                    height={{xs: '50%', sm: '100%'}}
                >
                    <img
                        width={'100%'}
                        height={'100%'}
                        src='https://cdn-icons-png.flaticon.com/512/4524/4524570.png'
                    />
                </Box>
            </Stack>
        </Box>
    </>
  )
}

export default CardIntro