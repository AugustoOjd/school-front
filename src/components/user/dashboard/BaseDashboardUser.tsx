
import React from 'react'
import { useAppSelector, useAppDispatch } from '../../../hooks/redux'
import { Box } from '@mui/material'
import CardDashboardUser from './CardDashboardUser'

const BaseDashboardUser = () => {

    const session = useAppSelector((state) => state.SessionUser.value)

  return (
    <>
        <Box 
            bgcolor={'darkcyan'} 
            height={'500px'}
            paddingY={6}
            width={'100%'}
            >
            {
                session.map((e)=> (
                    <CardDashboardUser  iniciales={(e.name.charAt(0).toUpperCase() + e.lastName.charAt(0).toUpperCase())} 
                                        nombre={(e.name.charAt(0).toUpperCase()) + e.name.slice(1)} 
                                        apellido={(e.lastName.charAt(0).toUpperCase()) + e.lastName.slice(1)} 
                                        puntos={e.point}/>
                ))
            }
        </Box>
    </>
  )
}

export default BaseDashboardUser