import React, { Component } from 'react';

import styles from './login.styles.css';

import { SignIn, ConnectedSignUp } from '@Components';

export class Login extends Component {
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
        break;
      case 2:
        return <SignIn prevStep={this.prevStep} />;
        break;
      default:
        return <div />;
        break;
    }
  }
}
