import ColourList from '../ColourList/ColourList';
import { colourBath } from 'data/catalog/colour';
import { Container, Subtitle, Button } from './BathColour.styled';
import ColourSvgSelector from '../ColourSvgSelector';
import { useState } from 'react';
const BathColour = () => {
  const [className, setClassName] = useState('close')

    const handleClick = () => {
        setClassName('open')
        if (className === 'open') {
            setClassName('close')
        }
    }
  return (
    <div>
      <Container>
        <Subtitle>Кольори для килимків </Subtitle>
        <Button type="button" onClick={handleClick}>
                    <ColourSvgSelector id={"arrow-menu"} />
                </Button>
      </Container>
      <ColourList data={colourBath} type={className}/>
    </div>
  );
};

export default BathColour;
