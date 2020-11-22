import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Square from './Square';
import Roll from './Roll';
import CARDS from '../constants';
import board from '../constants/candyland';
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
          .map(({ name, type, value }, index) => {
            return (
              <Square
                key={index}
                name={name}
                type={type}
                value={value}
                filled={position === index ? true : false}
              />
            );
          })}
      </div>
    </>
  );
};
export default Board;
