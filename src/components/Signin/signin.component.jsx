import React, { PureComponent } from 'react';
import styles from './signin.styles.css';
import { connect } from 'react-redux';
import { loginUser } from '@Models';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBModalFooter,
  MDBIcon,
  MDBCardHeader,
  MDBBtn,
} from 'mdbreact';

export class SignIn extends PureComponent {
  state = {
    email: '',
    password: '',
  };

  handleChange = input => e => {
    const value = e.target.value;
    this.setState({ [input]: value });
  };

  handleLogin = () => {
    this.props.login({
      email: this.state.email,
      password: this.state.password,
    });
  };
  render() {
    return (
      <MDBContainer className="mt-5">
        <MDBRow center className="mt-5">
          <MDBCol md="6" className="mt-5">
            <MDBCard className="mt-5">
              <MDBCardBody>
                <MDBCardHeader className="form-header my-3 deep-blue-gradient rounded">
                  <h3 className="my-3 text-center white-text">
                    <MDBIcon icon="lock" /> Login
                  </h3>
                </MDBCardHeader>
                <label htmlFor="defaultFormEmailEx" className="grey-text font-weight-light">
                  Your email
                </label>
                <input
                  value={this.state.email}
                  onChange={this.handleChange('email')}
                  type="email"
                  id="email"
                  className="form-control"
                />

                <label htmlFor="defaultFormPasswordEx" className="mt-2 grey-text font-weight-light">
                  Your password
                </label>
                <input
                  value={this.state.password}
                  onChange={this.handleChange('password')}
                  type="password"
                  id="password"
                  className="form-control"
                />

                <div className="text-center mt-4">
                  <MDBBtn color="purple" className="mb-3" onClick={this.handleLogin}>
                    Login
                  </MDBBtn>
                </div>

                <MDBModalFooter>
                  <div className="font-weight-light">
                    <p className="font-medium grey-text d-flex justify-content-end">
                      Not a member?
                      <a onClick={this.props.prevStep} className="blue-text ml-1">
                        Sign Up
                      </a>
                    </p>
                    <p className="font-medium grey-text d-flex justify-content-end">
                      <a href="/login" className="blue-text ml-1">
                        Forgot your password?
                      </a>
                    </p>
                  </div>
                </MDBModalFooter>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    ...props,
  };
};

const mapDispatchToProps = {
  login: loginUser,
};

export const ConnectedSignIn = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignIn);
