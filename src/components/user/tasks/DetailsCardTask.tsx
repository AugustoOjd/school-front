
import React, {useState} from 'react'
import { Box, Button, Card, CardContent, CardMedia, Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material'


type FormValues = {
    option1:  string;
    option2:  string;
    option3:  string;
    option4:  string
  };

  const data = [{
    img: "https://www.enter.co/wp-content/uploads/2021/07/Aliens-Newt-Ripley.jpeg",
    pregunta: 'En la pelicula Alien como se llama la ni;a que rescada la comandate Ripley?',
    opciones: [ {
        a: 'josefa', 
        b: 'manuela', 
        c: 'lupita', 
        d: 'abigail'}] 
  }]

  console.log(data)

const DetailsCardTask = () => {

    const [checked, setChecked] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked(event.target.checked);
    };


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
                    justifyContent={'space-between'}
                    alignItems={'center'}
                    height={'15%'}
                    width={'100%'}
                    >
                    <Box
                        bgcolor={'secondary.dark'}
                        p={1}
                        borderRadius={2}
                        boxShadow={2}
                        width={'30%'}
                    >
                        <Typography
                            color={'white'}
                            fontSize={'15px'}
                            component={'h3'}
                        >
                            N I V E L 1
                        </Typography>
                    </Box>
                    <Button
                        size='small'
                        variant='contained'
                    >X
                    </Button>
                </Box>
                <Card
                    sx={{display: 'flex', height: '85%', width: '100%', flexDirection: {xs: 'column', sm: 'row'}}}
                >

                    {
                        data.map(e=>(
                            <>
                            <CardMedia
                              component="img"
                              sx={{ width: { xs: '100%', sm: '60%'}, height: {xs: '50%', sm: '100%'}, objectFit: 'fill' }}
                              image={e.img}
                              alt={e.img}
                            />
    
                        <CardContent sx={{ width: { xs: '100%', sm: '40%'}, height: {xs: '50%', sm: '100%'} }}>
                          <Typography
                            
                          >
                            {e.pregunta}
                          </Typography>
                        </CardContent>
                        </>

                        ))

                    }
                </Card>
            </Box>

        </Box>
    </>
  )
}

export default DetailsCardTask