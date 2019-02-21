import React, { Component } from 'react';
import styles from './login.styles.css';
import { connect } from 'react-redux';
import { loginUser } from '@Models';

import { ConnectedSignUp, ConnectedSignIn } from '@Components';

class Login extends Component {
  state = {
    step: 1,
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  prevStep = () => {
    const { step } = this.state;

    this.setState({
      step: step - 1,
    });
  };

  render() {
    switch (this.state.step) {
      case 1:
        return <ConnectedSignUp nextStep={this.nextStep} />;
      case 2:
        return <ConnectedSignIn prevStep={this.prevStep} />;
      default:
        return <div />;
    }
  }
}

const mapStateToProps = (state, props) => {
  return {
    ...props,
    logged: state.asyncReducer.isAuthenticated,
  };
};

const mapDispatchToProps = {
  login: loginUser,
};

export const ConnectedLogin = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
