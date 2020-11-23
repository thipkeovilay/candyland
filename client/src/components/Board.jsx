import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Square from './Square';
import Roll from './Roll';
import CARDS from '../constants';
import board from '../constants/candyland';
import Blueberry from '../images/board/Blueberry.png';
import Oompa from '../images/board/Oompa.png';

const Board = () => {
  const { position, setPosition } = useContext(AppContext);

  return (
    <>
      <Roll />
      <div className="board">
        {board
          .sort((a, b) => {
            return a.id > b.id ? 1 : a.id < b.id ? -1 : 0;
          })
          .map((space) => {
            console.log(position);
            console.log(space.index);
            if (position === space.index) {
              return (
                <div Square>
                  <div className="boardImages">
                    <div className="heart">
                      <img src={Oompa} />
                    </div>
                  </div>
                  {/* // key={index}
                  // name={name}
                  // type={type}
                  // value={value} */}
                </div>
              );
            }
            if (space.name === 'heart') {
              return (
                <div Square>
                  <div className="boardImages">
                    <div className="heart">
                      <img src={Blueberry} />
                    </div>
                  </div>
                  {/* // key={index}
              // name={name}
              // type={type}
              // value={value} */}
                </div>
              );
            } else
              return (
                <div Square>
                  <div className="boardImages">
                    <div className="heart">{/* <img src={Blueberry} /> */}</div>
                  </div>
                  {/* // key={index}
                // name={name}
                // type={type}
                // value={value} */}
                </div>
              );
          })}
      </div>
    </>
  );
};
export default Board;
// <Square
