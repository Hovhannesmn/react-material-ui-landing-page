import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/core';

import Header from './ui/Header';
import theme from './ui/Theme';

const App = props => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            component={props => (
              <div>Home</div>
            )}
          />
          <Route
            exact
            path="/services"
            component={props => (
              <div>Services</div>
            )}
          />
          <Route
            exact
            path="/revolution"
            component={props => (
              <div>The Revolution</div>
            )}
          />
          <Route
            exact
            path="/about"
            component={props => (
              <div>About Us</div>
            )}
          />
          <Route
            exact
            path="/contact"
            component={props => (
              <div>Contact Us</div>
            )}
          />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
