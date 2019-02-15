import React, { Component } from 'react';
import styles from './profile.styles.css';
import { connect } from 'react-redux';
import moment from 'moment';
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBView,
  MDBMask,
  MDBCardFooter,
  MDBIcon,
  MDBContainer,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBFormInline,
  MDBAlert,
} from 'mdbreact';
import { getGraphics, getComparisons, getGoals, getPosts } from '@Models';

class Profile extends Component {
  componentDidMount() {
    this.props.loadGoals();
    this.props.loadPosts();
    this.props.loadComparisons();
    this.props.loadGraphics();
  }

  render() {
    const GOALS = this.props.goals.sort(function(a, b) {
      if (moment(a.deadline).valueOf() > moment(b.deadline).valueOf()) {
        return 1;
      } else {
        return -1;
      }
    });

    return (
      <div
        className="main"
        style={{
          width: ' 100%',
          minHeight: '100vh',
          height: '100%',
          marginTop: '100px',
          backgroundColor: '#1c2331',
          padding: '15px',
        }}>
        <MDBContainer fluid>
          <MDBRow>
            <MDBCol>
              <h2 className="text-left text-white h2-responsive">
                {this.props.user.name + ' ' + this.props.user.surname}
              </h2>
            </MDBCol>
          </MDBRow>

          {GOALS[0] ? (
            <MDBContainer
              style={{
                marginLeft: '0',
                width: '350px',
              }}
              className="my-3"
              fluid>
              <MDBAlert color="info" dismiss>
                <strong>Your Sooner Goal</strong> reaches its deadline{' '}
                {moment(GOALS[0].deadline)
                  .endOf('hours')
                  .fromNow()}
              </MDBAlert>
            </MDBContainer>
          ) : null}
          <p className="text-white h5-responsive">Your Goals</p>
          <hr className="my-3" />
          <MDBRow className="mb-4">
            {GOALS.map(g => {
              return (
                <MDBCol xl="3" md="6" className="my-2">
                  <MDBCard className="cascading-admin-card mt-2">
                    <div className={styles.adminUp}>
                      <MDBIcon icon="bullseye" className={styles.fa} />
                      <div className={styles.data}>
                        <p className={styles.p}>GOAL</p>
                        <h4>
                          <strong>{g.name}</strong>
                        </h4>
                      </div>
                    </div>
                    <MDBCardBody>
                      <div className="progress">
                        <div
                          aria-valuemax={100}
                          aria-valuemin={0}
                          aria-valuenow={g.progress}
                          className="progress-bar grey darken-2"
                          role="progressbar"
                          style={{ width: '' + g.progress + '%' }}
                        />
                      </div>
                      <MDBCardText>
                        It ends{' '}
                        {moment(g.deadline)
                          .endOf('hours')
                          .fromNow()}
                        {', Progress'}({g.progress}%)
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              );
            })}
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    ...props,
    logged: state.asyncReducer.isAuthenticated,
    user: state.asyncReducer.user,
    graphics: state.asyncReducer.graphics,
    goals: state.asyncReducer.goals,
    posts: state.asyncReducer.posts,
    comparisons: state.asyncReducer.comparisons,
  };
};

const mapDispatchToProps = {
  loadGraphics: getGraphics,
  loadGoals: getGoals,
  loadPosts: getPosts,
  loadComparisons: getComparisons,
};

export const ConnectedProfile = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);
