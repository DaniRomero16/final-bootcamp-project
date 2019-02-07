import React, { PureComponent } from 'react';
import styles from './goals.styles.css';
import { connect } from 'react-redux';

import { logo } from '@Assets';

class Goals extends PureComponent {
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

const mapStateToProps = (state, props) => {
  return {
    ...props,
    logged: state.asyncReducer.isAuthenticated,
    user: state.asyncReducer.user,
  };
};

const mapDispatchToProps = {};

export const ConnectedGoals = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Goals);
