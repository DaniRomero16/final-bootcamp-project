// Import libraries
import React, { Component } from 'react';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Store } from '@Models';
// Import global resources
import { ConnectedNavBar } from '@Components';
import { FrontPage, ConnectedLogin, Profile } from '@Routes';
import PrivateRoute from './privateroute';

// Import local resources
import styles from './router.styles.css';
const token = localStorage.getItem('Authorization');
Store.dispatch({
  payload: { token: token },
  type: 'GET_TOKEN',
});
///////////// Component ////////////////
export class Router extends Component {
  render() {
    return (
      <Provider store={Store}>
        <BrowserRouter>
          <React.Fragment>
            <ConnectedNavBar />
            <Route exact path="/" component={FrontPage} />
            <Route exact path="/login" component={ConnectedLogin} />
            <Switch>
              <PrivateRoute path="/profile" component={Profile} />
            </Switch>
          </React.Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
}
