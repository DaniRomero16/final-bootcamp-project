import React, { PureComponent } from 'react';
import styles from './lists.styles.css';
import { connect } from 'react-redux';

import { List } from '@Components';

import { getLists, addList, removeList, removeListItem, addListItem } from '@Models';
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

class Lists extends PureComponent {
  state = {
    modal: false,
    name: '',
    leftC: '',
    rightC: '',
  };
  componentDidMount() {
    this.props.loadLists();
  }

  handleChange = input => e => {
    const value = e.target.value;
    this.setState({ [input]: value });
  };

  handleNewList = () => {
    this.props.newList({
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
    this.props.loadLists();
  };
  handleRemoveItem = id => {
    this.props.removeItem(id);
    this.props.loadLists();
  };

  handleNewItem = item => {
    this.props.newItem(item);
    this.props.loadLists();
  };

  handleRemoveList = id => {
    this.props.deleteList(id);
    this.props.loadLists();
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };
  render() {
    console.log(this.props);
    return (
      <div className={styles.container}>
        <MDBContainer className="white-text">
          <MDBBtn color="green" size="lg" className="z-depth-3" onClick={this.toggle}>
            New List <MDBIcon icon="plus" className="ml-3" />
          </MDBBtn>
          <MDBModal isOpen={this.state.modal} toggle={this.toggle} position="left">
            <MDBModalHeader className="black-text" toggle={this.toggle}>
              Fill the New List info:
            </MDBModalHeader>
            <MDBModalBody className="black-text">
              <MDBContainer>
                <MDBRow>
                  <MDBCol md="12">
                    <form>
                      <label htmlFor="name" className="grey-text font-weight-light">
                        List Name
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
              <MDBBtn className="btn btn-outline-purple" onClick={this.handleNewList}>
                Confirm
                <MDBIcon far icon="paper-plane" className="ml-2" />
              </MDBBtn>
            </MDBModalFooter>
          </MDBModal>
          {this.props.lists.map(c => (
            <List
              key={c.list_id}
              removeItem={this.handleRemoveItem}
              newItem={this.handleNewItem}
              list={c}
              remove={this.handleRemoveList}
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
    lists: state.asyncReducer.lists,
  };
};

const mapDispatchToProps = {
  loadLists: getLists,
  newList: addList,
  deleteList: removeList,
  newItem: addListItem,
  removeItem: removeListItem,
};

export const ConnectedLists = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Lists);
