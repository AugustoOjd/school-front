import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
// Materia Ui
import { Box, InputLabel, MenuItem, Select, Stack, TextField, SelectChangeEvent, FormControl, Button, Typography } from '@mui/material'
// Helpers
import { useForm, SubmitHandler } from "react-hook-form";
import { IRegister } from '../../interface/register';
import { countries } from '../../utils/countries';
import { isEmail } from '../../utils/valitations';
// Axios
import { instance } from '../../api/axiosApi';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { authSession, logoutSession } from '../../context/reduces/authSessionUser';
import { isLogin } from '../../context/reduces/authLoginUser';
import Cookies from 'js-cookie';
import { LoadingButton } from '@mui/lab';


const Formulario = () => {

  const [statusOk, setStatusOk] = useState(false)
  const [statusError, setStatusError] = useState(false)
  const [country, setCountry] = useState('');
  const [errorMail, setErrorMail] = useState(false)
  const [seding, setSeding] = useState(false)

  const navigate = useNavigate()

  const dispatch = useDispatch()

    const { register, handleSubmit, formState: {errors} } = useForm<IRegister>();
    const onSubmit: SubmitHandler<IRegister> = async ({name, lastName, email, country, password}) => {

      
      setSeding(true)

      instance.post('/register', {
        name:     name.toLocaleLowerCase(),
        lastName: lastName.toLocaleLowerCase(),
        email:    email.toLocaleLowerCase(),
        country:  country.toLocaleLowerCase(),
        password: password
      })
    .then( (res)=> {

      const { student, token } = res.data

      Cookies.remove('token')
      Cookies.remove('user')

      Cookies.set('token', token);
      Cookies.set('user', JSON.stringify(student));


      dispatch(logoutSession())
      const estado = dispatch(authSession(student))

      dispatch(isLogin())

      if(!estado){
          return navigate('/user/login')
      }

      if(estado){
          navigate(`/user/${student.id}`)
      }

      setStatusOk(true)
      setSeding(false)
    })
    .catch((error) => {
      // console.log(error.response.data.msg);
      
      const eMail = error.response.data.msg
      if(eMail){
        return setErrorMail(true)
      }
      
      setStatusError(true)
      setSeding(false)
    });
  }

    const handleChange = (event: SelectChangeEvent) => {
      setCountry(event.target.value as string);
      
    };
    

  return (
    <>
        <Box
            bgcolor={'white'}
            padding={3}
            paddingX={{xs: 2, sm: 2}}
            borderRadius={2}
            boxShadow={3}
            marginX={{xs: 2, sm: 2}}
            mt={3}
        >
            <Typography
                fontSize={'30px'}
                textAlign={'center'}
                mb={3}
                color={'secondary.light'}
            >
                Registrarse
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
            <Stack direction={'column'} spacing={2}>

                
                <TextField 
                    id="outlined-basic" 
                    label="Nombre" 
                    variant="outlined" 
                    {...register("name", { 
                      required: 'El nombre es requerido', 
                      minLength: {value: 2, message: 'Minimo 2 caracteres'}, 
                      maxLength: {value: 12, message: 'Maximo 10 caracteres'}})}
                    error={ !!errors.name }
                    helperText={ errors.name?.message }
                />
                <TextField
                    size={'medium'}
                    id="outlined-basic" 
                    label="Apellido" 
                    variant="outlined"
                    {...register("lastName", {
                      required: 'El apellido es requerido', 
                      minLength: {value: 2, message: 'Minimo 2 caracteres'}, 
                      maxLength: {value: 12, message: 'Maximo 10 caracteres'}
                    })} 
                    error={ !!errors.lastName }
                    helperText={ errors.lastName?.message }
                />
                <TextField 
                    id="outlined-basic" 
                    label="Email" 
                    variant="outlined" 
                    {...register("email", {
                      required: 'El email es requerido', 
                      validate: {isEmail},
                      maxLength: {value: 35, message: 'Maximo 35 caracteres'}
                    })}
                    error={ !!errors.email }
                    helperText={ errors.email?.message } 
                    />
                    {  
                      errorMail && <Typography
                        fontSize={15}
                        color={'error'}
                      >Ya existe este correo
                      </Typography>
                    }
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Pais</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={country}
                    label="Pais"
                    
                    {...register("country", {
                        required: true,
                        onChange: (e) => { handleChange(e)},
                    })
                    }
                    error={ !!errors.country }
                  >
                    {
                        countries.map( cout => (
                            <MenuItem value={cout} key={cout}>{cout}</MenuItem>
                        ))
                    }
                    
                  </Select>
                </FormControl>

                <TextField 
                    id="outlined-basic" 
                    label="Password" 
                    variant="outlined" 
                    {...register("password", {
                      required: 'El password es requerido', 
                      minLength: {value: 6, message: 'Minimo 6 caracteres'},
                      maxLength: {value: 20, message: 'Maximo 20 caracteres'}
                    })}
                    error={ !!errors.password }
                    helperText={ errors.password?.message } 
                    />

                {
                  seding
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
                        >registrarse
                </Button>
                
                }

            </Stack>
            </form>
                {  
                  statusError && <Typography
                    fontSize={15}
                    color={'error'}
                  >Error de servidor
                  </Typography>
                }
        </Box>
    </>
  )
}

export default Formulario
