import React, { Component, Fragment } from 'react';
import styles from './navbar.styles.css';
import { Toolbar, Avatar, AppBar, Menu, Button, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { logo2 } from '@Assets';

export class NavBar extends Component {
  render() {
    return (
      <div className={styles.root}>
        <AppBar position="absolute">
          <Toolbar>
            <IconButton className={styles.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <img alt="logo" src={logo2} className={styles.logo} />
            <Typography variant="h6" color="inherit" className={styles.grow}>

            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
