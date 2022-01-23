import React from 'react';
import PostContainer from '../containers/PostContainer';

function PostList({ match }) {
  console.log(match);
  const { id } = match.params;
  return <PostContainer postId={parseInt(id, 10)} />;
}

export default PostList;
