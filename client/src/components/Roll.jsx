import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import Swal from 'sweetalert2';
import goldenticket from '../images/golden-ticket.png';
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
import logo1 from '../images/extras/logo1.png';
// import ring from '../images/audio/ring.mp3';

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

  // const audioByColor = {
  //   red: document.getElementById({ ring })
  //   "green": document.getElementById("audioG"),
  //   "blue": document.getElementById("audioB"),
  //   "yellow": document.getElementById("audioY")
  // };

  // function playRed() {
  //   const audio = document.getElementById({ ring });
  // }

  const assignCard = (roll) => {
    switch (roll) {
      case 'red':
        return heartcard;
        // audio.play();
        break;
      case 'orange':
        return diamondcard;
        break;
      case 'yellow':
        return starcard;
        break;
      case 'green':
        return trianglecard;
        break;
      case 'blue':
        return circlecard;
        break;
      case 'purple':
        return squarecard;
        break;
      case 'agustus':
        return agustuscard;
        break;
      case 'blueberry':
        return blueberrycard;
        break;
      case 'veruca':
        return verucacard;
        break;
      case 'mike':
        return mikecard;
        break;
      case 'charlie':
        return charliecard;
        break;
      case 'willy':
        return willycard;
        break;
      default:
        return goldenticket;
    }
  };

  useEffect(() => {
    // const randomIndex = Math.floor(Math.random() * 12 + 1);
    console.log(position);
    if (position === 0) return;
    // if (position === 41) {
    //   return Swal.fire({
    //     title: 'Sweet! You won!',
    //     imageUrl: goldenticket,
    //     imageWidth: 700,
    //     imageHeight: 200,
    //     imageAlt: 'Golden Ticket'
    //   });
    // }

    // call function and capture return of the function to display cards randomly, fix line 31.
    let timerInterval;
    Swal.fire({
      imageUrl: { roll },
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
        displayCard();
        console.log(data.name);
        console.log(data.id);
      };
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="headerOne">
      <button id="button" onClick={rollTheDice}>
        <img className="peppermint" src={pushcandy} alt="candy" />
      </button>
      {/* <div class="pushPad" onclick="audioByColor[''].play()"></div> */}
      <div className="logo">
        <img id="logo1" src={logo1}></img>
      </div>
      <span>{positionSuit}</span>
    </div>
  );
};

export default Roll;
