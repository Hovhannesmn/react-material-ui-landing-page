import React from 'react';
import { ThemeProvider } from '@material-ui/core';

import Header from './ui/Header';
import theme from './ui/Theme';

const App = props => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      Hello
    </ThemeProvider>
  );
};

export default App;
