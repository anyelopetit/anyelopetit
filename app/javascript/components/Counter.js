import React, { useState } from 'react';

const Counter = () => {
  const [number, setNumber] = useState(0);

  const decrease = () => {
    setNumber(number - 1)
  }

  const increase = () => {
    setNumber(number + 1)
  }

  return (
    <>
      <h3>Mi primer componente {number}</h3>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
    </>
  );
}

export default Counter;