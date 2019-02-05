import React, { Component, Fragment } from 'react';
import styles from './navbar.styles.css';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, Avatar } from '@material-ui/core';

import { logo2 } from '@Assets';

export class NavBar extends Component {
  render() {
    return (
      <AppBar position="absolute">
        <Toolbar>
          <img alt="logo" src={logo2} className={styles.logo} />
        </Toolbar>
      </AppBar>
    );
  }
}
