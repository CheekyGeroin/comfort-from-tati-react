import ColourList from '../ColourList/ColourList';
import { colourBath } from 'data/catalog/colour';
import { Container, Subtitle } from './BathColour.styled';
const BathColour = () => {
  return (
    <div>
      <Container>
        <Subtitle>Кольори для килимків </Subtitle>
      </Container>
      <ColourList data={colourBath} />
    </div>
  );
};

export default BathColour;
