import { Box, Button, Card, CardContent, CardMedia, Stack, Typography } from '@mui/material'
import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import { green, orange } from '@mui/material/colors';

// Redux
import { useSelector } from 'react-redux'
import { RootState } from '../../../context/store/store';


const BaseTasks = () => {

    const session = useSelector((state: RootState) => state.SessionUser.value)

    const [user, setUser] = useState(0)

    const data = session.map(e=> e.point)

    useEffect(() => {
        setUser(data[0])
    }, [session])
    

  return (
    <>
        <Box
            bgcolor={'primary.light'}
            width={'100%'}
            height={{xs: '1100px', md: '1200px'}}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}   
        >   

        <Stack 
            direction={'column'} 
            spacing={3}
            width={'80%'}
            >
                
                <Box
                    bgcolor={'secondary.dark'}
                    borderRadius={3}
                    p={0.5}
                    width={'100%'}
                    mb={2}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    <Typography
                        color={'white'} 
                        fontSize={{xs: '30px', md: '40px'}}
                        fontWeight={'bold'}
                    >
                        Participa
                    </Typography>
                    <Typography
                        color={orange[600]} 
                        fontSize={{xs: '30px', md: '40px'}}
                        fontWeight={'bold'}
                    >
                        YA!
                    </Typography>
                </Box>
                <Card
                    sx={{backgroundColor: green[100]}}
                    >
                    <CardMedia
                      component="img"
                      height="140"
                      image="https://png.pngtree.com/thumb_back/fh260/background/20190220/ourmid/pngtree-cartoon-education-training-cram-school-image_9149.jpg"
                      alt="nivel 1"
                    />
                    <CardContent>
                        <Button
                            variant='contained'
                            color={'primary'}
                            size={'large'}
                            fullWidth 
                        >
                            Nivel 1
                        </Button>
                    </CardContent>
                </Card>


                <Card
                    sx={{backgroundColor: green[100]}}
                    >
                    <CardMedia
                      component="img"
                      height="140"
                      image="https://png.pngtree.com/thumb_back/fh260/background/20190221/ourmid/pngtree-school-season-back-to-school-season-blue-cartoon-image_11842.jpg"
                      alt="nivel 2"
                    />
                    <CardContent>
                        {
                        user < 60
                        ?
                        <Button
                            variant='contained'
                            color={'primary'}
                            size={'large'}
                            fullWidth
                            disabled
                        >
                            Pocos puntos
                        </Button>
                        :
                        <Button
                            variant='contained'
                            color={'primary'}
                            size={'large'}
                            fullWidth
                        >
                            NIVEL 2
                        </Button>
                        }
                    </CardContent>
                </Card>

                <Card
                    sx={{backgroundColor: green[100]}}
                    >
                    <CardMedia
                      component="img"
                      height="140"
                      image="https://img.freepik.com/premium-vector/travel-around-world-banner_24797-1115.jpg"
                      alt="nivel 3"
                    />
                    <CardContent>
                    {
                        user < 160
                        ?
                        <Button
                            variant='contained'
                            color={'primary'}
                            size={'large'}
                            fullWidth
                            disabled
                        >
                            Pocos puntos
                        </Button>
                        :
                        <Button
                            variant='contained'
                            color={'primary'}
                            size={'large'}
                            fullWidth
                        >
                            NIVEL 3
                        </Button>
                        }
                    </CardContent>
                </Card>

                <Card
                    sx={{backgroundColor: green[100]}}
                    >
                    <CardMedia
                      component="img"
                      height="140"
                      image="https://png.pngtree.com/thumb_back/fh260/back_our/20190625/ourmid/pngtree-bloody-youth-may-fourth-youth-festival-poster-banner-image_260820.jpg"
                      alt="nivel 4"
                    />
                    <CardContent>
                    {
                        user < 260
                        ?
                        <Button
                            variant='contained'
                            color={'primary'}
                            size={'large'}
                            fullWidth
                            disabled
                        >
                            Pocos puntos
                        </Button>
                        :
                        <Button
                            variant='contained'
                            color={'primary'}
                            size={'large'}
                            fullWidth
                        >
                            NIVEL 4
                        </Button>
                        }
                    </CardContent>
                </Card>
        </Stack>
            
        </Box>
    </>
  )
}

export default BaseTasks