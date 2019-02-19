import React, { PureComponent } from 'react';

import './comparison.css';
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
export class Comparison extends PureComponent {
  state = {
    modal: false,
    modal2: false,
    modal3: false,
    name: '',
  };
  handleRemove = () => {
    this.props.remove(this.props.comparison.comparison_id);
    this.setState({
      modal: !this.state.modal,
    });
  };
  handleRemoveItem = item => {
    this.props.removeItem(item);
  };

  handleNewItemLeft = () => {
    this.props.newItem({
      name: this.state.name,
      side: 'left',
      comparison_id: this.props.comparison.comparison_id,
    });
    this.setState({
      modal2: !this.state.modal2,
      name: '',
    });
  };
  handleNewItemRight = () => {
    this.props.newItem({
      name: this.state.name,
      side: 'right',
      comparison_id: this.props.comparison.comparison_id,
    });
    this.setState({
      modal3: !this.state.modal3,
      name: '',
    });
  };
  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };
  toggle2 = () => {
    this.setState({
      modal2: !this.state.modal2,
    });
  };
  toggle3 = () => {
    this.setState({
      modal3: !this.state.modal3,
    });
  };
  handleChange = input => e => {
    const value = e.target.value;
    this.setState({ [input]: value });
  };
  render() {
    console.log(this.props);
    return (
      <MDBRow className="my-3 mx-3">
        <MDBCol size="12" className="z-depth-2 p-4 white-text">
          <MDBRow>
            <MDBCol sm="12" className="justify-content-center">
              <h2 className="h2-responsive text-center">
                {this.props.comparison.name}
                <MDBBtn size="sm" flat className="text-right ml-4 z-depth-1" onClick={this.toggle}>
                  <MDBIcon icon="trash-alt" className="" />
                </MDBBtn>
              </h2>
            </MDBCol>
          </MDBRow>
          <hr className="my-3" />
          <MDBRow>
            <MDBCol sm="12" md="6" className="justify-content-center">
              <h5 className="h5-responsive text-center">
                {this.props.comparison.leftC}{' '}
                <MDBBtn color="blue-grey" size="sm" className="z-depth-1" onClick={this.toggle2}>
                  <MDBIcon icon="plus" className="ml-1" />
                </MDBBtn>
              </h5>
              <hr className="my-3" />
              <MDBListGroup style={{ width: '100%', color: 'black', fontSize: '1.5rem' }}>
                {this.props.comparison.left.map(i => {
                  return <CompareItem key={i.item_id} remove={this.handleRemoveItem} item={i} />;
                })}
              </MDBListGroup>
            </MDBCol>
            <MDBCol sm="12" md="6" className="justify-content-center">
              <h5 className="h5-responsive text-center">
                {this.props.comparison.rightC}
                <MDBBtn color="blue-grey" size="sm" className="z-depth-1" onClick={this.toggle3}>
                  <MDBIcon icon="plus" className="ml-1" />
                </MDBBtn>
              </h5>
              <hr className="my-3" />
              <MDBListGroup style={{ width: '100%', color: 'black', fontSize: '1.5rem' }}>
                {this.props.comparison.right.map(i => {
                  return <CompareItem key={i.item_id} remove={this.handleRemoveItem} item={i} />;
                })}
              </MDBListGroup>
            </MDBCol>
          </MDBRow>

          <MDBModal
            isOpen={this.state.modal}
            toggle={this.toggle}
            position="bottom"
            className="mt-5">
            <MDBModalHeader className="black-text" toggle={this.toggle}>
              Confirm deleting this Comparison
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

          {/* Adding left item Modal */}
          <MDBModal isOpen={this.state.modal2} toggle={this.toggle2} position="left">
            <MDBModalHeader className="black-text" toggle={this.toggle2}>
              Fill the New {this.props.comparison.leftC} Item info:
            </MDBModalHeader>
            <MDBModalBody className="black-text">
              <MDBContainer>
                <MDBRow>
                  <MDBCol md="12">
                    <form>
                      <label htmlFor="name" className="grey-text font-weight-light">
                        Item Name
                      </label>
                      <input
                        value={this.state.name}
                        onChange={this.handleChange('name')}
                        type="text"
                        id="name"
                        className="form-control"
                      />
                      <br />
                      <div className="text-center py-4 mt-3" />
                    </form>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={this.toggle2}>
                Close
              </MDBBtn>
              <MDBBtn className="btn btn-outline-purple" onClick={this.handleNewItemLeft}>
                Confirm
                <MDBIcon far icon="paper-plane" className="ml-2" />
              </MDBBtn>
            </MDBModalFooter>
          </MDBModal>
          {/* Adding right item Modal */}
          <MDBModal isOpen={this.state.modal3} toggle={this.toggle3} position="right">
            <MDBModalHeader className="black-text" toggle={this.toggle3}>
              Fill the New {this.props.comparison.rightC} Item info:
            </MDBModalHeader>
            <MDBModalBody className="black-text">
              <MDBContainer>
                <MDBRow>
                  <MDBCol md="12">
                    <form>
                      <label htmlFor="name" className="grey-text font-weight-light">
                        Item Name
                      </label>
                      <input
                        value={this.state.name}
                        onChange={this.handleChange('name')}
                        type="text"
                        id="name"
                        className="form-control"
                      />
                      <br />
                      <div className="text-center py-4 mt-3" />
                    </form>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={this.toggle3}>
                Close
              </MDBBtn>
              <MDBBtn className="btn btn-outline-purple" onClick={this.handleNewItemRight}>
                Confirm
                <MDBIcon far icon="paper-plane" className="ml-2" />
              </MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </MDBCol>
      </MDBRow>
    );
  }
}
