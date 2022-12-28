import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import P from 'prop-types';

export const DisplayCounted = forwardRef(function DisplayCounted({ counted }, ref) {
  const [rand, setRand] = useState('0.24');
  const divRef = useRef();

  const handleClick = () => {
    const numeroAleatorio = Math.random().toFixed(2);
    setRand(numeroAleatorio);
  };

  useImperativeHandle(ref, () => ({
    handleClick,
    divRef: divRef.current,
  }));

  return (
    <div ref={divRef} style={{ height: '100px', width: '100px', overflowY: 'scroll' }}>
      {counted.map((count) => (
        <p onClick={handleClick} key={`Count-${count}`}>
          {count} ++ {rand}
        </p>
      ))}
    </div>
  );
});

DisplayCounted.propTypes = {
  counted: P.array,
};
