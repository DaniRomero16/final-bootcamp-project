// Import libraries
import React, { Component } from 'react';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Store } from '@Models';
// Import global resources
import {
  ConnectedNavBar,
  ConnectedDiary,
  ConnectedGoals,
  ConnectedComparisons,
  ConnectedGraphics,
  ConnectedLists,
} from '@Components';
import { FrontPage, ConnectedLogin, ConnectedProfile, Contact } from '@Routes';
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
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/login" component={ConnectedLogin} />
            <Switch>
              <PrivateRoute path="/profile" component={ConnectedProfile} />
            </Switch>
            <Switch>
              <PrivateRoute path="/diary" component={ConnectedDiary} />
            </Switch>
            <Switch>
              <PrivateRoute path="/goals" component={ConnectedGoals} />
            </Switch>
            <Switch>
              <PrivateRoute path="/comparisons" component={ConnectedComparisons} />
            </Switch>
            <Switch>
              <PrivateRoute path="/graphics" component={ConnectedGraphics} />
            </Switch>
            <Switch>
              <PrivateRoute path="/lists" component={ConnectedLists} />
            </Switch>
          </React.Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
}
