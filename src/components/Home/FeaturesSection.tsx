import React from 'react'
import { styled } from '@mui/material/styles';
import { Card, useMediaQuery, CardContent, Avatar, Typography, Stack } from '@mui/material';
import { GradientText } from './HeroSection';
import { features } from '../../constants/data';
import Grid from '@mui/material/Unstable_Grid2';
import { globalSize } from '../../theme/globalSize';
import { globalColors } from '../../theme/globalColors';

const Div = styled('div')(({ theme }) => ({
  ...theme.typography.button,
  // backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
  color: globalColors.purple[500],
  fontWeight: 'bold',
  margin: '100px'
}));


const FeaturesSection = () => {
  const isMobile = useMediaQuery(globalSize.mobileSize);
  const isTablet = useMediaQuery(globalSize.tabletSize);

  let size = 4
  if(isTablet) size = 6
  if(isMobile) size = 12

  return (
    <div>
      <Div>Features</Div>
       
      <GradientText>
        Easily Build <span> Your Code</span>
      </GradientText>

      <Grid container xs={12} spacing={4} marginTop={'40px'} marginBottom={'50px'}>
        {
          features.map( (item, idx) => (
            <Grid key={idx} xs={size} lg={2}>
              <Card>
                <CardContent>
                <Stack direction={'row'}>
                  <Avatar sx={{bgcolor: '#111', color:globalColors.purple[500]}}>
                    {item.icon}
                  </Avatar>
                  <Typography variant='subtitle1'>{item.text}</Typography>
                </Stack>
                <Typography variant="body1" color="text.secondary" marginLeft={'45px'} textAlign={'left'}>
                  {item.description}
                </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        }
      </Grid>
    </div>
  )
}

export default FeaturesSection
