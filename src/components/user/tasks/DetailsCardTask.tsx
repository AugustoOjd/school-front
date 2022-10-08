
import React, {FC} from 'react'
import { Box, Button, Card, CardContent, CardMedia, Stack, Typography } from '@mui/material'

// Redux
import { useSelector } from 'react-redux'
import { RootState } from '../../../context'
import { returnDashboard } from '../../../utils/returnDashboard'
import { NavLink } from 'react-router-dom'


interface Props {
    nivel?:       string,
    img?:        string,
    question?:   string,
    option1?:    string, 
    option2?:    string, 
    option3?:    string, 
    option4?:    string,
    event1:      ()=> void
    event2:      ()=> void
    event3:      ()=> void
    event4:      ()=> void
}
// 
// 

const DetailsCardTask:FC<Props> = ({
        nivel,
        img, 
        question, 
        option1, 
        option2, 
        option3, 
        option4, 
        event1, 
        event2, 
        event3, 
        event4 }) => {


    const session = useSelector((state: RootState) => state.SessionUser.value)
    const _id = session.map(e=> e.id)

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
                height={'80%'}
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
                            {nivel}
                        </Typography>
                    </Box>
                    <NavLink
                        to={`/user/${_id}`}
                    >
                        <Button
                            size='small'
                            variant='contained'
                        >X
                        </Button>
                    </NavLink>
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
    
                        <CardContent sx={{ width: { xs: 'auto', sm: 'auto'}, height: {xs: 'auto', sm: 'auto'} }}>
                            
                            <Stack
                                width={'100%'}
                                height={'100%'}
                                direction={'column'}
                                spacing={2}
                                >
                                <Box
                                    width={'100%'}
                                    height={'50%'}
                                    bgcolor='red'
                                >
                                    <Typography
                                        textAlign={'center'}
                                        >
                                          {question}
                                        </Typography>
                                </Box>
                                <Stack
                                    direction={'column'}
                                    spacing={{xs: 1, sm: 2}}
                                >
                                      <Button
                                          variant='contained'
                                          size='small'
                                          onClick={()=> event1()}
                                          >
                                          {option1}
                                      </Button> 
                                      <Button
                                          variant='contained'
                                          size='small'
                                          onClick={()=> event2()}
                                      >
                                          {option2}
                                      </Button>
    
                                      <Button
                                          variant='contained'
                                          size='small'
                                          onClick={()=> event3()}
                                      >
                                          {option3}
                                      </Button> 
                                      <Button
                                          variant='contained'
                                          size='small'
                                          onClick={()=> event4()}
                                      >
                                          {option4}
                                      </Button>  
                                </Stack>

                            </Stack>

                          
                        </CardContent>

                </Card>
            </Box>

        </Box>
    </>
  )
}

export default DetailsCardTask