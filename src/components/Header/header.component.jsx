import React, { PureComponent } from 'react';
import styles from './header.styles.css';
import { Typography } from '@material-ui/core';

import { logo } from '@Assets';

export class Header extends PureComponent {
  render() {
    return (
      <div className={styles.container}>
        <img className={styles.logo} src={logo} />
        <Typography variant="h4">Online personal tools and diary</Typography>
        <Typography variant="button">Start your personal development</Typography>
      </div>
    );
  }
}
