import React, { PureComponent } from 'react';
import styles from './diary.styles.css';
import { connect } from 'react-redux';

import { Post } from '@Components';
import { MDBContainer, MDBBtn } from 'mdbreact';

class Diary extends PureComponent {
  state = {
    modal: false,
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };
  render() {
    return (
      <div className={styles.container}>
        <MDBContainer className="text-white">
          <MDBBtn flat size="lg" onClick={this.toggle}>
            New Post
          </MDBBtn>
          <Post />
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
  };
};

const mapDispatchToProps = {};

export const ConnectedDiary = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Diary);
