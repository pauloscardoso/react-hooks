import React, { useEffect, useState } from 'react';
import { useFetch } from './hook/useFetch';

export const App = () => {
  const [postId, setPostId] = useState('');
  const [result, loading] = useFetch('https://jsonplaceholder.typicode.com/posts/' + postId, {
    headers: {
      abc: '157878977' + postId,
    },
  });

  useEffect(() => {
    // console.log('id do post', postId);
  }, [postId]);

  function handleClick(id) {
    setPostId(id);
  }

  if (loading) {
    return <p>Loading...</p>;
  } else if (!loading && result) {
    //12345533!
    return (
      <div>
        {result.length ? (
          result.map((p) => (
            <p key={`post-${p.id}`} onClick={() => handleClick(p.id)}>
              {p.title}
            </p>
          ))
        ) : (
          <p onClick={() => handleClick('')}>{result.title}</p>
        )}
      </div>
    );
  }
};
