import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Square from './Square';
import Roll from './Roll';
import BOARD_DATA from '../Constants/cards';
import GameBoard from '../Constants/GameBoard.svg';
import { ReactSVG } from 'react-svg';

const Board = () => {
  const { position, setPosition } = useContext(AppContext);

  return (
    <>
      <ReactSVG src="../Constants/GameBoard.svg" />
      <Roll />
      {/* <div className="board">
        {BOARD_DATA.sort((a, b) => {
          return a.id > b.id ? 1 : a.id < b.id ? -1 : 0;
        }).map(({ name, type }, index) => {
          return (
            <Square
              name={name}
              type={type}
              filled={position === index ? true : false}
            />
          );
        })}
      </div> */}
    </>
  );
};
export default Board;
