import React, {useState} from 'react'
import './App.css';
import { ThemeProvider } from '@mui/material';
import {AppBar, Typography} from '@mui/material'
import { createTheme } from '@mui/material'
import red from '@mui/material/colors/red'
import SignIn from '../Login/Login'
import Copyright from '../Copyright/Copyright';
import Lobby from '../Lobby/Lobby';

const theme = createTheme({
  palette: {
    primary: red,
  },
})


function App() {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <AppBar position='static'>
        </AppBar>
        <Lobby />
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </React.Fragment>
    </ThemeProvider>
  );
}

export default App;
