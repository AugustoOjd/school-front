import { Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const DetailsCardTask = () => {
  return (
    <>
        <Box
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            height={'100%'}
            width={'100%'}
        >
            <Box
                bgcolor={'primary.dark'}
                borderRadius={2}
                boxShadow={2}
                height={'70%'}
                width={'80%'}
                p={1}
            >
                <Box
                    display={'flex'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                    height={'15%'}
                    width={'100%'}
                    >
                    <Box
                        bgcolor={'secondary.dark'}
                        p={1}
                        borderRadius={2}
                        boxShadow={2}
                        width={'30%'}
                    >
                        <Typography
                            color={'white'}
                            fontSize={'15px'}
                        >
                            N I V E L 1
                        </Typography>
                    </Box>
                    <Button
                        size='small'
                        variant='contained'
                    >X
                    </Button>
                </Box>
                <Card
                    sx={{display: 'flex', height: '85%', width: '100%', flexDirection: {xs: 'column', sm: 'row'}}}
                >

                    <CardMedia
                          component="img"
                          sx={{ width: { xs: '100%', sm: '60%'}, height: {xs: '50%', sm: '100%'}, objectFit: 'fill' }}
                          image="https://www.enter.co/wp-content/uploads/2021/07/Aliens-Newt-Ripley.jpeg"
                          alt="Ripley"
                        />

                    <CardContent sx={{ flex: '1 0 auto', width: { xs: '100%', sm: '40%'}, height: {xs: '50%', sm: '100%'} }}>
                      <Typography component="div" variant="h5">
                        Live From Space
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary" component="div">
                        Mac Miller
                      </Typography>
                    </CardContent>
                </Card>
            </Box>

        </Box>
    </>
  )
}

export default DetailsCardTask