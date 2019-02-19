import React, { Component } from 'react';
import styles from './graphics.styles.css';
import { connect } from 'react-redux';

import { Graphic } from '@Components';

import { getGraphics, addGraphic, removeGraphic, removeGraphicItem, addGraphicItem } from '@Models';
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
import { graphs } from '@Assets';

class Graphics extends Component {
  state = {
    modal: false,
    name: '',
  };
  componentDidUpdate(next) {
    return true;
  }
  componentDidMount() {
    this.props.loadGraphics();
  }
  handleChange = input => e => {
    const value = e.target.value;
    this.setState({ [input]: value });
  };

  handleNewGraphic = () => {
    this.props.newGraphic({
      name: this.state.name,
    });
    this.setState({
      modal: !this.state.modal,
      name: '',
    });
  };
  handleRemoveItem = id => {
    this.props.removeItem(id);
    this.props.loadGraphics();
    this.setState({
      name: '',
    });
  };

  handleNewItem = item => {
    this.props.newItem(item);
  };

  handleRemoveGraphic = id => {
    this.props.deleteGraphic(id);
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };
  render() {
    const graph = this.props.graphics;
    return (
      <div
        className="main"
        style={{
          width: ' 100%',
          marginTop: '100px',
          backgroundColor: '#1c2331',
          minHeight: '89vh',
          height: '100%',
        }}>
        <div className={styles.container}>
          <MDBContainer className="white-text">
            <p className="text-white h1-responsive">Your Graphics</p>
            <hr className="my-3" />
            <MDBRow>
              <MDBCol sm="12" md="4" className="mt-4">
                <MDBCard className="z-depth-2" style={{ width: '100%' }}>
                  <MDBView>
                    <MDBCardImage className="img-fluid" src={graphs} waves />
                    <MDBMask overlay="black-light" className="flex-center">
                      <h3 className=" h3-responsive white-text">Track Yourself</h3>
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
                      New Graphic <MDBIcon icon="plus" className="ml-3" />
                    </MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol sm="12" md="8">
                {graph.map(c => (
                  <Graphic
                    key={c.graphic_id}
                    removeItem={this.handleRemoveItem}
                    newItem={this.handleNewItem}
                    graphic={c}
                    remove={this.handleRemoveGraphic}
                  />
                ))}
              </MDBCol>
            </MDBRow>

            <MDBModal isOpen={this.state.modal} toggle={this.toggle} position="left">
              <MDBModalHeader className="black-text" toggle={this.toggle}>
                Fill the New Graphic info:
              </MDBModalHeader>
              <MDBModalBody className="black-text">
                <MDBContainer>
                  <MDBRow>
                    <MDBCol md="12">
                      <form>
                        <label htmlFor="name" className="grey-text font-weight-light">
                          Graphic Name
                        </label>
                        <input
                          value={this.state.name}
                          onChange={this.handleChange('name')}
                          type="text"
                          id="name"
                          className="form-control"
                        />
                      </form>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
              </MDBModalBody>
              <MDBModalFooter>
                <MDBBtn color="secondary" onClick={this.toggle}>
                  Close
                </MDBBtn>
                <MDBBtn className="btn btn-outline-purple" onClick={this.handleNewGraphic}>
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
    graphics: state.asyncReducer.graphics,
  };
};

const mapDispatchToProps = {
  loadGraphics: getGraphics,
  newGraphic: addGraphic,
  deleteGraphic: removeGraphic,
  newItem: addGraphicItem,
  removeItem: removeGraphicItem,
};

export const ConnectedGraphics = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Graphics);
