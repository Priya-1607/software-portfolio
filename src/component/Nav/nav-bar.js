import React from 'react'
import { Link } from "react-router-dom";
import '../Nav/navbar.css'
import { BsHouse } from "react-icons/bs";
import { BsFolder } from "react-icons/bs";
import Box from '@mui/material/Box';
import { BsSuitcaseLg } from "react-icons/bs";
import BasicCard from '../Card/Card'
import { BsWrenchAdjustable } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";
import Home from '../Home/Home';
function Navbar() {
  return (
    <>
    <div className='jjjj'>
    <div className='head'>  
    <Link to="/"><BsHouse className='new' /></Link>  
        <Link to="/project"><BsFolder className='new'/></Link> 
        <Link to="/experience"><BsSuitcaseLg className='new'/></Link>
        <Link to="/tools"><BsWrenchAdjustable className='new'/></Link>
        <Link to="/thoughts"><BsPencilSquare className='new'/></Link>
      

    </div>
    </div>
    <div>
    <Box sx={{display:'flex container1'}}>
       <div class="left-container">
      <Box className='card'>
     
        <BasicCard/>
      
      </Box>
      </div>
      </Box>
    </div>
    </>
  )
}

export default Navbar