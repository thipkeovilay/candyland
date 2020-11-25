import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import ReactDOM from 'react-dom';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import goldenticket from '../images/golden-ticket.png';

// document
//   .getElementById('button')
//   .addEventListener('click', function rollTheDice() {
//     alert('The form has been submitted!');
//   });

const Roll = () => {
  const {
    roll,
    setRoll,
    setPosition,
    position,
    positionSuit,
    setPositionSuit
  } = useContext(AppContext);
  const [image, setImage] = useState('');

  const rollTheDice = async (e) => {
    e.preventDefault();
    const randomNumber = Math.floor(Math.random() * 12 + 1);
    setRoll(randomNumber);

    try {
      const { data } = await axios.get(`/api/draw/${randomNumber}`);
      console.log(data);
      setPositionSuit(data.value);
      setPosition(Math.floor(data.id * 3.5) + 1);
      const displayCard = () => {
        if (roll === 1) {
          setImage(data.src);
          alert('You rolled a 1!');
        } else {
          setImage({ goldenticket });
          alert('You rolled something else!');
        }
      };
      displayCard();
      console.log(data.name);
      console.log(data.id);
    } catch (error) {
      console.log(error);
    }
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
