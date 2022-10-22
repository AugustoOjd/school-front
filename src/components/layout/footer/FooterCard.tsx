import { Box, Button, Link, Stack, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArticleIcon from '@mui/icons-material/Article';


const FooterCard = () => {
  return (
    <>
        <Box
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            bgcolor={'primary.light'}
            width={{xs: '90%', lg: '70%'}}
            height={'70%'}
            borderRadius={1}
        >
            <Stack
                direction={'row'}
                spacing={{xs: 3, sm: 6, md: 10,  lg: 15}}
            >
                <Link href="https://www.linkedin.com/in/augustoojedafrontend/" underline="none">
                    <Button 
                        variant="contained"
                        startIcon={<LinkedInIcon />}
                        size={'large'}
                        >
                      <Typography
                        display={{xs: 'none', sm: 'flex'}}
                        variant='button'
                      >
                        Linkedin
                      </Typography>
                    </Button>
                </Link>

                <Link href="https://github.com/AugustoOjd" underline="none">
                    <Button 
                        variant="contained" 
                        startIcon={<GitHubIcon />}
                        size={'large'}
                        >
                        <Typography
                        display={{xs: 'none', sm: 'flex'}}
                        variant='button'
                      >
                        Github
                      </Typography>
                    </Button>
                </Link>

                
                <Link href="https://www.canva.com/design/DAEqZSVL3Xc/JGhJO-AN0G8zcR6rMnAgBg/view?utm_content=DAEqZSVL3Xc&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" underline="none">
                    <Button 
                        variant="contained" 
                        startIcon={<ArticleIcon />}
                        size={'large'}
                        >
                        <Typography
                        display={{xs: 'none', sm: 'flex'}}
                        variant='button'
                        >
                        C-Vitae
                      </Typography>
                    </Button>
                </Link>

            </Stack>
        </Box>
    </>
  )
}

export default FooterCard