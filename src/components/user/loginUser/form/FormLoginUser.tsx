import React, {useEffect, useState} from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { useForm, SubmitHandler } from "react-hook-form";
import { ILogin } from '../../../../interface/login';
import { isEmail } from '../../../../utils/valitations';
import { useCookies } from 'react-cookie'

// Redux toolkit
import { useSelector, useDispatch } from 'react-redux'
import { isLogin } from '../../../../context/reduces/authLoginUser';
import { authSession } from '../../../../context/reduces/authSessionUser'
import { RootState } from '../../../../context/store/store';

import { useNavigate } from 'react-router-dom';
import { instance } from '../../../../api/axiosApi';
import { LoadingButton } from '@mui/lab';



const FormLoginUser = () => {

    const [statusOk, setStatusOk] = useState(false)
    const [statusError, setStatusError] = useState(false)
    const [sending, setSending] = useState(false)

    const [cookies, setCookie] = useCookies(['token', 'user']);

    const dispatch = useDispatch()
    const session = useSelector((state: RootState)=> state.SessionUser.value)

    const navigate = useNavigate()

    // Evento de hook form mas post con axios
    const { register, 
            handleSubmit,
            reset, 
            formState: {errors} } = useForm<ILogin>();

    const onSubmit: SubmitHandler<ILogin> =  async ({email, password}) => {

        setSending(true)
        
        instance.post('/login', {
            email:      email.toLowerCase(),
            password:   password
        })
            .then((res )=> {

                const { student, token } = res.data

                setCookie('token', token);
                setCookie('user', student);

                // console.log(student, token)

                const estado = dispatch(authSession(student))

                setStatusOk(true)

                dispatch(isLogin())

                if(!estado){
                    return navigate('/user/login')
                }

                if(estado){
                    navigate(`/user/${student.id}`)
                }

                setSending(false)
            })
            .catch((err)=>{
                // console.log(err)
                setStatusError(true)
                setSending(false)
            })
    }
    

  return (
    <>
        <Box
            bgcolor={'white'}
            padding={3}
            paddingX={{xs: 2, sm: 8}}
            borderRadius={2}
            boxShadow={3}
            marginX={{xs: 4, sm: 12, md: 20, lg: 40}}
        >
            <Typography
                fontSize={'30px'}
                textAlign={'center'}
                color={'secondary.light'}
                mb={3}
            >
                Sesion Usuario
            </Typography>
            <form
            onSubmit={handleSubmit(onSubmit)}
            >
                <Stack direction={'column'} spacing={4}>
                    <TextField 
                        id="outlined-basic" 
                        label="Email" 
                        variant="outlined" 
                        {...register("email", {required: 'El email es requerido', validate: {isEmail}})}
                        error={ !!errors.email }
                        helperText={ errors.email?.message }
                        />
                    
                    <TextField 
                        id="outlined-basic" 
                        label="Password" 
                        variant="outlined" 
                        {...register("password")}
                        />
                        {
                            statusOk 
                            ?
                            <Typography color={'green'}>
                                Logeado
                            </Typography>
                            :
                            null
                        }
                        {
                            statusError 
                            ?
                            <Typography color={'red'}>
                                usuario incorrecto
                            </Typography>
                            :
                            null
                        }
                        {
                            sending
                            ?
                            <LoadingButton loading variant="contained">
                            Submit
                            </LoadingButton>
                            :
                            <Button 
                                variant='contained'
                                color={'primary'} 
                                fullWidth
                                type='submit'
                                >Ingresar
                            </Button>
                        }
                </Stack>
            </form>
        </Box>
    </>
  )
}

export default FormLoginUser