import React, {useEffect, useState} from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { useForm, SubmitHandler } from "react-hook-form";
import { ILogin } from '../../../../interface/login';
import { isEmail } from '../../../../utils/valitations';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useCookies } from 'react-cookie'

import { useSelector, useDispatch } from 'react-redux'
import { isLogin } from '../../../../context/reduces/authLoginUser';
import { authSession } from '../../../../context/reduces/authSessionUser'


import { Link, NavLink } from 'react-router-dom';
import { RootState } from '../../../../context/store/store';


const loginURL = 'http://localhost:8080/api/login'


const FormLoginUser = () => {

    const [statusOk, setStatusOk] = useState(false)
    const [statusError, setStatusError] = useState(false)

    const [cookies, setCookie] = useCookies(['token']);

    const dispatch = useDispatch()
    const session = useSelector((state: RootState)=> state.SessionUser.value)

    // Evento de hook form mas post con axios
    const { register, handleSubmit, formState: {errors} } = useForm<ILogin>();
    const onSubmit: SubmitHandler<ILogin> = async (data) => axios.post(loginURL, await {
        email:      data.email.toLowerCase(),
        password:   data.password
      })
      .then(function (response) {
        console.log(response.data);

        const token = response.data.token

        
        // Cookies.set('token', token)
        setCookie('token', token);

        const prueba = dispatch(authSession(response.data.student))
        console.log('Eso es prueba del estado  ', prueba.payload)
        console.log('Esto es session', session)
        setStatusOk(true)
        dispatch(isLogin())


        // TODO: SI TODO DA OK, MANDAR AL USUARIO A SU DASHBOARD CON EL TOKEN EN LA COOKIE
      })
      .catch(function (error) {
        console.log(error);
        setStatusError(true)
        // TODO: FALTA MANDARLE LOS ERRORES DE FORM AL USUARIO PARA QUE PUEDA CORREGIRLOS
      });

  return (
    <>
        <Box
            bgcolor={'white'}
            padding={5}
            borderRadius={1.2}
            boxShadow={2}
            
        >
            <form
            onSubmit={handleSubmit(onSubmit)}>
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
                    
                    {/* <Link to={'/user/123'}> */}
                        <Button 
                            variant='contained'
                            color={'primary'} 
                            fullWidth
                            type='submit'
                            >Ingresar
                        </Button>
                    {/* </Link> */}
                </Stack>
            </form>
        </Box>

        <Box bgcolor={'darkcyan'} height={'300px'}>
            {
                session.map( (e)=>(
                    <>
                    {e.key}
                    <Typography color={'white'}>{e.name}</Typography>
                    <Typography color={'white'}>{e.lastName}</Typography>
                    <Typography color={'white'}>{e.email}</Typography>
                    <Typography color={'white'}>{e.point}</Typography>
                    </>
                ))
            }
        </Box>
    </>
  )
}

export default FormLoginUser