import { Container, Section } from './Advantages.styled';
import Images from './Images/Images';
import TextList from './TextList/TextList';

const Advantages = () => {
  return (
    <Section>
      <Container>
        <Images />
        <TextList />
      </Container>
    </Section>
  );
};

export default Advantages;
