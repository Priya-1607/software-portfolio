import React from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ToolCard from '../Card/ToolCard';
function PremiumTools() {
  return (
    <Box sx={{
      mt: { xs: '2rem', md: '5rem' },
      ml: { xs: 0, md: '5rem' },
      p: { xs: 2, md: 0 }
    }}>
      <div>
        <Typography variant="h1" sx={{ color: 'white', fontWeight: 800, fontSize: { xs: '3rem', md: '5rem' } }}>
          PREMIUM
        </Typography>
        <Typography variant="h1" sx={{ color: '#353334', fontWeight: 800, fontSize: { xs: '3rem', md: '5rem' } }}>
          TOOLS
        </Typography>


        <ToolCard />
      </div>
    </Box>
  )
}

export default PremiumTools