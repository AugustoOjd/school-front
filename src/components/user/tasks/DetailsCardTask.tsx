
import React, {FC, useState} from 'react'
import { Box, Button, Card, CardContent, CardMedia, Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material'


interface Props {
    img:        string,
    question:   string,
    option1:    number, 
    option2:    number, 
    option3:    number, 
    option4:    number,
    event1:      ()=> void
    event2:      ()=> void
    event3:      ()=> void
    event4:      ()=> void
}



const DetailsCardTask:FC<Props> = ({img, question, option1, option2, option3, option4, event1, event2, event3, event4}) => {

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
                            component={'h3'}
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
                              image={img}
                              alt={img}
                            />
    
                        <CardContent sx={{ width: { xs: '100%', sm: '40%'}, height: {xs: '50%', sm: '100%'} }}>
                          <Typography
                            
                          >
                            {question}
                          </Typography>
                        <Box>
                                <Button
                                    onClick={()=> event1()}
                                    >
                                    {option1}
                                </Button> 
                                <Button
                                    onClick={()=> event2()}
                                >
                                    {option2}
                                </Button>

                                <Button
                                    onClick={()=> event3()}
                                >
                                    {option3}
                                </Button> 
                                <Button
                                    onClick={()=> event4()}
                                >
                                    {option4}
                                </Button>  
                            </Box>
                          
                        </CardContent>

                </Card>
            </Box>

        </Box>
    </>
  )
}

export default DetailsCardTask