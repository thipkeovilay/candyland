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
  const [redSpaces, setRedSpaces] = useState([0, 7, 11, 21, 33, 35]);
  const [orangeSpaces, setOrangeSpaces] = useState([1, 8, 10, 22, 32, 36]);
  const [yellowSpaces, setYellowSpaces] = useState([2, 16, 9, 23, 31, 37]);
  const [greenSpaces, setGreenSpaces] = useState([3, 15, 17, 24, 30, 38]);
  const [blueSpaces, setBlueSpaces] = useState([4, 14, 18, 25, 29, 39]);
  const [purpleSpaces, setPurpleSpaces] = useState([5, 13, 19, 26, 28, 40]);
  const [agustusSpace, setAugustusSpace] = useState(6);
  const [blueberrySpace, setBlueberrySpace] = useState(12);
  const [verucaSpace, setVerucaSpace] = useState(20);
  const [mikeSpace, setMikeSpace] = useState(34);
  const [charlieSpace, setCharlieSpace] = useState(27);
  const [willySpace, setWillySpace] = useState(41);

  useEffect(() => {
    const moveOompaCharacter = () => {
      if (positionSuit === 'agustus') {
        setOompa(agustusSpace);
        setRedSpaces([7, 11, 21, 33, 35]);
        setOrangeSpaces([8, 10, 22, 32, 36]);
        setYellowSpaces([16, 9, 23, 31, 37]);
        setGreenSpaces([15, 17, 24, 30, 38]);
        setBlueSpaces([14, 18, 25, 29, 39]);
        setPurpleSpaces([13, 19, 26, 28, 40]);
      }
      if (positionSuit === 'blueberry') {
        setOompa(blueberrySpace);
        setRedSpaces([11, 21, 33, 35]);
        setOrangeSpaces([10, 22, 32, 36]);
        setYellowSpaces([9, 23, 31, 37]);
        setGreenSpaces([17, 24, 30, 38]);
        setBlueSpaces([18, 25, 29, 39]);
        setPurpleSpaces([19, 26, 28, 40]);
      }
      if (positionSuit === 'veruca') {
        setOompa(verucaSpace);
        setRedSpaces([21, 33, 35]);
        setOrangeSpaces([22, 32, 36]);
        setYellowSpaces([23, 31, 37]);
        setGreenSpaces([24, 30, 38]);
        setBlueSpaces([25, 29, 39]);
        setPurpleSpaces([26, 28, 40]);
      }
      if (positionSuit === 'mike') {
        setOompa(mikeSpace);
        setRedSpaces([33, 35]);
        setOrangeSpaces([32, 36]);
        setYellowSpaces([31, 37]);
        setGreenSpaces([30, 38]);
        setBlueSpaces([29, 39]);
        setPurpleSpaces([28, 40]);
      }
      if (positionSuit === 'charlie') {
        setOompa(charlieSpace);
        setRedSpaces([35]);
        setOrangeSpaces([36]);
        setYellowSpaces([37]);
        setGreenSpaces([38]);
        setBlueSpaces([39]);
        setPurpleSpaces([40]);
      }
      if (positionSuit === 'willy') {
        setOompa(willySpace);
        // trigger game winning alert
      }
    };

    const moveOompaSuit = () => {
      if (positionSuit === 'red') {
        setOompa(redSpaces[0]);
        redSpaces.shift();
        setOrangeSpaces(orangeSpaces.filter((item) => item > redSpaces[0]));
      }
      if (positionSuit === 'orange') {
        setOompa(orangeSpaces[0]);
        orangeSpaces.shift();
        redSpaces.shift();
        setYellowSpaces(yellowSpaces.filter((item) => item > orangeSpaces[0]));
      }
      if (positionSuit === 'yellow') {
        setOompa(yellowSpaces[0]);
        yellowSpaces.shift();
        orangeSpaces.shift();
        redSpaces.shift();
        setGreenSpaces(greenSpaces.filter((item) => item > yellowSpaces[0]));
      }
      if (positionSuit === 'green') {
        setOompa(greenSpaces[0]);
        greenSpaces.shift();
        yellowSpaces.shift();
        orangeSpaces.shift();
        redSpaces.shift();
        setBlueSpaces(blueSpaces.filter((item) => item > greenSpaces[0]));
      }
      if (positionSuit === 'blue') {
        setOompa(blueSpaces[0]);
        blueSpaces.shift();
        greenSpaces.shift();
        yellowSpaces.shift();
        orangeSpaces.shift();
        redSpaces.shift();
        setPurpleSpaces(purpleSpaces.filter((item) => item > blueSpaces[0]));
      }
      if (positionSuit === 'purple') {
        setOompa(purpleSpaces[0]);
        purpleSpaces.shift();
        blueSpaces.shift();
        greenSpaces.shift();
        yellowSpaces.shift();
        orangeSpaces.shift();
        redSpaces.shift();
        // setAugustusSpace(agustusSpace.filter((item) => item > purpleSpaces[0]));
        // setBlueberrySpace(
        //   blueberrySpace.filter((item) => item > purpleSpaces[0])
        // );
        // setVerucaSpace(verucaSpace.filter((item) => item > purpleSpaces[0]));
        // setMikeSpace(mikeSpace.filter((item) => item > purpleSpaces[0]));
        // setCharlieSpace(charlieSpace.filter((item) => item > purpleSpaces[0]));
        // setWillySpace(willySpace.filter((item) => item > purpleSpaces[0]));
      }
    };

    moveOompaCharacter();
    moveOompaSuit();
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
            if (space.index === undefined) {
              return (
                <div className="Square">
                  <div className="boardImages"></div>
                </div>
              );
            }
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
            }
            if (space.value === 'background') {
              return (
                <div>
                  <div className="cloudcontainer">
                    <div id="cloud-intro"></div>
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
