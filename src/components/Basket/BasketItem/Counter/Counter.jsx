import { Btn, CounterContainer, Value } from './Counter.styled';

const Counter = ({amount, clickCounter}) => {


  let value = amount;
    const handleClick = (step) => {
      
    value += step;

    clickCounter(value);
  };

  return (
    <CounterContainer>
      <Btn onClick={() => handleClick(1)}>+</Btn>
      <Value>{value}</Value>
      {value === 1 && (
        <Btn onClick={() => handleClick(-1)} disabled>
          -
        </Btn>
          )}
    {value > 1 && <Btn onClick={() => handleClick(-1)}>-</Btn>}
    </CounterContainer>
  );
};

export default Counter;
