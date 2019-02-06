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
      main: '#ffffff',
    },
  },
  typography: {
    useNextVariants: true,
  },
});
// Import global resources
import { NavBar } from '@Components';
import { FrontPage, Login } from '@Routes';

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
          <Route exact path="/login" component={Login} />
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}
