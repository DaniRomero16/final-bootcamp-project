import React, { PureComponent } from 'react';
import styles from './lists.styles.css';
import { connect } from 'react-redux';

import { Task } from '@Components';

import { lists } from '@Assets';

import { getTasks, addTask, removeTask, updateTask as up } from '@Models';
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
  MDBCardText,
} from 'mdbreact';

class Lists extends PureComponent {
  state = {
    modal: false,
    name: '',
    color: '',
  };
  componentDidMount() {
    this.props.loadTasks();
  }

  handleChange = input => e => {
    const value = e.target.value;
    this.setState({ [input]: value });
  };

  handleNewTask = () => {
    this.props.newTask({
      name: this.state.name,
      color: this.state.color,
    });
    this.setState({
      modal: !this.state.modal,
      name: '',
      leftC: '',
      rightC: '',
    });
    this.props.loadTasks();
  };

  handleRemoveTask = id => {
    this.props.deleteTask(id);
    this.props.loadTasks();
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
            <p className="text-white h1-responsive">Your Tasks</p>
            <hr className="my-3" />
            <MDBRow>
              <MDBCol sm="12" md="4" className="mt-4">
                <MDBCard className="z-depth-2" style={{ width: '22rem' }}>
                  <MDBView>
                    <MDBCardImage className="img-fluid" src={lists} waves />
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
                      New Task <MDBIcon icon="plus" className="ml-3" />
                    </MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol sm="12" md="8">
                Contenido
              </MDBCol>
            </MDBRow>

            <MDBModal isOpen={this.state.modal} toggle={this.toggle} position="left">
              <MDBModalHeader className="black-text" toggle={this.toggle}>
                Fill the New Task info:
              </MDBModalHeader>
              <MDBModalBody className="black-text">
                <MDBContainer>
                  <MDBRow>
                    <MDBCol md="12">
                      <form>
                        <label htmlFor="name" className="grey-text font-weight-light">
                          Task Name
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
                <MDBBtn className="btn btn-outline-purple" onClick={this.handleNewTask}>
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
    lists: state.asyncReducer.lists,
  };
};

const mapDispatchToProps = {
  loadTasks: getTasks,
  newTask: addTask,
  deleteTask: removeTask,
  updateTask: up,
};

export const ConnectedLists = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Lists);
