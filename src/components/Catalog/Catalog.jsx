import CatalogNavigation from 'components/CatalogNavigation/CatalogNavigation';
import ItemDetails from 'components/ItemDetails/ItemDetails';
import Btn from './Btn/Btn';
import { Container, NavContainer } from './Catalog.styled';

const Catalog = () => {

  return (
    <Container>
      <NavContainer>
        <Btn />
        <CatalogNavigation />
      </NavContainer>
      
      <ItemDetails/>
    </Container>
  );
};

export default Catalog;
