import React from 'react'
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import CardActionArea from '@mui/material/CardActionArea';
import '../Card/ToolsCard.css'

const toolsData = [
  { name: 'Javascript', category: 'Programming Language', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfT_-hQqDG2bhUQoV2ACDkZNt4GXN0McNlnA&s' },
  { name: 'C++', category: 'Programming Language', img: 'https://img.icons8.com/color/512w/c-plus-plus-logo.png' },
  { name: 'HTML5', category: 'Markup Language', img: 'https://img.icons8.com/external-tal-revivo-color-tal-revivo/1200/external-html-5-is-a-software-solution-stack-that-defines-the-properties-and-behaviors-of-web-page-logo-color-tal-revivo.jpg' },
  { name: 'Python', category: 'Programming Language', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1280px-Python-logo-notext.svg.png' },
  { name: 'Bootstrap', category: 'Framework', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-v42H99SXvb8arSNytKFNFIMMDlTgjy2y0QIhgkhEww&s=10' },
  { name: 'Tailwindcss', category: 'Framework', img: 'https://www.okoone.com/wp-content/uploads/2024/10/tailwindcss-logo.png' },
  { name: 'Express', category: 'Framework', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPwlGiXsLjsbNDEBQ_fzEwxqLV3VNJIHL8z9SYZ1kb0PQbNXmqCYmm1DTdLwfCF1LDo-I&usqp=CAU' },
  { name: 'React Js', category: 'Library', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBLimkxKgVwum5XDrN89s2lmt_EFlBdJeItA&s' },
  { name: 'Material Ui', category: 'Library', img: 'https://img.icons8.com/color/1200/material-ui.jpg' },
  { name: 'Pandas', category: 'Library', img: 'https://media.licdn.com/dms/image/v2/D4D12AQEnWS4yh0PQxw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1708674183140?e=2147483647&v=beta&t=8XdE8THbnqwHJaHphUJcR9RMMxnheh4XTofQHuKCim4' },
  { name: 'NumPy', category: 'Library', img: 'https://miro.medium.com/v2/resize:fit:1001/1*vPezx00A1u0WAfS8e8wBXQ.png' },
  { name: 'DSA', category: '', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLueaRJsD38b32MAw93xzUa7Pftq_l8BUDOw&s' },
  { name: 'Visual Studio Code', category: 'Editor', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeD8zT_fQg01sUVft4rGb1ap7nWJ9CDWHYlPgitsVhfRFUK-F5RSnJvBcxn1lgSPHsgHU&usqp=CAU' },
  { name: 'Intellij', category: 'Editor', img: 'https://www.helenjoscott.com/wp-content/uploads/2020/09/1200px-IntelliJ_IDEA_Logo.png' },
  { name: 'Figma', category: 'Design Tool', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoUX5LMRa7atIsNfl0nP3DaUaV4URhV0PHfA&s' },
  { name: 'Adobe XD', category: 'Design Tool', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS80OChMU7lMUMwU7CVu4ZJl1irvee4jmFfjw&s' },
  { name: 'Postman', category: 'API Testing', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTae2oAaFbg8MFPpXE0onaZ7Rgv2LEf2ee0s80Ed5OgCqFnhcGugcmPOQqS&s=10' },
  { name: 'Mongodb', category: 'Database', img: 'https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png' },
  { name: 'CSS', category: 'Style Sheet', img: 'https://delta-dev-software.fr/wp-content/uploads/2024/05/CSS-Logo.png' },
  { name: 'Node Js', category: 'Runtime Environment', img: 'https://miro.medium.com/v2/resize:fit:900/1*TY9uBBO9leUbRtlXmQBiug.png' },
  { name: 'Type Script', category: 'JavaScript with syntax', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIyRcCSscntSgQBNW6RLokUKIRQ975HkHJaw&s' },
  { name: 'Redux', category: 'Library', img: 'https://miro.medium.com/v2/resize:fit:500/1*tOI6UC5EaS2fPItCesI-AQ.png' },
  { name: 'Next Js', category: 'Framework', img: 'https://miro.medium.com/v2/resize:fit:720/1*_bJ2z2NRfTncHAv5UjUxwA.jpeg' },
  { name: 'Docker', category: 'Platform', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3xpkFPJLkVE2ZS4sg3VNKDR3qyiPWkiH2PuoVyIBK4Pd_FJjXmgmikUc5&s=10' },
];

function ToolCard() {
  return (
    <Box sx={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: 3,
      justifyContent: 'center',
      p: { xs: 1, md: 0 }
    }}>
      {toolsData.map((tool, index) => (
        <Card key={index} className='button' sx={{
          flex: { xs: '1 1 100%', sm: '1 1 250px', md: '0 1 300px' },
          backgroundColor: '#161312',
          borderRadius: '12px',
          border: '1px solid #1c1a19'
        }}>
          <CardActionArea>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <img src={tool.img} alt={tool.name} className='image' style={{ width: '50px', height: '50px', borderRadius: '8px' }} />
                <Box>
                  <Typography sx={{ color: 'white', fontSize: '1rem', fontWeight: 700 }}>
                    {tool.name}
                  </Typography>
                  <Typography sx={{ color: '#6A6B6E', fontSize: '0.85rem', fontWeight: 600 }}>
                    {tool.category}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  )
}

export default ToolCard