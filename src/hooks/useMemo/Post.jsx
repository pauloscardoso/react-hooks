import P from 'prop-types';
import React from 'react';

export const Post = ({ post }) => {
  Post.propTypes = {
    post: P.shape({
      id: P.number,
      title: P.string,
      body: P.string,
    }),
  };

  console.log('Filho renderizou');
  return (
    <div key={post.id}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};
