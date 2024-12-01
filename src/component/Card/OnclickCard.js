import React,{useState} from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Box from '@mui/material/Box';
import '../Card/ExperienceCard.css'
import { MdArrowOutward } from "react-icons/md";
function OnclickCard() {
   
  return (
    <div>
         <Card className='button' sx={{ maxWidth:720,backgroundColor:'#161312'}}>
    <CardActionArea>
      <CardMedia
        height="140"
        alt="green iguana"
      />
      <CardContent>
      <Box sx={{display:'flex'}}>
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
<img src="https://media.licdn.com/dms/image/v2/C4E0BAQFP_oSKSARMrA/company-logo_200_200/company-logo_200_200/0/1633933254815?e=2147483647&v=beta&t=jgWloUdOMDA1DLR6e3zj81oT_4jreBDEY5Zm2WOnNnY" width={100} height={100} className='img' />
     
</div> 
      </Box>
   <Box sx={{display:'grid',margin:'1rem'}}>


       <Typography sx={{color:'white',fontSize:'2rem',fontWeight:700,marginTop:'-1.2rem'}}>
        Writo Tech
       </Typography>
       <Typography sx={{color:'#C5FF41',fontSize:'15px',fontWeight:700,marginTop:'1px'}}>
       HTML5,CSS,Reactjs,Javascript,<br/>Tailwind CSS, Materia ui
       </Typography>
       <Typography sx={{color:'#998E8F',fontSize:'15px',fontWeight:700,marginTop:'1px',paddingTop:'5px'}}>
       Teaching platform for providing <br/>mentorship and teaching about website design</Typography>
       </Box>
       <a href="https://www.writo.tech/" target="_blank" rel="noopener noreferrer">
       <MdArrowOutward className='arrow'/>
        </a>
     
       </Box>
      </CardContent>
    </CardActionArea>
  </Card>
    </div>
  )
}

export default OnclickCard