import React from 'react'
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';
import { orange } from '@mui/material/colors';
import { Input as BaseInput } from '@mui/base/Input';
import { Button as BaseButton, buttonClasses } from '@mui/base/Button';

function Contact() {
   
      
      
      const Button = styled(BaseButton)(
        ({ theme }) => `
        font-family: 'IBM Plex Sans', sans-serif;
        font-weight: 600;
         width: 45rem;
        font-size: 0.875rem;
        line-height: 1.5;
        background-color: ${blue[500]};
        padding: 8px 16px;
        border-radius: 8px;
        color: white;
        transition: all 150ms ease;
        cursor: pointer;
        border: 1px solid ${blue[500]};
        box-shadow: 0 2px 1px ${
          theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(45, 45, 60, 0.2)'
        }, inset 0 1.5px 1px ${blue[400]}, inset 0 -2px 1px ${blue[600]};
      
        &:hover {
          background-color: ${blue[600]};
        }
      
        &.${buttonClasses.active} {
          background-color: ${blue[700]};
          box-shadow: none;
          transform: scale(0.99);
        }
      
        &.${buttonClasses.focusVisible} {
          box-shadow: 0 0 0 4px ${theme.palette.mode === 'dark' ? blue[300] : blue[200]};
          outline: none;
        }
      
        &.${buttonClasses.disabled} {
          background-color: ${theme.palette.mode === 'dark' ? orange[700] : orange[200]};
          color: ${theme.palette.mode === 'dark' ? orange[200] : orange[700]};
          border: 0;
          cursor: default;
          box-shadow: none;
          transform: scale(1);
        }
      `,
      );
    
    const blue = {
        50: '#353334',
        100: '#353334',
        200: '#353334',
        300: '#353334',
        400: '#353334',
        500: '#353334',
        600: '#353334',
        700: '#353334',
        800: '#353334',
        900: '#353334',
      };
    
      const orange = {
        50: '#F36C38',
        100: '#F36C38',
        200: '#F36C38',
        300: '#F36C38',
        400: '#F36C38',
        500: '#F36C38',
        600: '#F36C38',
        700: '#F36C38',
        800: '#F36C38',
        900: '#F36C38',
      };
      const TextField = styled('input')(
        ({ theme }) => `
        
        color: ${theme.palette.mode === 'dark' ? blue[300] : blue[900]};
        background: ${theme.palette.mode === 'dark' ? blue[900] : '#fff'};
        border: 1px solid ${theme.palette.mode === 'dark' ? blue[700] : blue[200]};
        box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? blue[900] : blue[50]};
    
        &:hover {
          border-color: ${orange[400]};
        }
    
        &:focus {
          border-color: ${orange[400]};
          box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? orange[600] : orange[200]};
        }
    
      
      `,
      );
      const Textarea = styled(BaseTextareaAutosize)(
        ({ theme }) => `
        box-sizing: border-box;
        width: 320px;
        font-family: 'IBM Plex Sans', sans-serif;
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.5;
        padding: 8px 12px;
        border-radius: 8px;
        color: ${theme.palette.mode === 'dark' ? blue[300] : blue[900]};
        background: ${theme.palette.mode === 'dark' ? blue[900] : '#fff'};
        border: 1px solid ${theme.palette.mode === 'dark' ? blue[700] : blue[200]};
        box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? blue[900] : blue[50]};
    
        &:hover {
          border-color: ${orange[400]};
        }
    
        &:focus {
          border-color: ${orange[400]};
          box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? orange[600] : orange[200]};
        }
    
        // firefox
        &:focus-visible {
          outline: 0;
        }
      `,
      );
    
  return (
    <Box sx={{marginLeft:'35rem',marginTop:'5rem'}}>

    <div>

<Typography variant="h1" sx={{color:'white',fontWeight:800,'@media (max-width:765px)': {fontSize:'140px'}}}>
LET'S WORK
      </Typography>
      <Typography variant="h1" sx={{color:'#353334',fontWeight:800,'@media (max-width:765px)': {fontSize:'140px'}}}>
      TOGETHER
      </Typography>
     
      <Box sx={{display:'flex',gap:4}}>
    <Box >
      <FormControl variant="standard" sx={{color:'white',gap:2,'@media (max-width:765px)': {
    fontSize:'3rem'
     }}}>
       
         Name
       
        <TextField  placeholder='Your Name' variant="filled" sx={{backgroundColor:'#353334',borderRadius:'10px',height:'40px',width:'21rem'}}/>

      </FormControl>
      </Box>


      <Box>
      <FormControl variant="standard" sx={{color:'white',gap:2,'@media (max-width:765px)': {
    fontSize:'3rem'
     }}}>
       
      Email
     
      <TextField placeholder='Your@email.com' variant="filled" sx={{backgroundColor:'#353334',borderRadius:'10px',height:'40px',width:'21rem',justifyContent:'center',textAlign:'start'}}/>

    </FormControl>
   
    </Box>
   
    </Box>
    <FormControl variant="standard" sx={{color:'white',gap:2,paddingTop:'2rem','@media (max-width:765px)': {
    fontSize:'3rem'
     }}}>
       
       Budget
   
   
         
          <TextField placeholder='Your@email.com' variant="filled" sx={{backgroundColor:'#353334',borderRadius:'10px',height:'40px',width:'45rem',justifyContent:'center',textAlign:'start'}}/>
    
        </FormControl>
        <FormControl variant="standard" sx={{color:'white',gap:2,paddingTop:'2rem','@media (max-width:765px)': {
    fontSize:'3rem'
     }}}>
       
        Message
   
        <Textarea aria-label="minimum height"  variant="filled"  minRows={3} placeholder="Message" sx={{backgroundColor:'#323031',width:'45rem'}}/>
        </FormControl>
        <Button disabled focusableWhenDisabled sx={{display:'flex',marginTop:'2rem',justifyContent:'center',textAlign:'center'}}>
            <Typography sx={{color:'white','@media (max-width:765px)': {
    fontSize:'3rem'
     }}}> Sumit</Typography>
    
      </Button>
    </div>
    </Box>
  )
}

export default Contact