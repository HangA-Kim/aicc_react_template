import React from 'react'
import codeImg from '../../assets/code.jpg'
import { GradientText } from './HeroSection'
import { checklistItems } from '../../constants/data'
import { CheckCircle2 } from 'lucide-react'
import { Avatar, Grid, Stack, Typography } from '@mui/material'

const WorkFlow = () => {
  return (
    <div>
      <div style={{margin:'50px'}}>
          <span style={{fontFamily:"'IBM plex Mono', monospace", fontSize:'50px', fontWeight:'bold'}}>
          Accelerate your{'  '} </span>
          <GradientText>coding workflow.</GradientText>        
      </div>
      <Stack direction={'row'}>
        <img src={codeImg} alt="Coding Screen" style={{width:'50%'}}/>
        <Grid container>
        {
          checklistItems.map( (item, idx) => (
            <div key={idx}>
              <Stack direction={'row'}>
                <Avatar sx={{bgcolor: '#111', color:'green'}}>
                  <CheckCircle2/>
                </Avatar>
                
                <Typography variant='h6'>{item.title}</Typography>
              </Stack>
              <Typography variant="body1" textAlign={'left'}>{item.description}</Typography>
              </div>
          ))
        }
        </Grid>
      </Stack>
    </div>
  )
}

export default WorkFlow
