import React, { useContext, useEffect, useRef } from 'react';
import { decrementCounter, incrementeCounter } from '../../contexts/Counter/action';
import { CounterContext } from '../../contexts/Counter/context';
import { loadPosts } from '../../contexts/Posts/actions';
import { PostsContext } from '../../contexts/Posts/context';

export const Posts = () => {
  const isMounted = useRef(true);
  const postsContext = useContext(PostsContext);
  const {
    postsState: { posts, loading },
    postsDispatch,
  } = postsContext;

  const counterContext = useContext(CounterContext);
  const { counterState, counterDispatch } = counterContext;

  console.log(isMounted.current);

  useEffect(() => {
    loadPosts(postsDispatch).then((dispatch) => {
      if (isMounted.current) {
        dispatch();
      }
    });
    return () => (isMounted.current = false);
  }, [postsDispatch]);

  return (
    <div>
      <button onClick={() => incrementeCounter(counterDispatch)}>
        Counter {counterState.counter}
      </button>
      <button onClick={() => decrementCounter(counterDispatch)}>
        Counter {counterState.counter}
      </button>
      <h1>Posts Component</h1>
      {loading && (
        <p>
          <strong>Carregando Posts...</strong>
        </p>
      )}
      {posts.map((p) => (
        <p key={p.id}>{p.title}</p>
      ))}
    </div>
  );
};
