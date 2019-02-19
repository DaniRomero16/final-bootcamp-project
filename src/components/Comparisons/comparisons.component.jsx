import React, { PureComponent } from 'react';
import styles from './comparisons.styles.css';
import { connect } from 'react-redux';

import { Comparison } from '@Components';

import {
  getComparisons,
  addComparison,
  removeComparison,
  removeCompareItem,
  addCompareItem,
} from '@Models';
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
  MDBView,
  MDBCardImage,
  MDBMask,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from 'mdbreact';
import { comparisons } from '@Assets';

class Comparisons extends PureComponent {
  state = {
    modal: false,
    name: '',
    leftC: '',
    rightC: '',
  };
  componentDidMount() {
    this.props.loadComparisons();
  }

  handleChange = input => e => {
    const value = e.target.value;
    this.setState({ [input]: value });
  };

  handleNewComparison = () => {
    this.props.newComparison({
      name: this.state.name,
      leftC: this.state.leftC,
      rightC: this.state.rightC,
    });
    this.setState({
      modal: !this.state.modal,
      name: '',
      leftC: '',
      rightC: '',
    });
  };
  handleRemoveItem = item => {
    this.props.removeItem(item);
  };

  handleNewItem = item => {
    this.props.newItem(item);
  };

  handleRemoveComparison = id => {
    this.props.deleteComparison(id);
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
          width: ' 100%',
          marginTop: '100px',
          backgroundColor: '#1c2331',
          minHeight: '100vh',
          height: '100%',
        }}>
        <div className={styles.container}>
          <MDBContainer className="white-text">
            <p className="text-white h1-responsive">Your Comparisons</p>
            <hr className="my-3" />
            <MDBRow>
              <MDBCol sm="12" md="4" className="mt-4">
                <MDBCard className="z-depth-2" style={{ width: '100%' }}>
                  <MDBView>
                    <MDBCardImage className="img-fluid" src={comparisons} waves />
                    <MDBMask overlay="black-light" className="flex-center">
                      <h3 className=" h3-responsive white-text">Settle On</h3>
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
                      New Comparison <MDBIcon icon="plus" className="ml-3" />
                    </MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol sm="12" md="8">
                {this.props.comparisons.map(c => (
                  <Comparison
                    key={c.comparison_id}
                    removeItem={this.handleRemoveItem}
                    newItem={this.handleNewItem}
                    comparison={c}
                    remove={this.handleRemoveComparison}
                  />
                ))}
              </MDBCol>
            </MDBRow>

            <MDBModal isOpen={this.state.modal} toggle={this.toggle} position="left">
              <MDBModalHeader className="black-text" toggle={this.toggle}>
                Fill the New Comparison info:
              </MDBModalHeader>
              <MDBModalBody className="black-text">
                <MDBContainer>
                  <MDBRow>
                    <MDBCol md="12">
                      <form>
                        <label htmlFor="name" className="grey-text font-weight-light">
                          Comparison Name
                        </label>
                        <input
                          value={this.state.name}
                          onChange={this.handleChange('name')}
                          type="text"
                          id="name"
                          className="form-control"
                        />
                        <br />
                        <label htmlFor="left" className="grey-text font-weight-light">
                          Left Column
                        </label>
                        <input
                          value={this.state.leftC}
                          onChange={this.handleChange('leftC')}
                          type="text"
                          id="left"
                          className="form-control"
                        />
                        <br />
                        <label htmlFor="right" className="grey-text font-weight-light">
                          Right Column
                        </label>
                        <input
                          value={this.state.rightC}
                          onChange={this.handleChange('rightC')}
                          type="text"
                          id="right"
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
                <MDBBtn color="secondary" onClick={this.toggle}>
                  Close
                </MDBBtn>
                <MDBBtn className="btn btn-outline-purple" onClick={this.handleNewComparison}>
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
    comparisons: state.asyncReducer.comparisons,
  };
};

const mapDispatchToProps = {
  loadComparisons: getComparisons,
  newComparison: addComparison,
  deleteComparison: removeComparison,
  newItem: addCompareItem,
  removeItem: removeCompareItem,
};

export const ConnectedComparisons = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Comparisons);
