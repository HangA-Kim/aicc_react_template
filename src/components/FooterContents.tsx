import React from 'react'
import { Box, Grid, Link, Stack } from '@mui/material'

type LinkType = {
  to:string,
  text:string
}

interface linksProps {
  title: string,
  links: LinkType[]
}

const FooterContents = ({title, links}:linksProps) => {
  return (
    <Grid item >
      <Box>
        <h3>{title}</h3>
        <Stack gap={'10px'} marginTop={'20px'}>
        {
          links.map( (item, idx) =>(
            <Link 
              key={idx}
              href={item.to} 
              sx={{marginLeft:'10px'}}>{item.text}
            </Link>
          ))
        }
        </Stack>
      </Box>
    </Grid>
  )
}

export default FooterContents
