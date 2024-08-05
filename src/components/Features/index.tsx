import React from 'react'
import codeImg from '../../assets/code.jpg'
import { Box } from '@mui/material'
import { GradientText } from '../Home/HeroSection';
import FeatureCard from './FeatureCard';

const index = () => {
  return (
    <div>
      <Box sx={{maxHeight:'200px', overflow:'hidden'}}> 
        <img src={codeImg} alt="Coding Screen" style={{maxWidth:'100%', objectFit:'cover'}}/>
      </Box>
      <Box margin={'50px'}>
        <GradientText>
          Easily Build <span> Your Code</span>
        </GradientText>
      </Box>
      <FeatureCard/>
    </div>
  )
}

export default index
