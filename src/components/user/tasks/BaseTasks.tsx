import React, {useState, useEffect} from 'react'
import { Box, Button, Card, CardContent, CardMedia, Stack, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { green, orange } from '@mui/material/colors';

// Redux
import { useSelector } from 'react-redux'
import { RootState } from '../../../context/store/store';


const BaseTasks = () => {

    const session = useSelector((state: RootState) => state.SessionUser.value)

    const [user, setUser] = useState(0)

    const data = session.map(e=> e.nivel)
    const _id = session.map(e=> e.id)

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
            width={{ xs: '80%', md: '60%'}}
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
                      sx={{objectFit: 'fill'}}
                      component="img"
                      height="140"
                      image="https://png.pngtree.com/thumb_back/fh260/background/20190220/ourmid/pngtree-cartoon-education-training-cram-school-image_9149.jpg"
                      alt="nivel 1"
                    />
                    <CardContent>
                        {
                            user > 0
                            ?
                            <Button
                                variant='contained'
                                color={'primary'}
                                size={'large'}
                                fullWidth 
                                disabled
                            >
                                Completado
                            </Button>
                            :
                            <NavLink to={`/user/${_id[0]}/nivel1`}>
                            <Button
                                variant='contained'
                                color={'primary'}
                                size={'large'}
                                fullWidth 
                            >
                                Nivel 1
                            </Button>
                        </NavLink>}
                    </CardContent>
                </Card>

                <Card
                    sx={{backgroundColor: green[100]}}
                    >
                    <CardMedia
                      sx={{objectFit: 'fill'}}
                      component="img"
                      height="140"
                      image="https://png.pngtree.com/thumb_back/fh260/background/20190221/ourmid/pngtree-school-season-back-to-school-season-blue-cartoon-image_11842.jpg"
                      alt="nivel 2"
                    />
                    <CardContent>
                        {
                        user < 1 || user > 1
                        ?

                        <Button
                            variant='contained'
                            color={'primary'}
                            size={'large'}
                            fullWidth
                            disabled
                        >
                            {user > 1 ? 'Completado' : 'Faltan puntos nv2'}
                        </Button>
                        
                        :

                        <NavLink to={`/user/${_id[0]}/nivel2`}>
                            <Button
                                variant='contained'
                                color={'primary'}
                                size={'large'}
                                fullWidth
                            >
                                NIVEL 2
                            </Button>
                        </NavLink>
                        }
                    </CardContent>
                </Card>

                <Card
                    sx={{backgroundColor: green[100]}}
                    >
                    <CardMedia
                      sx={{objectFit: 'fill'}}
                      component="img"
                      height="140"
                      image="https://img.freepik.com/premium-vector/travel-around-world-banner_24797-1115.jpg"
                      alt="nivel 3"
                    />
                    <CardContent>
                    {
                        user < 2 || user > 2
                        ?
                        
                        <Button
                            variant='contained'
                            color={'primary'}
                            size={'large'}
                            fullWidth
                            disabled
                        >
                            {user > 2 ? 'Completado' : 'Faltan puntos nv3'}
                        </Button>
                        :
                        <NavLink to={`/user/${_id[0]}/nivel3`}>
                            <Button
                                variant='contained'
                                color={'primary'}
                                size={'large'}
                                fullWidth
                                onClick={()=> window.scroll(0, 1000)}
                            >
                                NIVEL 3
                            </Button>
                        </NavLink>
                        }
                    </CardContent>
                </Card>

                <Card
                    sx={{backgroundColor: green[100]}}
                    >
                    <CardMedia
                      sx={{objectFit: 'fill'}}
                      component="img"
                      height="140"
                      image="https://png.pngtree.com/thumb_back/fh260/back_our/20190625/ourmid/pngtree-bloody-youth-may-fourth-youth-festival-poster-banner-image_260820.jpg"
                      alt="nivel 4"
                    />
                    <CardContent>
                    {
                        user < 3 || user > 3
                        ?
                        <Button
                            variant='contained'
                            color={'primary'}
                            size={'large'}
                            fullWidth
                            disabled
                        >
                            {user > 3 ? 'Completado' : 'Faltan puntos nv4'}
                        </Button>
                        :
                        <NavLink to={`/user/${_id[0]}/nivel4`}>
                            <Button
                                variant='contained'
                                color={'primary'}
                                size={'large'}
                                fullWidth
                                onClick={()=> window.scroll(0, 1000)}
                            >
                                NIVEL 4
                            </Button>
                        </NavLink>
                        }
                    </CardContent>
                </Card>
        </Stack>
            
        </Box>
    </>
  )
}

export default BaseTasks