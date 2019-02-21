import React, { Component } from 'react';
import { Header } from '@Components';
import { MDBRow, MDBContainer, MDBCol, MDBFooter, MDBIcon } from 'mdbreact';
import { diary, graph, nodejs, goal, redux, mdb, mysql, express, tasks } from '@Assets';
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
                  If you just need a site to write and save anything, you might find here the right
                  place to do it, just choose a title and write whatever you want in your post and
                  Mindnote will keep them and the date you wrote it.
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
                  Useful and graphic tool for keeping track of everything you want diary by creating
                  a new graphic and coming everytime you want to add a new progress point from
                  Excellent to Horrible and you will see your progress in a very simple way.
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
          <MDBRow center className="my-5 p-4">
            <MDBCol className=" my-5" sm="12" md="7" middle>
              <blockquote className={styles.blockquoter}>
                <p className="bq-title h3-responsive" style={{ color: '#02f4d0' }}>
                  Tasks
                </p>
                <p>
                  Administrate your projects or your diary life easily by tracking the tasks you
                  have To Do, Pending and Completed with this easy and user-friendly tool. Just pick
                  a color and a name for your new task and drag them between columns.
                </p>
              </blockquote>
            </MDBCol>
            <MDBCol className=" my-5" sm="12" md="3" middle>
              <img src={tasks} className={styles.diaryr} />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <MDBFooter color="elegant-color-dark" className="font-small pt-4 mt-4">
          <MDBContainer className="text-center text-md-left">
            <h3 className="title mb-4 h3-responsive">Developed With:</h3>
            <MDBRow center>
              <MDBCol md="4">
                <h5 className="title h5-responsive">Front-End</h5>
                <MDBRow>
                  <MDBCol className="mx-2" md="3">
                    <MDBIcon fab icon="react" size="4x" className="cyan-text my-3" />
                  </MDBCol>
                  <MDBCol className="mx-2 p-1" md="3">
                    <img src={redux} style={{ width: '100px' }} />
                  </MDBCol>
                  <MDBCol className="mx-2 p-1" md="3">
                    <img src={mdb} style={{ width: '100px' }} />
                  </MDBCol>
                  <MDBCol md="1" />
                </MDBRow>
              </MDBCol>
              <MDBCol md="6">
                <h5 className="title h5-responsive">Back-End</h5>
                <MDBRow>
                  <MDBCol className="mx-2" md="3">
                    <img src={nodejs} style={{ width: '90px', marginTop: '10px' }} />
                  </MDBCol>
                  <MDBCol className="mx-1" md="3">
                    <img src={mysql} style={{ width: '100px' }} />
                  </MDBCol>
                  <MDBCol className="mx-2 p-1" md="3">
                    <img src={express} style={{ width: '80px' }} />
                  </MDBCol>
                  <MDBCol md="1" />
                </MDBRow>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <div className="footer-copyright text-center py-3">
            <MDBContainer fluid>
              &copy; {new Date().getFullYear()} <a href="/contact"> Daniel Romero Muñoz </a>
            </MDBContainer>
          </div>
        </MDBFooter>
      </div>
    </div>
  );
};
