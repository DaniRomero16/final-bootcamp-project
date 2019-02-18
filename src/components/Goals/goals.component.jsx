import React, { PureComponent } from 'react';
import styles from './Goals.styles.css';
import { connect } from 'react-redux';

import { getGoals, addGoal, removeGoal, updateGoal as up } from '@Models';
import { goals } from '@Assets';
import { Goal } from '@Components';
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalHeader,
  MDBModalBody,
  MDBModalFooter,
  MDBIcon,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBView,
  MDBMask,
} from 'mdbreact';

class Goals extends PureComponent {
  state = {
    modal: false,
    title: '',
    content: '',
    deadline: null,
  };
  componentDidMount() {
    this.props.loadGoals();
  }

  handleChange = input => e => {
    const value = e.target.value;
    this.setState({ [input]: value });
  };

  handleNewGoal = () => {
    this.props.newGoal({
      name: this.state.title,
      content: this.state.content,
      progress: 0,
      deadline: this.state.deadline,
    });
    this.setState({
      modal: !this.state.modal,
      title: '',
      content: '',
      deadline: null,
    });
  };
  handleRemoveGoal = id => {
    this.props.deleteGoal(id);
    this.props.loadGoals();
  };

  handleGoalProgress = goal => {
    this.props.updateGoal(goal);
    this.props.loadGoals();
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };
  render() {
    return (
      <div
        className="main"
        style={{
          width: '100%',
          minHeight: '100vh',
          height: '100%',
          marginTop: '100px',
          backgroundColor: '#1c2331',
        }}>
        <div className={styles.container}>
          <MDBContainer className="white-text">
            <p className="text-white h1-responsive">Your Goals</p>
            <hr className="my-3" />
            <MDBRow>
              <MDBCol sm="12" md="4" className="mt-4">
                <MDBCard className="z-depth-2" style={{ width: '22rem' }}>
                  <MDBView>
                    <MDBCardImage className="img-fluid" src={goals} waves />
                    <MDBMask overlay="black-light" className="flex-center">
                      <h3 className=" h3-responsive white-text">Follow</h3>
                    </MDBMask>
                  </MDBView>
                  <MDBCardBody>
                    <MDBCardText>
                      Some quick example text to build on the card title and make up the bulk of the
                      card&apos;s content.
                    </MDBCardText>
                    <MDBBtn
                      color="elegant"
                      style={{
                        width: '100%',
                      }}
                      size="lg"
                      className="z-depth-3"
                      onClick={this.toggle}>
                      New Goal <MDBIcon icon="plus" className="ml-3" />
                    </MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol sm="12" md="8">
                {this.props.goals.map(p => (
                  <Goal
                    key={p.goal_id}
                    update={this.handleGoalProgress}
                    goal={p}
                    remove={this.handleRemoveGoal}
                  />
                ))}
              </MDBCol>
            </MDBRow>

            <MDBModal isOpen={this.state.modal} toggle={this.toggle} position="left">
              <MDBModalHeader className="black-text" toggle={this.toggle}>
                Fill the New Goal info:
              </MDBModalHeader>
              <MDBModalBody className="black-text">
                <MDBContainer>
                  <MDBRow>
                    <MDBCol md="12">
                      <form>
                        <label htmlFor="title" className="grey-text font-weight-light">
                          Goal title
                        </label>
                        <input
                          value={this.state.title}
                          onChange={this.handleChange('title')}
                          type="text"
                          id="title"
                          className="form-control"
                        />
                        <br />
                        <label htmlFor="deadline" className="grey-text font-weight-light">
                          Goal Deadline
                        </label>
                        <input
                          value={this.state.deadline}
                          onChange={this.handleChange('deadline')}
                          type="date"
                          id="deadline"
                          className="form-control"
                        />
                        <br />
                        <label htmlFor="content" className="grey-text font-weight-light">
                          Goal content
                        </label>
                        <textarea
                          value={this.state.content}
                          onChange={this.handleChange('content')}
                          id="content"
                          className="form-control"
                          rows={4}
                        />
                        <div className="text-center py-4 mt-3" />
                      </form>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
              </MDBModalBody>
              <MDBModalFooter>
                <MDBBtn color="secondary" onClick={this.toggle}>
                  Close
                </MDBBtn>
                <MDBBtn className="btn btn-outline-purple" onClick={this.handleNewGoal}>
                  Confirm
                  <MDBIcon far icon="paper-plane" className="ml-2" />
                </MDBBtn>
              </MDBModalFooter>
            </MDBModal>
          </MDBContainer>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    ...props,
    logged: state.asyncReducer.isAuthenticated,
    user: state.asyncReducer.user,
    goals: state.asyncReducer.goals,
  };
};

const mapDispatchToProps = {
  loadGoals: getGoals,
  newGoal: addGoal,
  deleteGoal: removeGoal,
  updateGoal: up,
};

export const ConnectedGoals = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Goals);
