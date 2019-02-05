// Import libraries
import React, { Component } from 'react';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

// Color theme for Material components
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#282b2f',
    },
    secondary: {
      main: '#242543',
    },
    text: {
      primary: '#FFFFFF',
    },
  },
  typography: {
    useNextVariants: true,
  },
});
// Import global resources
import { NavBar } from '@Components';
import { FrontPage } from '@Routes';

// Import local resources
import styles from './router.styles.css';

///////////// Component ////////////////
export class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider theme={theme}>
          <NavBar />
          <Route exact path="/" component={FrontPage} />
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}
