
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


    useEffect(() => {
        
        instance.get( '/student/dashboard')
        .then(function (response) {
          // handle success
            setUsers(response.data)
          console.log(response);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
      
    

    }, [])
    



  return (
    <>
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
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
    </>
  )
}

export default TableRank