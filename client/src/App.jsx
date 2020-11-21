import React, { useState, useEffect } from 'react';
import { AppContextProvider } from './context/AppContext';
import ContextDemo from './components/ContextDemo';
import './App.css';
import Board from './components/Board';

function App() {
  return (
    <div className="App">
      <h1>CandyLand</h1>
      <Board />
    </div>
  );
}

export default App;

//   const fetchDemoData = () => {
//     fetch('/api/demo')
//       .then((response) => response.json())
//       .then((data) => setServerMessage(data.message));
//   };

//   useEffect(fetchDemoData, []);

//   return (
//     <AppContextProvider>
//       <div id="demo">
//         <h3>Hello from client/src/App.js</h3>
//         <ContextDemo />
//         <h3>{serverMessage}</h3>
//       </div>
//     </AppContextProvider>
//   );
// };

// export default App;
