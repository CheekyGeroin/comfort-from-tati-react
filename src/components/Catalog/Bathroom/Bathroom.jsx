import { bathroom } from 'data/catalog/bathroom'
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
  Title} from './Bathroom.styled'
const Bathroom = () => {
    return (
    <Container>
      <TitleContainer>
        <Title>Килимки у ванну</Title>
      </TitleContainer>
      <List>
        {bathroom.map(item => (
          <Item key={item.id}>
            <Link to={`${item.id}`}>
              <ImgContainer>
                <Img
                  src={`${item.imgTabl}`}
                  alt={item.alt}
                  srcSet={`${item.imgMob} 148w, ${item.imgMob2x} 296w, ${item.imgTabl} 317w, ${item.imgDesk} 376w, ${item.imgTabl2x} 634w, ${item.imgDesk2x} 752w`}
                  sizes="(min-width:1280px) 376px, (min-width:768px) 317px, (max-width:767px) 148px, 100vw"
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
}
export default Bathroom