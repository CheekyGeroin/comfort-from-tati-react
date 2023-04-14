
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
  CounterContainer
} from './BasketItem.styled';
import Counter from './Counter/Counter';

const BasketItem = ({ item, increase, decrease}) => {
  const { id, img, img2x, title, totalPrice, quantity } = item;

  
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
      <CounterContainer>
        <Counter quantity={quantity} id={id} increase={increase} decrease={ decrease} />
      </CounterContainer>
      <PriceContainer>
        <Price>{totalPrice} ₴</Price>
      </PriceContainer>
    </Form>
  );
};

export default BasketItem;
