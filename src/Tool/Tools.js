import React from 'react'
import ToolCard from '../component/Card/ToolCard'
import Box from '@mui/material/Box';
function Tools() {
  return (
    <Box sx={{
      ml: { xs: 0, md: '5rem' },
      mt: { xs: '2rem', md: '5rem' },
      p: { xs: 2, md: 0 }
    }}>
      <ToolCard />
    </Box>
  )
}

export default Tools