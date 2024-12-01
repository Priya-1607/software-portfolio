import React from 'react'
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import CardActionArea from '@mui/material/CardActionArea';
import '../Card/ToolsCard.css'
function ToolCard() {
  return (

  
    <div>
<Box sx={{display:'flex'}}>

<Card className='button' sx={{ maxWidth: 345,backgroundColor:'#161312'}}>
    <CardActionArea>
      <CardMedia
        height="140"
        alt="green iguana"
      />
      <CardContent>
      <Box sx={{display:'flex'}}>
     
       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfT_-hQqDG2bhUQoV2ACDkZNt4GXN0McNlnA&s" className='image'/>
 
 
   <Box sx={{display:'grid',justifyContent:'center',alignItems:'center',margin:'5px',paddingLeft:'10px'}}>


       <Typography sx={{color:'white',fontSize:'1rem',fontWeight:700,'@media (max-width:765px)': {
    fontSize:'3rem'
     }}}>
     Javascript
       </Typography>
       <Typography sx={{color:'#353334',fontSize:'1rem',fontWeight:700,marginTop:'2px'}}>
       Programing Language
       </Typography>
       </Box>

   
       </Box>
      </CardContent>
    </CardActionArea>
  </Card>

<Card className='button' sx={{ maxWidth: 345,backgroundColor:'#161312',height:'5rem',marginLeft:'3rem'}}>
    <CardActionArea>
      <CardMedia
        height="140"
        alt="green iguana"
      />
      <CardContent>
      <Box sx={{display:'flex'}}>
      <img src="https://www.vikingsoftware.com/wp-content/uploads/2024/02/C-2.png" width="50" height="50"/>
     
   <Box sx={{display:'grid',justifyContent:'center',alignItems:'center',margin:'5px',paddingLeft:'10px'}}>


       <Typography sx={{color:'white',fontSize:'1rem',fontWeight:700,'@media (max-width:765px)': {
    fontSize:'3rem'
     }}}>
       C++
       </Typography>
       <Typography sx={{color:'#353334',fontSize:'1rem',fontWeight:700,marginTop:'2px'}}>
       Programing Language
       </Typography>
       </Box>

   
       </Box>
      </CardContent>
    </CardActionArea>
  </Card>
  </Box>


  <Box sx={{display:'flex'}}>

<Card className='button' sx={{ maxWidth: 345,backgroundColor:'#161312',height:'5rem'}}>
    <CardActionArea>
      <CardMedia
        height="140"
        alt="green iguana"
      />
      <CardContent>
      <Box sx={{display:'flex'}}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png" width="50" height="50" className='image'/>
 
 
   <Box sx={{display:'grid',justifyContent:'center',alignItems:'center',margin:'5px',paddingLeft:'10px'}}>


       <Typography sx={{color:'white',fontSize:'1rem',fontWeight:700,'@media (max-width:765px)': {
    fontSize:'3rem'
     }}}>
        HTML5
       </Typography>
       <Typography sx={{color:'#353334',fontSize:'1rem',fontWeight:700,marginTop:'2px'}}>
      Markup Language
       </Typography>
       </Box>

   
       </Box>
      </CardContent>
    </CardActionArea>
  </Card>

<Card className='button' sx={{ maxWidth: 345,backgroundColor:'#161312',height:'5rem',marginLeft:'5rem'}}>
    <CardActionArea>
      <CardMedia
        height="140"
        alt="green iguana"
      />
      <CardContent>
      <Box sx={{display:'flex'}}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png" width="50" height="50" className='image'/>
 
 
   <Box sx={{display:'grid',justifyContent:'center',alignItems:'center',margin:'5px',paddingLeft:'10px'}}>


       <Typography sx={{color:'white',fontSize:'1rem',fontWeight:700,'@media (max-width:765px)': {
    fontSize:'3rem'
     }}}>
       Python
       </Typography>
       <Typography sx={{color:'#353334',fontSize:'1rem',fontWeight:700,marginTop:'2px'}}>
       Programing Language
       </Typography>
       </Box>

   
       </Box>
      </CardContent>
    </CardActionArea>
  </Card>
  </Box>
  <Box sx={{display:'flex'}}>

<Card className='button' sx={{ maxWidth: 345,backgroundColor:'#161312',height:'5rem'}}>
    <CardActionArea>
      <CardMedia
        height="140"
        alt="green iguana"
      />
      <CardContent>
      <Box sx={{display:'flex'}}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png" width="50" height="50" className='image'/>
 
 
   <Box sx={{display:'grid',justifyContent:'space-between',alignItems:'center',margin:'5px',paddingLeft:'10px'}}>


       <Typography sx={{color:'white',fontSize:'1rem',fontWeight:700,'@media (max-width:765px)': {
    fontSize:'3rem'
     }}}>
       Bootstrap
       </Typography>
       <Typography sx={{color:'#353334',fontSize:'1rem',fontWeight:700,marginTop:'2px'}}>
       Framework
       </Typography>
       </Box>

   
       </Box>
      </CardContent>
    </CardActionArea>
  </Card>

<Card className='button' sx={{ maxWidth: 345,backgroundColor:'#161312',height:'5rem',marginLeft:'5rem'}}>
    <CardActionArea>
      <CardMedia
        height="140"
        alt="green iguana"
      />
      <CardContent>
      <Box sx={{display:'flex',marginLeft:'4rem'}}>
      <img src="https://www.okoone.com/wp-content/uploads/2024/10/tailwindcss-logo.png" width="50" height="50" className='image'/>
 
 
   <Box sx={{display:'grid',justifyContent:'center',alignItems:'center',margin:'5px',paddingLeft:'10px',}}>


       <Typography sx={{color:'white',fontSize:'1rem',fontWeight:700,'@media (max-width:765px)': {
    fontSize:'3rem'
     }}}>
       Tailwindcss
       </Typography>
       <Typography sx={{color:'#353334',fontSize:'1rem',fontWeight:700,marginTop:'2px'}}>
       Framework
       </Typography>
       </Box>

   
       </Box>
      </CardContent>
    </CardActionArea>
  </Card>
  </Box>

  <Box sx={{display:'flex'}}>


<Card className='button' sx={{ maxWidth: 345,backgroundColor:'#161312',height:'5rem'}}>
    <CardActionArea>
      <CardMedia
        height="140"
        alt="green iguana"
      />
      <CardContent>
      <Box sx={{display:'flex'}}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPwlGiXsLjsbNDEBQ_fzEwxqLV3VNJIHL8z9SYZ1kb0PQbNXmqCYmm1DTdLwfCF1LDo-I&usqp=CAU" width="50" height="50" className='image'/>
 
 
   <Box sx={{display:'grid',justifyContent:'center',alignItems:'center',margin:'5px',paddingLeft:'10px'}}>


       <Typography sx={{color:'white',fontSize:'1rem',fontWeight:700,'@media (max-width:765px)': {
    fontSize:'3rem'
     }}}>
        Express
       </Typography>
       <Typography sx={{color:'#353334',fontSize:'1rem',fontWeight:700,marginTop:'2px'}}>
       Framework
       </Typography>
       </Box>

   
       </Box>
      </CardContent>
    </CardActionArea>
  </Card>

<Card className='button' sx={{ maxWidth: 345,backgroundColor:'#161312',height:'5rem',marginLeft:'5rem'}}>
    <CardActionArea>
      <CardMedia
        height="140"
        alt="green iguana"
      />
      <CardContent>
      <Box sx={{display:'flex',marginLeft:'4rem'}}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBLimkxKgVwum5XDrN89s2lmt_EFlBdJeItA&s" width="50" height="50" className='image'/>
 
 
   <Box sx={{display:'grid',justifyContent:'center',alignItems:'center',margin:'5px',paddingLeft:'10px',}}>


       <Typography sx={{color:'white',fontSize:'1rem',fontWeight:700,'@media (max-width:765px)': {
    fontSize:'3rem'
     }}}>
       React Js
       </Typography>
       <Typography sx={{color:'#353334',fontSize:'1rem',fontWeight:700,marginTop:'2px'}}>
       Library
       </Typography>
       </Box>

   
       </Box>
      </CardContent>
    </CardActionArea>
  </Card>
</Box>

<Box sx={{display:'flex'}}>

<Card className='button' sx={{ maxWidth: 345,backgroundColor:'#161312',height:'5rem'}}>
    <CardActionArea>
      <CardMedia
        height="140"
        alt="green iguana"
      />
      <CardContent>
      <Box sx={{display:'flex'}}>
      <img src="https://pbs.twimg.com/profile_images/1798056830041788417/HIapkjDx_400x400.jpg" width="50" height="50" className='image'/>
 
 
   <Box sx={{display:'grid',justifyContent:'center',alignItems:'center',margin:'5px',paddingLeft:'10px'}}>


       <Typography sx={{color:'white',fontSize:'1rem',fontWeight:700,'@media (max-width:765px)': {
    fontSize:'3rem'
     }}}>
       Material Ui
       </Typography>
       <Typography sx={{color:'#353334',fontSize:'1rem',fontWeight:700,marginTop:'2px'}}>
       Library
       </Typography>
       </Box>

   
       </Box>
      </CardContent>
    </CardActionArea>
  </Card>

<Card className='button' sx={{ maxWidth: 345,backgroundColor:'#161312',height:'5rem',marginLeft:'5rem'}}>
    <CardActionArea>
      <CardMedia
        height="140"
        alt="green iguana"
      />
      <CardContent>
      <Box sx={{display:'flex',marginLeft:'4rem'}}>
      <img src="https://media.licdn.com/dms/image/v2/D4D12AQEnWS4yh0PQxw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1708674183140?e=2147483647&v=beta&t=8XdE8THbnqwHJaHphUJcR9RMMxnheh4XTofQHuKCim4" width="50" height="50" className='image'/>
 
 
   <Box sx={{display:'grid',justifyContent:'center',alignItems:'center',margin:'5px',paddingLeft:'10px'}}>


       <Typography sx={{color:'white',fontSize:'1rem',fontWeight:700,'@media (max-width:765px)': {
    fontSize:'3rem'
     }}}>
       Pandas
       </Typography>
       <Typography sx={{color:'#353334',fontSize:'1rem',fontWeight:700,marginTop:'2px'}}>
       Library
       </Typography>
       </Box>

   
       </Box>
      </CardContent>
    </CardActionArea>
  </Card>
  </Box>
  <Box sx={{display:'flex'}}>

<Card className='button' sx={{ maxWidth: 345,backgroundColor:'#161312',height:'5rem'}}>
    <CardActionArea>
      <CardMedia
        height="140"
        alt="green iguana"
      />
      <CardContent>
      <Box sx={{display:'flex'}}>
      <img src="https://miro.medium.com/v2/resize:fit:1001/1*vPezx00A1u0WAfS8e8wBXQ.png" width="50" height="50" className='image'/>
 
 
   <Box sx={{display:'grid',justifyContent:'center',alignItems:'center',margin:'5px',paddingLeft:'10px'}}>


       <Typography sx={{color:'white',fontSize:'1rem',fontWeight:700,'@media (max-width:765px)': {
    fontSize:'3rem'
     }}}>
       NumPy
       </Typography>
       <Typography sx={{color:'#353334',fontSize:'1rem',fontWeight:700,marginTop:'2px'}}>
       Library
       </Typography>
       </Box>

   
       </Box>
      </CardContent>
    </CardActionArea>
  </Card>

<Card className='button' sx={{ maxWidth: 345,backgroundColor:'#161312',height:'5rem',marginLeft:'5rem'}}>
    <CardActionArea>
      <CardMedia
        height="140"
        alt="green iguana"
      />
      <CardContent>
      <Box sx={{display:'flex',marginLeft:'5.5rem'}}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLueaRJsD38b32MAw93xzUa7Pftq_l8BUDOw&s" width="50" height="50" className='image'/>
 
 
   <Box sx={{display:'grid',justifyContent:'center',alignItems:'center',margin:'5px',paddingLeft:'10px'}}>


       <Typography sx={{color:'white',fontSize:'1rem',fontWeight:700,'@media (max-width:765px)': {
    fontSize:'3rem'
     }}}>
       DSA
       </Typography>
       <Typography sx={{color:'#353334',fontSize:'1rem',fontWeight:700,marginTop:'2px'}}>
     
       </Typography>
       </Box>

   
       </Box>
      </CardContent>
    </CardActionArea>
  </Card>
  
  </Box>
  <Box sx={{display:'flex'}}>

<Card className='button' sx={{ maxWidth: 345,backgroundColor:'#161312',height:'5rem'}}>
    <CardActionArea>
      <CardMedia
        height="140"
        alt="green iguana"
      />
      <CardContent>
      <Box sx={{display:'flex'}}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeD8zT_fQg01sUVft4rGb1ap7nWJ9CDWHYlPgitsVhfRFUK-F5RSnJvBcxn1lgSPHsgHU&usqp=CAU" width="50" height="50" className='image'/>
 
 
   <Box sx={{display:'grid',justifyContent:'center',alignItems:'center',margin:'5px',paddingLeft:'10px'}}>


       <Typography sx={{color:'white',fontSize:'1rem',fontWeight:700,'@media (max-width:765px)': {
    fontSize:'3rem'
     }}}>
       Visual Studio Code 
       </Typography>
       <Typography sx={{color:'#353334',fontSize:'1rem',fontWeight:700,marginTop:'2px'}}>
       Editor
       </Typography>
       </Box>

   
       </Box>
      </CardContent>
    </CardActionArea>
  </Card>

<Card className='button' sx={{ maxWidth: 345,backgroundColor:'#161312',height:'5rem',marginLeft:'5rem'}}>
    <CardActionArea>
      <CardMedia
        height="140"
        alt="green iguana"
      />
      <CardContent>
      <Box sx={{display:'flex'}}>
      <img src="https://www.helenjoscott.com/wp-content/uploads/2020/09/1200px-IntelliJ_IDEA_Logo.png" width="50" height="50" className='image'/>
 
 
   <Box sx={{display:'grid',justifyContent:'center',alignItems:'center',margin:'5px',paddingLeft:'10px'}}>


       <Typography sx={{color:'white',fontSize:'1rem',fontWeight:700,'@media (max-width:765px)': {
    fontSize:'3rem'
     }}}>
       Intellij
       </Typography>
       <Typography sx={{color:'#353334',fontSize:'1rem',fontWeight:700,marginTop:'2px'}}>
       Editor
       </Typography>
       </Box>

   
       </Box>
      </CardContent>
    </CardActionArea>
  </Card>
  </Box>

  <Box sx={{display:'flex'}}>

<Card className='button' sx={{ maxWidth: 345,backgroundColor:'#161312',height:'5rem'}}>
    <CardActionArea>
      <CardMedia
        height="140"
        alt="green iguana"
      />
      <CardContent>
      <Box sx={{display:'flex'}}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoUX5LMRa7atIsNfl0nP3DaUaV4URhV0PHfA&s" width="50" height="50" className='image'/>
 
 
   <Box sx={{display:'grid',justifyContent:'center',alignItems:'center',margin:'5px',paddingLeft:'10px'}}>


       <Typography sx={{color:'white',fontSize:'1rem',fontWeight:700,'@media (max-width:765px)': {
    fontSize:'3rem'
     }}}>
       Figma
       </Typography>
       <Typography sx={{color:'#353334',fontSize:'1rem',fontWeight:700,marginTop:'2px'}}>
       Design Tool 
       </Typography>
       </Box>

   
       </Box>
      </CardContent>
    </CardActionArea>
  </Card>

<Card className='button' sx={{ maxWidth: 345,backgroundColor:'#161312',height:'5rem',marginLeft:'9rem'}}>
    <CardActionArea>
      <CardMedia
        height="140"
        alt="green iguana"
      />
      <CardContent>
      <Box sx={{display:'flex'}}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS80OChMU7lMUMwU7CVu4ZJl1irvee4jmFfjw&s" width="50" height="50" className='image'/>
 
 
   <Box sx={{display:'grid',justifyContent:'center',alignItems:'center',margin:'5px',paddingLeft:'10px'}}>


       <Typography sx={{color:'white',fontSize:'1rem',fontWeight:700,'@media (max-width:765px)': {
    fontSize:'3rem'
     }}}>
       Adobe XD 
       </Typography>
       <Typography sx={{color:'#353334',fontSize:'1rem',fontWeight:700,marginTop:'2px'}}>
       Design Tool 
       </Typography>
       </Box>

   
       </Box>
      </CardContent>
    </CardActionArea>
  </Card>
  </Box>

  <Box sx={{display:'flex'}}>

<Card className='button' sx={{ maxWidth: 345,backgroundColor:'#161312',height:'5rem'}}>
    <CardActionArea>
      <CardMedia
        height="140"
        alt="green iguana"
      />
      <CardContent>
      <Box sx={{display:'flex'}}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStJ0RLjyVFuUglMuL9isTj5XyBlF2b2exntc9ixTivuuY_ez2hD1-IQlCE82zNeRZPlzU&usqp=CAU" width="50" height="50" className='image'/>
 
 
   <Box sx={{display:'grid',justifyContent:'center',alignItems:'center',margin:'5px',paddingLeft:'10px'}}>


       <Typography sx={{color:'white',fontSize:'1rem',fontWeight:700,'@media (max-width:765px)': {
    fontSize:'3rem'
     }}}>
       Postman
       </Typography>
       <Typography sx={{color:'#353334',fontSize:'1rem',fontWeight:700,marginTop:'2px'}}>
       API Testing
       </Typography>
       </Box>

   
       </Box>
      </CardContent>
    </CardActionArea>
  </Card>

<Card className='button' sx={{ maxWidth: 345,backgroundColor:'#161312',height:'5rem',marginLeft:'9rem'}}>
    <CardActionArea>
      <CardMedia
        height="140"
        alt="green iguana"
      />
      <CardContent>
      <Box sx={{display:'flex'}}>
      <img src="https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png" width="50" height="50" className='image'/>
 
 
   <Box sx={{display:'grid',justifyContent:'center',alignItems:'center',margin:'5px',paddingLeft:'10px'}}>


       <Typography sx={{color:'white',fontSize:'1rem',fontWeight:700,'@media (max-width:765px)': {
    fontSize:'3rem'
     }}}>
      Mongodb
       </Typography>
       <Typography sx={{color:'#353334',fontSize:'1rem',fontWeight:700,marginTop:'2px'}}>
       Database
       </Typography>
       </Box>

   
       </Box>
      </CardContent>
    </CardActionArea>
  </Card>
  </Box>

  <Box sx={{display:'flex'}}>

<Card className='button' sx={{ maxWidth: 345,backgroundColor:'#161312',height:'5rem'}}>
    <CardActionArea>
      <CardMedia
        height="140"
        alt="green iguana"
      />
      <CardContent>
      <Box sx={{display:'flex'}}>
      <img src="https://delta-dev-software.fr/wp-content/uploads/2024/05/CSS-Logo.png" width="50" height="50" className='image'/>
 
 
   <Box sx={{display:'grid',justifyContent:'center',alignItems:'center',margin:'5px',paddingLeft:'10px'}}>


       <Typography sx={{color:'white',fontSize:'1rem',fontWeight:700,'@media (max-width:765px)': {
    fontSize:'3rem'
     }}}>
      CSS
       </Typography>
       <Typography sx={{color:'#353334',fontSize:'1rem',fontWeight:700,marginTop:'2px'}}>
       Style Sheet
       </Typography>
       </Box>

   
       </Box>
      </CardContent>
    </CardActionArea>
  </Card>

<Card className='button' sx={{ maxWidth: 345,backgroundColor:'#161312',height:'5rem',marginLeft:'9rem'}}>
    <CardActionArea>
      <CardMedia
        height="140"
        alt="green iguana"
      />
      <CardContent>
      <Box sx={{display:'flex'}}>
      <img src="https://miro.medium.com/v2/resize:fit:900/1*TY9uBBO9leUbRtlXmQBiug.png" width="50" height="50" className='image'/>
 
 
   <Box sx={{display:'grid',justifyContent:'center',alignItems:'center',margin:'5px',paddingLeft:'10px'}}>


       <Typography sx={{color:'white',fontSize:'1rem',fontWeight:700,'@media (max-width:765px)': {
    fontSize:'3rem'
     }}}>
       Node Js
       </Typography>
       <Typography sx={{color:'#353334',fontSize:'1rem',fontWeight:700,marginTop:'2px'}}>
       Runtime Environment
       </Typography>
       </Box>

   
       </Box>
      </CardContent>
    </CardActionArea>
  </Card>
  </Box>

  <Box sx={{display:'flex'}}>

<Card className='button' sx={{ maxWidth: 345,backgroundColor:'#161312',height:'5rem'}}>
    <CardActionArea>
      <CardMedia
        height="140"
        alt="green iguana"
      />
      <CardContent>
      <Box sx={{display:'flex'}}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIyRcCSscntSgQBNW6RLokUKIRQ975HkHJaw&s" width="50" height="50" className='image'/>
 
 
   <Box sx={{display:'grid',justifyContent:'center',alignItems:'center',margin:'5px',paddingLeft:'10px'}}>


       <Typography sx={{color:'white',fontSize:'1rem',fontWeight:700,'@media (max-width:765px)': {
    fontSize:'3rem'
     }}}>
       Type Script
       </Typography>
       <Typography sx={{color:'#353334',fontSize:'1rem',fontWeight:700,marginTop:'2px'}}>
       JavaScript with syntax
       </Typography>
       </Box>

   
       </Box>
      </CardContent>
    </CardActionArea>
  </Card>

<Card className='button' sx={{ maxWidth: 345,backgroundColor:'#161312',height:'5rem',marginLeft:'4rem'}}>
    <CardActionArea>
      <CardMedia
        height="140"
        alt="green iguana"
      />
      <CardContent>
      <Box sx={{display:'flex'}}>
      <img src="https://miro.medium.com/v2/resize:fit:500/1*tOI6UC5EaS2fPItCesI-AQ.png" width="50" height="50" className='image'/>
 
 
   <Box sx={{display:'grid',justifyContent:'center',alignItems:'center',margin:'5px',paddingLeft:'10px'}}>


       <Typography sx={{color:'white',fontSize:'1rem',fontWeight:700,'@media (max-width:765px)': {
    fontSize:'3rem'
     }}}>
       Redux
       </Typography>
       <Typography sx={{color:'#353334',fontSize:'1rem',fontWeight:700,marginTop:'2px'}}>
       Library
       </Typography>
       </Box>

   
       </Box>
      </CardContent>
    </CardActionArea>
  </Card>
  </Box>

  <Box sx={{display:'flex'}}>

<Card className='button' sx={{ maxWidth: 345,backgroundColor:'#161312',height:'5rem'}}>
    <CardActionArea>
      <CardMedia
        height="140"
        alt="green iguana"
      />
      <CardContent>
      <Box sx={{display:'flex'}}>
      <img src="https://miro.medium.com/v2/resize:fit:720/1*_bJ2z2NRfTncHAv5UjUxwA.jpeg" width="50" height="50" className='image'/>
 
 
   <Box sx={{display:'grid',justifyContent:'center',alignItems:'center',margin:'5px',paddingLeft:'10px'}}>


       <Typography sx={{color:'white',fontSize:'1rem',fontWeight:700,'@media (max-width:765px)': {
    fontSize:'3rem'
     }}}>
       Next Js
       </Typography>
       <Typography sx={{color:'#353334',fontSize:'1rem',fontWeight:700,marginTop:'2px'}}>
       Framework
       </Typography>
       </Box>

   
       </Box>
      </CardContent>
    </CardActionArea>
  </Card>


  </Box>

 
    </div>
   
  )
}

export default ToolCard