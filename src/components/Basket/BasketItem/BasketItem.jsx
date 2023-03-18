import { useState } from 'react';
import {
  Form,
  FormItem,
  FormList,
  Img,
  ImgContainer,
  Label,
  Option,
  Price,
  PriceContainer,
  Select,
  Title,
  TitleContainer,
} from './BasketItem.styled';
import Counter from './Counter/Counter';

const BasketItem = ({ item }) => {
  const {img, img2x, title, price, quantity} = item

  const [value, setValue] = useState(quantity)
  
  const clickCounter = ({value}) => {
    
    setValue(value)

  }

console.log(value)  
  const priceOfItem = value * price;
  return (
    <Form>
      <ImgContainer>
        <Img
          src={img}
          alt={title}
          srcSet={`${img} 214w, ${img2x} 428w`}
          sizes="(min-width:320px) 214px, 100vw"
        />
      </ImgContainer>
      <div>
        <TitleContainer>
          <Title>{title}</Title>
        </TitleContainer>
        <FormList>
          <FormItem>
            <Label>
              Розмір
              <Select>
                <Option></Option>
                <Option></Option>
              </Select>
            </Label>
          </FormItem>
          <FormItem>
            <Label>
              Колір
              <Select>
                <Option></Option>
                <Option></Option>
              </Select>
            </Label>
          </FormItem>
        </FormList>
      </div>
      <div>
        <Counter amount={value} onClick={clickCounter} />
      </div>
      <PriceContainer>
        <Price>{priceOfItem} ₴</Price>
      </PriceContainer>
    </Form>
  );
};

export default BasketItem;
