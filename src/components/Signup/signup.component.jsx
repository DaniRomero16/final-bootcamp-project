import React, { PureComponent } from 'react';
import styles from './signup.styles.css';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';

export class SignUp extends PureComponent {
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

  render() {
    return (
      <MDBContainer className="mt-5">
        <MDBRow center>
          <MDBCol lg="6" md="8" sm="12">
            <MDBCard>
              <MDBCardBody>
                <form>
                  <p className="h4 text-center py-4">Sign up</p>
                  <div className="grey-text">
                    <MDBInput
                      label="Your name"
                      icon="user"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                      onChange={this.handleChange('username')}
                      value={this.state.username}
                    />
                    <MDBInput
                      label="Your email"
                      icon="envelope"
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
                    <MDBBtn disabled={!this.state.formValid} color="cyan">
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
