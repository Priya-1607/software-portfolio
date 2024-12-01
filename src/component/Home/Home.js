import React from 'react'
import Typography from '@mui/material/Typography';
import BasicCard from '../Card/Card'
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import Line1 from '../image/download.jpg'
import Premium from '../Preium/PremiumTools'
import './home.css'
import Project from '../Project/Project';
import Experience from '../Experience/Experience';
import PremiumTools from '../Preium/PremiumTools';
import Thoughts from '../Thoughts/Thoughts';
import Contact from '../Contact/Contact';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
//   ...theme.applyStyles('dark', {
//     backgroundColor: '#1A2027',
//   }),
// }));


function Home() {
  
  return (
    <Box sx={{display:'flex container1'}}>
       <div class="left-container">
      {/* <Box className='card'>
     
        <BasicCard/>
      
      </Box> */}
      </div>
      {/* <div className='jjjj1'>
      <div className='head1'>   */}
      <div class="right-container">
      <div class="content">
       <Box className="con" sx={{marginLeft:'35rem',marginTop:'5rem','@media (max-width:765px)': {
        marginTop:'-30rem',
     paddingLeft:'13rem',
    
     },}}> 

      <Typography className='soft' variant="h1" sx={{color:'white',fontWeight:800}}>
      SOFTWARE 
      </Typography>
      <Typography className='soft' variant="h1" sx={{color:'#353334',fontWeight:800,}}>
      ENGINEER
      </Typography>
      <Typography className="paraw" variant="body2"  sx={{color:'#998f8f',fontSize:'1.2rem','@media (max-width:765px)': {
       
     fontSize: '35px'
     }}}>
      Passionate about creating intuitive and engaging <br/>user experiences. Specialize in transforming ideas<br/> into beautifully crafted products.
      </Typography>
      <Box>
      <Box>
     
    <div className="container">
  <div className="item">   <Typography variant='h2' className='con' sx={{color:'white',fontWeight:600}}>
          +2
        </Typography>
        <Typography sx={{color:'#998f8f'}}>
        YEARS OF<br/>

        EXPERIENCE
        </Typography></div>
  <div className="item"> 
    <Typography className='con' variant='h2' sx={{color:'white',fontWeight:600}}>
          +45
        </Typography>
        <Typography  sx={{color:'#998f8f'}}>
        PROJECTS <br/>

        COMPLETED
        </Typography>
        </div>
  <div className="item">
  <Typography className='con' variant='h2' sx={{color:'white',fontWeight:600}}>
          +20
        </Typography>
        <Typography sx={{color:'#998f8f'}}>
        WORLDWIDE  <br/>

        CLIENTS
        </Typography>

  </div>
</div>



<Box sx={{ flexGrow: 1 }} className='hhh'>
      <Grid container columns={16}>
        <Grid item xs={6}>
       <Box className="org-box" sx={{backgroundColor:'#F46C39', height:"15rem",width:'19rem',borderRadius:'10px',top:'3rem',display:'grid','@media (max-width:765px)': {
       width:'65rem',
       height:'50rem',
       borderRadius:'20px'
    
     }}}>
        {/* <img src={Line1} alt="Download Icon" /> */}
        <Typography sx={{fontSize:'1.5rem',justifyContent:'center',textAlign:'center',color:'white','@media (max-width:765px)': {
      fontSize:'0.5rem'
      
    
     }}}>
        B-Tech (ECE)
        </Typography>
        <Typography sx={{fontSize:'1.5rem',display:'flex',justifyContent:'center',textAlign:'center',color:'white'}}>
          World College of Technology and Management
        </Typography>
        <Typography sx={{fontSize:'1.5rem',display:'flex',justifyContent:'center',color:'white'}}>
          72%
        </Typography>
       
       </Box>
      
        </Grid>
        <Grid item xs={6}>
        
        <Box className="green-box" sx={{backgroundColor:'#c5ff41', height:"15rem",width:'24rem',borderRadius:'10px',display:'grid'}}>
        {/* <img src={Line1} alt="Download Icon" /> */}
        <Typography sx={{fontSize:'1.5rem',display:'flex',justifyContent:'center',color:'black','@media (max-width:765px)': {
      fontSize:'6.5rem'
      
    
     }}}>
        12 Class
        </Typography>
        <Typography sx={{fontSize:'1.5rem',display:'flex',justifyContent:'center',color:'black',textAlign: 'center','@media (max-width:765px)': {
      fontSize:'6.5rem'
      
    
        }}}>
        Govt-Co Ed Sr Sec School site 2 
        </Typography>
<Typography sx={{fontSize:'1.5rem',display:'flex',justifyContent:'center',color:'black','@media (max-width:765px)': {
      fontSize:'6.5rem'
      
    
        }}}>
  74%
</Typography>
       </Box>
        </Grid>
      </Grid>
    </Box>
    
</Box>

    </Box>       
      </Box>
      
      
      <Project/>
      
      <Experience/>
      <PremiumTools/>
      <Thoughts/>
      <Contact/>
      {/* </Box> */}
      </div>
   </div>
    </Box>
   
   
  )
}



export default Home