import P from 'prop-types';
import React from 'react';
import './App.css';

//Componente filho
const Post = ({ post, handleClick }) => {
  console.log('Filho renderizou');
  return (
    <div key={post.id}>
      <h1 onClick={() => handleClick(post.title)}>{post.title}</h1>
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
  handleClick: P.func,
};

//Componente Pai
export default function ExempleUseRef() {
  const [posts, setPosts] = React.useState([]);
  const [value, setValue] = React.useState('');
  const input = React.useRef(null);
  const contador = React.useRef(0);

  console.log('Pai renderizou');

  React.useEffect(() => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((r) => r.json())
        .then((r) => setPosts(r));
    }, 1000);
  }, []);

  React.useEffect(() => {
    input.current.focus();
    console.log(input.current);
  }, [value]);

  React.useEffect(() => {
    contador.current++;
  });

  const handleClick = (value) => {
    setValue(value);
  };

  const mapPost = React.useMemo(
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
      <h1>Renderizou: {contador.current}x</h1>
      <p>
        <input
          ref={input}
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
