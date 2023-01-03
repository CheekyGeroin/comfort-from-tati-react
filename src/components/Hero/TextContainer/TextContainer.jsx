import {
  BtnContainer,
  Container,
  Link,
  Title,
  TitleContainer,
} from './TextContainer.styled';

const TextContainer = () => {

  
  return (
    <Container>
      <TitleContainer>
        <Title>Тепло і затишок в душі та домі</Title>
      </TitleContainer>
      <BtnContainer>
        <Link href="#catalog">Каталог</Link>
      </BtnContainer>
    </Container>
  );
};
export default TextContainer;
