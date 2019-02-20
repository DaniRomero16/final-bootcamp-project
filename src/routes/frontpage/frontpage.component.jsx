import React, { Component } from 'react';
import { Header } from '@Components';
import { MDBRow, MDBContainer, MDBCol, MDBFooter } from 'mdbreact';
import { diary, graph, task, goal } from '@Assets';
import Fade from 'react-reveal/Fade';
import styles from './frontpage.styles.css';
export const FrontPage = () => {
  return (
    <div>
      <Header />
      <div
        className="main"
        style={{
          width: ' 100%',
          marginTop: '260px',
          backgroundColor: '#1c2331',
          height: '100%',
          color: 'white',
        }}>
        <MDBContainer className="p-5">
          <MDBRow className=" my-5 p-4" center>
            <MDBCol className=" my-5" sm="12" md="3" middle>
              <img src={diary} className={styles.diaryl} />
            </MDBCol>
            <MDBCol className=" my-5" sm="12" md="7" middle>
              <blockquote className={styles.blockquotel}>
                <p style={{ color: '#ffbb33' }} className="bq-title h3-responsive">
                  Diary
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores quibusdam
                  dignissimos itaque harum illo! Quidem, corporis at quae tempore nisi impedit
                  cupiditate perferendis nesciunt, ex dolores doloremque! Sit, rem, in?
                </p>
              </blockquote>
            </MDBCol>
          </MDBRow>

          <MDBRow center className="my-5 p-4">
            <MDBCol className=" my-5" sm="12" md="7" middle>
              <blockquote className={styles.blockquoter}>
                <p className="bq-title h3-responsive" style={{ color: '#02f4d0' }}>
                  Graphics
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores quibusdam
                  dignissimos itaque harum illo! Quidem, corporis at quae tempore nisi impedit
                  cupiditate perferendis nesciunt, ex dolores doloremque! Sit, rem, in?
                </p>
              </blockquote>
            </MDBCol>
            <MDBCol className=" my-5" sm="12" md="3" middle>
              <img src={graph} className={styles.diaryr} />
            </MDBCol>
          </MDBRow>
          <MDBRow center className="my-5 p-4">
            <MDBCol className=" my-5" sm="12" md="3" middle>
              <img src={goal} className={styles.diaryl} />
            </MDBCol>
            <MDBCol className=" my-5" sm="12" md="7" middle>
              <blockquote className={styles.blockquotel}>
                <p style={{ color: '#ffbb33' }} className="bq-title h3-responsive">
                  Goals
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores quibusdam
                  dignissimos itaque harum illo! Quidem, corporis at quae tempore nisi impedit
                  cupiditate perferendis nesciunt, ex dolores doloremque! Sit, rem, in?
                </p>
              </blockquote>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <MDBFooter color="blue" className="font-small pt-4 mt-4">
          <MDBContainer className="text-center text-md-left">
            <MDBRow>
              <MDBCol md="6">
                <h5 className="title">Footer Content</h5>
                <p>Here you can use rows and columns here to organize your footer content.</p>
              </MDBCol>
              <MDBCol md="6">
                <h5 className="title">Links</h5>
                <ul>
                  <li className="list-unstyled">
                    <a href="#!">Link 1</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Link 2</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Link 3</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Link 4</a>
                  </li>
                </ul>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <div className="footer-copyright text-center py-3">
            <MDBContainer fluid>
              &copy; {new Date().getFullYear()} Copyright:{' '}
              <a href="/contact"> Daniel Romero Muñoz </a>
            </MDBContainer>
          </div>
        </MDBFooter>
      </div>
    </div>
  );
};
