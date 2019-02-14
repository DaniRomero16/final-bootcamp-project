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
} from 'mdbreact';

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
    this.props.loadGraphics();
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
    this.props.loadGraphics();
  };

  handleRemoveGraphic = id => {
    this.props.deleteGraphic(id);
    this.props.loadGraphics();
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };
  render() {
    const graph = this.props.graphics;
    return (
      <div className={styles.container}>
        <MDBContainer className="white-text">
          <MDBBtn color="green" size="lg" className="z-depth-3" onClick={this.toggle}>
            New Graphic <MDBIcon icon="plus" className="ml-3" />
          </MDBBtn>
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
          {graph.map(c => (
            <Graphic
              key={c.graphic_id}
              removeItem={this.handleRemoveItem}
              newItem={this.handleNewItem}
              graphic={c}
              remove={this.handleRemoveGraphic}
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
