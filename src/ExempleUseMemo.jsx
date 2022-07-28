import P from 'prop-types';
import React from 'react';
import './App.css';

//Componente filho
const Post = ({ post }) => {
  console.log('Filho renderizou');
  return (
    <div key={post.id}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

Post.propTypes = {
  post: P.shape({
    id: P.number,
    title: P.string,
    body: P.string,
  }),
};

export default function ExempleUseMemo() {
  const [posts, setPosts] = React.useState([]);
  const [value, setValue] = React.useState('');
  console.log('Pai renderizou');

  //Component did mount
  React.useEffect(() => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((r) => r.json())
        .then((r) => setPosts(r));
    }, 5000);
  }, []);

  const mapPost = React.useMemo(
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
