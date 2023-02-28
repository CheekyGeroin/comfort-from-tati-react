import {
  Form,
  FormItem,
  FormList,
  Img,
  ImgContainer,
  Option,
  Price,
  Select,
  Title,
  TitleContainer,
} from './BasketItem.styled';

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
            <Select>
              <Option></Option>
              <Option></Option>
            </Select>
          </FormItem>
          <FormItem>
            <Select>
              <Option></Option>
              <Option></Option>
            </Select>
          </FormItem>
        </FormList>
      </div>
      <div></div>
          <div>
              <Price>{item.price}</Price>
      </div>
    </Form>
  );
};

export default BasketItem;
