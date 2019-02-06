// Import libraries
import React, { Component } from 'react';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Store } from '@Models';
// Import global resources
import { NavBar } from '@Components';
import { FrontPage, Login } from '@Routes';

// Import local resources
import styles from './router.styles.css';

///////////// Component ////////////////
export class Router extends Component {
  render() {
    return (
      <Provider store={Store}>
        <BrowserRouter>
          <React.Fragment>
            <NavBar />
            <Route exact path="/" component={FrontPage} />
            <Route exact path="/login" component={Login} />
          </React.Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
}
