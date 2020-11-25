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

const Board = () => {
  const {
    position,
    boardData,
    positionSuit,
    setPosition,
    setPositionSuit
  } = useContext(AppContext);
  const [oompa, setOompa] = useState(0);

  useEffect(() => {
    let filterSpaces = boardData
      .filter((item) => {
        return item.value === positionSuit;
      })
      .map((item, index, array) => {
        return item.index;
      });
    console.log(filterSpaces);

    let moveOompa = () => {
      let i = -1;

      if (i !== filterSpaces.length - 2) {
        i += 1;
      } else {
        i = 0;
      }

      setOompa(filterSpaces[i]);
    };

    moveOompa();
  }, [position]);

  //check index position then display card with sweet effect

  //add button to restart (CAN POSSIBLY BE DONE IN SWEET ALERT)

  return (
    <>
      <Roll />
      <div className="board">
        {boardData
          ?.sort((a, b) => {
            return a.index > b.index ? 1 : a.index < b.index ? -1 : 0;
          })
          .map((space, index) => {
            // console.log(position);
            // console.log(space.index);
            // console.log(oompa.position);
            if (positionSuit === space.value && space.index === oompa) {
              // const handleRoll = (arr) => {
              //   let cur = 0;
              //   arr.next = function () {
              //     console.log(++cur);
              //   };
              // };

              // handleRoll(filterSpaces);
              // filterSpaces.next();

              // function* handleRoll() {
              //   yield filterSpaces;
              // }

              // let newArray = handleRoll();

              // console.log(newArray.next().value);

              // const cycle = (array, index) => {
              //   let currentIndex = array.indexOf(index);
              //   if (array.length > 1) {
              //     currentIndex = array[currentIndex] + 1;
              //     console.log(currentIndex);
              //   } else {
              //     console.log(currentIndex);
              //   }
              // };

              // cycle(boardData, space.index);
              console.log(space.index);
              console.log(oompa);
              return (
                <div className="Square">
                  <div className="Oompa">
                    <img className="oompa-img" src={Oompa} alt="oompa" />
                  </div>
                </div>
              );
            }
            if (space.value === 'red') {
              return (
                <div className="Square">
                  <div className="heart">
                    <img className="boardImages" src={heart} />
                  </div>
                </div>
              );
            }
            if (space.value === 'orange') {
              return (
                <div className="Square">
                  <div className="diamond">
                    <img className="boardImages" src={diamond} />
                  </div>
                </div>
              );
            }
            if (space.value === 'yellow') {
              return (
                <div className="Square">
                  <div className="star">
                    <img className="boardImages" src={star} />
                  </div>
                </div>
              );
            }
            if (space.value === 'green') {
              return (
                <div className="Square">
                  <div className="triangle">
                    <img className="boardImages" src={triangle} />
                  </div>
                </div>
              );
            }
            if (space.value === 'blue') {
              return (
                <div className="Square">
                  <div className="circle">
                    <img className="boardImages" src={circle} />
                  </div>
                </div>
              );
            }
            if (space.value === 'purple') {
              return (
                <div className="Square">
                  <div className="square">
                    <img className="boardImages" src={square} />
                  </div>
                </div>
              );
            }
            if (space.value === 'agustus') {
              return (
                <div className="Square">
                  <div className="agustus">
                    <img className="characterImages" src={Agustus} />
                  </div>
                </div>
              );
            }
            if (space.value === 'blueberry') {
              return (
                <div className="Square">
                  <div className="blueberry">
                    <img className="characterImages" src={Blueberry} />
                  </div>
                </div>
              );
            }
            if (space.value === 'veruca') {
              return (
                <div className="Square">
                  <div className="veruca">
                    <img className="characterImages" src={Veruca} />
                  </div>
                </div>
              );
            }
            if (space.value === 'mikeTV') {
              return (
                <div className="Square">
                  <div className="mikeTV">
                    <img className="characterImages" src={MikeTV} />
                  </div>
                </div>
              );
            }
            if (space.value === 'charlie') {
              return (
                <div className="Square">
                  <div className="charlie">
                    <img className="characterImages" src={Charlie} />
                  </div>
                </div>
              );
            }
            if (space.value === 'willy') {
              return (
                <div className="Square">
                  <div className="willy">
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
