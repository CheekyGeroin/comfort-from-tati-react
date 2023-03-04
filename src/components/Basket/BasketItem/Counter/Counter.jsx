import { useState } from 'react';
import { Btn, CounterContainer, Value } from './Counter.styled';

const Counter = () => {
  const [quantity, setQuantity] = useState(1);

  let value = 1;
    const handleClick = (step, e) => {
      e.preventDefault()
    value += step;

    setQuantity(value);
  };

  return (
    <CounterContainer>
      <Btn onClick={() => handleClick(1)}>+</Btn>
      <Value>{quantity}</Value>
      {quantity === 1 && (
        <Btn onClick={() => handleClick(-1)} disabled>
          -
        </Btn>
          )}
    {quantity > 1 && <Btn onClick={() => handleClick(-1)}>-</Btn>}
    </CounterContainer>
  );
};

export default Counter;
