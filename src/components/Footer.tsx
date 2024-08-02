import React from 'react'
import { communityLinks, platformLinks, resourcesLinks } from '../constants/data'
import { Grid } from '@mui/material'
import FooterContents from './FooterContents'

const Footer = () => {
  return (
      <Grid container sx={{justifyContent: 'space-between', padding:'30px'}}>
        <FooterContents title={'Resource'} links={resourcesLinks}/>
        <FooterContents title={'Platform'} links={platformLinks}/>
        <FooterContents title={'Community'} links={communityLinks}/>
      </Grid>
  )
}

export default Footer
