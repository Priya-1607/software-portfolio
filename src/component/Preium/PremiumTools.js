import React from 'react'
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import CardActionArea from '@mui/material/CardActionArea';
import ToolCard from '../Card/ToolCard';
function PremiumTools() {
  return (
    <Box sx={{marginLeft:'35rem',marginTop:'5rem'}}>
    <div>
 
      <Typography variant="h1" sx={{color:'white',fontWeight:800,'@media (max-width:765px)': {
    fontSize:'140px'
     }}}>
      PREMIUM 
      </Typography>
      <Typography variant="h1" sx={{color:'#353334',fontWeight:800,'@media (max-width:765px)': {
    fontSize:'140px'
     }}}>
      TOOLS
      </Typography>
   
<ToolCard/>
    </div>
    </Box>
  )
}

export default PremiumTools