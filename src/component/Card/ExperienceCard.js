import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Box from '@mui/material/Box';
import '../Card/ExperienceCard.css'
import { MdArrowOutward } from "react-icons/md";
function ExperienceCard() {
  return (
    <Box className='test' sx={{
      mt: { xs: '2rem', md: '5rem' },
      ml: { xs: 0, md: '5rem' },
      p: { xs: '1rem', md: 0 },
      width: '100%',
      maxWidth: '720px'
    }}>
      <div>

        <Card className='button' sx={{ maxWidth: 720, backgroundColor: '#161312' }}>
          <CardActionArea>
            <CardMedia
              height="140"
              alt="Omnibound"
            />
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'grid', justifyContent: 'center', alignItems: 'center', margin: '1rem' }}>
                  <Typography sx={{
                    color: 'white', fontSize: '1.5rem', fontWeight: 700, '@media (max-width:765px)': {
                      fontSize: '3rem'
                    }
                  }}>
                    Omnibound  |  Remote
                  </Typography>
                  <Typography sx={{ color: '#998e8f', fontSize: '15px', fontWeight: 700, marginTop: '1rem' }}>
                    Frontend Developer
                  </Typography>
                  <Typography sx={{ color: '#998E8F', fontSize: '15px', fontWeight: 700, marginTop: '1rem' }}>
                    March 2025 – present
                  </Typography>
                </Box>
                <MdArrowOutward className='arrow1' />
              </Box>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card className='button' sx={{ maxWidth: 720, backgroundColor: '#161312' }}>
          <CardActionArea>
            <CardMedia
              height="140"
              alt="Times Internet"
            />
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>

                <Box sx={{ display: 'grid', justifyContent: 'center', alignItems: 'center', margin: '1rem' }}>


                  <Typography sx={{
                    color: 'white', fontSize: '1.5rem', fontWeight: 700, '@media (max-width:765px)': {
                      fontSize: '3rem'
                    }
                  }}>
                    Times Internet  |  Noida
                  </Typography>
                  <Typography sx={{ color: '#998e8f', fontSize: '15px', fontWeight: 700, marginTop: '1rem' }}>
                    UI Developer
                  </Typography>
                  <Typography sx={{ color: '#998E8F', fontSize: '15px', fontWeight: 700, marginTop: '1rem' }}>
                    Sep 2023 - Oct 2024
                  </Typography>
                </Box>

                <MdArrowOutward className='arrow1' />
              </Box>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className='button' sx={{ maxWidth: 720, backgroundColor: '#161312' }}>
          <CardActionArea>
            <CardMedia
              height="140"
              alt="Bucle Labs"
            />
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>

                <Box sx={{ display: 'grid', alignItems: 'center', margin: '1rem', justifyContent: 'space-between' }}>


                  <Typography sx={{
                    color: 'white', fontSize: '1.5rem', fontWeight: 700, '@media (max-width:765px)': {
                      fontSize: '3rem'
                    }
                  }}>
                    Bucle Labs Pvt Ltd  | Gurugram
                  </Typography>
                  <Typography sx={{ color: '#998e8f', fontSize: '15px', fontWeight: 700, marginTop: '1rem' }}>
                    Trainee Frontend Engineer
                  </Typography>
                  <Typography sx={{ color: '#998E8F', fontSize: '15px', fontWeight: 700, marginTop: '1rem' }}>
                    June 2022 - April 2023
                  </Typography>

                </Box>

                <MdArrowOutward className='arrow1' />
              </Box>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className='button' sx={{ maxWidth: 720, backgroundColor: '#161312' }}>
          <CardActionArea>
            <CardMedia
              height="140"
              alt="Myclick India"
            />
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>

                <Box sx={{ display: 'grid', justifyContent: 'center', alignItems: 'center', margin: '1rem' }}>


                  <Typography sx={{
                    color: 'white', fontSize: '1.5rem', fontWeight: 700, '@media (max-width:765px)': {
                      fontSize: '3rem'
                    }
                  }}>
                    Myclick India Pvt Ltd | Delhi
                  </Typography>
                  <Typography sx={{ color: '#998E8F', fontSize: '15px', fontWeight: 700, marginTop: '1rem' }}>
                    Web Developer Intern
                  </Typography>
                  <Typography sx={{ color: '#998E8F', fontSize: '15px', fontWeight: 700, marginTop: '1rem' }}>
                    Nov 2021 - April 2022
                  </Typography>
                </Box>

                <MdArrowOutward className='arrow1' />
              </Box>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </Box>
  )
}

export default ExperienceCard