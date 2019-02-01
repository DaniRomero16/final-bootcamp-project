// Import libraries
import React, { Component } from 'react';

// Import global resources
import { logo } from '@Assets';
import { Text } from '@Components';

// Import local resources
import styles from './router.styles.css';

///////////// Component ////////////////
export class Router extends Component {
  handdleStore = () => {
    console.log('Click ver store');
  };

  handdleDispatch = () => {
    console.log('Click Lanzar accion');
  };

  render() {
    return (
      <div className={styles.container}>
        <img src={logo} className={styles.image} />
        <h1 className={styles.title}>Bootcamp CodeSpace - Redux</h1>
        <div className={styles.subContainer}>
          <a onClick={this.handdleStore} className={styles.button}>
            Ver el Store
          </a>
          <a onClick={this.handdleDispatch} className={styles.button}>
            Lanzar Acción
          </a>
        </div>
        <div className={styles.text}>
          <Text />
        </div>
      </div>
    );
  }
}
