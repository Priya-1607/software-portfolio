import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ProjectCard from '../Card/ProjectCard';
import './../Project/project.css'
function Project() {
  return (
    <div>

<Box sx={{marginLeft:'35rem',marginTop:'5rem'}}>
      <Typography variant="h1" sx={{color:'white',fontWeight:800,'@media (max-width:765px)': {fontSize:'140px'}}}>
      RECENT 
      </Typography>
      <Typography variant="h1" sx={{color:'#353334',fontWeight:800,'@media (max-width:765px)': {fontSize:'140px'}}}>
      PROJECTS
      </Typography>
      </Box>
     
      <Box>
      
       <ProjectCard/>
         </Box>
    </div>
  )
}

export default Project