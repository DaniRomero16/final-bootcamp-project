import React, { PureComponent } from 'react';
import styles from './header.styles.css';

import { logo } from '@Assets';

export class Header extends PureComponent {
  render() {
    return (
      <div className={styles.container}>
        <img className={styles.logo} src={logo} />
        <h1 className="text-white h1-responsive">
          Online personal <b>tools</b> and <b>diary</b>
        </h1>
        <h5 className="h4-responsive text-white">START YOUR PERSONAL DEVELOPMENT</h5>
        {/* <div className={styles.content}>
          <div className={styles.content__container}>
            <p className={styles.content__container__text}>Easy</p>

            <ul className={styles.content__container__list}>
              <li className={styles.content__container__list__item}>goals !</li>
              <li className={styles.content__container__list__item}>comparisons !</li>
              <li className={styles.content__container__list__item}>graphics !</li>
              <li className={styles.content__container__list__item}>and more !</li>
            </ul>
          </div>
        </div> */}
      </div>
    );
  }
}
