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
function Navbar({ children }) {
  return (
    <>
      <Box className='layout-wrapper' sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        minHeight: '100vh',
        bgcolor: '#0E0C0B',
        position: 'relative',
        overflowX: 'hidden' // Prevent any horizontal scrolling from background text
      }}>
        {/* Sidebar/Profile Section */}
        <Box className="left-container-wrapper" sx={{
          width: { xs: '100%', md: '28rem' },
          position: { xs: 'relative', md: 'fixed' },
          height: { xs: 'auto', md: '100vh' },
          p: { xs: 2, md: 3 },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10,
          backgroundColor: '#161312'
        }}>
          <BasicCard />
        </Box>

        {/* Main Content Area */}
        <Box className="main-content-wrapper" sx={{
          flexGrow: 1,
          ml: { xs: 0, md: '28rem' }, // Increased back slightly to ensure clear gap
          minWidth: 0,
          p: { xs: 2, md: 8 }, // Generous padding for premium feel
          display: 'flex',
          flexDirection: 'column'
        }}>
          {children}
          <div className='jjjj'>
            <div className='head'>
              <Link to="/"><BsHouse className='new' /></Link>
              <Link to="/project"><BsFolder className='new' /></Link>
              <Link to="/experience"><BsSuitcaseLg className='new' /></Link>
              <Link to="/tools"><BsWrenchAdjustable className='new' /></Link>
              <Link to="/thoughts"><BsPencilSquare className='new' /></Link>
            </div>
          </div>
        </Box>
      </Box>
    </>
  )
}

export default Navbar