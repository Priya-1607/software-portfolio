import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Box from '@mui/material/Box';
import '../Thoughts/Thought.css'
import { MdArrowOutward } from "react-icons/md";
function Thoughts() {
  return (
    <>
      <Box sx={{marginLeft:'35rem',marginTop:'5rem'}}>
  <Typography variant="h1" sx={{color:'white',fontWeight:800,'@media (max-width:765px)': {fontSize:'140px'}}}>
  Coding 
      </Typography>
      <Typography variant="h1" sx={{color:'#353334',fontWeight:800,'@media (max-width:765px)': {fontSize:'140px'}}}>
      Quotes
      </Typography>
    
    <Card className='button' sx={{ maxWidth: 720,backgroundColor:'#161312'}}>
        <CardActionArea>
          <CardMedia
            height="140"
            alt="green iguana"
          />
          <CardContent>
          <Box sx={{display:'flex'}}>
         
       <Box sx={{display:'grid',justifyContent:'center',alignItems:'center',margin:'1rem'}}>
    
    
           <Typography sx={{color:'white',fontSize:'2rem',fontWeight:700,'@media (max-width:765px)': {
    fontSize:'3rem'
     }}}>
          John Johnson
           </Typography>
           <Typography sx={{color:'#353334',fontSize:'15px',fontWeight:700,marginTop:'1rem'}}>
           First, solve the problem. Then, write the code. 
           </Typography>
           </Box>
    
           <MdArrowOutward className='arrow1'/>
           </Box>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card className='button' sx={{ maxWidth:720,backgroundColor:'#161312'}}>
        <CardActionArea>
          <CardMedia
            height="140"
            alt="green iguana"
          />
          <CardContent>
          <Box sx={{display:'flex'}}>
         
       <Box sx={{display:'grid',justifyContent:'center',alignItems:'center',margin:'1rem'}}>
    
    
           <Typography sx={{color:'white',fontSize:'2rem',fontWeight:700,'@media (max-width:765px)': {
    fontSize:'3rem'
     }}}>
         Robert C. Martin
           </Typography>
           <Typography sx={{color:'#353334',fontSize:'15px',fontWeight:700,marginTop:'1rem'}}>
           Clean code always looks like it was written by someone who cares.
           </Typography>
           </Box>
    
           <MdArrowOutward className='arrow1'/>
           </Box>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card className='button' sx={{ maxWidth:720,backgroundColor:'#161312'}}>
        <CardActionArea>
          <CardMedia
            height="140"
            alt="green iguana"
          />
          <CardContent>
          <Box sx={{display:'flex'}}>
         
       <Box sx={{display:'grid',justifyContent:'center',alignItems:'center',margin:'1rem'}}>
    
    
           <Typography sx={{color:'white',fontSize:'2rem',fontWeight:700,'@media (max-width:765px)': {
    fontSize:'3rem'
     }}}>
           Santosh Kalwar
           </Typography>
           <Typography sx={{color:'#353334',fontSize:'15px',fontWeight:700,marginTop:'1rem'}}>
           Coding like poetry should be short and concise.
           </Typography>
           </Box>
    
           <MdArrowOutward className='arrow1'/>
           </Box>
          </CardContent>
        </CardActionArea>
      </Card>
      </Box>
        </>
  )
}

export default Thoughts