import React, { useEffect, useState } from 'react';
import { useAsync } from './hook/useAsync';

const fetchData = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const data = await fetch('https://jsonplaceholder.typicode.com/posts/');
  const json = await data.json();
  return json;
};

export const App = () => {
  const [post, setPost] = useState(null);
  const [reFetchData, result, error, status] = useAsync(fetchData, true);

  // useEffect(() => {
  //   reFetchData();
  // }, [reFetchData]);

  if (status === 'idle') {
    return <pre>Nada executando</pre>;
  }
  if (status === 'pending') {
    return <pre>loading</pre>;
  }
  if (status === 'error') {
    return <pre>{error.message}</pre>;
  }
  if (status === 'settled') {
    return <pre>{JSON.stringify(result, null, 2)}</pre>;
  }

  return 'iiii';
};
