import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Square from './Square';
import Roll from './Roll';
import BOARD_DATA from '../constants';

const Board = () => {
  const { position, setPosition } = useContext(AppContext);

  return (
    <>
      <ReactSVG src="../Constants/GameBoard.svg" />
      <Roll />
    </>
  );
};
export default Board;
