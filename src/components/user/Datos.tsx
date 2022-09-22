import { Box, Typography } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import type { RootState } from '../../context';
import { useAppSelector, useAppDispatch } from '../../hooks/redux'


const Datos = () => {

    
    // const session = useAppSelector((state) => state.SessionUser.value)
    // console.log(session)

  return (
    <>  
        {/* <Box bgcolor={'darkcyan'} height={'300px'}>
            {
                session.map( (e)=>(
                    <>
                    <Typography fontSize={10} color={'white'}>{e.name}</Typography>
                    <Typography fontSize={10} color={'white'}>{e.lastName}</Typography>
                    <Typography fontSize={10} color={'white'}>{e.email}</Typography>
                    <Typography fontSize={10} color={'white'}>{e.point}</Typography>
                    </>
                ))
            }
        </Box> */}
    </>
  )
}

export default Datos