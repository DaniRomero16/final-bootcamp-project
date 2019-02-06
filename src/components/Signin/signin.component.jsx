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
        <MDBRow center>
          <MDBCol md="6">
            <MDBCard>
              <MDBCardBody>
                <MDBCardHeader className="form-header deep-blue-gradient rounded">
                  <h3 className="my-3">
                    <MDBIcon icon="lock" /> Login:
                  </h3>
                </MDBCardHeader>
                <label htmlFor="defaultFormEmailEx" className="grey-text font-weight-light">
                  Your email
                </label>
                <input type="email" id="defaultFormEmailEx" className="form-control" />

                <label htmlFor="defaultFormPasswordEx" className="grey-text font-weight-light">
                  Your password
                </label>
                <input type="password" id="defaultFormPasswordEx" className="form-control" />

                <div className="text-center mt-4">
                  <MDBBtn color="deep-orange" className="mb-3" type="submit">
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
