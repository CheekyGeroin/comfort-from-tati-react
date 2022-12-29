import { Container, Item, Link, InnerLink, List, Title } from './Catalog.styled';

const Catalog = () => {
  return (
    <Container>
      <Title>
        <Link href='#catalog'>Каталог</Link>
      </Title>
      <List>
        <Item>
          <InnerLink>Пледи</InnerLink>
        </Item>
        <Item>
          <InnerLink>Дитячі пледи</InnerLink>
        </Item>
        <Item>
          <InnerLink>Килимки для ванни</InnerLink>
        </Item>
        <Item>
          <InnerLink>Кольори</InnerLink>
        </Item>
        <Item>
          <InnerLink>Індивідуальне замовлення</InnerLink>
        </Item>
      </List>
    </Container>
  );
};

export default Catalog