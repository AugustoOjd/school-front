import { CardAnalytic } from './CardAnalytic'
import { Box, Typography } from '@mui/material'

const BaseAnalytics = () => {
  return (
    <>
        <Box
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          bgcolor={'primary.light'}
          width={'100%'}
          height={{xs: '1200px', sm: '650px'}}
        >
            <CardAnalytic />
        </Box>
    </>
  )
}

export default BaseAnalytics