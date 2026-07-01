import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ProjectCard from '../Card/ProjectCard';
import './../Project/project.css'
function Project() {
  return (
    <div>

      <Box sx={{
        mt: { xs: '2rem', md: '5rem' },
        p: { xs: 2, md: 0 }
      }}>
        <Typography variant="h1" sx={{ color: 'white', fontWeight: 800, fontSize: { xs: '2.5rem', md: '5rem' } }}>
          RECENT
        </Typography>
        <Typography variant="h1" sx={{
          color: 'transparent',
          WebkitTextStroke: '1px #353334',
          fontWeight: 800,
          fontSize: { xs: '4rem', md: '10rem' },
          lineHeight: 1,
          mt: -2,
          opacity: 0.5,
          zIndex: 1,
          userSelect: 'none',
          pointerEvents: 'none',
          maxWidth: '100%',
          overflow: 'hidden'
        }}>
          PROJECTS
        </Typography>
      </Box>

      <Box>

        <ProjectCard />
      </Box>
    </div>
  )
}

export default Project