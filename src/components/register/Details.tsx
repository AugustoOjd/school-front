import React from 'react'
import { Box, Stack, Typography } from '@mui/material';

const Details = () => {
  return (
    <>
        <Box
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
        >
            <Stack
                direction={'column'}
                spacing={1}
            >

                <Box
                    height={'280px'}
                >
                    <img
                        width={'100%'}
                        height={'100%'}
                        src='https://i.pinimg.com/originals/7f/cf/6b/7fcf6b48d3a59392a1bdda6ab88888ed.png'
                    />
                </Box>

                <Stack
                    direction={'column'}
                    spacing={1}
                >
                <Box
                    bgcolor={'secondary.dark'}
                    padding={1}
                    borderRadius={2}
                >   
                    <Box
                        bgcolor={'white'}
                        borderRadius={2}
                        padding={1}
                    >
                        <Typography
                            textAlign={'center'}
                            component={'h2'}
                            fontWeight={'bold'}
                            fontSize={{xs: '20px', lg: '27px'}}
                            color={'secondary.light'}
                        >
                            Quieres participar?
                        </Typography>
                    </Box>
                </Box>

                <Box
                    bgcolor={'secondary.dark'}
                    padding={1}
                    borderRadius={2}
                >
                    <Box
                        bgcolor={'white'}
                        borderRadius={2}
                        padding={1}
                    >
                        <Typography
                            textAlign={'center'}
                            color={'secondary.light'}
                            component={'p'}
                            fontSize={{xs: '15px', sm: '17px', lg: '20px', xl: '25px'}}
                        >
                            Para participar necesitas registrarte, en este formulario, no es necesario colocar tus datos reales, solo necesitas un correo y un nombre que te identifique.
                            Te agradeceria mucho si te registraras y participaras en las preguntas, asi puedo seguir probando y mejorando esta aplicacion 
                        </Typography>
                        <Typography
                            component={'p'}
                        >
                            
                        </Typography>
                    </Box>

                </Box>

                </Stack>
                
            </Stack>
        </Box>
    </>
  )
}

export default Details