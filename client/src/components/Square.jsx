import React from 'react';
import Oompa from '../images/board/Oompa.png';

const Square = ({ name, type, filled, value }) => {
  return (
    <div className={'square'}>
      <div>{name}</div>
      <div>{type}</div>
      <div>{value}</div>
      <div>{filled ? <img src={Oompa} /> : null}</div>
    </div>
  );
};

export default Square;
