
import React, {useEffect, useState} from 'react'
import { Box, Stack, Typography, Divider } from '@mui/material'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import Skeleton from '@mui/material/Skeleton';
import axios from 'axios';
import cookieClient from 'react-cookie'
import { instance } from '../../api/axiosApi';
import { green } from '@mui/material/colors';
import BackupTableIcon from '@mui/icons-material/BackupTable';


// const pointsURL = 'http://localhost:8080/api/student/dashboard'

type Data = {
    name: string,
    point: number
}

const TableRank = () => {

    const [users, setUsers] = useState<Data[]>()
    const [controlError, setControlError] = useState(false)
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        
        instance.get( '/student/dashboard')
        .then((res) => {
          // handle success
          // console.log(res.data);
          const orderUsers = (res.data).sort((a:any, b:any) => b.point - a.point)
          const orderCompleted = orderUsers.slice(0, 5)

            setUsers(orderCompleted)
            setLoading(false)

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
              <Typography 
                color={'black'} 
                fontSize={'30px'}> No podemos mostrar el ranking en este momento </Typography>

            </Box>
          :
            <Box
              
              display={'flex'} 
              flexDirection={'column'} 
              alignItems={'center'}
              width={'100%'}

              >
                <Box
                    bgcolor={'secondary.dark'}
                    borderRadius={3}
                    p={0.5}
                    width={'90%'}
                    mb={2}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                  <Typography
                    color={'white'} 
                    fontSize={{xs: '30px', md: '40px'}}
                    fontWeight={'bold'}
                    // paddingBottom={3}
                    // textAlign={'center'}
                    > 
                    Rank de puntos 
                    </Typography>

                </Box>
                <Stack
                bgcolor={'white'}
                padding={2}
                borderRadius={3}
                boxShadow={1}

                spacing={1}
                direction={'column'}
                width={{xs: '85%', md: '60%'}}
                >
                  {
                    loading
                    ?
                    <>
                     <Box >
                        <Skeleton />
                        <Skeleton animation="wave" />
                        <Skeleton animation={false} />
                        <Skeleton animation="wave" />
                        <Skeleton animation={false} />
                        <Skeleton animation="wave" />
                        <Skeleton animation={false} />
                      </Box>
                    </>
                    :
                    <>
                      <Box
                          display={'flex'}
                          justifyContent={'space-between'}
                          alignItems={'center'}
                          paddingX={2}
                          bgcolor={'gold'}
                          borderRadius={2}
                          height={'40px'}
                      >
                        <Typography
                          fontSize={{xs: '18px', md: '20px'}} 
                          color={'secondary.light'}
                          >
                            {`${users![0].name.toUpperCase().slice(0,7)}: ${users![0].point}`}
                        </Typography>
                        <WorkspacePremiumIcon/>
                      </Box>
                      <Divider/>
                      <Box
                          display={'flex'}
                          justifyContent={'space-between'}
                          alignItems={'center'}
                          paddingX={2}
                          bgcolor={'orange'}
                          borderRadius={2}
                          height={'40px'}
                          width={'79%'}
                      >
                        <Typography
                          fontSize={{xs: '18px', md: '20px'}}
                          color={'secondary.light'}
                          >
                            {`${users![1].name.toUpperCase().slice(0,7)}: ${users![1].point}`}
                        </Typography>
                        <Typography
                          fontSize={{xs: '18px', md: '20px'}}
                        > 2ND</Typography>
                      </Box>
                      <Divider/>
                      <Box
                          display={'flex'}
                          justifyContent={'space-between'}
                          alignItems={'center'}
                          paddingX={2}
                          bgcolor={green[400]}
                          borderRadius={2}
                          height={'40px'}
                          width={'66%'}
                          >
                        <Typography
                          fontSize={{xs: '18px', md: '20px'}}
                          color={'secondary.light'}
                          >
                            {`${users![2].name.toUpperCase().slice(0,7)}: ${users![2].point}`}
                        </Typography>
                        <Typography
                          fontSize={{xs: '18px', md: '20px'}}
                        > 3RD</Typography>
                      </Box>
                      <Divider/>
                      <Box
                          display={'flex'}
                          justifyContent={'space-between'}
                          alignItems={'center'}
                          paddingX={2}
                          bgcolor={green[200]}
                          borderRadius={2}
                          height={'40px'}
                          width={'55%'}                      
                      >
                        <Typography
                          fontSize={{xs: '18px', md: '20px'}}
                          color={'secondary.light'}
                          >
                            {`${users![3].name.toUpperCase().slice(0,7)}: ${users![3].point}`}
                        </Typography>
                      </Box>
                      <Divider/>
                      <Box
                          display={'flex'}
                          justifyContent={'space-between'}
                          alignItems={'center'}
                          paddingX={2}
                          bgcolor={green[100]}
                          borderRadius={2}
                          height={'40px'}
                          width={'45%'}
                      >
                        <Typography
                          fontFamily={'sans-serif'}
                          fontSize={{xs: '18px', md: '20px'}}
                          color={'secondary.light'}
                          >
                            {`${users![4].name.toUpperCase().slice(0,7)}: ${users![4].point}`}
                        </Typography>
                      </Box>
                    </>
                  }
                </Stack>
            </Box>
        
        }
    </>
  )
}

export default TableRank