import React, { Component } from 'react';
import { ProfNavbar, ConnectedDiary, ConnectedGoals, ConnectedComparisons } from '@Components';
import styles from './profile.styles.css';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';

export class Profile extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className={styles.cont}>
          <ProfNavbar />
          <Route path="/profile/diary" component={ConnectedDiary} />
          <Route path="/profile/goals" component={ConnectedGoals} />
          <Route path="/profile/comparisons" component={ConnectedComparisons} />
          <Route path="/profile/graphics" />
          <Route path="/profile/lists" />
        </div>
      </BrowserRouter>
    );
  }
}
