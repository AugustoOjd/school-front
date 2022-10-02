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
import { useCookies } from 'react-cookie'
import { useDispatch, useSelector } from 'react-redux';
import { authSession } from '../../context/reduces/authSessionUser';
import { isLogin } from '../../context/reduces/authLoginUser';


const Formulario = () => {

  const [statusOk, setStatusOk] = useState(false)
  const [statusError, setStatusError] = useState(false)

  const [cookies, setCookie] = useCookies(['token']);

  const navigate = useNavigate()

  const dispatch = useDispatch()

    const { register, handleSubmit, formState: {errors} } = useForm<IRegister>();
    const onSubmit: SubmitHandler<IRegister> = async ({name, lastName, email, country, password}) => 

      instance.post('/register', {
        name:     name.toLocaleLowerCase(),
        lastName: lastName.toLocaleLowerCase(),
        email:    email.toLocaleLowerCase(),
        country:  country.toLocaleLowerCase(),
        password: password
      })
    .then( (res)=> {

      const { student, token } = res.data

      console.log( student, token)

      setCookie('token', token);

      const estado = dispatch(authSession(student))

      dispatch(isLogin())

      if(!estado){
          return navigate('/user/login')
      }

      if(estado){
          navigate(`/user/${student.id}`)
      }

      setStatusOk(true)
      // TODO: FALTA DIRIGIR AL USUARIO A SU DASHBOARD CON EL TOKEN EN LA COOKIE
    })
    .catch((error) => {
      console.log(error);
      setStatusError(true)
      // TODO: FALTAN LOS ERRORES DE LOS DATOS INGRESADOS
    });

    const [country, setCountry] = useState('');

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
                
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Pais</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={country}
                    label="Age"
                    
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

                <Button 
                        variant='contained'
                        color={'primary'} 
                        fullWidth
                        type='submit'
                        >registrarse
                </Button>

            </Stack>
            </form>
        </Box>
    </>
  )
}

export default Formulario
