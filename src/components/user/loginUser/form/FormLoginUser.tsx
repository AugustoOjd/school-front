import React, {useEffect, useState} from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { useForm, SubmitHandler } from "react-hook-form";
import { ILogin } from '../../../../interface/login';
import { isEmail } from '../../../../utils/valitations';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useCookies } from 'react-cookie'

// Redux toolkit
import { useSelector, useDispatch } from 'react-redux'
import { isLogin } from '../../../../context/reduces/authLoginUser';
import { authSession } from '../../../../context/reduces/authSessionUser'
import { RootState } from '../../../../context/store/store';

import { useNavigate } from 'react-router-dom';
import { instance } from '../../../../api/axiosApi';



const loginURL = 'http://localhost:8080/api/login'


const FormLoginUser = () => {

    const [statusOk, setStatusOk] = useState(false)
    const [statusError, setStatusError] = useState(false)

    const [cookies, setCookie] = useCookies(['token']);

    const dispatch = useDispatch()
    const session = useSelector((state: RootState)=> state.SessionUser.value)

    const navigate = useNavigate()

    // Evento de hook form mas post con axios
    const { register, 
            handleSubmit,
            reset, 
            formState: {errors} } = useForm<ILogin>();

    const onSubmit: SubmitHandler<ILogin> =  async ({email, password}) => {

        instance.post('/login', {
            email:      email.toLowerCase(),
            password:   password
        })
            .then((res )=> {

                const { student, token } = res.data

                setCookie('token', token);

                console.log(student, token)

                const estado = dispatch(authSession(student))

                setStatusOk(true)

                dispatch(isLogin())

                if(!estado){
                    return navigate('/user/login')
                }

                if(estado){
                    navigate('/user/123')
                }

            })
            .catch((err)=>{
                console.log(err)
                setStatusError(true)
            })
    }
    
    
    // axios.post(loginURL, await {
    //     email:      data.email.toLowerCase(),
    //     password:   data.password
    //   })
    //   .then(function (response) {
    //     console.log(response.data);

    //     const user = response.data.student

    //     const token = response.data.token

        
    //     // Cookies.set('token', token)
    //     setCookie('token', token);


    //     setStatusOk(true)
    //     const prueba = dispatch(authSession(user))
    //     console.log('Eso es prueba del estado  ', prueba.payload)
    //     console.log('Esto es session', session)
    //     dispatch(isLogin())


    //     // TODO: SI TODO DA OK, MANDAR AL USUARIO A SU DASHBOARD CON EL TOKEN EN LA COOKIE
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //     setStatusError(true)
    //     // TODO: FALTA MANDARLE LOS ERRORES DE FORM AL USUARIO PARA QUE PUEDA CORREGIRLOS
    //   });

  return (
    <>
        <Box
            bgcolor={'white'}
            padding={5}
            borderRadius={1.2}
            boxShadow={2}
            
        >
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
                    
                        <Button 
                            variant='contained'
                            color={'primary'} 
                            fullWidth
                            type='submit'
                            >Ingresar
                        </Button>
                </Stack>
            </form>
        </Box>

        {/* <Box bgcolor={'darkcyan'} height={'300px'}>
            {
                session.map( (e)=>(
                    <>
                    <Typography fontSize={30} color={'white'}>{e.name}</Typography>
                    <Typography fontSize={30} color={'white'}>{e.lastName}</Typography>
                    <Typography fontSize={30} color={'white'}>{e.email}</Typography>
                    <Typography fontSize={30} color={'white'}>{e.point}</Typography>
                    </>
                ))
            }
        </Box> */}
    </>
  )
}

export default FormLoginUser