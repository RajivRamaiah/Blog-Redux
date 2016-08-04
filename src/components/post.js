import React from 'react';
import { Link } from 'react-router';

const Post = (props) => {
  return (
    <Link to={`posts/${props.postId}`}>
      <div className="post" >
        <div id="title">
          {props.title}
        </div>
        <div id="tags">
          {props.tags}
        </div>
      </div>
    < /Link>
  );
};

export default Post;
