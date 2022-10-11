
import React, {useEffect, useState} from 'react'
import { useAppSelector, useAppDispatch } from '../../../hooks/redux'
import { Box } from '@mui/material'
import CardDashboardUser from './CardDashboardUser'
import { useDispatch } from 'react-redux'
import Cookies from 'js-cookie'
import { authSession } from '../../../context/reduces/authSessionUser'
import { isLogin } from '../../../context/reduces/authLoginUser'
import { RootState } from '../../../context'

const BaseDashboardUser = () => {

    const [loading, setLoading] = useState(true)

    const session = useAppSelector((state: RootState) => state.SessionUser.value)

    const dispatch = useDispatch()


    useEffect(() => {
  
      const user = Cookies.get('user')
      
      const data = JSON.parse(user!)
      
      // if(session){
      //   return setLoading(true)
      // }

      if(session.length === 0){
        // dispatch(authSession(data))
        // dispatch(isLogin())
        setLoading(true)
      }

      setLoading(false)
      //   dispatch(authSession(data))
      //   dispatch(isLogin())
      //   setLoading(true)
      
        // dispatch(authSession(data))
        // dispatch(isLogin())
        // setLoading(true)
      
      console.log(data)
      
    }, [])

  return (
    <>

        {
          loading
          ?
          <Box 
              bgcolor={'secondary.dark'} 
              height={{xs: '600px', sm: '470px', lg: '500px'}}
              width={'100%'}
              >
              {
                  session.map((e)=> (
                      <CardDashboardUser  
                        iniciales={(e.name.charAt(0).toUpperCase() + e.lastName.charAt(0).toUpperCase())} 
                        nombre={(e.name.charAt(0).toUpperCase()) + e.name.slice(1)} 
                        apellido={(e.lastName.charAt(0).toUpperCase()) + e.lastName.slice(1)} 
                        puntos={e.point}
                        key={e.id}
                        />
                  ))
              }
          </Box>
          :
          <Box 
          bgcolor={'secondary.dark'} 
          height={{xs: '600px', sm: '470px', lg: '500px'}}
          width={'100%'}
          >
          {
              // session.map((e)=> (
                  <CardDashboardUser  iniciales={'&&'} 
                                      nombre={'Nombre'} 
                                      apellido={'Apellido'} 
                                      puntos={0}
                                      key={'id'}
                                      />
              // ))
          }
      </Box>
        }

    </>
  )
}

export default BaseDashboardUser