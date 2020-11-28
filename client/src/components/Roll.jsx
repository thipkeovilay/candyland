import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import ReactDOM from 'react-dom';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import Swal from 'sweetalert2';
import goldenticket from '../images/golden-ticket.png';
import heart from '../images/board/heart.png';
import pushcandy from '../images/pushcandy.png';
import agustuscard from '../images/cards/agustus-card.png';
import blueberrycard from '../images/cards/blueberry-card.png';
import charliecard from '../images/cards/charlie-card.png';
import circlecard from '../images/cards/circle-card.png';
import diamondcard from '../images/cards/diamond-card.png';
import heartcard from '../images/cards/heart-card.png';
import mikecard from '../images/cards/mike-card.png';
import squarecard from '../images/cards/square-card.png';
import starcard from '../images/cards/star-card.png';
import trianglecard from '../images/cards/triangle-card.png';
import verucacard from '../images/cards/veruca-card.png';
import willycard from '../images/cards/willy-card.png';

// const Roll = () => {
//   const {
//     roll,
//     setRoll,
//     setPosition,
//     position,
//     positionSuit,
//     setPositionSuit
//   } = useContext(AppContext);
//   const [image, getImage] = useState('');

//   const assignCard = (roll) => {
//     switch (roll) {
//       case 1:
//         return heartcard;
//         break;
//       case 2:
//         return diamondcard;
//         break;
//       case 3:
//         return starcard;
//         break;
//       case 4:
//         return trianglecard;
//         break;
//       case 5:
//         return circlecard;
//         break;
//       case 6:
//         return squarecard;
//         break;
//       case 7:
//         return agustuscard;
//         break;
//       case 8:
//         return blueberrycard;
//         break;
//       case 9:
//         return verucacard;
//         break;
//       case 10:
//         return mikecard;
//         break;
//       case 11:
//         return charliecard;
//         break;
//       case 12:
//         return willycard;
//         break;
//       default:
//         return goldenticket;
//     }
//   };
// };

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
    const randomNumber = Math.floor(Math.random() * 12);
    setRoll(randomNumber);

    try {
      const { data } = await axios.get(`/api/draw/${randomNumber}`);
      // console.log(data);
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
      // console.log(data.name);
      // console.log(data.id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button id="button" onClick={rollTheDice}>
        <img className="peppermint" src={pushcandy} alt="candy" />
      </button>
      <span>{positionSuit}</span>
    </div>
  );
};

export default Roll;
