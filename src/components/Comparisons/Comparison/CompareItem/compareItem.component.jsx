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
    this.props.remove(this.props.item.item_id);
  };
  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };
  render() {
    console.log(this.props);
    return (
      <MDBListGroupItem className="d-flex justify-content-between align-items-center">
        {this.props.item.name}
        <MDBBtn size="sm" outline color="danger" onClick={this.toggle}>
          <MDBIcon icon="trash-alt" />
        </MDBBtn>
        <MDBModal isOpen={this.state.modal} toggle={this.toggle} position="top" className="mt-5">
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

export default CompareItem;
