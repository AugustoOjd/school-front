import React, {useState} from 'react'
import { Box, InputLabel, MenuItem, Select, Stack, TextField, SelectChangeEvent, FormControl, Button } from '@mui/material'
import { useForm, SubmitHandler } from "react-hook-form";
import { IRegister } from '../../interface/register';
import { countries } from '../../utils/countries';
import { isEmail } from '../../utils/valitations';
import axios from 'axios'

const registerURL =  'http://localhost:8080/api/register'

const Formulario = () => {

    const { register, handleSubmit, formState: {errors} } = useForm<IRegister>();
    const onSubmit: SubmitHandler<IRegister> = async (data) => axios.post(registerURL, await {
      name:         data.name,
      lastName:     data.lastName,
      email:        data.email,
      country:      data.country,
      password:     data.password,

    })
    .then(function (response) {
      console.log(response.data);
      // TODO: FALTA DIRIGIR AL USUARIO A SU DASHBOARD CON EL TOKEN EN LA COOKIE
    })
    .catch(function (error) {
      console.log(error);
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
            borderRadius={1.2}
            boxShadow={2}
        >
            <form onSubmit={handleSubmit(onSubmit)}>
            <Stack direction={'column'} spacing={2}>

                
                <TextField 
                    id="outlined-basic" 
                    label="Nombre" 
                    variant="outlined" 
                    {...register("name", { required: 'El nombre es requerido', minLength: {value: 2, message: 'Minimo 2 caracteres'}})}
                    error={ !!errors.name }
                    helperText={ errors.name?.message }
                />
                <TextField 
                    id="outlined-basic" 
                    label="Apellido" 
                    variant="outlined"
                    {...register("lastName", {required: 'El apellido es requerido', minLength: {value: 2, message: 'Minimo 2 caracteres'}})} 
                    error={ !!errors.lastName }
                    helperText={ errors.lastName?.message }
                />
                <TextField 
                    id="outlined-basic" 
                    label="Email" 
                    variant="outlined" 
                    {...register("email", {required: 'El email es requerido', validate: {isEmail}})}
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
                    {...register("password", {required: 'El password es requerido', minLength: {value: 6, message: 'Minimo 6 caracteres'}})}
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
