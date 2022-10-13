import { Box, Typography } from '@mui/material'
import React, {useEffect, useState} from 'react'
import { instance } from '../../../api/axiosApi'
import CardStatus from './CardStatus'

const BaseStatus = () => {

  const [loading, setLoading] = useState(true)
  const [activos, setactivos] = useState(0)
  const [inactivos, setInactivos] = useState(0)

  useEffect(() => {

    instance.get('/admin/dashboard')
    .then((res) => {
      // handle success

      const data = res.data.map((user:any) => (user.state))
      
      const suma = data.reduce((prev: any, cur: any) => ((prev[cur] = prev[cur] + 1 || 1), prev), {})
      
      setactivos(suma.true)
      setInactivos(suma.false)
      // console.log({suma})    

      setLoading(false)
    })
    .catch((error)=> {
      
      // handle error
      console.log(error);
      setLoading(true)
    })

  }, [])


  return (
    <>
        <Box
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            bgcolor={'primary.light'}
            width={'100%'}
            height={'250px'}
        >
            {
              loading
              ?
              <CardStatus activos={0} inactivos={0}/>
              :
              <CardStatus activos={activos} inactivos={inactivos}/>
            }
        </Box>
    </>
  )
}

export default BaseStatus