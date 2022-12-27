import { useEffect, useRef, useState } from 'react';

const isObjectEqual = (objA, objB) => {
  return JSON.stringify(objA) === JSON.stringify(objB);
};

export const useFetch = (url, options) => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const urlRef = useRef(url);
  const optionsRef = useRef(options);

  useEffect(() => {
    // if (url !== urlRef.current) {
    //   urlRef.current = url;
    //   setShouldLoading((s) => !s);
    // }
    // if (options !== optionsRef.current) {
    //   optionsRef.current = options;
    // }
    let changed = false;
    if (!isObjectEqual(url, urlRef.current)) {
      changed = true;
      urlRef.current = url;
      // setShouldLoad((s) => !s);
    }
    if (!isObjectEqual(options, optionsRef.current)) {
      changed = true;
      optionsRef.current = options;
      // setShouldLoad((s) => !s);
    }
    if (changed) {
      setShouldLoad((s) => !s);
    }
  }, [url, options]);

  useEffect(() => {
    let wait = false;
    const controller = new AbortController();
    const signal = controller.signal;
    // console.log('Effect', new Date().toLocaleString());
    // console.log('aaaa', optionsRef.current.headers);
    setLoading(true);
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      try {
        const response = await fetch(urlRef.current, { signal, ...optionsRef.current });
        const jsonResult = await response.json();
        if (!wait) {
          setResult(jsonResult);
          setLoading(false);
        }
      } catch (e) {
        if (!wait) {
          setLoading(false);
        }
        console.log(e.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    return () => {
      wait = true;
      controller.abort();
    };
  }, [shouldLoad]);

  return [result, loading];
};
