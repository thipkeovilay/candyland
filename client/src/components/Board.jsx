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

  const [oompa, setOompa] = useState(-1);
  const [redSpaces, setRedSpaces] = useState([0, 7, 14, 21, 28, 35]);
  const [orangeSpaces, setOrangeSpaces] = useState([1, 8, 15, 22, 29, 36]);
  const [yellowSpaces, setYellowSpaces] = useState([2, 9, 16, 23, 30, 37]);
  const [greenSpaces, setGreenSpaces] = useState([3, 7, 17, 24, 31, 38]);
  const [blueSpaces, setBlueSpaces] = useState([4, 11, 18, 25, 32, 39]);
  const [purpleSpaces, setPurpleSpaces] = useState([5, 12, 19, 26, 33, 40]);
  const [agustusSpace, setAugustusSpace] = useState(6);
  const [blueberrySpace, setBlueberrySpace] = useState(13);
  const [verucaSpace, setVerucaSpace] = useState(20);
  const [charlieSpace, setCharlieSpace] = useState(27);
  const [mikeSpace, setMikeSpace] = useState(34);
  const [willySpace, setWillieSpace] = useState(41);

  useEffect(() => {
    const moveOompa = () => {
      if (positionSuit === 'red') {
        setOompa(redSpaces[0]);
        redSpaces.shift();
      }
      if (positionSuit === 'orange') {
        setOompa(orangeSpaces[0]);
        orangeSpaces.shift();
      }
      if (positionSuit === 'yellow') {
        setOompa(yellowSpaces[0]);
        yellowSpaces.shift();
      }
      if (positionSuit === 'green') {
        setOompa(greenSpaces[0]);
        greenSpaces.shift();
      }
      if (positionSuit === 'blue') {
        setOompa(blueSpaces[0]);
        blueSpaces.shift();
      }
      if (positionSuit === 'purple') {
        setOompa(purpleSpaces[0]);
        purpleSpaces.shift();
      }
      if (positionSuit === 'agustus') {
        setOompa(agustusSpace);
        setRedSpaces([7, 14, 21, 28, 35]);
        setOrangeSpaces([8, 15, 22, 29, 36]);
        setYellowSpaces([9, 16, 23, 30, 37]);
        setGreenSpaces([7, 17, 24, 31, 38]);
        setBlueSpaces([11, 18, 25, 32, 39]);
        setPurpleSpaces([12, 19, 26, 33, 40]);
      }
      if (positionSuit === 'blueberry') {
        setOompa(blueberrySpace);
        setRedSpaces([14, 21, 28, 35]);
        setOrangeSpaces([15, 22, 29, 36]);
        setYellowSpaces([16, 23, 30, 37]);
        setGreenSpaces([17, 24, 31, 38]);
        setBlueSpaces([18, 25, 32, 39]);
        setPurpleSpaces([19, 26, 33, 40]);
      }
      if (positionSuit === 'veruca') {
        setOompa(verucaSpace);
        setRedSpaces([21, 28, 35]);
        setOrangeSpaces([22, 29, 36]);
        setYellowSpaces([23, 30, 37]);
        setGreenSpaces([24, 31, 38]);
        setBlueSpaces([25, 32, 39]);
        setPurpleSpaces([26, 33, 40]);
      }
      if (positionSuit === 'mike') {
        setOompa(mikeSpace);
        setRedSpaces([35]);
        setOrangeSpaces([36]);
        setYellowSpaces([37]);
        setGreenSpaces([38]);
        setBlueSpaces([39]);
        setPurpleSpaces([40]);
      }
      if (positionSuit === 'charlie') {
        setOompa(charlieSpace);
        setRedSpaces([28, 35]);
        setOrangeSpaces([29, 36]);
        setYellowSpaces([30, 37]);
        setGreenSpaces([31, 38]);
        setBlueSpaces([32, 39]);
        setPurpleSpaces([33, 40]);
      }
      if (positionSuit === 'willy') {
        setOompa(willySpace);
      }

      console.log(oompa);
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
            if (space.index === oompa) {
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
            if (space.value === 'mike') {
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
