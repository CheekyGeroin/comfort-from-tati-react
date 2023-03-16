import { getPlaidById } from 'data/catalog/db';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ImgGallery from './Entire/ImgSlider/ImgSlider';
import Info from './Entire/Info/Info';
import {
  Container,
  EntireContainer,
} from './ItemDetails.styled';

const ItemDetails = () => {
  const { itemId } = useParams();
  const [plaid, setPlaid] = useState(null);

  useEffect(() => {
    getPlaidById(itemId).then(setPlaid);
  }, [itemId]);

  if (!plaid) {
    return null;
    }

  console.log(plaid.entires)
  return (
    <Container>
      <EntireContainer>
        <ImgGallery items={plaid.entires} />
        <Info data={plaid} />
      </EntireContainer>
    </Container>
  );
};
export default ItemDetails;
