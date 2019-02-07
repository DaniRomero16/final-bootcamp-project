// Import libraries
import React, { Component } from 'react';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Store } from '@Models';
// Import global resources
import { ConnectedNavBar } from '@Components';
import { FrontPage, ConnectedLogin, Profile } from '@Routes';

// Import local resources
import styles from './router.styles.css';

///////////// Component ////////////////
export class Router extends Component {
  componentWillMount() {
    const token = localStorage.getItem('Authorization');
    Store.dispatch({
      payload: { token: token },
      type: 'GET_TOKEN',
    });
  }

  render() {
    return (
      <Provider store={Store}>
        <BrowserRouter>
          <React.Fragment>
            <ConnectedNavBar />
            <Route exact path="/" component={FrontPage} />
            <Route
              exact
              path="/login"
              component={Store.getState().asyncReducer.isAuthenticated ? FrontPage : ConnectedLogin}
            />
            <Route
              path="/profile"
              component={Store.getState().asyncReducer.isAuthenticated ? Profile : ConnectedLogin}
            />
          </React.Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
}
