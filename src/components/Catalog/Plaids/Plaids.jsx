import { plaids } from 'data/catalog/plaids';
import {
  Container,
  ImgContainer,
  Img,
  Item,
  Link,
  List,
  Text,
  TextContainer,
  TitleContainer,
  Title,
} from './Plaids.styled';

const Plaids = () => {
  return (
    <Container>
      <TitleContainer>
        <Title>Пледи</Title>
      </TitleContainer>
      <List>
        {plaids.map(item => (
          <Item key={item.id}>
            <Link to={`${item.id}`}>
              <ImgContainer>
                <Img
                  src={`${item.imgTabl}`}
                  alt={item.alt}
                  srcSet={`${item.imgTabl} 317w, ${item.imgDesk} 376w, ${item.imgTabl2x} 634w, ${item.imgDesk2x} 752w`}
                  sizes="(min-width:1280px) 376px, (min-width:768px) 317px, 100vw"
                />
              </ImgContainer>
              <TextContainer>
                <Text>{item.text}</Text>
              </TextContainer>
            </Link>
          </Item>
        ))}
      </List>
    </Container>
  );
};
export default Plaids;
