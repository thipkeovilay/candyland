import React, { createContext, useState, useEffect } from 'react';
import board from '../constants/candyland';
export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [roll, setRoll] = useState(0);
  const [position, setPosition] = useState(0);
  const [boardData, setBoardData] = useState([]);
  const [positionSuit, setPositionSuit] = useState('');

  //BELOW IS WHERE WE WOULD ADD IF STATEMENT FOR CONNECTING #'S W SPECIAL CHARACTERS & POSITIONS
  //IF YOU ROLE A 7, CONNECT POSITION {6} TO THAT # (hard set that position to whichever index # he is from candyland.js).
  //1-6 do math, 7-12, set position for special characters.
  useEffect(() => {
    let newTotal = roll + position;
    setPosition(newTotal);
  }, [roll]);

  // useEffect(() => {
  //   let newPosition = roll;
  //   setPosition(newTotal);
  // }, [roll]);

  // useEffect(() => {
  //   if (roll === [10]);

  // }, [roll]);

  useEffect(() => {
    console.log(board);
    setBoardData(board);
  }, []);
  // useEffect(() => {
  //   const icons = [<img src={'../images/board/Oompa.png'} />];
  //   let arr = [];
  //   for (let i = 0; i < numOfPlayers; i++) {
  //     arr.push({
  //       icon: icons[Math.floor(Math.random() * icons.length)],
  //       position: 0
  //     });
  //     setPlayers(arr);
  //   }
  // }, [numOfPlayers]);

  return (
    <AppContext.Provider
      value={{
        roll,
        setRoll,
        position,
        setPosition,
        boardData,
        positionSuit,
        setPositionSuit
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// import React, { createContext, useState } from 'react';

// export const AppContext = createContext();

// export const AppContextProvider = ({ children }) => {
//   const [contextMessage, setContextMessage] = useState('');

//   const contextMethod = () => {
//     setContextMessage('Hello from client/src/context/AppContext.jsx');
//   };

//   return (
//     <AppContext.Provider
//       value={{
//         contextMessage,
//         contextMethod
//       }}
//     >
//       {children}
//     </AppContext.Provider>
//   );
// };
