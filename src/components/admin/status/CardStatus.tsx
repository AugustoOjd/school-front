import React, {FC} from 'react'

import { Box, Stack, Typography } from '@mui/material'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PersonOffOutlinedIcon from '@mui/icons-material/PersonOffOutlined';

interface Props{
    activos: number 
    inactivos: number
}

const CardStatus:FC<Props> = ({activos, inactivos}) => {
  return (
    <>
        <Stack
            direction={'row'}
            spacing={{xs: 2, sm: 10, md: 12}}
        >
            <Stack
                bgcolor={'white'}
                direction={'column'}
                borderRadius={1}
                boxShadow={1}
                spacing={1}
                p={1}
            >
                <Box
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    <PersonOutlineOutlinedIcon
                        sx={{fontSize: '50px'}}
                        color={'success'}
                    />
                </Box>
                <Typography
                    textAlign={'center'}
                    color={'secondary.light'}
                    fontSize={{xs: '18px', sm: '20px',md: '22px'}}
                >
                    Users Activos:
                </Typography>
                <Typography
                    textAlign={'center'}
                    color={'secondary.light'}
                    fontSize={{xs: '18px', sm: '20px', md: '22px'}}
                >
                    {activos}
                </Typography>
            </Stack>
            <Stack
                bgcolor={'white'}
                direction={'column'}
                borderRadius={2}
                boxShadow={1}
                spacing={1}
                p={1}
            >
                <Box
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    <PersonOffOutlinedIcon
                        sx={{fontSize: '50px'}}
                        color={'error'}
                    />
                </Box>
                <Typography
                    textAlign={'center'}
                    color={'secondary.light'}
                    fontSize={{xs: '18px', sm: '20px', md: '22px'}}
                >
                    Users Inactivos:
                </Typography>
                <Typography
                    textAlign={'center'}
                    color={'secondary.light'}
                    fontSize={{xs: '18px', sm: '20px', md: '22px'}}
                >
                    {inactivos}
                </Typography>
            </Stack>
        </Stack>
    </>
  )
}

export default CardStatus