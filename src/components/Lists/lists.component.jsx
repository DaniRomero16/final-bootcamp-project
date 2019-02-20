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
  MDBListGroup,
} from 'mdbreact';
import moment from 'moment';
import { Draggable, Droppable } from 'react-drag-and-drop';

class Lists extends PureComponent {
  state = {
    modal: false,
    name: '',
    color: 'mdb-color',
    todo: [],
    progg: [],
    comp: [],
  };

  componentDidMount() {
    this.props.loadTasks();
  }
  onClick = nr => () => {
    this.setState({
      radio: nr,
    });
  };
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
    });
  };

  changeColor = color => () => {
    this.setState({ color: color });
  };

  onDrop(list, task) {
    console.log(task);
    this.props.updateTask({ id: task.task, state: list });
  }

  handleRemoveTask = id => {
    this.props.deleteTask(id);
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };
  render() {
    const TODO = [];
    const PROGG = [];
    const COMP = [];

    this.props.tasks
      ? this.props.tasks.map(t => {
          switch (t.state) {
            case 'todo':
              TODO.push(t);
              break;

            case 'progress':
              PROGG.push(t);
              break;

            default:
              COMP.push(t);
              break;
          }
        })
      : null;
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
          <MDBContainer fluid className="white-text">
            <p className="text-white h1-responsive">Your Tasks</p>
            <hr className="my-3" />
            <MDBRow around>
              <MDBCol sm="10" md="3" className="mt-4">
                <MDBCard className="z-depth-2" style={{ width: '100%' }}>
                  <MDBView>
                    <MDBCardImage className="img-fluid" src={lists} waves />
                    <MDBMask overlay="black-strong" className="flex-center">
                      <h3 className=" h3-responsive white-text">Systemize</h3>
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
              <MDBCol sm="12" md="9">
                <MDBRow around>
                  <MDBCol sm="12" md="4">
                    <MDBContainer
                      style={{
                        minHeight: '70vh',
                      }}
                      fluid
                      className="z-depth-4 d-flex flex-column flex-column justify-content-start align-items-center">
                      <h2 className="my-2 mt-3 h2-responsive text-center">
                        To Do <MDBIcon icon="list" className="mx-3" />
                      </h2>
                      <Droppable
                        style={{ width: '100%', minHeight: '600px', marginBottom: '8px' }}
                        className="d-flex flex-column flex-column justify-content-start align-items-center"
                        types={['task']}
                        onDrop={this.onDrop.bind(this, 'todo')}>
                        <div style={{ width: '90%' }} className={styles.scroll}>
                          <MDBListGroup style={{ width: '100%' }}>
                            {TODO.map(t => {
                              return (
                                <Draggable key={t.task_id} type="task" data={t.task_id}>
                                  <Task task={t} remove={this.handleRemoveTask} />
                                </Draggable>
                              );
                            })}
                          </MDBListGroup>
                        </div>
                      </Droppable>
                    </MDBContainer>
                  </MDBCol>
                  <MDBCol sm="12" md="4">
                    <MDBContainer
                      fluid
                      style={{
                        minHeight: '70vh',
                      }}
                      className="z-depth-4 d-flex flex-column justify-content-start align-items-center">
                      <h2 className="my-2 mt-3 h2-responsive text-center">
                        In Progress
                        <MDBIcon icon="spinner" className="mx-3" />
                      </h2>
                      <Droppable
                        style={{ width: '100%', minHeight: '600px' }}
                        className="d-flex flex-column flex-column justify-content-start align-items-center"
                        types={['task']}
                        onDrop={this.onDrop.bind(this, 'progress')}>
                        <div style={{ width: '90%' }} className={styles.scroll}>
                          <MDBListGroup style={{ width: '100%' }}>
                            {PROGG.map(t => {
                              return (
                                <Draggable key={t.task_id} type="task" data={t.task_id}>
                                  <Task task={t} remove={this.handleRemoveTask} />
                                </Draggable>
                              );
                            })}
                          </MDBListGroup>
                        </div>
                      </Droppable>
                    </MDBContainer>
                  </MDBCol>
                  <MDBCol sm="12" md="4">
                    <MDBContainer
                      fluid
                      style={{
                        minHeight: '70vh',
                      }}
                      className="z-depth-4 d-flex flex-column justify-content-start align-items-center">
                      <h2 className="my-2 mt-3 h2-responsive text-center">
                        Completed <MDBIcon icon="check-square" className="mx-3" />
                      </h2>
                      <Droppable
                        style={{ width: '100%', minHeight: '600px' }}
                        className="d-flex flex-column flex-column justify-content-start align-items-center"
                        types={['task']}
                        onDrop={this.onDrop.bind(this, 'completed')}>
                        <div style={{ width: '90%' }} className={styles.scroll}>
                          <MDBListGroup style={{ width: '100%' }}>
                            {COMP.map(t => {
                              return (
                                <Draggable key={t.task_id} type="task" data={t.task_id}>
                                  <Task task={t} remove={this.handleRemoveTask} />
                                </Draggable>
                              );
                            })}
                          </MDBListGroup>
                        </div>
                      </Droppable>
                    </MDBContainer>
                  </MDBCol>
                </MDBRow>
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
                        <label htmlFor="color" className="grey-text font-weight-light">
                          Task Color
                        </label>
                        <div className="input-group">
                          <div className="input-group-append" id="color">
                            <MDBBtn
                              size="md"
                              color="mdb-color"
                              onClick={this.changeColor('mdb-color')}>
                              {this.state.color === 'mdb-color' ? 'X' : ''}
                            </MDBBtn>
                            <MDBBtn
                              size="md"
                              color="warning"
                              onClick={this.changeColor('warning-color')}>
                              {this.state.color === 'warning-color' ? 'X' : ''}
                            </MDBBtn>
                            <MDBBtn
                              size="md"
                              color="default"
                              onClick={this.changeColor('default-color')}>
                              {this.state.color === 'default-color' ? 'X' : ''}
                            </MDBBtn>
                            <MDBBtn size="md" color="indigo" onClick={this.changeColor('indigo')}>
                              {this.state.color === 'indigo' ? 'X' : ''}
                            </MDBBtn>
                          </div>
                        </div>
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
    tasks: state.asyncReducer.tasks,
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
