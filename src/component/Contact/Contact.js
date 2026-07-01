import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';
import { Button as BaseButton, buttonClasses } from '@mui/base/Button';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please fill in all required fields.');
      return;
    }

    setLoading(true);
    setStatus('Sending...');

    // Simple simulation of submission
    // Real implementation would use fetch('https://formspree.io/f/your-id', { ... })
    setTimeout(() => {
      console.log('Form Submitted:', formData);
      setLoading(false);
      setStatus('Success! Your message has been sent.');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setStatus(''), 5000);
    }, 1500);
  };



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
        box-shadow: 0 2px 1px ${theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(45, 45, 60, 0.2)'
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
    <Box sx={{
      mt: { xs: '2rem', md: '5rem' },
      p: { xs: 2, md: 0 }
    }}>
      <form onSubmit={handleSubmit}>
        <Typography variant="h1" sx={{ color: 'white', fontWeight: 800, fontSize: { xs: '3rem', md: '5rem' } }}>
          LET'S WORK
        </Typography>
        <Typography variant="h1" sx={{ color: '#353334', fontWeight: 800, fontSize: { xs: '3rem', md: '5rem' } }}>
          TOGETHER
        </Typography>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, mt: 4 }}>
          <FormControl variant="standard" sx={{ color: 'white', gap: 2, flex: 1, minWidth: '280px' }}>
            Name
            <TextField
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder='Your Name'
              required
              variant="filled"
              sx={{ backgroundColor: '#353334', borderRadius: '10px', height: '40px', width: '80%', color: 'white', px: 2 }}
            />
          </FormControl>

          <FormControl variant="standard" sx={{ color: 'white', gap: 2, flex: 1, minWidth: '280px' }}>
            Email
            <TextField
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder='Your@email.com'
              required
              variant="filled"
              sx={{ backgroundColor: '#353334', borderRadius: '10px', height: '40px', width: '80%', color: 'white', px: 2 }}
            />
          </FormControl>
        </Box>

        <FormControl variant="standard" sx={{ color: 'white', gap: 2, pt: 4, width: '92%' }}>
          Phone Number
          <TextField
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder='XXXXXXXXXX'
            variant="filled"
            sx={{ backgroundColor: '#353334', borderRadius: '10px', height: '40px', width: '100%', color: 'white', px: 2 }}
          />
        </FormControl>

        <FormControl variant="standard" sx={{ color: 'white', gap: 2, pt: 4, width: '96%' }}>
          Message
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            aria-label="minimum height"
            minRows={3}
            placeholder="Message"
            required
            sx={{ backgroundColor: '#323031', width: '100%', borderRadius: '10px', color: 'white' }}
          />
        </FormControl>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, flexWrap: 'wrap' }}>
          <Button
            type="submit"
            disabled={loading}
            sx={{
              display: 'flex',
              mt: 4,
              mb: 4,
              justifyContent: 'center',
              width: { xs: '50%', md: '200px' },
              opacity: loading ? 0.7 : 1
            }}
          >
            <Typography sx={{ color: 'white' }}>{loading ? 'Sending...' : 'Submit'}</Typography>
          </Button>

          {status && (
            <Typography sx={{
              color: status.includes('Success') ? '#F36C38' : 'white',
              fontWeight: 600
            }}>
              {status}
            </Typography>
          )}
        </Box>
      </form>
    </Box>
  )
}

export default Contact