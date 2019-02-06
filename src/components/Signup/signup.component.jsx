import React, { PureComponent } from 'react';
import styles from './signup.styles.css';
import { connect } from 'react-redux';
import { registerUser } from '@Models';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBIcon,
} from 'mdbreact';

class SignUp extends PureComponent {
  state = {
    email: '',
    email2: '',
    username: '',
    password: '',
    formErrors: { email: '', password: '', email2: '' },
    emailValid: false,
    email2Valid: false,
    passwordValid: false,
    formValid: false,
  };
  handleChange = input => e => {
    const value = e.target.value;
    this.setState({ [input]: value }, () => {
      this.validateField(input, value);
    });
  };

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let email2Valid = this.state.email2Valid;
    let passwordValid = this.state.passwordValid;

    switch (fieldName) {
      case 'email':
        email2Valid = value === this.state.email;
        fieldValidationErrors.email2 = email2Valid ? '' : ' does not match';
        emailValid =
          value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) && value === this.state.email2;
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '' : ' is too short';
        break;
      case 'email2':
        email2Valid = value === this.state.email;
        fieldValidationErrors.email2 = email2Valid ? '' : ' does not match';
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        emailValid: emailValid,
        passwordValid: passwordValid,
        email2Valid: email2Valid,
      },
      this.validateForm,
    );
  }

  validateForm() {
    this.setState({
      formValid: this.state.emailValid && this.state.passwordValid && this.state.email2Valid,
    });
  }
  errorClass(error) {
    return error.length === 0 ? '' : 'has-error';
  }

  handleSubmit() {
    this.props.register({
      email: this.state.email,
      password: this.state.password,
      username: this.state.username,
    });
  }

  render() {
    return (
      <MDBContainer className="mt-5">
        <MDBRow center className="mt-5">
          <MDBCol lg="6" md="8" sm="12" className="mt-5">
            <MDBCard className="mt-5">
              <MDBCardBody>
                <form>
                  <MDBCardHeader className="form-header my-3 deep-blue-gradient rounded">
                    <h3 className="my-3 text-center white-text">
                      <MDBIcon icon="sign-in-alt" /> Sign Up:
                    </h3>
                  </MDBCardHeader>
                  <div className="grey-text">
                    <MDBInput
                      label="Your name"
                      icon="user"
                      group
                      type="text"
                      onChange={this.handleChange('username')}
                      value={this.state.username}
                    />
                    <MDBInput
                      label="Your email"
                      icon="envelope"
                      className="my-2"
                      group
                      type="text"
                      value={this.state.email}
                      onChange={this.handleChange('email')}
                    />
                    <MDBInput
                      label="Confirm your email"
                      icon="exclamation-triangle"
                      group
                      type="text"
                      value={this.state.email2}
                      onChange={this.handleChange('email2')}
                    />
                    <MDBInput
                      label="Your password"
                      icon="lock"
                      className="my-2"
                      group
                      type="password"
                      value={this.state.password}
                      onChange={this.handleChange('password')}
                    />
                    <div className="formErrors">
                      {Object.keys(this.state.formErrors).map((fieldName, i) => {
                        if (this.state.formErrors[fieldName].length > 0) {
                          return (
                            <p key={i}>
                              {fieldName} {this.state.formErrors[fieldName]}
                            </p>
                          );
                        } else {
                          return '';
                        }
                      })}
                    </div>
                  </div>
                  <div className="text-center py-4 mt-3">
                    <MDBBtn
                      disabled={!this.state.formValid}
                      color="cyan"
                      onClick={this.handleSubmit}>
                      Register
                    </MDBBtn>
                    <span className="blue-text m-3">Already signed?</span>
                    <MDBBtn onClick={this.props.nextStep} color="cyan">
                      Log In
                    </MDBBtn>
                  </div>
                </form>
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

const mapDispatchToProps = () => {
  register: registerUser;
};

export const ConnectedSignUp = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUp);
