import React, { useEffect, useMemo, useState } from 'react';
import '../../App.css';
import { Post } from './Post';

export default function ExampleUseMemo() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');
  console.log('Pai renderizou');

  useEffect(() => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((r) => r.json())
        .then((r) => setPosts(r));
    }, 3500);
  }, []);

  const mapPost = useMemo(
    () =>
      posts.length <= 0 ? (
        <p>Ainda não existem posts.</p>
      ) : (
        posts.map((post) => <Post key={post.id} post={post} />)
      ),
    [posts],
  );

  return (
    <div className="App">
      <p>
        <input
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
