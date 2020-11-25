import React from 'react';
import Board from './components/Board';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <div className="HeaderContainer">
        <div id="Header"></div>
      </div>
      <Board />
    </div>
  );
}

export default App;
