import React, { PureComponent } from 'react';
import styles from './diary.styles.css';
import { connect } from 'react-redux';

import { getPosts, addPost, removePost } from '@Models';

import { Post } from '@Components';
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

class Diary extends PureComponent {
  state = {
    modal: false,
    title: '',
    content: '',
  };
  componentDidMount() {
    this.props.loadPosts();
  }

  handleChange = input => e => {
    const value = e.target.value;
    this.setState({ [input]: value });
  };

  handleNewPost = () => {
    this.props.newPost({
      name: this.state.title,
      content: this.state.content,
    });
    this.setState({
      modal: !this.state.modal,
      title: '',
      content: '',
    });
  };
  handleRemovePost = id => {
    this.props.deletePost(id);
    this.props.loadPosts();
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };
  render() {
    return (
      <div className={styles.container}>
        <MDBContainer className="white-text">
          <MDBBtn className="z-depth-2 ml-5" color="pink" size="lg" onClick={this.toggle}>
            New Post <MDBIcon icon="plus" className="ml-3" />
          </MDBBtn>
          <MDBModal isOpen={this.state.modal} toggle={this.toggle} position="left">
            <MDBModalHeader className="black-text" toggle={this.toggle}>
              Fill the New Post info:
            </MDBModalHeader>
            <MDBModalBody className="black-text">
              <MDBContainer>
                <MDBRow>
                  <MDBCol md="12">
                    <form>
                      <label htmlFor="title" className="grey-text font-weight-light">
                        Post title
                      </label>
                      <input
                        value={this.state.title}
                        onChange={this.handleChange('title')}
                        type="text"
                        id="title"
                        className="form-control"
                      />
                      <br />
                      <label htmlFor="content" className="grey-text font-weight-light">
                        Post content
                      </label>
                      <textarea
                        value={this.state.content}
                        onChange={this.handleChange('content')}
                        type="text"
                        id="content"
                        className="form-control"
                        rows="7"
                      />
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
              <MDBBtn className="btn btn-outline-purple" onClick={this.handleNewPost}>
                Confirm
                <MDBIcon far icon="paper-plane" className="ml-2" />
              </MDBBtn>
            </MDBModalFooter>
          </MDBModal>
          {this.props.posts
            .slice(0)
            .reverse()
            .map(p => (
              <Post key={p.post_id} post={p} remove={this.handleRemovePost} />
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
    posts: state.asyncReducer.posts,
  };
};

const mapDispatchToProps = {
  loadPosts: getPosts,
  newPost: addPost,
  deletePost: removePost,
};

export const ConnectedDiary = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Diary);
