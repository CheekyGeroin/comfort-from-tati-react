import { idList } from 'data/catalog/id';
import {
  Container,
  Item,
  Link,
  InnerLink,
  List,
  Title,
} from './Catalog.styled';

const Catalog = () => {
  return (
    <Container>
      <Title>
        <InnerLink href="#catalog">Каталог</InnerLink>
      </Title>
      <List>
        {idList.map(({ text, id }) => (
          <Item key={id}>
            <Link to={`catalog/${id}`}>{text}</Link>
          </Item>
        ))}
      </List>
    </Container>
  );
};

export default Catalog;
