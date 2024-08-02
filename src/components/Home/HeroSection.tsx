import { Box, Link, Stack, Typography} from '@mui/material'
import React from 'react'
import { styled } from '@mui/material/styles';
import { heroLinks } from '../../constants/data';
import { CustomBox } from '../../styles/CustomBox.style';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import video1 from '../../assets/video1.mp4';
import video2 from '../../assets/video2.mp4';
import { globalColors } from '../../theme/globalColors';

export const GradientText = styled('span')<{
  color?: 'primary' | 'error' | 'success' | 'warning';
}>(({ theme, color = 'primary' }) => ({
  background:
    theme.palette.mode === 'dark'
      ? `linear-gradient(to bottom right, #fff, #fff, ${globalColors.purple[500]})`
      : `linear-gradient(to bottom right, #eee, #999, ${globalColors.purple[500]})`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontFamily:"'IBM plex Mono', monospace",
  fontSize:50,
  fontWeight:'bold'
}));

const HeroSection = () => {
  const theme = useSelector( (state:RootState) => state.theme)
  return (
    <div>
      <Box height={'200px'} alignContent={'center'}>
        <GradientText>
          AceDot Build Tools <span>for Developers</span>
        </GradientText>
      </Box>
      <Box padding={'30px'}>
        <Typography fontFamily={"'Noto Sans KR', sans-serif"} fontSize={14}>
          봄바람 휘날리며 흩날리는 벚꽃잎이 울려 퍼질 이 거리를 둘이 걸어요
          손 잡고 그대와 나 봄바람 휘날리며 흩날리는 벚꽃잎이 울려 퍼질 이 거리를 둘이 걸어요
          바람 불면 울렁이는 기분 탓에 두근대는 그대의 마음 그대의 눈빛 두근대는 걸
          봄바람 휘날리며 흩날리는 벚꽃잎이 울려 퍼질 이 거리를 둘이 걸어요
          손 잡고 그대와 나 봄바람 휘날리며 흩날리는 벚꽃잎이 울려 퍼질 이 거리를 둘이 걸어요
          바람 불면 울렁이는 기분 탓에 두근대는 그대의 마음 그대의 눈빛 두근대는 걸
        </Typography>
      </Box>
      <Stack direction={'row'} justifyContent={'center'}>
      {
        heroLinks.map( (item, idx) => (
          <CustomBox key={idx} 
                  isoutline={idx===1?'true':'false'}
                  isdark={theme.darkTheme?'true':'false'}>
            <Link 
              key={idx}
              href={item.to} 
              sx={{fontSize:'18px'}}>{item.text}
            </Link>
          </CustomBox>
        ))
      }
      </Stack>

      <Stack direction={'row'} gap={'2%'} margin={'30px'}>
        <video autoPlay muted loop width={'49%'}>
          <source src={video1}/>
        </video>
        <video autoPlay muted loop width={'49%'}>
          <source src={video2}/>
        </video>
      </Stack>
    </div>
  )
}

export default HeroSection
