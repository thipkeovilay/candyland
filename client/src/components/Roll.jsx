import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import ReactDOM from 'react-dom';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import Swal from 'sweetalert2';
import goldenticket from '../images/golden-ticket.png';
import heart from '../images/board/heart.png';
import pushcandy from '../images/pushcandy.png';

const Board = () => {
  const { position, boardData, positionSuit, setPositionSuit } = useContext(
    AppContext
  );

  useEffect(() => {
    // const randomIndex = Math.floor(Math.random() * 12 + 1);
    console.log(position);
    if (position === 0) return;
    if (position === 41) {
      return Swal.fire({
        title: 'Sweet! You won!',
        imageUrl: goldenticket,
        imageWidth: 700,
        imageHeight: 200,
        imageAlt: 'Golden Ticket'
      });
    }

    document
      .getElementById('button')
      .addEventListener('click', function rollTheDice() {
        alert('The form has been submitted!');
      });

    // call function and capture return of the function to display cards randomly, fix line 31.
    let timerInterval;
    Swal.fire({
      imageUrl: heart,
      imageWidth: 200,
      imageHeight: 300,
      timer: 5000,
      timerProgressBar: true,
      showConfirmButton: false,
      willOpen: () => {
        timerInterval = setInterval(() => {
          const content = Swal.getContent();
          if (content) {
            const b = content.querySelector('b');
            if (b) {
              b.textContent = Swal.getTimerLeft();
            }
          }
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      }
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer');
      }
    });
  }, [position]);
};

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
        } else {
          setImage({ goldenticket });
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
        <img className="peppermint" src={pushcandy} alt="candy" />
      </button>
      <span>{roll}</span>
    </div>
  );
};

export default Roll;
