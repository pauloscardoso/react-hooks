import React, { useEffect, useMemo, useRef, useState } from 'react';
import '../../App.css';
import { Post } from './Post';

export default function ExampleUseRef() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');
  const inputRef = useRef(null);
  const contadorRef = useRef(0);

  console.log('Pai renderizou');

  useEffect(() => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((r) => r.json())
        .then((r) => setPosts(r));
    }, 1000);
  }, []);

  useEffect(() => {
    inputRef.current.focus();
  }, [value]);

  useEffect(() => {
    contadorRef.current++;
  });

  function handleClick(value) {
    setValue(value);
  }

  const mapPost = useMemo(
    () =>
      posts.length <= 0 ? (
        <p>Ainda não existem posts.</p>
      ) : (
        posts.map((post) => (
          <Post key={post.id} post={post} handleClick={handleClick} />
        ))
      ),
    [posts],
  );

  return (
    <div className="App">
      <h1>Renderizou: {contadorRef.current}x</h1>
      <p>
        <input
          ref={inputRef}
          type="search"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </p>
      {mapPost}
    </div>
  );
}
