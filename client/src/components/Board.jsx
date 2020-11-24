import React, { useContext, useState, useEffect } from 'react';
import { AppContext, AppContextProvider } from '../context/AppContext';
import Roll from './Roll';
import Oompa from '../images/board/Oompa.png';
import Agustus from '../images/board/Agustus.png';
import Blueberry from '../images/board/Blueberry.png';
import Charlie from '../images/board/Charlie.png';
import MikeTV from '../images/board/MikeTV.png';
import Veruca from '../images/board/Veruca.png';
import Willy from '../images/board/Willy.png';
import circle from '../images/board/circle.png';
import diamond from '../images/board/diamond.png';
import heart from '../images/board/heart.png';
import square from '../images/board/square.png';
import star from '../images/board/star.png';
import triangle from '../images/board/triangle.png';
import Swal from 'sweetalert2';
import goldenticket from '../images/golden-ticket.png';

const Board = () => {
  const { position, boardData } = useContext(AppContext);

  useEffect(() => {
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

    //check index position then display card with sweet effect

    //call function and capture return of the function to display cards randomly, fix line 32.
    let timerInterval;
    return Swal.fire({
      imageUrl: goldenticket,
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

  // WHY DOES IT WANT TO AUTOMATICALLY GO TO THE USE EFFECT BELOW??? Below can we insert a function to change the ok button to do you want to replay?
  //end game where we insert golden ticket.

  //add button to restart (CAN POSSIBLY BE DONE IN SWEET ALERT)

  return (
    <>
      <Roll />
      <div className="board">
        {boardData
          ?.sort((a, b) => {
            return a.id > b.id ? 1 : a.id < b.id ? -1 : 0;
          })
          .map((space, index) => {
            console.log(position);
            console.log(space.index);
            if (position === space.index) {
              return (
                <div className="Square">
                  <div className="Oompa">
                    <img className="oompa-img" src={Oompa} alt="oompa" />
                  </div>
                </div>
              );
            }
            if (space.name === 'heart') {
              return (
                <div className="Square">
                  <div className="heart">
                    <img className="boardImages" src={heart} />
                  </div>
                </div>
              );
            }
            if (space.name === 'diamond') {
              return (
                <div className="Square">
                  <div className="diamond">
                    <img className="boardImages" src={diamond} />
                  </div>
                </div>
              );
            }
            if (space.name === 'star') {
              return (
                <div className="Square">
                  <div className="star">
                    <img className="boardImages" src={star} />
                  </div>
                </div>
              );
            }
            if (space.name === 'triangle') {
              return (
                <div className="Square">
                  <div className="triangle">
                    <img className="boardImages" src={triangle} />
                  </div>
                </div>
              );
            }
            if (space.name === 'circle') {
              return (
                <div className="Square">
                  <div className="circle">
                    <img className="boardImages" src={circle} />
                  </div>
                </div>
              );
            }
            if (space.name === 'square') {
              return (
                <div className="Square">
                  <div className="square">
                    <img className="boardImages" src={square} />
                  </div>
                </div>
              );
            }
            if (space.name === 'Agustus') {
              return (
                <div className="Square">
                  <div className="Agustus">
                    <img className="characterImages" src={Agustus} />
                  </div>
                </div>
              );
            }
            if (space.name === 'Blueberry') {
              return (
                <div className="Square">
                  <div className="Blueberry">
                    <img className="characterImages" src={Blueberry} />
                  </div>
                </div>
              );
            }
            if (space.name === 'Veruca') {
              return (
                <div className="Square">
                  <div className="Veruca">
                    <img className="characterImages" src={Veruca} />
                  </div>
                </div>
              );
            }
            if (space.name === 'MikeTV') {
              return (
                <div className="Square">
                  <div className="MikeTV">
                    <img className="characterImages" src={MikeTV} />
                  </div>
                </div>
              );
            }
            if (space.name === 'Charlie') {
              return (
                <div className="Square">
                  <div className="Charlie">
                    <img className="characterImages" src={Charlie} />
                  </div>
                </div>
              );
            }
            if (space.name === 'Willy') {
              return (
                <div className="Square">
                  <div className="Willy">
                    <img className="characterImages" src={Willy} />
                  </div>
                </div>
              );
            } else {
              return (
                <div className="Square">
                  <div className="boardImages"></div>
                </div>
              );
            }
          })}
      </div>
    </>
  );
};
export default Board;
