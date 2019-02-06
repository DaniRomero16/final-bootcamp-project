import React, { PureComponent } from 'react';
import styles from './header.styles.css';
import { Typography } from '@material-ui/core';

import { logo } from '@Assets';

export class Header extends PureComponent {
  render() {
    return (
      <div className={styles.container}>
        <img className={styles.logo} src={logo} />
        <h1 className="text-white">
          Online personal <b>tools</b> and <b>diary</b>
        </h1>
        <h5 className="h5-responsive text-white">START YOUR PERSONAL DEVELOPMENT</h5>
      </div>
    );
  }
}
