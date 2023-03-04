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
  return (
    <Form>
      <ImgContainer>
        <Img
          src={item.img}
          alt={item.title}
          srcSet={`${item.img} 214w, ${item.img2x} 428w`}
          sizes="(min-width:320px) 214px, 100vw"
        />
      </ImgContainer>
      <div>
        <TitleContainer>
          <Title>{item.title}</Title>
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
        <Counter/>
      </div>
      <PriceContainer>
        <Price>{item.price}</Price>
      </PriceContainer>
    </Form>
  );
};

export default BasketItem;
