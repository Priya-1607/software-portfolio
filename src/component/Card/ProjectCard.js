import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Box from '@mui/material/Box';
import { MdArrowOutward } from "react-icons/md";
import '../Card/Project.css'
import News from '../image/newa.png'
function ProjectCard() {
  return (
    <>
      <Box sx={{
        ml: { xs: 0, md: '5rem' },
        mt: { xs: '2rem', md: '5rem' },
        p: { xs: '1rem', md: 0 },
        width: '100%',
        maxWidth: '720px'
      }}>
        <Card className='button' sx={{ maxWidth: 720, backgroundColor: '#161312' }}>
          <CardActionArea>
            <CardMedia
              height="140"
              alt="AI Newsroom"
            />
            <CardContent>
              <Box sx={{ display: 'flex' }}>
                <Box
                  sx={{
                    width: 150,
                    height: 160,
                    borderRadius: 1,
                    bgcolor: '#8249cb',
                    '&:hover': {
                      bgcolor: '#8249cb',
                    },
                  }}
                >
                  <div className='imgdiv'>
                    <img src={News} className='img' alt="AI Newsroom" />

                  </div>
                </Box>
                <Box sx={{ display: 'grid', margin: '1rem' }}>


                  <Typography sx={{
                    color: 'white', fontSize: '2rem', fontWeight: 700, marginTop: '-1.2rem', '@media (max-width:765px)': {
                      fontSize: '3rem'
                    }
                  }}>
                    AI Newsroom
                  </Typography>
                  <Typography sx={{ color: '#C5FF41', fontSize: '15px', fontWeight: 700, marginTop: '1px' }}>
                    ReactJS, JavaScript, Tailwind CSS, Express, Node.js, MongoDB
                  </Typography>
                  <Typography sx={{ color: '#998E8F', fontSize: '15px', fontWeight: 700, marginTop: '1px', paddingTop: '5px' }}>
                    Multi-agent AI content platform that automatically reformats news articles for 5+ platforms.
                  </Typography>
                </Box>
                <a href="https://github.com/Priya-1607/news-website" target="_blank" rel="noopener noreferrer">
                  <MdArrowOutward className='arrow' />
                </a>

              </Box>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card className='button' sx={{ maxWidth: 720, backgroundColor: '#161312' }}>
          <CardActionArea>
            <CardMedia
              height="140"
              alt="Register Karo"
            />
            <CardContent>
              <Box sx={{ display: 'flex' }}>
                <Box
                  sx={{
                    width: 150,
                    height: 160,
                    borderRadius: 1,
                    bgcolor: '#8249cb',
                    '&:hover': {
                      bgcolor: '#8249cb',
                    },
                  }}
                >
                  <div className='imgdiv'>
                    <img src="https://media.licdn.com/dms/image/v2/C4E0BAQFP_oSKSARMrA/company-logo_200_200/company-logo_200_200/0/1633933254815?e=2147483647&v=beta&t=jgWloUdOMDA1DLR6e3zj81oT_4jreBDEY5Zm2WOnNnY" className='img' alt="Register Karo" />

                  </div>
                </Box>
                <Box sx={{ display: 'grid', margin: '1rem' }}>


                  <Typography sx={{
                    color: 'white', fontSize: '2rem', fontWeight: 700, marginTop: '-1.2rem', '@media (max-width:765px)': {
                      fontSize: '3rem'
                    }
                  }}>
                    Register Karo
                  </Typography>
                  <Typography sx={{ color: '#C5FF41', fontSize: '15px', fontWeight: 700, marginTop: '1px' }}>
                    ReactJS, Bootstrap
                  </Typography>
                  <Typography sx={{ color: '#998E8F', fontSize: '15px', fontWeight: 700, marginTop: '1px', paddingTop: '5px' }}>
                    Business compliance platform for registrations, tax filings, and legal workflows.
                  </Typography>
                </Box>
                <a href="https://www.registerkaro.in/" target="_blank" rel="noopener noreferrer">
                  <MdArrowOutward className='arrow' />
                </a>

              </Box>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </>
  )
}

export default ProjectCard