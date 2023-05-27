import React from 'react';

const ComponentB = ({ cendol, handleIncrement }) => {
  return (
    <div>
      <span>Cendol: {cendol}</span>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default ComponentB;
