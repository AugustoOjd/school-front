import { Box, Typography, Stack, Avatar, Divider, Grid } from '@mui/material'
import React, { useState, useEffect} from 'react'
import { instance } from '../../../api/axiosApi'


interface Countries {
    nombre:         string,
    bandera:        string,
    cantidad:       number
}

export const CardAnalytic= () => {

    const [loading, setLoading] = useState(true)
    const [countries, setcountries] = useState<Countries[]>([])
  
    useEffect(() => {
  
      instance.get('/admin/dashboard')
      .then((res) => {
        // handle success
  
        const datos = res.data.map((cou:any)=> cou.country)
  
        const {
          bolivia,
          argentina, 
          chile,
          colombia,
          mexico,
          peru,
          ecuador,
          uruguay,
          venezuela,
          paraguay,
          brasil
        } = datos.reduce((prev: any, cur: any) => ((prev[cur] = prev[cur] + 1 || 1), prev), {})
  
        const paises = []
        paises.push(
          {
            nombre:       'Argentina',
            bandera:      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/1200px-Flag_of_Argentina.svg.png',
            cantidad:     argentina || 0
          }, 
          {
            nombre:       'Brasil',
            bandera:      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/300px-Flag_of_Brazil.svg.png',
            cantidad:     brasil || 0
          },
          {
            nombre:       'Bolivia',
            bandera:      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Bandera_de_Bolivia_%28Estado%29.svg/264px-Bandera_de_Bolivia_%28Estado%29.svg.png',
            cantidad:     bolivia || 0
          },
          {
            nombre:       'Chile',
            bandera:      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Flag_of_Chile.svg/1200px-Flag_of_Chile.svg.png',
            cantidad:     chile || 0,
          },
          {
            nombre:       'Colombia',
            bandera:      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/1200px-Flag_of_Colombia.svg.png',
            cantidad:     colombia || 0
          },
          {
            nombre:       'Ecuador',
            bandera:      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Bandera_Del_Ecuador.jpg/1200px-Bandera_Del_Ecuador.jpg',
            cantidad:     ecuador || 0
          },
          {
            nombre:       'Mexico',
            bandera:      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/200px-Flag_of_Mexico.svg.png',
            cantidad:     mexico || 0
          },
          {
            nombre:       'Paraguay',
            bandera:      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag_of_Paraguay.svg/328px-Flag_of_Paraguay.svg.png',
            cantidad:     paraguay || 0
          },
          {
            nombre:       'Peru',
            bandera:      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Flag_of_Peru_%281825%E2%80%931884%29.svg/270px-Flag_of_Peru_%281825%E2%80%931884%29.svg.png',
            cantidad:     peru || 0
          },
          {
            nombre:       'Uruguay',
            bandera:      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/270px-Flag_of_Uruguay.svg.png',
            cantidad:     uruguay || 0
          },
          {
            nombre:       'Venezuela',
            bandera:      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Flag_of_Venezuela.svg/200px-Flag_of_Venezuela.svg.png',
            cantidad:     venezuela || 0
          },
          )
        // console.log({paises})
          
          
        setcountries(paises)
        setLoading(false)
      })
      .catch((error)=> {
        
        // handle error
        console.log(error);
        setLoading(true)
      })
  
    }, [loading])

    return (
    <>
        <Box
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            bgcolor={'primary.dark'}
            width={'80%'}
            height={'90%'}
            borderRadius={1}
            boxShadow={1}
        >
            <Box
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                bgcolor={'primary.light'}
                width={'95%'}
                height={'97%'}
                borderRadius={1}
            >
                <Grid
                    container
                    spacing={2}
                    width={'90%'}
                    height={'90%'}
                    // direction={'column'}
                    // spacing={1}
                >
                    {
                        loading
                        ?
                            <Box
                            display={'flex'}
                            justifyContent={'space-evenly'}
                            alignItems={'center'}
                            >
                                <Avatar 
                                    alt={'name'}
                                    src={'flag'} 
                                    // sx={{ width: 56, height: 56 }}
                                    />
                                <Typography
                                    color={'secondary.light'}
                                    fontSize={'18px'}
                                    >
                                    {'name'}
                                </Typography>
                                <Typography
                                    color={'secondary.light'}
                                    fontSize={'18px'}
                                    >
                                    {'quantity'}
                                </Typography>
                            </Box>
                        :
                            
                            countries.map((c:any, index: number)=>(

                                    <Grid item xs={12} sm={6} md={4}
                                      key={index.toString()}
                                      >
                                        <Box
                                        bgcolor={'white'}
                                        display={'flex'}
                                        justifyContent={'start'}
                                        alignItems={'center'}
                                        p={2}
                                        borderRadius={1}
                                        boxShadow={1}
                                        
                                        >
                                            <Avatar

                                                alt={c.nombre}
                                                src={c.bandera} 
                                                // sx={{ width: 56, height: 56 }}
                                                />
                                            <Typography
                                                color={'secondary.light'}
                                                fontSize={{xs: '18px', sm: '20px'}}
                                                px={2}
                                                >
                                                {c.nombre}: 
                                            </Typography>
                                            <Typography
                                                color={'secondary.light'}
                                                fontSize={'18px'}
                                                >
                                                {c.cantidad}
                                            </Typography>
                                        </Box>
                                    </Grid>
                                
                            // <Box
                            // display={'flex'}
                            // justifyContent={'space-between'}
                            // alignItems={'center'}
                            // >
                            //     <Avatar 
                            //         alt={c.nombre}
                            //         src={c.bandera} 
                            //         // sx={{ width: 56, height: 56 }}
                            //         />
                            //     <Typography
                            //         color={'secondary.light'}
                            //         fontSize={{xs: '18px', sm: '20px'}}
                            //         px={2}
                            //         >
                            //         {c.nombre}: 
                            //     </Typography>
                            //     <Typography
                            //         color={'secondary.light'}
                            //         fontSize={'18px'}
                            //         >
                            //         {c.cantidad}
                                
                            //     </Typography>
                            // </Box>
                            
                            ))
                    }
                </Grid>
            </Box>
        </Box>
    </>
  )
}
