import React, { PureComponent } from 'react';

import styles from './task.css';
import {
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBModalFooter,
  MDBModalHeader,
  MDBModal,
  MDBListGroup,
  MDBModalBody,
  MDBContainer,
} from 'mdbreact';
import { CompareItem } from '@Components';
export class Task extends PureComponent {
  state = {
    modal: false,
  };
  handleRemove = () => {
    this.props.remove(this.props.list.list_id);
    this.setState({
      modal: !this.state.modal,
    });
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  handleUpdate = action => () => {};
  render() {
    return <MDBRow className="my-5 mx-4" />;
  }
}
