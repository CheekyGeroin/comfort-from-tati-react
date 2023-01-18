import { idList } from 'data/catalog/id';
import { Container, List, Item, Link } from './CatalogNavigation.styled';
const CatalogNavigation = () => {
  return (
    <Container>
      <List>
        {idList.map(({ id, text }) => (
          <Item key={id}>
            <Link to={`${id}`}>{text}</Link>
          </Item>
        ))}
      </List>
    </Container>
  );
};

export default CatalogNavigation;
