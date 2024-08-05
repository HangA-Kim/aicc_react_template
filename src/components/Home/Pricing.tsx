import React from 'react'
import { pricingOptions } from '../../constants/data'
import { Avatar, Box, Button, Grid, Stack, Typography } from '@mui/material'
import { CheckCircle2 } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Pricing = () => {
  const navigate = useNavigate()
  function goToPage (path: string) {
    navigate(path)
  }

  return (
    <div>
      <Typography fontSize={'50px'} fontWeight={'bold'} margin={'50px'}>
      Pricing
      </Typography>
      <Grid container xs={12}>
      {
        pricingOptions.map ( (item, idx) => (
          <Grid xs={4} key={idx}>
            <Box border={1} borderRadius={'10px'} 
              margin={'10px'} padding={'15px'} 
              sx={{borderColor:'#333'}}>
            <Typography variant='h4' textAlign={'left'} >{item.title}</Typography>
            <Stack direction={'row'}>
            <Typography variant='h3' textAlign={'left'} marginTop={'10px'}>{item.price}</Typography>
            <Typography variant='subtitle1' alignContent={'end'}>/Month</Typography>
            </Stack>
            {item.features.map((feature, idx) => (
              <Stack key={idx} direction={'row'} marginTop={'10px'}>
                <Avatar sx={{bgcolor: '#111', color:'grey'}}>
                  <CheckCircle2/>
                </Avatar>
                <Typography variant='subtitle1' textAlign={'left'} alignContent={'center'}>{feature}</Typography>
              </Stack>
            ))}
            <Button variant='outlined' 
              sx={{color:'white', width:'100%', marginTop:'40px'}}
              onClick={(e) => goToPage(item.link)}>
                Subscribe
            </Button>
            </Box>
          </Grid>
        ))
      }
      </Grid>
    </div>
  )
}

export default Pricing
