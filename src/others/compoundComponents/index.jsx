/* eslint-disable react/prop-types */
import React, { Children, cloneElement, createContext, useContext, useState } from 'react';

const s = {
  style: {
    fontSize: '30px',
  },
};

//______________________________________________________________________________
// // //Children e cloneElement

// // const Parent = ({ children }) => {
// //   // console.log(children);
// //   return Children.map(children, (child) => {
// //     console.log(child);
// //     const newChild = cloneElement(child, { ...s });
// //     return newChild;
// //   });
// // };

// export const App = () => {
//   return (
//     <Parent>
//       <h1>Oi</h1>
//       <p>Oii</p>
//     </Parent>
//   );
// };
//______________________________________________________________________________

const TurnOnOffContext = createContext();

const TurnOnOff = ({ children }) => {
  const [isOn, setIsOn] = useState(false);
  const onTurn = () => setIsOn((s) => !s);

  return <TurnOnOffContext.Provider value={{ isOn, onTurn }}>{children}</TurnOnOffContext.Provider>;

  // return Children.map(children, (child) => {
  //   if (typeof child.type === 'string') return child;
  //   const newChild = cloneElement(child, {
  //     isOn,
  //     onTurn,
  //   });
  //   return newChild;
  // });
};

const TurnedOn = ({ children }) => {
  const { isOn } = useContext(TurnOnOffContext);
  return isOn ? children : null;
};
const TurnedOff = ({ children }) => {
  const { isOn } = useContext(TurnOnOffContext);
  return isOn ? null : children;
};
const TurnButton = ({ ...props }) => {
  const { isOn, onTurn } = useContext(TurnOnOffContext);
  return (
    <button onClick={onTurn} {...props}>
      Turn {isOn ? 'OFF' : 'ON'}
    </button>
  );
};
const P = ({ children }) => {
  return <p {...s}>{children}</p>;
};

export const App = () => {
  return (
    <>
      <TurnOnOff>
        <div>
          <TurnedOn>
            <P>on</P>
          </TurnedOn>
          <TurnedOff>
            <P>Off</P>
          </TurnedOff>
          <TurnButton {...s} />
        </div>
      </TurnOnOff>
    </>
  );
};
