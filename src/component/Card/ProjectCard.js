import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Box from '@mui/material/Box';
import { MdArrowOutward } from "react-icons/md";
import '../Card/Project.css'
function ProjectCard() {
  return (
    <>
    <Box sx={{marginLeft:'35rem',marginTop:'5rem'}}>
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
<img src="https://media.licdn.com/dms/image/v2/C4E0BAQFP_oSKSARMrA/company-logo_200_200/company-logo_200_200/0/1633933254815?e=2147483647&v=beta&t=jgWloUdOMDA1DLR6e3zj81oT_4jreBDEY5Zm2WOnNnY" className='img' />
     
</div> 
      </Box>
   <Box sx={{display:'grid',margin:'1rem'}}>


       <Typography sx={{color:'white',fontSize:'2rem',fontWeight:700,marginTop:'-1.2rem','@media (max-width:765px)': {
    fontSize:'3rem'
     }}}>
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
<img src="https://img.freepik.com/premium-vector/e-commerce-shopping-website-banner-design-template_556845-302.jpg" width={100} height={100} className='img' />
     
</div> 
       </Box>
        <Box sx={{display:'grid',justifyContent:'center',alignItems:'center',margin:'1rem'}}>
       <Typography sx={{color:'white',fontSize:'2rem',fontWeight:700,'@media (max-width:765px)': {
    fontSize:'2rem'
     }}}>
       Fantastic style
       </Typography>
       <Typography sx={{color:'#C5FF41',fontSize:'15px',fontWeight:700,marginTop:'1px'}}>
       HTML5,CSS,Reactjs,Javascript,Tailwind CSS
       </Typography>
       <Typography sx={{color:'#998E8F',fontSize:'15px',fontWeight:700,marginTop:'1px',paddingTop:'5px'}}>
       Shopping website we can buy Products<br/> add to Cart delete items from Cart
       </Typography>
       </Box>
       <a href="https://www.writo.tech/" target="_blank" rel="noopener noreferrer">   <MdArrowOutward className='arrow'/></a>
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
<img src="https://play-lh.googleusercontent.com/BrbGS9IJWcAF2DCYlaECjljtx7MrYyU5Th1mu8YIpvQyg5YYYZCPrHosbJTnRIAihA=w5120-h2880-rw" width={100} height={100} className='img' />
     
</div> 
      </Box>
      {/* https://www.decluttr.com/ */}
<Box sx={{display:'grid',margin:'-0.8rem'}}>
       <Typography sx={{color:'white',fontSize:'2rem',fontWeight:700,paddingLeft:'2rem','@media (max-width:765px)': {
    fontSize:'3rem'
     }}}>
       DCLUTTER
       </Typography>
       <Typography sx={{color:'#C5FF41',fontSize:'15px',fontWeight:700,marginTop:'1px',paddingLeft:'2rem'}}>
       HTML5,CSS,Reactjs,Javascript,Tailwind CSS
       </Typography>
       <Typography sx={{color:'#998E8F',fontSize:'15px',fontWeight:700,marginTop:'1px',paddingTop:'5px',paddingLeft:'2rem'}}>
       PWA for raw material and cut down  <br/> paperwork by 75%.Designed and <br/>api integration for modules are Sales <br/>Report
       Add Quotation,Order List,Add Sales
       </Typography>
       </Box>
       <a href="https://www.decluttr.com/" target="_blank" rel="noopener noreferrer">    <MdArrowOutward className='arrow'/></a>
       </Box>
      </CardContent>
    </CardActionArea>
  </Card>
  </Box>
   </>
  )
}

export default ProjectCard