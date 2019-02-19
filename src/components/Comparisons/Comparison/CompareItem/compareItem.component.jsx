import React, { PureComponent } from 'react';
import {
  MDBListGroupItem,
  MDBBtn,
  MDBIcon,
  MDBModal,
  MDBModalHeader,
  MDBModalFooter,
} from 'mdbreact';

export class CompareItem extends PureComponent {
  state = {
    modal: false,
  };
  handleRemove = () => {
    this.setState({
      modal: !this.state.modal,
    });
    this.props.remove(this.props.item);
  };
  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };
  render() {
    return (
      <MDBListGroupItem
        style={{ backgroundColor: 'rgb(28, 35, 49)' }}
        className="z-depth-2 white-text d-flex justify-content-between align-items-center">
        <h6>{this.props.item.name}</h6>
        <MDBBtn size="sm" color="blue-grey" onClick={this.toggle}>
          <MDBIcon icon="trash-alt" />
        </MDBBtn>
        <MDBModal isOpen={this.state.modal} toggle={this.toggle} centered className="mt-5">
          <MDBModalHeader className="black-text" toggle={this.toggle}>
            Confirm deleting this Item
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
      </MDBListGroupItem>
    );
  }
}
