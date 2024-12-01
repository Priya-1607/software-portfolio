import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ExperienceCard from '../Card/ExperienceCard';
function Experience() {
  return (
    <div>
      <Box sx={{marginLeft:'35rem',marginTop:'5rem'}}>
        <Typography variant="h1" sx={{color:'white',fontWeight:800,'@media (max-width:765px)': {
    fontSize:'140px'
     }}}>
        12 YEARS OF
      </Typography>
      <Typography variant="h1" sx={{color:'#353334',fontWeight:800,'@media (max-width:765px)': {
    fontSize:'140px'
     }}}>
      EXPERIENCE
      </Typography>
      </Box> 
<ExperienceCard/>

    </div>
    
  )
}

export default Experience