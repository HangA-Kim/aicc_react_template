import { globalColors } from '../theme/globalColors';
import styled from '@emotion/styled';
import { 
  Box, } from '@mui/material'

function getBorder(isDark:string) {
  return isDark==='true'?`1px solid ${globalColors.White}`:`1px solid #ccc`
}

function getBackgound(isDark:string) {
  return isDark==='true'?`${globalColors.purple['400']}`:'#6495ED'
}

interface authLinkProps {
  isoutline: string,
  isdark: string,
}
export const CustomBox = styled(Box)(({isoutline, isdark}:authLinkProps) => ({
  border: isoutline ==='true'?getBorder(isdark):'',
  borderRadius: '5px',
  paddingLeft: '10px',
  paddingRight: '10px',
  paddingTop: '5px',
  paddingBottom: '5px',
  background:isoutline ==='true'?'':getBackgound(isdark),
  marginLeft: '10px',
  fontSize: '14px',
  fontWeight: 'bold',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))