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
} from 'mdbreact';
import moment from 'moment';

import './post.css';

export class Post extends Component {
  state = {
    modal: false,
  };
  handleRemove = () => {
    this.props.remove(this.props.post.post_id);
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
    return (
      <MDBRow className="my-5 mx-4">
        <MDBCol size="12" className="z-depth-2 p-5">
          <h3 className="h3-responsive">
            {this.props.post.name}
            <p className="font-weight-lighter">
              {moment(this.props.post.date).format('MMMM Do YYYY, h:mm:ss a')}
            </p>
            <MDBBtn size="sm" flat className="text-right" onClick={this.toggle}>
              <MDBIcon icon="trash-alt" className="" />
            </MDBBtn>
          </h3>
          <hr className="my-5" />
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
          <p className="text-justify text-responsive">{this.props.post.content}</p>
        </MDBCol>
      </MDBRow>
    );
  }
}
