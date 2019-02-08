import React, { Component } from 'react';
import { Progress } from 'react-sweet-progress';
import {
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBModalFooter,
  MDBContainer,
  MDBModalBody,
  MDBModalHeader,
  MDBModal,
  Progress as Pro,
} from 'mdbreact';
import moment from 'moment';

import './goal.css';
import styles from './goal.css';

export class Goal extends Component {
  state = {
    modal: false,
  };
  handleRemove = () => {
    this.props.remove(this.props.goal.goal_id);
    this.setState({
      modal: !this.state.modal,
    });
  };

  handleUpdate = action => () => {
    let newGoal = {};
    if (action === '+') {
      newGoal = {
        ...this.props.goal,
        progress: this.props.goal.progress + 10,
      };
    } else {
      newGoal = {
        ...this.props.goal,
        progress: this.props.goal.progress - 10,
      };
    }

    this.props.update(newGoal);
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };
  render() {
    return (
      <MDBRow className="my-5 mx-4">
        <MDBCol size="12" className="z-depth-2 p-5 white-text">
          <h3 className="h3-responsive">
            {this.props.goal.name}
            <p className=" text-right">
              DEADLINE: {moment(this.props.goal.deadline).format('MMMM Do YYYY')}
            </p>
            <MDBBtn size="sm" flat className="text-right" onClick={this.toggle}>
              <MDBIcon icon="trash-alt" className="" />
            </MDBBtn>
          </h3>
          <MDBBtn
            size="m"
            outline
            color="warning"
            className=""
            disabled={this.props.goal.progress === 0}
            onClick={this.handleUpdate('-')}>
            <MDBIcon icon="minus" className="" />
          </MDBBtn>
          <MDBBtn
            size="m"
            outline
            color="info"
            disabled={this.props.goal.progress === 100}
            onClick={this.handleUpdate('+')}>
            <MDBIcon icon="plus" className="" />
          </MDBBtn>
          <hr className="my-5" />
          <MDBModal isOpen={this.state.modal} toggle={this.toggle} position="bottom">
            <MDBModalHeader className="black-text" toggle={this.toggle}>
              Confirm deleting this Goal
            </MDBModalHeader>

            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={this.toggle}>
                Cancel
              </MDBBtn>
              <MDBBtn className="btn btn-outline-red" onClick={this.handleRemove}>
                Confirm
                <MDBIcon icon="times" className="ml-2" />
              </MDBBtn>
            </MDBModalFooter>
          </MDBModal>
          <p className="text-justify text-responsive">{this.props.goal.content}</p>
          <Progress className={styles.hola} percent={this.props.goal.progress} />
        </MDBCol>
      </MDBRow>
    );
  }
}
