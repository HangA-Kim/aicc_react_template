import { Avatar, Box, Card, CardContent, Grid, Stack, Typography, useMediaQuery } from '@mui/material'
import react from 'react'
import { globalColors } from '../../theme/globalColors'
import { features } from '../../constants/data'
import { globalSize } from '../../theme/globalSize'

const FeatureCard = () => {
  const isMobile = useMediaQuery(globalSize.mobileSize);
  const isTablet = useMediaQuery(globalSize.tabletSize);

  let size = 4
  if(isTablet) size = 6
  if(isMobile) size = 12
  console.log(size)
  return (
    <div>
      <Grid container>
      {
        features.map( (item, idx) => (
          <Grid xs={size}>
            <Card sx={{ display: 'flex', 
              border:'1px solid #333', 
              borderRadius:'10px', 
              margin:'20px', 
              padding:'20px'}} >
              {
                (idx%2===0) && (
                  <Avatar 
                    sx={{
                      bgcolor: '#222', 
                      color:globalColors.purple[500],
                      width:'100px', 
                      height:'100px',
                      alignSelf:'center',
                      marginLeft:'10px'}}>
                        {item.icon}
                    </Avatar>
                )
              }
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography component="div" variant="h5" marginBottom={'20px'}>
                    {item.text}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" component="div" textAlign={idx%2?'right':'left'}>
                    {item.description}<br/>{item.description}<br/>{item.description}
                  </Typography>
                </CardContent>
              </Box> 
              {
                (idx%2===1) && (
                  <Avatar 
                    sx={{
                      bgcolor: '#222', 
                      color:globalColors.purple[500],
                      width:'100px', 
                      height:'100px',
                      alignSelf:'center',
                      marginRight:'10px'}}>
                        {item.icon}
                    </Avatar>
                )
              }
            </Card>
          </Grid>
        ))
      }
      </Grid>
    </div>
  )
}

export default FeatureCard
