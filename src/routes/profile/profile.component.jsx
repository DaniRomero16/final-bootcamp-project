import React, { Component } from 'react';
import styles from './profile.styles.css';
import { connect } from 'react-redux';
import moment from 'moment';
import { Line, Pie } from 'react-chartjs-2';
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
  MDBCardHeader,
  MDBListGroupItem,
  MDBBadge,
  MDBListGroup,
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
    const COMPS = this.props.comparisons ? this.props.comparisons : [];
    const POSTS = this.props.posts
      ? this.props.posts.sort(function(a, b) {
          if (moment(a.date).valueOf() < moment(b.date).valueOf()) {
            return 1;
          } else {
            return -1;
          }
        })
      : [];
    const GRAPHIC = this.props.graphics ? this.props.graphics : [];
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
          <MDBRow>
            <MDBCol lg="6" md="12">
              <p className="text-white h5-responsive">Soon Goals</p>
              <hr className="my-3" />
              <MDBRow className="mb-4">
                {GOALS.map((g, ind) => {
                  if (ind < 2) {
                    return (
                      <MDBCol sm="6" className="my-2">
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
                  } else {
                    return null;
                  }
                })}
              </MDBRow>
            </MDBCol>
            <MDBCol lg="6" md="12">
              <p className="text-white h5-responsive">Recent Posts</p>
              <hr className="my-3" />
              <MDBRow>
                {POSTS.map((p, ind) => {
                  if (ind < 2) {
                    return (
                      <MDBCol sm="6">
                        <MDBCard style={{ width: '95%', marginTop: '1rem' }}>
                          <MDBCardHeader className={styles.negro} color="info">
                            {p.name}
                          </MDBCardHeader>
                          <MDBCardBody>
                            <MDBCardText>
                              {p.content.substr(0, 200)}
                              {'...'}
                            </MDBCardText>
                          </MDBCardBody>
                          <MDBCardFooter className={styles.negro} color="info">
                            {moment(p.date)
                              .startOf('hour')
                              .fromNow()}
                          </MDBCardFooter>
                        </MDBCard>
                      </MDBCol>
                    );
                  } else {
                    return null;
                  }
                })}
              </MDBRow>
            </MDBCol>
          </MDBRow>

          <p className="text-white h5-responsive">Your Graphics</p>
          <hr className="my-3" />
          <MDBRow className="my-3" around>
            {GRAPHIC[0] ? (
              <MDBCol md="12" lg="4" className="my-4">
                <MDBCard className="mb-4">
                  <MDBCardHeader>{GRAPHIC[0].name}</MDBCardHeader>
                  <MDBCardBody className={styles.fondoG}>
                    <Line
                      data={{
                        labels: GRAPHIC[0].items.map(i => moment(i.date).format('MMM DD')),
                        datasets: [
                          {
                            label: 'My Progress (7: Excellent, 1: Horrible)',
                            fill: false,
                            lineTension: 0.1,
                            backgroundColor: 'rgba(75,192,192,0.4)',
                            borderColor: 'rgba(75,192,192,1)',
                            borderCapStyle: 'butt',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'miter',
                            pointBorderColor: 'rgba(75,192,192,1)',
                            pointBackgroundColor: '#fff',
                            pointBorderWidth: 1,
                            pointHoverRadius: 5,
                            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                            pointHoverBorderColor: 'rgba(220,220,220,1)',
                            pointHoverBorderWidth: 2,
                            pointRadius: 1,
                            pointHitRadius: 10,
                            data: GRAPHIC[0].items.map(i => i.value),
                          },
                        ],
                      }}
                      options={{ responsive: true }}
                    />
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            ) : null}
            <MDBCol md="12" lg="4" className="my-4">
              <MDBCard className="mb-4">
                <MDBCardHeader>Your tools Usage</MDBCardHeader>
                <MDBCardBody className={styles.fondoG}>
                  <Pie
                    data={{
                      labels: ['Diary', 'Goals', 'Graphics', 'Comparisons', 'Lists'],
                      datasets: [
                        {
                          data: [POSTS.length, GOALS.length, GRAPHIC.length, COMPS.length, 0],
                          backgroundColor: [
                            '#F7464A',
                            '#46BFBD',
                            '#FDB45C',
                            '#949FB1',
                            '#4D5360',
                            '#ac64ad',
                          ],
                          hoverBackgroundColor: [
                            '#FF5A5E',
                            '#5AD3D1',
                            '#FFC870',
                            '#A8B3C5',
                            '#616774',
                            '#da92db',
                          ],
                        },
                      ],
                    }}
                    height={200}
                    options={{ responsive: true }}
                  />
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
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
