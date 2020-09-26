import React from 'react';
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from '@material-ui/core';

import Header from './ui/Header';
import theme from './ui/Theme';

const App = props => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        Hello
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
