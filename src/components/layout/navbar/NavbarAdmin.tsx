import { AppBar, Box, Typography, Stack, Button } from '@mui/material'
import { orange } from '@mui/material/colors';
import React, {useEffect, useState} from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../context/store/store';
import { authSessionA, logoutSessionA } from '../../../context/reduces/authSessionAdmin';
import Cookies from 'js-cookie';

const NavbarAdmin = () => {

  const [loading, setLoading] = useState(true)
  const sessionA = useSelector((state: RootState) => state.SessionAdmin.value)

  const dispatch = useDispatch()
  const navigate = useNavigate()


  useEffect(() => {
    const admin = Cookies.get('admin')
      
    const data = JSON.parse(admin!)
    // console.log(data)

    if(sessionA.length <= 0){
      dispatch(logoutSessionA())
      dispatch(authSessionA(data))
      setLoading(false)
    }
    
    
    // console.log(sessionA)
    setLoading(false)
  }, [sessionA])
  

  const cerrarCession = () =>{
      dispatch(logoutSessionA())
      Cookies.remove('token')
      Cookies.remove('admin')
      navigate('/')
      window.scrollTo( 0, 0)
  }

  return (
    <>
        <AppBar position='sticky'>

        <Box
          display={'flex'}
          alignItems={'center'}
          bgcolor={'secondary.dark'} 
          width={'100%'} 
          height={'75px'}
          >
        
              <Box
              display={'flex'}
              alignItems={'center'}
              margin={1}
              >
                <Typography 
                      component={'h1'}
                      fontStyle={'italic'}
                      fontSize={{xs: '30px', sm: '40px', md: '45px', lg: '50px'}}
                      color={orange[400]}
                      fontWeight={'bold'}
                      >U</Typography>
                  <Typography 
                      component={'h2'}
                      fontStyle={'italic'}
                      fontSize={{xs: '30px', sm: '40px', md: '45px', lg: '50px'}}
                      color={'primary.dark'}
                      fontWeight={'bold'}
                    >C</Typography>
                </Box>
        
            <Box           
              width={'100%'}
              display={'flex'}
              justifyContent={'end'}
              alignItems={'center'}>
            
              <Stack 
                direction={'row'} 
                spacing={2} 
                margin={1}
                >
                
                <Box
                  display={'flex'}
                  justifyContent={'center'}
                  alignItems={'center'}
                  borderRadius={1}
                  boxShadow={2}
                  p={1}
                >
                  {
                    loading
                    ?
                      <Typography
                        color={'primary.light'}
                        fontSize={{xs: '11px', sm: '14px', md: '16px'}}
                        >
                      Nombre
                      </Typography>
                  :
                    sessionA.map((n:any)=> (
                    <Typography
                      key={n.id}
                      color={'primary.light'}
                      fontSize={{xs: '11px', sm: '14px', md: '16px'}}
                      >
                      {n.name.toUpperCase() + ' ' + n.lastName.toUpperCase()}
                    </Typography>

                    ))}
                </Box>

                <Box
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    <Button 
                      variant='contained'
                      size='small'
                      color='primary'
                      onClick={cerrarCession}
                      > 
                        Logout 
                    </Button>
                </Box>
              </Stack>
            </Box>
        
        </Box>
        
        </AppBar>
    </>
  )
}

export default NavbarAdmin