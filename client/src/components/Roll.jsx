import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import ReactDOM from 'react-dom';

// document
//   .getElementById('button')
//   .addEventListener('click', function rollTheDice() {
//     alert('The form has been submitted!');
//   });

const Roll = () => {
  const { roll, setRoll } = useContext(AppContext);
  const rollTheDice = () => {
    alert('HELLO!');
    setRoll(Math.floor(Math.random() * 12 + 1));
  };

  return (
    <div>
      <button id="button" onClick={rollTheDice}>
        Roll
      </button>
      <span>{roll}</span>
    </div>
  );
};

export default Roll;
ReactDOM.render(Roll, document.getElementById('root'));
