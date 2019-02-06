import React, { PureComponent } from 'react';
import styles from './signin.styles.css';
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
  render() {
    console.log(this.props);
    return (
      <MDBContainer className="mt-5">
        <MDBRow center className="mt-5">
          <MDBCol md="6" className="mt-5">
            <MDBCard className="mt-5">
              <MDBCardBody>
                <MDBCardHeader className="form-header my-3 deep-blue-gradient rounded">
                  <h3 className="my-3 text-center white-text">
                    <MDBIcon icon="lock" /> Login:
                  </h3>
                </MDBCardHeader>
                <label htmlFor="defaultFormEmailEx" className="grey-text font-weight-light">
                  Your email
                </label>
                <input type="email" id="defaultFormEmailEx" className="form-control" />

                <label htmlFor="defaultFormPasswordEx" className="mt-2 grey-text font-weight-light">
                  Your password
                </label>
                <input type="password" id="defaultFormPasswordEx" className="form-control" />

                <div className="text-center mt-4">
                  <MDBBtn color="purple" className="mb-3">
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
