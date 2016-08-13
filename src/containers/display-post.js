import React, { Component } from 'react';
//  imported to support markup
import marked from 'marked';
import { connect } from 'react-redux';
import { getPost, updatePost, deletePost } from '../actions';

class ShowPost extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {
      isEditingTitle: false,
      isEditingContent: false,
      isEditingTags: false,
      author: '',
      title: '',
      tags: '',
      content: '',
    };

    this.deletePost = this.deletePost.bind(this);
    this.updatePost = this.updatePost.bind(this);
    this.displayTitle = this.displayTitle.bind(this);
    this.displayTags = this.displayTags.bind(this);
    this.displayContent = this.displayContent.bind(this);
    this.onTagsChanged = this.onTagsChanged.bind(this);
    this.onTitleChanged = this.onTitleChanged.bind(this);
    this.onContentChanged = this.onContentChanged.bind(this);
    this.toggleTitleEditing = this.toggleTitleEditing.bind(this);
    this.toggleTagsEditing = this.toggleTagsEditing.bind(this);
    this.toggleContentEditing = this.toggleContentEditing.bind(this);
  }

  componentWillMount() {
    this.props.getPost(this.props.params.id);
  }

  componentWillReceiveProps(props) {
    if (props.post) {
      this.setState({
        title: props.post.title,
        tags: props.post.tags,
        content: props.post.content,
        author: props.post.author.username,
      });
    }
  }

  onTagsChanged(event) {
    this.setState({
      tags: event.target.value,
    });
  }

  onTitleChanged(event) {
    this.setState({
      title: event.target.value,
    });
  }

  onContentChanged(event) {
    this.setState({
      content: event.target.value,
    });
  }

  toggleTitleEditing() {
    if (this.state.isEditingTitle) {
      this.setState({
        isEditingTitle: false,
      });
      this.updatePost();
    } else {
      this.setState({
        isEditingTitle: true,
      });
    }
  }

  toggleTagsEditing() {
    if (this.state.isEditingTags) {
      this.setState({
        isEditingTags: false,
      });
      this.updatePost();
    } else {
      this.setState({
        isEditingTags: true,
      });
    }
  }

  toggleContentEditing() {
    if (this.state.isEditingContent) {
      this.setState({
        isEditingContent: false,
      });
      this.updatePost();
    } else {
      this.setState({
        isEditingContent: true,
      });
    }
  }

  deletePost() {
    if (window.confirm('Are you sure you want to delete this post, this action cannot be undone!')) {
      this.props.deletePost(this.props.params.id);
    }
  }

  updatePost() {
    let title, tags, content;
    if (!this.state.title) {
      title = 'No Title';
    } else {
      title = this.state.title;
    }
    if (!this.state.tags) {
      tags = 'No Tags';
    } else {
      tags = this.state.tags;
    }
    if (!this.state.content) {
      content = 'No Content';
    } else {
      content = this.state.content;
    }
    this.props.updatePost(this.props.params.id, { title, tags, content });
  }

  displayTitle() {
    if (this.state.isEditingTitle) {
      return (
        <input onChange={this.onTitleChanged} value={this.state.title} onBlur={this.toggleTitleEditing} autoFocus />
      );
    } else {
      return (
        <div onClick={this.toggleTitleEditing}>
          {this.state.title}
        </div>
      );
    }
  }

  displayTags() {
    if (this.state.isEditingTags) {
      return (
        <input onChange={this.onTagsChanged} value={this.state.tags} onBlur={this.toggleTagsEditing} autoFocus />
      );
    } else {
      return (
        <div onClick={this.toggleTagsEditing}>
          {this.state.tags}
        </div>
     );
    }
  }

  displayContent() {
    if (this.state.isEditingContent) {
      return (
        <textarea onChange={this.onContentChanged} value={this.state.content} onBlur={this.toggleContentEditing} autoFocus />
      );
    } else {
      return (
        <div onClick={this.toggleContentEditing}>
          <div dangerouslySetInnerHTML={{ __html: marked(this.state.content) }} />
        </div>
      );
    }
  }

  render() {
    return (
      <div className="DisplayPost">
        <div id="header">
          <div id="title">
            {this.displayTitle()}
          </div>

          <div id="author">
            {`By: ${this.state.author}`}
          </div>

          <div id="tags">
            {this.displayTags()}
          </div>
        </div>
        <hr className="style1" />
        <div id="content">
          {this.displayContent()}
        </div>

        <div id="delete-button">
          <button onClick={this.deletePost}>Delete Post</button>
        </div>
      </div>
    );
  }
}

const mapsStateToProps = (state) => (
  {
    post: state.posts.post,
  }
);

export default connect(mapsStateToProps, { getPost, updatePost, deletePost })(ShowPost);
