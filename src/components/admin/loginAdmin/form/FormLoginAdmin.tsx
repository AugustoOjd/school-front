import React, {useState} from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { useForm, SubmitHandler } from "react-hook-form";
import { ILogin } from '../../../../interface/login';
import { isEmail } from '../../../../utils/valitations';


import { instance } from '../../../../api/axiosApi';
import { useNavigate } from 'react-router-dom';

// Redux
import { useDispatch } from 'react-redux';
import { authSessionA } from '../../../../context/reduces/authSessionAdmin';
import Cookies from 'js-cookie';
import { LoadingButton } from '@mui/lab';


const FormLoginAdmin = () => {

    const [statusOk, setStatusOk] = useState(false)
    const [statusError, setStatusError] = useState(false)
    const [sending, setSending] = useState(true)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    // Evento de hook form mas post con axios
    const { register, handleSubmit, formState: {errors} } = useForm<ILogin>();
    const onSubmit: SubmitHandler<ILogin> = async ({email, password}) => {
    
    instance.post('/admin', {
        email:      email,
        password:   password
      })
      .then((res) => {
        // console.log(res.data);
        setStatusOk(true)

        const { admin, token} = res.data 

        Cookies.set('token', token)
        Cookies.set('admin', JSON.stringify(admin))

        const estado = dispatch(authSessionA(admin))

        // console.log(estado)

        if(!estado){
            return navigate('/')
        }

        if(estado){
            navigate(`/admin/${admin.id}`)
        }


        // TODO: SI TODO DA OK, MANDAR AL USUARIO A SU DASHBOARD CON EL TOKEN EN LA COOKIE
      })
      .catch((error) => {
        // console.log(error);
        setStatusError(true)
        // TODO: FALTA MANDARLE LOS ERRORES DE FORM AL USUARIO PARA QUE PUEDA CORREGIRLOS
      });

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
                mb={3}
            >
                Sesion Admin
            </Typography>
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

export default FormLoginAdmin