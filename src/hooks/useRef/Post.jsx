import React from 'react';
import P from 'prop-types';

export const Post = ({ post, handleClick }) => {
  Post.propTypes = {
    post: P.shape({
      id: P.number,
      title: P.string,
      body: P.string,
    }),
    handleClick: P.func,
  };

  console.log('Filho renderizou');
  return (
    <div key={post.id}>
      <h1 onClick={() => handleClick(post.title)}>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};
