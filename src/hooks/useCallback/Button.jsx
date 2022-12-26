import React from 'react';
import P from 'prop-types';
//O componente filho não precisa ser re-renderizado. Poderíamos usar o React.memo no próprio componente ou o React.useMemo na função que usa o component Button (filho)
//A função React.memo irá memorizar o componente. Aqui, o componente Button  só ira re-renderizado se o componente mudar. Se não mudar, ele permanecerá o mesmo.

export const Button = React.memo(function Button({ incrementButton }) {
  console.log('Filho renderizou');
  return <button onClick={() => incrementButton(1)}>Add</button>;
});

// export const Button = ({ incrementButton }) => {
//   console.log('Filho renderizou');
//   return <button onClick={() => incrementButton(1)}>Aperte</button>;
// };

Button.propTypes = {
  incrementButton: P.func,
};
