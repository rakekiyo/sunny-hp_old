import React from 'react';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import lightBlue from '@material-ui/core/colors/lightBlue';
import deepOrange from '@material-ui/core/colors/deepOrange';
import Header from './Header.js';
import ContentTop from './Contents.js';
import './fonts/setofont.css'

const theme = createTheme({
  palette: {
    primary: {
      main: lightBlue[200],
      contrastText: '#ffffff',
    },
    secondary: {
      main: deepOrange[100],
    },
  },
  typography: {
    fontFamily: 'SetoFont, Arial'
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
        <ContentTop />
      </ThemeProvider>
    </div>
  );
}

export default App;
