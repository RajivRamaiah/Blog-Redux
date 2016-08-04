import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllPosts } from '../actions';
import Post from '../components/post.js';

class Main extends Component {

  componentWillMount() {
    this.props.getAllPosts();
  }

  render() {
    let posts = this.props.posts.map((post) => {
      return (
        <Post title={post.title} postId={post.id} tags={post.tags} key={post.id} />
      );
    });
    return (
      <div>
        {posts}
      </div>
    );
  }

}

function mapsStateToProps(state) {
  return {
    posts: state.posts.all,
  };
}

export default connect(mapsStateToProps, { getAllPosts })(Main);
