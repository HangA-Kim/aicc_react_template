import React from 'react'
import { styled } from '@mui/material/styles';
import { Card, useMediaQuery, CardContent, CardHeader, Avatar, Typography, ListItem, ListItemIcon, ListItemText } from '@mui/material';
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
  return (
    <div>
      <Div>Features</Div>
       
      <GradientText>
        Easily Build <span> Your Code</span>
      </GradientText>

      <Grid container xs={12} spacing={4}>
        {
          features.map( (item, idx) => (
            <Grid key={idx} xs={isMobile?6:4} lg={2}>
              <Card>
                <CardHeader avatar={
                  <Avatar sx={{bgcolor: '#111', color:globalColors.purple[500]}}>
                    {item.icon}
                  </Avatar>
                }
                title={item.text}
                />
                <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        }
      </Grid>
      {/* <Grid container xs={12}>
        {
          features.map( (item, idx) => (
            <Grid xs={4} key={idx}>
              <Card sx={{ maxWidth: 345 }}>
                <CardHeader 
                  avatar={item.icon}
                  title={item.text}
                  />
                <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        }
      </Grid> */}
    </div>
  )
}

export default FeaturesSection
