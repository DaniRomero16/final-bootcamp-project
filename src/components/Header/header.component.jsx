import React, { PureComponent } from 'react';
import styles from './header.styles.css';
import { Typography } from '@material-ui/core';

import { logo } from '@Assets';

export class Header extends PureComponent {
  render() {
    return (
      <div className={styles.container}>
        <img className={styles.logo} src={logo} />
        <Typography variant="h4" color="secondary">
          Online personal <b>tools</b> and <b>diary</b>
        </Typography>
        <Typography color="secondary" variant="button">
          Start your personal development
        </Typography>
      </div>
    );
  }
}
