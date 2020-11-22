import React from 'react';

const Square = ({ name, type, filled, value }) => {
  return (
    <div className={'square'}>
      <div>{name}</div>
      <div>{type}</div>
      <div>{value}</div>
      <div>{filled ? '👟' : null}</div>
    </div>
  );
};

export default Square;
