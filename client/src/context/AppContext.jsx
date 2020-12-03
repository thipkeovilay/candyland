import React, { createContext, useState, useEffect } from 'react';
import board from '../Constants/candyland';
export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [roll, setRoll] = useState(0);
  const [position, setPosition] = useState(0);
  const [boardData, setBoardData] = useState([]);
  const [positionSuit, setPositionSuit] = useState('');

  useEffect(() => {
    let newTotal = roll + position;
    setPosition(newTotal);
  }, [roll]);

  useEffect(() => {
    console.log(board);
    setBoardData(board);
  }, []);

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
