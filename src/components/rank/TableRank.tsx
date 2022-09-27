
import React, {useEffect, useState} from 'react'
import { Box, Stack, Typography } from '@mui/material'
import axios from 'axios';
import cookieClient from 'react-cookie'
import { instance } from '../../api/axiosApi';


// const pointsURL = 'http://localhost:8080/api/student/dashboard'

type Data = {
    name: string,
    point: number
}

const TableRank = () => {

    const [users, setUsers] = useState<Data[]>()
    const [controlError, setControlError] = useState(false)


    useEffect(() => {
        
        instance.get( '/student/dashboard')
        .then((res) => {
          // handle success

          const orderUsers = (res.data).sort((a:any, b:any) => b.point - a.point)
          const orderCompleted = orderUsers.slice(0, 5)

            setUsers(orderCompleted)
          // console.log(res.data);
        })
        .catch((error)=> {

            setControlError(true)
          
          // handle error
          // console.log(error);
        })
      
    

    }, [])
    

    // const orderUsers = (users.point).sort((a: any, b: any) => a - b)



  return (
    <>
        {
          controlError

          ?
            <Box 
            display={'flex'} 
            flexDirection={'column'}
            justifyContent={'center'} 
            alignItems={'center'}
            mt={2}
            >
              <Typography color={'black'} fontSize={'30px'}> No podemos mostrar el ranking en este momento </Typography>

            </Box>
          :
            <Box 
              display={'flex'} 
              flexDirection={'column'} 
              alignItems={'center'}
              mt={2}
              >
                <Typography color={'black'} fontSize={'30px'}> Rank de puntos </Typography>
                <Stack direction={'column'}>
                    {
                        users?.map( (user)=> (
                        <Typography fontSize={'20px'} key={user.name}>
                            {`${user.name.toUpperCase()} - ${user.point}`}
                        </Typography>
                        ))
                        
                    }
                </Stack>
            </Box>
        
        }
    </>
  )
}

export default TableRank