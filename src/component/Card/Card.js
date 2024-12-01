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
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard() {
  function handleClick() {
    alert("Dwarka More\n " +
      "New Delhi")
}


  return (
   
    <Card sx={{height:'40rem',borderRadius:'20px','@media (max-width:765px)': {
     height:'60rem',
     marginTop:'-2rem'
     },}}>
      <CardContent>
      <Box sx={{ display:'flex',
          justifyContent:'center',
          textAlign: 'center',}}>

      <Box
        // sx={{
        //   width: '15rem',
        //  marginTop:'2rem',
        //   height: 250,
        //   borderRadius: 3,
        //   bgcolor: 'primary.main',
        //   '&:hover': {
        //     bgcolor: 'primary.dark',
        //   },`
        // }}
      >
       <img className='yree' src={Me} alt="dskjjkd" height={250} width={270}/>
        </Box>
      </Box>
      </CardContent>
      <CardActions sx={{display:'flex',
          justifyContent:'center',
          textAlign: 'center'}}>
            <Box sx={{display:'block'}}>
        <Box > <Typography variant="h4" sx={{color:'black',fontWeight:1000}}>PRIYA SINGH</Typography></Box>
        <Box> <Typography className='software' sx={{color:'#6A6B6E',marginTop:'8rem',fontWeight:600, '@media (max-width:600px)': {
     marginTop:'0rem'// Styles for sc2reens 600px and above
    },
    '@media (max-width:765px)': {
     marginTop:'0rem'// Styles for sc2reens 600px and above
    },
    
    }}>A Software Engineer who has <br/>developed countless innovative <br/>solutions.</Typography></Box>
        <Box sx={{marginTop:'2rem',display:'flex',gap:4,paddingLeft:'15px'}}>

        <a href="tel:9667107991"> <FaPhone /></a>
       
        <a href="https://www.linkedin.com/in/16priya/">   <BsLinkedin /></a>
      <a href='https://github.com/Priya-1607'> <FaGithub /></a>  
        <a href="mailto:priyasingh882656@gmail.com"> <IoMailOutline /></a> 
         <FaHome type='button' onClick={handleClick}/>
      
         <a href="https://leetcode.com/u/priya16singh/">     <SiLeetcode /></a>

       <a href="https://www.hackerrank.com/profile/priyasingh882656">       <SiHackerrank /></a>
        </Box>
        </Box>
       
      </CardActions>
    </Card>
  
  );
}
// A Software Engineer who has developed countless innovative solutions.

