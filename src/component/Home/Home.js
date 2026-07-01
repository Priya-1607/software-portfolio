import React from 'react'
import { Grid, Box, Typography, Button } from '@mui/material';
import './home.css'
import Project from '../Project/Project';
import Experience from '../Experience/Experience';
import PremiumTools from '../Preium/PremiumTools';
import Thoughts from '../Thoughts/Thoughts';
import Contact from '../Contact/Contact';

import { FaDownload } from "react-icons/fa";

function Home() {
  // ...
  return (
    <Box className="main-home-wrapper" sx={{ width: '100%', color: 'white' }}>
      <Box className="content-section" sx={{ width: '100%' }}>

        {/* Hero Section */}
        <Box sx={{
          mt: { xs: '2rem', md: '5rem' },
          p: { xs: 2, md: 0 },
          textAlign: { xs: 'center', md: 'left' },
          position: 'relative'
        }}>
          <Typography variant="h1" className='soft' sx={{
            color: 'white',
            fontWeight: 800,
            fontSize: { xs: '3rem', md: '5rem' },
            lineHeight: 1.1,
            zIndex: 2,
            position: 'relative'
          }}>
            SOFTWARE ENGINEER
          </Typography>

          <Typography variant="h1" sx={{
            color: 'transparent',
            WebkitTextStroke: '1px #353334',
            fontWeight: 800,
            fontSize: { xs: '4rem', md: '10rem' },
            lineHeight: 1,
            mt: -2,
            opacity: 0.5,
            zIndex: 1,
            userSelect: 'none',
            pointerEvents: 'none',
            maxWidth: '100%',
            overflow: 'hidden'
          }}>
            SOFTWARE
          </Typography>

          <Typography className="paraw" variant="body2" sx={{
            color: '#998f8f',
            fontSize: { xs: '1rem', md: '1.2rem' },
            mt: 2,
            maxWidth: '600px',
            mx: { xs: 'auto', md: 0 }
          }}>
            Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into beautifully crafted products.
          </Typography>

          <Box sx={{ mt: 4, display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' } }}>
            <Button
              variant="contained"
              startIcon={<FaDownload />}
              href="/resume.pdf" // Placeholder path
              download="Priya_Singh_Resume.pdf"
              sx={{
                backgroundColor: '#F36C38',
                color: 'white',
                fontWeight: 600,
                borderRadius: '8px',
                px: 3,
                py: 1.5,
                '&:hover': {
                  backgroundColor: '#d35a2d'
                }
              }}
            >
              Download Resume
            </Button>
          </Box>
        </Box>

        {/* Highlight Section */}
        <Box sx={{
          mt: 8,
          p: { xs: 2, md: 0 },
          ml: { xs: 0, md: '2rem' },
          textAlign: { xs: 'center', md: 'left' }
        }}>
          <Typography variant="h1" sx={{ color: 'white', fontWeight: 800, fontSize: { xs: '3rem', md: '5rem' } }}>
            PASSIONATE
          </Typography>
          <Typography variant="h1" sx={{ color: '#353334', fontWeight: 800, fontSize: { xs: '3rem', md: '5rem' } }}>
            DEVELOPER
          </Typography>
        </Box>

        {/* Stats Section */}
        <Box className="container" sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 4,
          mt: 8,
          justifyContent: { xs: 'center', md: 'flex-start' }
        }}>
          <Box className="item" sx={{ textAlign: 'center' }}>
            <Typography variant='h2' sx={{ color: 'white', fontWeight: 600 }}>+3</Typography>
            <Typography sx={{ color: '#998f8f' }}>YEARS OF<br />EXPERIENCE</Typography>
          </Box>
          <Box className="item" sx={{ textAlign: 'center' }}>
            <Typography variant='h2' sx={{ color: 'white', fontWeight: 600 }}>+15</Typography>
            <Typography sx={{ color: '#998f8f' }}>PROJECTS<br />COMPLETED</Typography>
          </Box>
          <Box className="item" sx={{ textAlign: 'center' }}>
            <Typography variant='h2' sx={{ color: 'white', fontWeight: 600 }}>+10</Typography>
            <Typography sx={{ color: '#998f8f' }}>AI AGENTS<br />DEVELOPED</Typography>
          </Box>
        </Box>

        {/* Education Grid */}
        <Box sx={{ mt: 8, p: { xs: 2, md: 0 } }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box className="org-box" sx={{
                backgroundColor: '#F46C39',
                height: "auto",
                minHeight: "12rem",
                borderRadius: '15px',
                p: 3,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
              }}>
                <Typography sx={{ fontSize: '1.5rem', fontWeight: 700, color: 'white', textAlign: 'center' }}>
                  B-Tech (ECE)
                </Typography>
                <Typography sx={{ fontSize: '1.1rem', color: 'white', textAlign: 'center', mt: 1 }}>
                  World College of Technology and Management, Haryana
                </Typography>
                <Typography sx={{ fontSize: '1.1rem', fontWeight: 600, color: 'white', mt: 1 }}>
                  2019 – 2022
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box className="green-box" sx={{
                backgroundColor: '#c5ff41',
                height: "auto",
                minHeight: "12rem",
                borderRadius: '15px',
                p: 3,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
              }}>
                <Typography sx={{ fontSize: '1.5rem', fontWeight: 700, color: 'black', textAlign: 'center' }}>
                  12th CBSE
                </Typography>
                <Typography sx={{ fontSize: '1.1rem', color: 'black', textAlign: 'center', mt: 1 }}>
                  Govt-Co Ed Sr Sec School site 2, Delhi
                </Typography>
                <Typography sx={{ fontSize: '1.1rem', fontWeight: 600, color: 'black', mt: 1 }}>
                  2017 – 2018
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Embedded Sections */}
        <Project />
        <Experience />
        <PremiumTools />
        <Thoughts />
        <Contact />

      </Box>
    </Box>
  );
}

export default Home;