import { Box, Typography } from '@mui/material'
import React, {useEffect} from 'react'
import { instance } from '../../../api/axiosApi'

const BaseStatus = () => {

  useEffect(() => {

    instance.get('/admin/dashboard')
    .then((res) => {
      // handle success
      console.log(res.data);


    })
    .catch((error)=> {
      
      // handle error
      console.log(error);
    })

  }, [])
  

  return (
    <>
        <Box
            bgcolor={'gray'}
            width={'100%'}
            height={'300px'}
        >
            <Typography fontSize={'20px'}>Base Status</Typography>
        </Box>
    </>
  )
}

export default BaseStatus