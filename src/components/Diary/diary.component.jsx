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
      title: '',
      content: '',
    });
  };
  handleRemovePost = id => {
    this.props.deletePost(id);
  };

  render() {
    return (
      <div
        className="main"
        style={{
          width: ' 100%',
          height: '100%',
          minHeight: '89vh',
          marginTop: '100px',
          backgroundColor: '#1c2331',
        }}>
        <div className={styles.container}>
          <MDBContainer className="white-text">
            <p className="text-white h1-responsive">Your Posts</p>
            <hr className="my-3" />
            <MDBRow>
              <MDBCol sm="12" md="4" className="mt-5">
                <h2 className="h5-responsive mb-3">
                  Which are you today thoughts?, <b>{this.props.user.name}</b>
                </h2>
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
                    id="content"
                    className="form-control"
                    rows={7}
                  />
                  <div className="text-center py-4 mt-3">
                    <MDBBtn className="btn btn-outline-blue" onClick={this.handleNewPost}>
                      Confirm
                      <MDBIcon far icon="paper-plane" className="ml-2" />
                    </MDBBtn>
                  </div>
                </form>
              </MDBCol>
              <MDBCol className={styles.scroll} sm="12" md="8">
                {this.props.posts
                  .slice(0)
                  .reverse()
                  .map(p => (
                    <Post key={p.post_id} post={p} remove={this.handleRemovePost} />
                  ))}
              </MDBCol>
            </MDBRow>
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
