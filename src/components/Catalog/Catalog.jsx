import CatalogNavigation from 'components/CatalogNavigation/CatalogNavigation';
import ItemDetails from 'components/ItemDetails/ItemDetails';
import Btn from './Btn/Btn';
import { NavContainer } from './Catalog.styled';

const Catalog = () => {

  return (
    <div>
      <NavContainer>
        <Btn />
        <CatalogNavigation />
      </NavContainer>
      
      <ItemDetails/>
    </div>
  );
};

export default Catalog;
