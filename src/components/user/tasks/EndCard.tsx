import React, {FC} from 'react'
import { Box, Typography, Stack, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

// Redux
import { useSelector } from 'react-redux';
import { RootState } from '../../../context';

interface Props {
    total: number
}

const EndCard:FC<Props> = ({total}) => {

    const session = useSelector((state: RootState) => state.SessionUser.value)
    const _id = session.map(e=> e.id)
    
  return (
    <>
    <Box
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        height={'100%'}
        width={'100%'}
    >
        <Box
            bgcolor={'primary.dark'}
            borderRadius={2}
            boxShadow={2}
            height={'70%'}
            width={'80%'}
            p={1}
        >
            <Box
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                bgcolor={'white'}
                height={'95%'}
                p={1}
            >
                <Stack
                    direction={'column'}
                    spacing={3}
                >
                    <Typography
                        textAlign={'center'}
                        fontSize={'20px'}
                    >
                        Conseguiste !!
                    </Typography>
                    <Typography
                        textAlign={'center'}
                        fontSize={'30px'}
                    >
                        {total}
                    </Typography>

                    <NavLink to={`/user/${_id[0]}`}>
                        <Button
                            variant='contained'
                            fullWidth
                        >
                            Ir a Dashboard
                        </Button>
                    </NavLink>
                </Stack>

            </Box>

        </Box>


    </Box>
    </>
  )
}

export default EndCard