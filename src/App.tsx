import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home'
import Features from './components/Features'
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { useSelector } from "react-redux";
import { RootState } from './redux/store';
import { darkTheme, lightTheme } from './theme/theme';
import { ThemeProvider, Paper, Fab } from '@mui/material'
import Signin from './components/Auth/Signin';
import Signup from './components/Auth/Signup';
import ScrollToTop from 'react-scroll-to-top';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function App() {
  const theme = useSelector( (state:RootState) => state.theme)
  
  useEffect(() => {
    if(theme.darkTheme) {
      document.body.style.backgroundColor = darkTheme.palette.background.default
      document.body.style.color = darkTheme.palette.text.primary || '#ffffff'
    } else {
      document.body.style.backgroundColor = lightTheme.palette.background.default
      document.body.style.color = lightTheme.palette.text.primary || '#000000'
    }
  }, [theme.darkTheme])
  return (
    <ThemeProvider theme={theme.darkTheme? darkTheme: lightTheme}>
      <BrowserRouter>
        <Paper className="App">
          <NavBar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/features' element={<Features/>}/>
            <Route path='/signin' element={<Signin/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='*' element={<div>ERR! 404</div>}/>
          </Routes>
          <Footer/>
          <ScrollToTop smooth style={{background:'transparent'}} component={
            <Fab size='small' color='secondary' aria-label='add'>
              <KeyboardArrowUpIcon/>
            </Fab>}
          />
        </Paper>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App