import { Avatar, Box, Stack, Typography } from '@mui/material'
import React, { FC } from 'react'
import { deepOrange, deepPurple } from '@mui/material/colors';


interface Props {
    iniciales: string,
    nombre: string,
    apellido: string,
    puntos: number
}

const CardDashboardUser:FC<Props> = ({iniciales, puntos, nombre, apellido}) => {
  return (
    <>
        <Stack 
            width={'100%'}
            direction={{base: 'column', sm: 'row'}}
            spacing={5}

        >
            <Stack
                direction={'column'}
                spacing={1}
                width={{base: '50%', sm: '100%'}}
                height={{base: '50%', md:'100%'}}
                justifyContent={'center'}
                alignItems={'center'}
                mb={{xs: '50px', sm: '0px'}}
                >
                <Avatar sx={{ bgcolor: deepPurple[500], width: 56, height: 56 }}>{iniciales}</Avatar>
                <Typography color={'white'} fontSize={25}>Username: </Typography>
                <Typography color={'white'} fontSize={45}>{nombre}</Typography>
                <Typography color={'white'} fontSize={25}>Apellido: </Typography>
                <Typography color={'white'} fontSize={45}>{apellido}</Typography>
            </Stack>

            <Stack
                direction={'column'}
                spacing={2}
                width={{base: '50%', sm: '100%'}}
                height={{base: '50%', md:'100%'}}
                alignItems={'center'}
            >
                <Typography color={'white'} fontSize={25}> Puntos: </Typography>
                <Typography color={'white'} fontSize={45}>{puntos}</Typography>
            </Stack>

        </Stack>
    </>
  )
}

export default CardDashboardUser