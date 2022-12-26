import { useEffect, useRef } from 'react';

export const useInterval = (callback, delay = 1000) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const interval = setInterval(() => {
      callback();
    }, delay);
    return () => clearInterval(interval);
  }, [callback, delay]);
};
