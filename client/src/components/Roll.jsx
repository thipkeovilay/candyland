import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import ReactDOM from 'react-dom';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
// document
//   .getElementById('button')
//   .addEventListener('click', function rollTheDice() {
//     alert('The form has been submitted!');
//   });

const Roll = () => {
  const { roll, setRoll, setPosition } = useContext(AppContext);

  const rollTheDice = async (e) => {
    e.preventDefault();
    const randomNumber = Math.floor(Math.random() * 12 + 1);
    setRoll(randomNumber);
    try {
      const { data } = await axios.get(`/api/draw/${randomNumber}`);
      console.log(data);
      setPosition(data);
    } catch (error) {
      console.log(error);
    }
  };

  // const handleRoll = async () => {

  // };

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
