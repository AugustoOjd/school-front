import React, {FC} from 'react'
import { Box, Typography, Stack, Button } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../context';
import { orange } from '@mui/material/colors';
import { authSession, logoutSession } from '../../../context/reduces/authSessionUser';
import { Student } from '../../../interface/student';

interface Props {
    total: number
}

const EndCard:FC<Props> = ({total}) => {

    const session = useSelector((state: RootState) => state.SessionUser.value)
    const _id = session.map(e=> e.id)
    const navigate = useNavigate()

    const dispatch = useDispatch()

    const user = session.map((u: any)=> ({
        id:         u.id, 
        name:       u.name,
        lastName:   u.lastName,
        email:      u.email,
        point:      u.point + total,
        nivel:      u.nivel + 1,
        role:       u.role,
        state:      u.state,
    })
    )
    
    const sendPoints = ()=> {
        dispatch(logoutSession())
        dispatch(authSession(user[0]))

            navigate(`/user/${_id[0]}`)
    }


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
            height={'60%'}
            width={{ xs: '80%', md: '60%'}}
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
                    spacing={5}
                >
                    <Box
                        bgcolor={'secondary.dark'}
                        borderRadius={1}
                        p={1}
                    >
                        <Typography
                            textAlign={'center'}
                            fontSize={'20px'}
                            color={orange[500]}
                        >
                            Conseguiste !!
                        </Typography>
                    </Box>
                    <Typography
                        color={'secondary.light'}
                        textAlign={'center'}
                        fontSize={'30px'}
                    >
                        {total} Puntos
                    </Typography>

                    {/* <NavLink to={}> */}
                        <Button
                            variant='contained'
                            fullWidth
                            onClick={()=> sendPoints()}
                        >
                            Enviar
                        </Button>
                    {/* </NavLink> */}
                </Stack>

            </Box>

        </Box>


    </Box>
    </>
  )
}

export default EndCard