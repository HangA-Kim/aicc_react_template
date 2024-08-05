import React from 'react'
import { communityLinks, platformLinks, resourcesLinks } from '../constants/data'
import { Divider, Grid } from '@mui/material'
import FooterContents from './FooterContents'

const Footer = () => {
  return (
    <div>
      <Divider sx={{marginTop:'50px'}}/>
      <Grid container sx={{justifyContent: 'space-between', padding:'30px'}}>
        <FooterContents title={'Resource'} links={resourcesLinks}/>
        <FooterContents title={'Platform'} links={platformLinks}/>
        <FooterContents title={'Community'} links={communityLinks}/>
      </Grid>
    </div>
  )
}

export default Footer
