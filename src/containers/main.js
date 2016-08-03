import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllPosts } from '../actions';

class Main extends Component {

  componentWillMount() {
    getAllPosts();
  }

  render() {
    if (!this.props.posts) {
      return (
        <p> No Posts </p>
      );
    } else {
      let posts = this.props.posts.map((post, index) => {
        return (
          <div className="post" >
            {post.title}
            <span>{post.tags}</span>
          </div>
        );
      });
      return (
        <div>
          {posts}
        < /div>
      );
    }
  }

}

function mapStateToProps(state) {
  return {
    posts: state.posts.all,
  };
}

export default connect(mapStateToProps, { getAllPosts })(Main);
