import { Btn, CounterContainer, Value } from './Counter.styled';

const Counter = ({quantity, id, increase, decrease}) => {


  
  return (
    <CounterContainer>
      <Btn onClick={() => increase(id)}>+</Btn>
      <Value> {quantity}</Value>
      <Btn onClick={()=> decrease(id)}>-</Btn>
    </CounterContainer>
  );
};

export default Counter;
