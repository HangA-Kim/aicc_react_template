import { 
  Stack, 
  Divider, 
  useMediaQuery, 
   } from '@mui/material'
import Diversity3Icon from '@mui/icons-material/Diversity3';
import { authLink, navItems } from '../constants/data';
import ModeCtrl from './ModeCtrl';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import hiddenStyle from '../styles/hiddens.module.css'
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import NavBarMenu from './NavBarMenu';
import { CustomBox } from '../styles/CustomBox.style';
import { globalSize } from '../theme/globalSize';
import { Link } from 'react-router-dom';
import { globalColors } from '../theme/globalColors';


const NavBar = () => {
  const isMobile = useMediaQuery(globalSize.mobileSize);
  const theme = useSelector( (state:RootState) => state.theme)

  return (
    <nav>
      <Grid container
        sx={{padding:'10px', justifyContent: 'space-between'}}>
        <Grid sx={{justifyContent: 'left'}}>
            <Stack alignItems={'center'} key={1}>
              <Diversity3Icon sx={{marginBottom:'5px'}}/>
              HangA.Dev
            </Stack>
        </Grid>
        <Grid sx={{alignContent:'center'}}
        className={isMobile?hiddenStyle['hidden']:hiddenStyle['visible']}>
          {
            navItems.map( (item, idx) =>(
              <Link 
                key={idx}
                to={item.to} 
                style={{marginLeft:'10px', 
                fontSize:'18px', textDecoration:'none',
                color:theme.darkTheme?globalColors.White:globalColors.Black}}>{item.label}
              </Link>
            ))
          }
        </Grid>
        <Grid sx={{alignContent:'center'}}>
          <Stack direction={'row'} >
            {
              authLink.map( (item, idx) =>(
                <CustomBox key={idx} 
                  isoutline={idx===0?'true':'false'}
                  isdark={theme.darkTheme?'true':'false'}
                  className={isMobile?hiddenStyle['hidden']:hiddenStyle['visible']}>
                <Link 
                  to={item.to}
                  style={{ textDecoration:'none',
                    color:theme.darkTheme?globalColors.White:globalColors.Black}}> 
                    {item.label} 
                </Link>
                </CustomBox>
              ))
            }
            <NavBarMenu isMobile={isMobile}/>
            <ModeCtrl/>
          </Stack>
        </Grid>
      </Grid>
      <Divider/>
    </nav>
  )
}

export default NavBar
