import React, { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [roll, setRoll] = useState(0);
  const [position, setPosition] = useState(0);
  const [players, setPlayers] = useState([]);
  const [numOfPlayers, setNumOfPlayers] = useState(2);

  useEffect(() => {
    let newTotal = roll + position;
    setPosition(newTotal);
  }, [roll]);

  useEffect(() => {
    const icons = [<img src={'../images/board/Oompa.png'} />];
    let arr = [];
    for (let i = 0; i < numOfPlayers; i++) {
      arr.push({
        icon: icons[Math.floor(Math.random() * icons.length)],
        position: 0
      });
      setPlayers(arr);
    }
  }, [numOfPlayers]);

  return (
    <AppContext.Provider
      value={{
        roll,
        setRoll,
        position,
        setPosition,
        players,
        setPlayers,
        numOfPlayers,
        setNumOfPlayers
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
