import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SiHackerrank } from "react-icons/si";

import Me from '../image/priya.png'

export default function BasicCard() {
  function handleClick() {
    alert("Dwarka More\n " +
      "New Delhi")
  }


  return (

    <Card sx={{
      height: { xs: 'auto', md: 'auto' },
      maxHeight: { md: '90vh' },
      borderRadius: '20px',
      width: '100%',
      maxWidth: { xs: '100%', md: '22rem' },
      m: '0 auto',
      overflow: 'auto',
      bgcolor: 'white',
      boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
      p: { xs: 1, md: 2 }
    }}>
      <CardContent sx={{ p: { xs: 1, md: 2 } }}>
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          textAlign: 'center',
        }}>
          <img className='yree' src={Me} alt="Priya Singh" style={{ maxWidth: '100%', height: 'auto', borderRadius: '15px' }} />
        </Box>
      </CardContent>
      <CardActions sx={{
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        flexDirection: 'column'
      }}>
        <Typography variant="h4" sx={{ color: 'black', fontWeight: 1000, fontSize: { xs: '1.5rem', md: '2.125rem' } }}>
          PRIYA SINGH
        </Typography>
        <Typography className='software' sx={{
          color: '#6A6B6E',
          mt: { xs: 2, md: 8 },
          fontWeight: 600,
          fontSize: { xs: '0.9rem', md: '1rem' }
        }}>
          A Frontend Developer and Software Engineer who has developed countless innovative solutions.
        </Typography>
        <Box sx={{
          mt: 4,
          display: 'flex',
          gap: { xs: 1.5, md: 4 },
          flexWrap: 'wrap',
          justifyContent: 'center',
          width: '100%'
        }}>
          <a type='button' href="tel:9667107991"> <FaPhone /></a>
          <a href="https://www.linkedin.com/in/16priya/" target="_blank" rel="noopener noreferrer"> <BsLinkedin /></a>
          <a href='https://github.com/Priya-1607' target="_blank" rel="noopener noreferrer"> <FaGithub /></a>
          <a href="mailto:priyasingh882656@gmail.com"> <IoMailOutline /></a>
          <FaHome type='button' onClick={handleClick} style={{ cursor: 'pointer' }} />
          <a href="https://leetcode.com/u/priya16singh/" target="_blank" rel="noopener noreferrer"> <SiLeetcode /></a>
          <a href="https://www.hackerrank.com/profile/priyasingh882656" target="_blank" rel="noopener noreferrer"> <SiHackerrank /></a>
        </Box>

        <Box sx={{ mt: 2, width: '100%', px: 2, pb: 2 }}>
          <Button
            fullWidth
            variant="contained"
            href="/resume.pdf" // Placeholder path
            download="Priya_Singh_Resume.pdf"
            sx={{
              backgroundColor: '#F36C38',
              color: 'white',
              fontWeight: 700,
              borderRadius: '12px',
              py: 1.5,
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#d35a2d'
              }
            }}
          >
            Download CV
          </Button>
        </Box>
      </CardActions>
    </Card>

  );
}
// A Software Engineer who has developed countless innovative solutions.

