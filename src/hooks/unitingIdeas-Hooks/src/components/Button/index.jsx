import P from 'prop-types';
import { useCounterContext } from '../../contexts/CounterContext';

export const Button = ({ children, onButtonClick, disabled = false }) => {
  // const [state, actions] = useCounterContext();
  return (
    <button
      disabled={disabled}
      style={{ fontSize: '20px', marginTop: '10px' }}
      onClick={onButtonClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: P.node.isRequired,
  onButtonClick: P.func,
  disabled: P.bool,
};
