import React, { PureComponent } from 'react';
import styles from './Goals.styles.css';
import { connect } from 'react-redux';

import { getGoals, addGoal, removeGoal, updateGoal as up } from '@Models';

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
} from 'mdbreact';

class Goals extends PureComponent {
  state = {
    modal: false,
    title: '',
    content: '',
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
      deadline: 'NULL',
    });
    this.setState({
      modal: !this.state.modal,
      title: '',
      content: '',
    });
  };
  handleRemoveGoal = id => {
    this.props.deleteGoal(id);
    this.props.loadGoals();
  };

  handleGoalProgress = goal => {
    console.log('aqui llego');
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
      <div className={styles.container}>
        <MDBContainer className="white-text">
          <MDBBtn flat size="lg" onClick={this.toggle}>
            New Goal <MDBIcon icon="plus" className="ml-3" />
          </MDBBtn>
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
                      <label htmlFor="content" className="grey-text font-weight-light">
                        Goal content
                      </label>
                      <textarea
                        value={this.state.content}
                        onChange={this.handleChange('content')}
                        type="text"
                        id="content"
                        className="form-control"
                        rows="7"
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
          {this.props.goals.map(p => (
            <Goal
              key={p.goal_id}
              update={this.handleGoalProgress}
              goal={p}
              remove={this.handleRemoveGoal}
            />
          ))}
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
