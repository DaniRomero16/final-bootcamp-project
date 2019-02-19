import React, { Component } from 'react';
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
  MDBCard,
  MDBCardBody,
  MDBCardText,
} from 'mdbreact';
import moment from 'moment';

export class Task extends Component {
  state = {
    modal: false,
  };
  handleRemove = () => {
    this.props.remove(this.props.task.task_id);
    this.setState({
      modal: !this.state.modal,
    });
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };
  render() {
    const t = this.props.task;
    return (
      <React.Fragment>
        <MDBCard color={t.color} text="white" className="text-center z-depth-2 my-2">
          <a onClick={this.toggle} className="text-right mx-2">
            X
          </a>
          <MDBCardBody className="h4-responsive">{t.name}</MDBCardBody>
          <MDBCardText className="white-text" small muted>
            Last updated{' '}
            {moment(t.date)
              .startOf('minute')
              .fromNow()}
          </MDBCardText>
        </MDBCard>
        <MDBModal isOpen={this.state.modal} toggle={this.toggle} position="bottom">
          <MDBModalHeader className="black-text" toggle={this.toggle}>
            Confirm deleting this Post
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
      </React.Fragment>
    );
  }
}
