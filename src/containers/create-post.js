import React, { Component } from 'react';
import { createPost } from '../actions/index.js';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

class NewPost extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {
      title: '',
      tags: '',
      content: '',
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.titleWasSet = this.titleWasSet.bind(this);
    this.tagsWereSet = this.tagsWereSet.bind(this);
    this.contentWasSet = this.contentWasSet.bind(this);
  }

  onSubmit() {
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
    this.props.createPost({ title, tags, content });
  }

  onCancel() {
    browserHistory.push('/');
  }

  titleWasSet(event) {
    this.setState({
      title: event.target.value,
    });
  }

  tagsWereSet(event) {
    this.setState({
      tags: event.target.value,
    });
  }

  contentWasSet(event) {
    this.setState({
      content: event.target.value,
    });
  }

  render() {
    return (
      <div className="New-Post">

        <div id="header">
          <div>Create A New Post!!!</div>
          <button id="cancel" onClick={this.onCancel}>Cancel</button>
        </div>


        <div id="title">
          <hr className="style1" />
          Title: <input placeholder="Cool Title!" value={this.state.title} onChange={this.titleWasSet} />
        </div>
        <div id="tags">
          Tags: <input placeholder="Tags to categorize posts" value={this.state.tags} onChange={this.tagsWereSet} />
        </div>
        <div id="content">
          <div>Content:</div>
          <textarea placeholder="You can use markdown! :O" rows="15" cols="15" value={this.state.content} onChange={this.contentWasSet} />
        </div>
        <div id="submit">
          <button onClick={this.onSubmit}>Submit</button>
        </div>
      </div>
    );
  }

}

export default connect(null, { createPost })(NewPost);
