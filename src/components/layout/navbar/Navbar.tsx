import React from 'react'
import { NavLink } from 'react-router-dom';

import { Box, Typography, Button, AppBar, Stack, Avatar } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

import Cookies from 'js-cookie';
import { useCookies } from 'react-cookie'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../../../context';
import { isLogout } from '../../../context/reduces/authLoginUser';
import { logoutSession } from '../../../context/reduces/authSessionUser';
import { blue, pink } from '@mui/material/colors';

const Navbar = () => {

  const [cookies, setCookie] = useCookies(['token']);

  const login = useSelector((state: RootState)=> state.validLogin.value)
  useSelector((state: RootState)=> state.SessionUser.value)
  const dispatch = useDispatch()

  const cerrarCession = ()=>{

    dispatch(logoutSession())
    dispatch(isLogout())
    setCookie('token', null)

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
                  margin={1}
                  display={'flex'}
                  alignItems={'center'}
                  >
                  <Typography color={'primary.light'} fontSize={'30px'}>Logo</Typography>

                  {
                    login
                    ?
                    null
                    :
                    <NavLink to={'/'}>
                        <Button
                          // size={'small'}
                          // variant='contained' 
                          // color='primary'
                          >
                            <HomeIcon
                              fontSize='large'
                              sx={{color: 'primary.light', bgcolor: 'primary',boxShadow: 2, borderRadius: 1}}
                              />
                        </Button>
                    </NavLink>
                    }

                </Box>

              <Box           
                width={'100%'}
                display={'flex'}
                justifyContent={'end'}
                alignItems={'center'}>
                
                <Stack direction={'row'} spacing={1} margin={1}>

                  {
                    login

                    ?
                    <>
                    <NavLink to={'/'}>
                      <Button
                      size={'small'}
                      variant='contained' 
                      color='primary'
                      onClick={cerrarCession}
                      > Logout
                      </Button>
                    </NavLink>
                    </>
                    :
                    <>
                      
                      <NavLink to={'/user/login'}>
                      <Button
                        size={'small'} 
                        variant='contained' 
                        color='primary'> Login 
                      </Button>
                      </NavLink>

                      <NavLink to={'/admin/login'}>
                        <Button
                        size={'small'}
                        variant='contained' 
                        color='primary'> Admin
                        </Button>
                      </NavLink>
                    </>
                  }

                  
                </Stack>
              </Box>

          </Box>

        </AppBar>
    </>
  )
}

export default Navbar